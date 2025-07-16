export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
            <button onClick={() => onEdit(user)}>Editar</button>
            <button onClick={() => onDelete(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}