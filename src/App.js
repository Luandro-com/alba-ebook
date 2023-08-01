import * as React from "react";
import "./App.css";
import Tabs from "./Tabs";

const App = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header">
          <h1
            style={{
              padding: "15px 10px",
              backgroundColor: "cornsilk",
              width: "100px",
            }}
          >
            Ebook
          </h1>
          <h2
            style={{
              padding: "15px 10px",
              backgroundColor: "orange",
              marginTop: 0,
            }}
          >
            Mosaico de pesquisas em artes da cena: em foco, dança contemporânea
            e performance (Alba Pedreira Vieira)
          </h2>
        </div>
      </div>
      <div className="cover-container">
        <div className="cover">
          <div>
            <img
              alt="Ebook: Mosaico de pesquisas em artes da cena: em foco,
                            dança contemporânea e performance"
              className="cover-img"
              src="./capa.jpg"
            />
          </div>
          <div className="cover-description">
            <h2>
              Mosaico de pesquisas em artes da cena: em foco, dança
              contemporânea e performance
            </h2>
            <p>
              Os oito capítulos deste livro articulam pluriepistemologias e
              exploram experiências vividas e atravessamentos teórico-práticos
              em arte, particularmente em dança e performance. Reflexões
              corporificadas, processos e produtos artísticos compartilhados
              incluem pesquisas diversas, a maioria guiada pela
              in-ex-corporação, um desdobramento da prática como pesquisa, em
              que a escrita é procedimento metodológico e epistemológico,
              enriquecendo jornadas de descobertas e construção de saberes e
              reflexões crítico-imaginativas. Além das várias figuras, são
              disponibilizados os links de todos os trabalhos apresentados e
              registrados em vídeo e/ou perforgrafia. Voltado para artistas,
              docentes, discentes, pesquisadores e demais interessadas(os) na
              temática em questão, busca ampliar perspectivas teórico-práticas e
              estimular futuras investigações em áreas afins.
            </p>
            <div style={{ textAlign: "center", marginTop: 50 }}>
              <a
                href={`${process.env.PUBLIC_URL}/Mosaico_de_Pesquisas_em_Artes_da_Cena.pdf`}
                download
              >
                <button
                  style={{
                    backgroundColor: "blueviolet",
                    padding: "15px 20px",
                    color: "white",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  Download PDF
                </button>
              </a>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
