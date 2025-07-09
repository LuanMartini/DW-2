import { useState } from "react"
export default function Formulario(){
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
    
     // limpa os campos
    setNome('');
    setEmail('');
    };

    return(
        <>
            <div>   
                <form onSubmit={handleSubmit} action="">
                    <input type="text" 
                     value={nome} // puxa variavel nome dos const
                     onChange={(e) => setNome(e.target.value)} // muda o estado após o usuário digitar
                    />
                    <input type="e-mail" 
                     value={email} // puxa variavel nome dos const
                     onChange={(e) => setEmail(e.target.value)} // muda o estado após o usuário digitar 
                    />
                    <button
                    type="enviar"
                    ></button>
                </form>
            </div>
        </>
    )
}