import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Por favor, insira um nome.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido.");
      return;
    }

    const novoUsuario = {
      id: editandoId ?? Date.now(),
      nome,
      email,
    };

    if (editandoId) {
      setUsuarios((prev) =>
        prev.map((u) => (u.id === editandoId ? novoUsuario : u))
      );
      setEditandoId(null);
    } else {
      setUsuarios([...usuarios, novoUsuario]);
    }

    setNome("");
    setEmail("");
  };

  const handleEditar = (usuario) => {
    setNome(usuario.nome);
    setEmail(usuario.email);
    setEditandoId(usuario.id);
  };

  const handleExcluir = (id) => {
    const confirmacao = confirm("Deseja excluir este usuário?");
    if (confirmacao) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Formulário de Cadastro</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemplo@email.com"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          {editandoId ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      {usuarios.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Usuários Cadastrados</h2>
          <ul className="space-y-3">
            {usuarios.map((usuario) => (
              <li
                key={usuario.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md border"
              >
                <div>
                  <p className="font-semibold">{usuario.nome}</p>
                  <p className="text-sm text-gray-600">{usuario.email}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditar(usuario)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleExcluir(usuario.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Formulario;
