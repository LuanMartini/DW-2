import { useState, useEffect } from "react";

export default function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState("");

  // Buscar posts da API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((dados) => setPosts(dados));
  }, []);

  // Filtrar pelo título (case-insensitive)
  const postsFiltrados = posts.filter((post) =>
    post.title.toLowerCase().includes(busca.toLowerCase())
  );

  const total = postsFiltrados.length;

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Lista de Posts</h1>

      <input
        placeholder="Buscar no título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-4 w-full max-w-md"
      />

      <p className="mb-4 text-gray-700">
        Resultados encontrados:{" "}
        <span className="font-semibold">{total}</span>
      </p>

      <div className="space-y-4">
        {postsFiltrados.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
