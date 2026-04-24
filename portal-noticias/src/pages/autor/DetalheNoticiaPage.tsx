import { Link, useParams } from "react-router-dom";

type NoticiaDetalhe = {
  id: number;
  titulo: string;
  cidade: string;
  status: string;
  conteudo: string;
};

const noticias: NoticiaDetalhe[] = [
  {
    id: 1,
    titulo: "CORIMEIRAS",
    cidade: "Brasília",
    status: "Publicado",
    conteudo:
      "Torcedor quebra barreira de rivalidade e movimenta as redes sociais em uma notícia que ganhou destaque nacional.",
  },
  {
    id: 2,
    titulo: "Bolsonaro e Lula",
    cidade: "São Paulo",
    status: "Publicado",
    conteudo:
      "Debate político segue movimentando o cenário nacional e gerando repercussão em diferentes estados do país.",
  },
  {
    id: 3,
    titulo: "União FLASCO",
    cidade: "Rio de Janeiro",
    status: "Publicado",
    conteudo:
      "A união inesperada entre torcidas virou assunto entre os amantes do futebol e tomou conta da internet.",
  },
  {
    id: 4,
    titulo: "Coca ou Pepsi",
    cidade: "Recife",
    status: "Publicado",
    conteudo:
      "Discussão curiosa sobre preferências de consumo viraliza e divide opiniões entre os internautas.",
  },
  {
    id: 5,
    titulo: "Botafogo à venda",
    cidade: "Belo Horizonte",
    status: "Publicado",
    conteudo:
      "Rumores e movimentações do mercado esportivo levantam debates sobre o futuro do clube e de seus investidores.",
  },
];

export default function DetalheNoticiaPage() {
  const { id } = useParams();

  const noticia = noticias.find((item) => item.id === Number(id));

  if (!noticia) {
    return (
      <>
        <header>
          <div className="logo">
            <h1>
              Painel<span>Autor</span>
            </h1>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/autor">PAINEL</Link>
              </li>
              <li>
                <Link to="/autor/perfil">MEU PERFIL</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container" style={{ color: "white" }}>
          <h2 style={{ marginBottom: "20px" }}>Notícia não encontrada</h2>

          <Link
            to="/autor"
            style={{
              background: "#3b82f6",
              color: "white",
              padding: "10px 14px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            VOLTAR AO PAINEL
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="logo">
          <h1>
            Painel<span>Autor</span>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/autor">PAINEL</Link>
            </li>
            <li>
              <Link to="/autor/criar" className="btn-nav-highlight">
                NOVA NOTÍCIA
              </Link>
            </li>
            <li>
              <Link to="/autor/perfil">MEU PERFIL</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container" style={{ color: "white" }}>
        <h2 style={{ marginBottom: "20px" }}>Detalhe da Notícia</h2>

        <article
          style={{
            background: "#161b22",
            borderRadius: "12px",
            padding: "24px",
            border: "1px solid #30363d",
          }}
        >
          <h1 style={{ marginBottom: "16px" }}>{noticia.titulo}</h1>

          <p style={{ color: "#8b949e", marginBottom: "16px" }}>
            Cidade: {noticia.cidade} | Status: {noticia.status}
          </p>

          <p style={{ lineHeight: "1.8", marginBottom: "24px" }}>
            {noticia.conteudo}
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/autor/editar"
              style={{
                background: "#f59e0b",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              EDITAR
            </Link>

            <Link
              to="/autor/excluir"
              style={{
                background: "#ef4444",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              EXCLUIR
            </Link>

            <Link
              to="/autor"
              style={{
                background: "#3b82f6",
                color: "white",
                padding: "10px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              VOLTAR
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}