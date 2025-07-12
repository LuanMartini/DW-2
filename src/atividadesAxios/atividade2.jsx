// Crie um componente que consuma a mesma API usando Axios e exiba os e-mails dos usuários.
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaEmail(){
const [email, setEmail] = useState;

useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setEmail(response.data))
    .catch(error => console.error(error))
},[]);

return(
<div>
    <h2>Lista E-mails</h2>
    <ul>
        {email.slice(0, 5).map(email => (
            <li key={email.id}>{email.title}</li>
        ))}
    </ul>
</div>
);

}