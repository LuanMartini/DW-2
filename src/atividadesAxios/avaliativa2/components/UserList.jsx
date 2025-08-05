import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Lista de Usuários</h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
          >
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-700">{user.email}</p>
            </div>
            <div className="space-x-2">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => onEdit(user)}
              >
                Editar
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => onDelete(user.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;