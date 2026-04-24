import { Link } from "react-router-dom";
import { useState } from "react";

type NoticiaEditor = {
  id: number;
  titulo: string;
  status: string;
};

export default function PainelEditorPage() {
  const [noticias, setNoticias] = useState<NoticiaEditor[]>([
    { id: 1, titulo: "CORIMEIRAS", status: "Pendente" },
    { id: 2, titulo: "Bolsonaro e Lula", status: "Pendente" },
    { id: 3, titulo: "Coca ou Pepsi", status: "Em revisão" },
  ]);

  function publicarNoticia(id: number) {
    setNoticias((prevNoticias) =>
      prevNoticias.map((noticia) =>
        noticia.id === id
          ? { ...noticia, status: "Publicado" }
          : noticia
      )
    );
  }

  function rejeitarNoticia(id: number) {
    setNoticias((prevNoticias) =>
      prevNoticias.map((noticia) =>
        noticia.id === id
          ? { ...noticia, status: "Rejeitado" }
          : noticia
      )
    );
  }

  function corStatus(status: string) {
    switch (status) {
      case "Publicado":
        return "#10b981";
      case "Pendente":
        return "#f59e0b";
      case "Rejeitado":
        return "#ef4444";
      default:
        return "#3b82f6";
    }
  }

  return (
    <>
      <header>
        <div className="logo">
          <h1>
            Painel<span>Editor</span>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/editor">PAINEL</Link>
            </li>
            <li>
              <Link to="/editor/perfil">MEU PERFIL</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h2 style={{ color: "white", marginBottom: "30px" }}>
          Notícias para Revisão
        </h2>

        <div className="news-grid">
          {noticias.map((noticia) => (
            <article className="news-card" key={noticia.id}>
              <div className="news-content" style={{ padding: "20px" }}>
                <h3 style={{ color: "white", marginBottom: "10px" }}>
                  {noticia.titulo}
                </h3>

                <p
                  style={{
                    color: "#8b949e",
                    fontSize: "0.9rem",
                    marginBottom: "15px",
                  }}
                >
                  Status:{" "}
                  <span style={{ color: corStatus(noticia.status) }}>
                    {noticia.status}
                  </span>
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => publicarNoticia(noticia.id)}
                    style={{
                      background: "#10b981",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    PUBLICAR
                  </button>

                  <button
                    onClick={() => rejeitarNoticia(noticia.id)}
                    style={{
                      background: "#ef4444",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    REJEITAR
                  </button>

                  <Link
                    to={`/autor/detalhe/${noticia.id}`}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    VER
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}