import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get("http://localhost:3001/produtos")
      .then((res) => {
        if (!mounted) return;
        setProdutos(res.data || []);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error(err);
        setError("Erro ao carregar produtos. Verifique o JSON Server.");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Lista de Produtos
      </h1>

      {loading && (
        <p className="text-center text-black">Carregando produtos...</p>
      )}

      {error && (
        <p className="text-center text-black mb-4">{error}</p>
      )}

      {!loading && !error && produtos.length === 0 && (
        <p className="text-center text-black">Nenhum produto encontrado.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
            aria-labelledby={`produto-${p.id}`}
          >
            <h2 id={`produto-${p.id}`} className="text-xl font-semibold mb-2 text-black">
              {p.nome}
            </h2>

            {p.categoria && (
              <p className="text-sm text-black mb-3">Categoria: {p.categoria}</p>
            )}

            {typeof p.preco === "number" ? (
              <p className="text-lg font-bold text-black">
                {p.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            ) : (
              <p className="text-sm text-black">Preço não informado</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
