import { useEffect, useState } from "react";
import axios from "axios";

function ListaUsuarios(){
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:3001/produtos")
        .then((produtos) => setProdutos(produtos.data))
        .catch((error) => console.error(error));
    }, []);

    return (
        <div>
                <ul>Produtos</ul>
                <li>id</li>
                <li>nome</li>
                <li>preco</li>
                <li>categoria</li>
        </div>
    );
}

export default ListaUsuarios