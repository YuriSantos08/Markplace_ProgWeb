import { Link } from "react-router-dom";

export default function CriarNoticiaPage() {
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

      <main className="container">
        <h2 style={{ color: "white" }}>Criar Nova Notícia</h2>
        <hr /><br />

        <form>
          <label>Título</label><br />
          <input type="text" /><br /><br />

          <label>Texto</label><br />
          <textarea rows={5}></textarea><br /><br />

          <label>Cidade</label><br />
          <select>
            <option>Brasília</option>
            <option>São Paulo</option>
          </select><br /><br />

          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit">Salvar</button>

            <Link
              to="/autor"
              style={{
                background: "#6b7280",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Cancelar
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}