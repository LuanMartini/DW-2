import { useCallback, useState } from 'react';

function Botao({ onclick }) {
    console.log('Botão renderizado');
    return <button onClick={onclick}>Incrementar</button>;
}

export default function Atividade6() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <>
            <p>Contador: {count}</p>
            <Botao onclick={increment} />
        </>
    );
}