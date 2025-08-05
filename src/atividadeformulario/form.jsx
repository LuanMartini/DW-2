import styles from './titulo.module.css';
import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

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

    alert('Formulário enviado com sucesso!');
    setNome('');
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
      <h1 className={styles.titulo}>Renatop</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="text-center mb-5 text-2xl text-gray-800 font-semibold">Cadastro</h2>

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
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;