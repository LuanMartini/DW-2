import {useState} from 'react';
import BotaoFilho from './BotaoFilho';

function Contador() {
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <BotaoFilho incrementar={incrementar} />
        </div>
    );
}

export default Contador;