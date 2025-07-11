import styles from './titulo.module.css'
import { useState } from "react"
import './form.css'

function Formulario() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  
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
    setEmail('');
  };

  return (
    <div className="container">
      <h1 className={styles.titulo}>Renatop</h1>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Cadastro</h2>

        <div className="form-group">
          <label className="form-label">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-input"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="exemplo@email.com"
          />
        </div>

        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;