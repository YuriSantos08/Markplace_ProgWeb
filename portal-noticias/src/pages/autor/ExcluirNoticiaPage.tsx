export default function ExcluirNoticiaPage() {
  return (
    <body className="auth-body">
      <div className="auth-container">

        <h2 style={{ color: "var(--accent)" }}>
          Excluir Notícia?
        </h2>

        <p style={{ textAlign: "center", margin: "20px 0" }}>
          Tem certeza que deseja deletar permanentemente esta notícia?
        </p>

        <form>
          {/* 🔥 BOTÃO IGUAL */}
          <button
            type="submit"
            className="btn-auth"
            style={{ background: "var(--accent)" }}
          >
            Sim, excluir
          </button>
        </form>

        <div className="link-auth">
          <a href="#">Não, voltar</a>
        </div>

      </div>
    </body>
  );
}