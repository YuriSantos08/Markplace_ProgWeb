import { Link } from "react-router-dom";

import img1 from "../../assets/02.jpg";
import img2 from "../../assets/01.jpg";
import img3 from "../../assets/03.webp";
import img4 from "../../assets/04.avif";
import img5 from "../../assets/05.webp";


const noticias = [
  { id: 1, img: img1, titulo: "CORIMEIRAS" },
  { id: 2, img: img2, titulo: "Bolsonaro e Lula" },
  { id: 3, img: img3, titulo: "União FLASCO" },
  { id: 4, img: img5, titulo: "Coca ou Pepsi" },
  { id: 5, img: img4, titulo: "Botafogo à venda" }
];

export default function MinhasNoticiasPage() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>Painel<span>Autor</span></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/autor/criar" className="btn-nav-highlight">NOVA NOTÍCIA</Link></li>
            <li>
  <Link to="/autor/perfil">MEU PERFIL</Link>
</li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h2 style={{ color: "white", marginBottom: "30px" }}>
          Gerenciar Minhas Publicações
        </h2>

        <div className="news-grid">
          {noticias.map((n, index) => (
            <article className="news-card" key={index}>

              <div className="img-container">
                <img src={n.img} alt="Notícia" />
              </div>

              <div className="news-content" style={{ padding: "20px" }}>
                <h3 style={{ color: "white", marginBottom: "10px" }}>
                  {n.titulo}
                </h3>

                <p style={{ color: "#8b949e", fontSize: "0.9rem", marginBottom: "15px" }}>
                  Status: <span style={{ color: "#10b981" }}>Publicado</span>
                </p>

                {/* 🔥 BOTÕES IGUAIS AO HTML */}
                <div style={{ display: "flex", gap: "10px" }}>

                  <Link to="/autor/editar"
                    style={{
                      background: "#f59e0b",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold"
                    }}>
                    EDITAR
                  </Link>

                  <Link to="/autor/excluir"
                    style={{
                      background: "#ef4444",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold"
                    }}>
                    EXCLUIR
                  </Link>

                  <Link to={`/autor/detalhe/${n.id}`}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: "bold"
                    }}>
                    VER
                  </Link>

                </div>

              </div>

            </article>
          ))}
        </div>
      </main>

      <footer style={{
        marginTop: "50px",
        textAlign: "center",
        color: "#8b949e",
        padding: "20px",
        borderTop: "1px solid #30363d"
      }}>
        <p>© 2026 FakeNews - Grupo 8</p>
      </footer>
    </>
  );
}