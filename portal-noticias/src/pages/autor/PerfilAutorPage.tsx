import { Link } from "react-router-dom";

export default function PerfilAutorPage() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>Painel<span>Autor</span></h1>
        </div>

        <nav>
          <ul>
            <li><Link to="/autor">HOME</Link></li>
            <li><Link to="/autor/criar" className="btn-nav-highlight">NOVA NOTÍCIA</Link></li>
            <li><Link to="/autor/perfil">MEU PERFIL</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container" style={{ color: "white" }}>
        <h2 style={{ marginBottom: "30px" }}>Meu Perfil</h2>

        <div
          style={{
            background: "#161b22",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #30363d",
            maxWidth: "600px"
          }}
        >
          <p style={{ marginBottom: "10px" }}>
            <strong>Nome:</strong> João da Silva
          </p>

          <p style={{ marginBottom: "10px" }}>
            <strong>Email:</strong> joao@email.com
          </p>

          <p style={{ marginBottom: "20px" }}>
            <strong>Perfil:</strong> Autor
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              EDITAR PERFIL
            </button>

            <Link
              to="/autor"
              style={{
                background: "#6b7280",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              VOLTAR
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}