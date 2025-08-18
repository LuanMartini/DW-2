import React, { useEffect, useState } from "react";
import api from "./services/api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carrega usuários da API
  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => alert("Erro ao carregar usuários"))
      .finally(() => setLoading(false));
  }, []);

  // Criar ou atualizar usuário
  const handleSaveUser = async (user) => {
    try {
      if (user.id) {
        // Atualizar
        await api.put(`/users/${user.id}`, user);
        setUsers((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, ...user } : u))
        );
        setEditingUser(null);
        alert("Usuário atualizado com sucesso!");
      } else {
        // Criar
        const response = await api.post("/users", user);
        // JSONPlaceholder retorna sempre id 11+, vamos simular o id:
        const novoUser = { ...user, id: response.data.id || Date.now() };
        setUsers((prev) => [...prev, novoUser]);
        alert("Usuário criado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao salvar usuário.");
    }
  };

  // Excluir usuário
  const handleDeleteUser = async (id) => {
    if (!window.confirm("Confirma exclusão do usuário?")) return;

    try {
      await api.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      alert("Usuário excluído com sucesso!");
    } catch (error) {
      alert("Erro ao excluir usuário.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-4xl mx-auto">
      <UserForm
        editingUser={editingUser}
        onSubmit={handleSaveUser}
        onCancel={() => setEditingUser(null)}
      />

      {loading ? (
        <p className="mt-6 text-center">Carregando usuários...</p>
      ) : (
        <UserList
          users={users}
          onEdit={setEditingUser}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
}

export default App;