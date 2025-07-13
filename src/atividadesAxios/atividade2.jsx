import { useEffect, useState } from "react";
import axios from "axios";

function ListaEmail() {
  const [usuarios, setUsuarios] = useState([]); // Corrigido: useState precisa de []

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsuarios(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de E-mails</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.email}</li> // Corrigido: exibir email
        ))}
      </ul>
    </div>
  );
}

export default ListaEmail;