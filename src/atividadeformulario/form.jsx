import { useState } from "react"
function Formulario(){
    const [nome , setNome] = useState("")
    const [email , setEmail] = useState("")
    const handleSubmit = (e) => {
    e.preventDefault(); //pra n recarregar a pagina

    if (nome.trim() === '') { // trim remove os espaços
        alert('Erro, digite novamente.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) { // verifica se tem @ e . no email
        alert('Digite um e-mail válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    setNome('');
    setEmail('')
  
    };

    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Cadastro
        </h2>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            Nome
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-600 mb-1">
            E-mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="exemplo@email.com"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;