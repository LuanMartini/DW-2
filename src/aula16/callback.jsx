import { useCallback, useState } from "react";
 function Botao({onClick}){
    console.log("botao renderizado");
    return <button onclick = {onclick}> incrementar</button>;
}

export default function Atividade6() {
    const [count, setcount ] = useState(0);
    const incrementar = useCallback(()=>
    {setcount((prev)=> prev +1);

    }, []);
    return(
        <div>
            <p>contador: {count}</p>
            <botao onclick={incrementar} />
        </div>
    )
}