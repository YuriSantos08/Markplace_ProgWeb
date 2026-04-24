import { Link } from "react-router-dom";

export default function CadastroPage() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Cadastro</h1>
      <p>Escolha seu tipo de conta</p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "20px" }}>
        <Link
          to="/autor"
          style={{
            background: "#16a34a",
            color: "white",
            padding: "12px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Criar conta como Autor
        </Link>
      </div>

      <p style={{ marginTop: "20px" }}>
        Já tem conta? <Link to="/">Voltar para login</Link>
      </p>
    </main>
  );
}