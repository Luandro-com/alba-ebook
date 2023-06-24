import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import PdfViewer from "./PdfViewer";

const TabsComponent = () => (
  <Tabs>
    <TabList>
      <Tab>Descrição</Tab>
      <Tab>Autores</Tab>
      <Tab>Download</Tab>
      <Tab>Ler online</Tab>
      {/* <Tab>Artigos</Tab> */}
    </TabList>

    <TabPanel>
      <h2>
        Mosaico de pesquisas em artes da cena: em foco, dança contemporânea e
        performance
      </h2>
      <p>DOI: 10.22533/at.ed.601211103</p>

      <p>ISBN: 978-65-5706-860-1</p>

      <p>
        Palavras-chave: 1. Meio Ambiente. I. Silva, Maria Elanny Damasceno
        (Organizadora). II. Título.
      </p>

      <p>Ano: 2021</p>
    </TabPanel>
    <TabPanel>
      <h2>Alba Pedreira Vieira</h2>
      <p>
        Ph.D. em Dança (Temple University, Estados Unidos). Professora, artista
        e pesquisadora do Curso de Graduação em Dança/Universidade Federal de
        Viçosa, e dos Programas de Pós-Graduação em Artes/Universidade Federal
        de Minas Gerais e em Artes Cênicas/Universidade Federal de Ouro Preto.
        Fundadora, diretora artística e intérprete-criadora da Mosaico Cia de
        Dança Contemporânea. Membro do Conselho Editorial da ABRACE (gestão
        2022-2023); coordenadora do Fórum de Editores de Revistas de Artes
        Cênicas desde 2018. Líder do Grupo de Pesquisa Transdisciplinar em
        Dança/CNPq.
      </p>
    </TabPanel>
    <TabPanel>
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
          }}
        >
          Download
        </button>
      </a>
    </TabPanel>
    <TabPanel>
      <PdfViewer />
    </TabPanel>
    {/* <TabPanel>
            <h2></h2>
        </TabPanel> */}
  </Tabs>
);

export default TabsComponent;
