import { useState } from "react";
import Irmao1 from "./Irmao1";
import Irmao2 from "./Irmao2";


function app(){
    const [mensagem, setMensagem] = useState ('');
    return(
        <div style={{padding:'20px'}}>  
        <h1>Aula17</h1>
        <h2>Irmão   </h2>
        <Irmao1 enviarMensagem={setMensagem} />
        <Irmao2 mensagem={mensagem} />
        </div>
        
    );
}
export default app