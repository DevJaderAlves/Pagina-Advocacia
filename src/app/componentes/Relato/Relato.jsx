import estilo from "./Relato.module.css";
import Link from "next/link";

const Relato = () => {
  return (
    <div className={estilo.container_relatorio}>
      <h1 className={estilo.titulo}>Respeitar seus direitos é mais do que uma obrigação. <span className={estilo.destaque}>É justiça.</span></h1>
      <p className={estilo.paragrafo}>
        Conte-nos o que aconteceu. Clique no botão e vamos buscar soluções juntos.
        <Link href="https://wa.me/5551993724928" target="_blank" rel="noopener noreferrer" className={estilo.botao}>
          CLIQUE AQUI E FALE COM UM ADVOGADO
        </Link>
      </p>

      <h2 className={estilo.subtitulo}>
        Saiba como um advogado trabalhista especializado pode proteger você.
      </h2>

      <div className={estilo.cards_container}>
        {[
          {
            titulo: "Segurança Jurídica",
            itens: [
              "Evite prejuízos e garanta que seus direitos sejam respeitados conforme a lei.",
              "Com suporte jurídico, você protege seus direitos e evita problemas legais."
            ]
          },
          {
            titulo: "Agilidade",
            itens: [
              "Um advogado especializado pode ajudar a resolver problemas de forma eficaz e eficiente.",
              "A organização jurídica acelera os processos e garante resultados rápidos."
            ]
          },
          {
            titulo: "Transparência",
            itens: [
              "Um advogado trabalhista especializado é transparente em suas ações e explicações.",
              "Com transparência, você pode confiar no seu advogado e entender o que está acontecendo."
            ]
          },
          {
            titulo: "Experiência",
            itens: [
              "Um advogado especializado tem experiência em resolver problemas de direito trabalhista.",
              "Com experiência, você pode confiar que seu advogado fará o melhor para proteger seus direitos."
            ]
          },
          {
            titulo: "Recuperação de Valores",
            itens: [
              "Um advogado especializado pode ajudar a recuperar valores devidos a você.",
              "Com recuperação de valores, você pode recuperar o que é seu e continuar em frente."
            ]
          },
          {
            titulo: "Apoio Personalizado",
            itens: [
              " Um advogado trabalhista oferece suporte personalizado para cada caso.",
              " Com um atendimento individualizado, suas necessidades são compreendidas e atendidas da melhor forma."
            ]
          }
        ].map((item, index) => (
          <div key={index} className={estilo.card}>
            <h3 className={estilo.card_titulo}>{item.titulo}</h3>
            <ul className={estilo.lista}>
              {item.itens.map((texto, idx) => (
                <li key={idx} className={estilo.item}>{texto}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relato;

