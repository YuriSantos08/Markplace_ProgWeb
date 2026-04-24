import { Link } from "react-router-dom";

export default function PerfilAdminPage() {
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
        <h2>Perfil do Admin</h2>

        <p><strong>Nome:</strong> Admin Sistema</p>
        <p><strong>Email:</strong> admin@email.com</p>
        <p><strong>Perfil:</strong> Administrador</p>

        <Link
          to="/admin"
          style={{
            marginTop: "10px",
            display: "inline-block",
            background: "#3b82f6",
            color: "white",
            padding: "10px 14px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          VOLTAR
        </Link>
      </main>
    </>
  );
}