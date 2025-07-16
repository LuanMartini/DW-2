import { useEffect, useState } from 'react';
import api from './services/api';
import UserList from './componentes/lista';
import UserForm from './componentes/form';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const response = await api.get('/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (user) => {
    if (user.id) {
      await api.put(`/users/${user.id}`, user);
    } else {
      await api.post('/users', user);
    }
    setEditingUser(null);
    fetchUsers();
  };

const handleDelete = async (id) => {
  try {
    await api.delete(`/users/${id}`);
    fetchUsers(); 
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
  }
};

  const handleEdit = (user) => {
    setEditingUser(user);
  };

 return (
    <div className="app-container">
      <h1>Gerenciamento de Usuários</h1>
      <UserForm onSubmit={handleSubmit} userToEdit={editingUser} />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
