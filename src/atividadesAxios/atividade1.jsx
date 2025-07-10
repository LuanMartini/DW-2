import { useEffect, useState } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // converte http em json
       .then((dados) => setUsuarios(dados)) //atualiza os dados para a lista
      .catch((error) => console.error("Erro:", error)); // mostra erros se API falhar
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => ( //percorre a lista de usuarios
          <li key={usuario.id}>{usuario.name}</li> // key={usuario.id} faz o react identificar cada item da lista
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios