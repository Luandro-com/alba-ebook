import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Tabs.css";

import PdfViewer from "./PdfViewer";

const TabsComponent = () => (
  <Tabs>
    <TabList>
      <Tab>Descrição</Tab>
      <Tab>Autores</Tab>
      <Tab>Ler online</Tab>
    </TabList>
    <TabPanel>
      <div className="tabs-text">
        <h2>
          Mosaico de pesquisas em artes da cena: em foco, dança contemporânea e
          performance
        </h2>
        <p>DOI: 10.xxxxx/at.ed.xxxxxxx</p>

        <p>ISBN: xxx-xx-xxxx-xxx-1</p>

        <p>
          1. Artes Cênicas. I. Vieira, Alba Pedreira (Organizadora). II. Título.
        </p>

        <p>Ano: 2021</p>
      </div>
    </TabPanel>
    <TabPanel>
      <div className="tabs-text">
        <h2>Alba Pedreira Vieira</h2>
        <p>
          Ph.D. em Dança (Temple University, Estados Unidos). Professora,
          artista e pesquisadora do Curso de Graduação em Dança/Universidade
          Federal de Viçosa, e dos Programas de Pós-Graduação em
          Artes/Universidade Federal de Minas Gerais e em Artes
          Cênicas/Universidade Federal de Ouro Preto. Fundadora, diretora
          artística e intérprete-criadora da Mosaico Cia de Dança Contemporânea.
          Membro do Conselho Editorial da ABRACE (gestão 2022-2023);
          coordenadora do Fórum de Editores de Revistas de Artes Cênicas desde
          2018. Líder do Grupo de Pesquisa Transdisciplinar em Dança/CNPq.
        </p>
      </div>
    </TabPanel>
    <TabPanel>
      <PdfViewer />
    </TabPanel>
  </Tabs>
);

export default TabsComponent;
