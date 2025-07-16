import { useState, useEffect } from 'react';

export default function UserForm({ onSubmit, userToEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name);
      setEmail(userToEdit.email);
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, id: userToEdit?.id });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{userToEdit ? 'Editar Usuário' : 'Cadastrar Usuário'}</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">{userToEdit ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  );
}