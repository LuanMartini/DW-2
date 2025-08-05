import styles from './titulo.module.css';
import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '') {
      alert('Erro, digite novamente.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Digite um e-mail válido.');
      return;
    }

    const novoUsuario = {
      id: editandoId ?? Date.now(),
      nome,
      email
    };

    if (editandoId) {
      setUsuarios((prev) =>
        prev.map((u) => (u.id === editandoId ? novoUsuario : u))
      );
      setEditandoId(null);
    } else {
      setUsuarios([...usuarios, novoUsuario]);
    }

    setNome('');
    setEmail('');
  };

  const handleEditar = (usuario) => {
    setNome(usuario.nome);
    setEmail(usuario.email);
    setEditandoId(usuario.id);
  };

  const handleExcluir = (id) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
      <h1 className={styles.titulo}>Renatop</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-center mb-5 text-2xl text-gray-800 font-semibold">
          {editandoId ? 'Editar Cadastro' : 'Cadastro'}
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-700">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-3 py-2 text-sm text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-sm text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="exemplo@email.com"
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-green-600 text-white rounded-md text-base hover:bg-green-700 transition-colors duration-300"
        >
          {editandoId ? 'Atualizar' : 'Enviar'}
        </button>
      </form>

      {usuarios.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Usuários Cadastrados</h3>
          <ul className="space-y-2">
            {usuarios.map((usuario) => (
              <li
                key={usuario.id}
                className="bg-white p-3 border border-gray-300 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{usuario.nome}</p>
                  <p className="text-sm text-gray-600">{usuario.email}</p>
                </div>
                <div className="space-x-2">
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
