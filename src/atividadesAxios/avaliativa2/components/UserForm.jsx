import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, editingUser, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Quando editingUser muda, preenche o formulário
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Por favor, insira um nome.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    onSubmit({ name, email, id: editingUser?.id });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <h2 className="text-2xl font-semibold">
        {editingUser ? "Editar Usuário" : "Cadastrar Usuário"}
      </h2>

      <div>
        <label className="block mb-1 font-medium">Nome</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">E-mail</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@exemplo.com"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          {editingUser ? "Atualizar" : "Cadastrar"}
        </button>

        {editingUser && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default UserForm;