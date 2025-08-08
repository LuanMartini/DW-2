import { useState, useEffect } from "react";

export default function PraticaGuiada() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => setUsuarios(dados));
  }, []);

  const filtrados = usuarios.filter((u) =>
    u.name.toLowerCase().includes(busca.toLowerCase())
  );

  const contador = usuarios.reduce(
    (acc, u) => (u.name.length > 5 ? acc + 1 : acc),
    0
  );

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>

      <input
        placeholder="Buscar por nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full max-w-sm"
      />

      <p className="mb-4 text-gray-700">
        Nomes com mais de 5 letras:{" "}
        <span className="font-semibold">{contador}</span>
      </p>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border-b">Nome</th>
              <th className="p-3 border-b">E-mail</th>
              <th className="p-3 border-b">Cidade</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{u.name}</td>
                <td className="p-3 border-b">{u.email}</td>
                <td className="p-3 border-b">{u.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}