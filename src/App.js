import * as React from "react";
import Tabs from "./Tabs";

const App = () => {
  return (
    <div
      style={{
        paddingBottom: "150px",
      }}
    >
      <div
        style={{
          height: "220px",
          backgroundColor: "blueviolet",
          backgroundImage: "url(./detalhe.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "column",
        }}
      >
        <div
          style={{
            width: "900px",
          }}
        >
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
            1. Artes Cênicas. I. Vieira, Alba Pedreira (Organizadora). II.
            Título.
          </h2>
        </div>
      </div>
      <div
        style={{
          height: "750px",
          width: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "50px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          <div>
            <img
              alt="Ebook: Mosaico de pesquisas em artes da cena: em foco,
                            dança contemporânea e performance"
              style={{
                height: "500px",
              }}
              src="./capa.jpg"
            />
          </div>
          <div
            style={{
              marginLeft: "30px",
            }}
          >
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
          </div>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
