import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>Fake<span>News</span></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/cadastro">CADASTRO</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h2 style={{ color: "white", marginBottom: "30px" }}>
          Notícias em destaque
        </h2>

        <div className="news-grid">
          <article className="news-card">
            <div className="news-content" style={{ padding: "20px" }}>
              <h3 style={{ color: "white", marginBottom: "10px" }}>
                CORIMEIRAS
              </h3>
              <p style={{ color: "#8b949e" }}>
                Rivalidade, futebol e polêmica em destaque.
              </p>
            </div>
          </article>

          <article className="news-card">
            <div className="news-content" style={{ padding: "20px" }}>
              <h3 style={{ color: "white", marginBottom: "10px" }}>
                Bolsonaro e Lula
              </h3>
              <p style={{ color: "#8b949e" }}>
                Política em foco com repercussão nacional.
              </p>
            </div>
          </article>

          <article className="news-card">
            <div className="news-content" style={{ padding: "20px" }}>
              <h3 style={{ color: "white", marginBottom: "10px" }}>
                Coca ou Pepsi
              </h3>
              <p style={{ color: "#8b949e" }}>
                Debate curioso que movimenta as redes.
              </p>
            </div>
          </article>
        </div>

        <div style={{ marginTop: "30px", display: "flex", gap: "12px" }}>
          <Link
            to="/login"
            style={{
              background: "#3b82f6",
              color: "white",
              padding: "10px 14px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Ir para Login
          </Link>

          <Link
            to="/cadastro"
            style={{
              background: "#10b981",
              color: "white",
              padding: "10px 14px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Criar Conta
          </Link>
        </div>
      </main>
    </>
  );
}