import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Login</h1>
      <p>Escolha uma área para entrar</p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* AUTOR */}
        <Link
          to="/autor"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Entrar como Autor
        </Link>

        {/* EDITOR */}
        <Link
          to="/editor"
          style={{
            background: "#7c3aed",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Entrar como Editor
        </Link>

        {/* ADMIN */}
        <Link
          to="/admin"
          style={{
            background: "#ef4444",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Entrar como Admin
        </Link>
      </div>

      <p style={{ marginTop: "20px" }}>
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>

      <p style={{ marginTop: "10px" }}>
        <Link to="/">Voltar para Home</Link>
      </p>
    </main>
  );
}