function ListaUsuarios({ usuarios, onEditar, onExcluir }) {
  if (usuarios.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Usuários Cadastrados</h2>
      <ul className="space-y-3">
        {usuarios.map((usuario) => (
          <li
            key={usuario.id}
            className="flex justify-between items-center p-3 bg-white rounded-md border shadow-sm"
          >
            <div>
              <p className="font-bold text-gray-900">{usuario.nome}</p>
              <p className="text-sm text-gray-600">{usuario.email}</p>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => onEditar(usuario)}
                className="text-blue-600 hover:underline text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => onExcluir(usuario.id)}
                className="text-red-600 hover:underline text-sm"
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

export default ListaUsuarios;