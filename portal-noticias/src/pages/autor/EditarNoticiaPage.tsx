import { Link } from "react-router-dom";

export default function EditarNoticiaPage() {
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

      <div className="auth-body">
        <div className="auth-container" style={{ maxWidth: "600px" }}>
          <h2>Editar Notícia</h2>

          <form>
            <div className="input-group">
              <label>Título</label>
              <input type="text" defaultValue="CORIMEIRAS" required />
            </div>

            <div className="input-group">
              <label>Texto</label>
              <textarea
                rows={5}
                defaultValue="Torcedor quebra barreira de rivalidade!"
                required
              />
            </div>

            <div className="input-group">
              <label>Cidade</label>
              <select defaultValue="Brasília">
                <option>Brasília</option>
                <option>São Paulo</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn-auth"
              style={{ background: "#f39c12" }}
            >
              Atualizar Notícia
            </button>
          </form>

          <div className="link-auth" style={{ marginTop: "15px" }}>
            <Link to="/autor">Cancelar</Link>
          </div>
        </div>
      </div>
    </>
  );
}