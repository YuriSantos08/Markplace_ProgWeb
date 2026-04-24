import { Link } from "react-router-dom";
import { useState } from "react";

type Noticia = {
  id: number;
  titulo: string;
  descricao: string;
};

export default function DashboardAdminPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function adicionarNoticia() {
    if (!titulo || !descricao) {
      alert("Preencha todos os campos!");
      return;
    }

    const novaNoticia: Noticia = {
      id: Date.now(),
      titulo,
      descricao,
    };

    setNoticias((prev) => [...prev, novaNoticia]);

    setTitulo("");
    setDescricao("");
  }

  function deletarNoticia(id: number) {
    setNoticias((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <>
      <header>
        <div className="logo">
          <h1>Painel<span>Admin</span></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/admin">PAINEL</Link></li>
            <li><Link to="/admin/perfil">MEU PERFIL</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container" style={{ color: "white" }}>
        <h2 style={{ marginBottom: "20px" }}>Gerenciar Notícias</h2>

        {/* FORMULÁRIO */}
        <div
          style={{
            background: "#161b22",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>Criar Nova Notícia</h3>

          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={{ width: "100%", marginTop: "10px", padding: "8px" }}
          />

          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            style={{ width: "100%", marginTop: "10px", padding: "8px" }}
          />

          <button
            onClick={adicionarNoticia}
            style={{
              marginTop: "10px",
              background: "#3b82f6",
              color: "white",
              padding: "10px 14px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            PUBLICAR
          </button>
        </div>

        {/* LISTA */}
        <div>
          <h3>Notícias Criadas</h3>

          {noticias.length === 0 ? (
            <p>Nenhuma notícia ainda</p>
          ) : (
            noticias.map((n) => (
              <div
                key={n.id}
                style={{
                  borderBottom: "1px solid #30363d",
                  padding: "10px 0",
                }}
              >
                <strong>{n.titulo}</strong>
                <p>{n.descricao}</p>

                <button
                  onClick={() => deletarNoticia(n.id)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    padding: "6px 10px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  EXCLUIR
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}