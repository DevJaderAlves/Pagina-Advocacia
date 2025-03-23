import Topo from "./componentes/Topo/Topo";
import Banner from "./componentes/Banner/Banner";
import Cards from "./componentes/Cards/Cards";
import dados from "../dados";
import estilo from "./page.module.css";
import Relato from "./componentes/Relato/Relato";
import Sobre from "./componentes/Sobre/Sobre";
import Rodape from "./componentes/Rodape/Rodape";
import BannerCTA from "./componentes/BannerCTA/BannerCTA";
import WhatsAppButton from "./componentes/WhatsAppButton/WhatsAppButton";


function App() {
  return (
    <div>
      <Topo />
      <WhatsAppButton />
      <Banner />
      <BannerCTA />
      <section className={estilo.container_cards}>
        <span className={estilo.span}>Juntos, encontraremos soluções para você.</span>
        <h1 className={estilo.titulo}>Entenda como podemos resolver seus desafios e proteger seus direitos.</h1>
        <div className={estilo.cards_container}>
            {dados.map((item, index) => (
                <Cards key={index} titulo={item.titulo} descricao={item.descricao} icone={item.icone} />
            ))}
        </div>
      </section>
      <Relato />
      <Sobre />
      <Rodape />
    </div>
  );
}
export default App;
