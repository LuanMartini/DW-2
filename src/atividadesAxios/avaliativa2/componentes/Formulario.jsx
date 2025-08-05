import styles from '../titulo.module.css';
import { useState } from "react";
import ListaUsuarios from './ListaUsuarios';

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '') {
      alert('Erro: nome não pode estar vazio.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('Erro: e-mail inválido.');
      return;
    }

    if (editandoId !== null) {
      const atualizados = usuarios.map((usuario) =>
        usuario.id === editandoId ? { id: usuario.id, nome, email } : usuario
      );
      setUsuarios(atualizados);
      setEditandoId(null);
    } else {
      const novoUsuario = { id: Date.now(), nome, email };
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
    if (confirm("Deseja excluir este usuário?")) {
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
      <h1 className={styles.titulo}>Renatop</h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-center mb-5 text-2xl text-gray-800 font-semibold">
          {editandoId ? "Editar Cadastro" : "Novo Cadastro"}
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
          {editandoId ? "Atualizar" : "Enviar"}
        </button>
      </form>

      <ListaUsuarios
        usuarios={usuarios}
        onEditar={handleEditar}
        onExcluir={handleExcluir}
      />
    </div>
  );
}

export default Formulario;
