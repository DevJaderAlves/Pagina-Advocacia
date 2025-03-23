
import React from 'react';
import styles from './Sobre.module.css';
import advogadoImage from '../../../../public/advogado.png';
import advogadoImage1 from '../../../../public/advogado1.png';
import advogadoImage2 from '../../../../public/advogado2.png';
import Image from 'next/image';

const Sobre = () => {
  return (
    <div id='sobre' className={styles.sobreContainer}>
      <div className={styles.imageContainer}>
        <Image src={advogadoImage} alt="Advogado" className={styles.advogadoImage} />
        <Image src={advogadoImage1} alt="Advogado" className={styles.advogadoImage1} />
        <Image src={advogadoImage2} alt="Advogado" className={styles.advogadoImage2} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.titulo}>Sobre o Escritório</h2>
        <p className={styles.paragrafo}>
          Fundado em 2005, nosso escritório de advocacia se destaca pela excelência e dedicação 
          aos direitos trabalhistas. Nossa equipe é formada por especialistas que já conduziram 
          centenas de processos com sucesso.
        </p>
        <p className={styles.paragrafo}>
          A atuação do escritório abrange diversas áreas do direito trabalhista, oferecendo suporte jurídico 
          personalizado para clientes em todo o Brasil. Nosso compromisso é garantir justiça e segurança 
          jurídica para trabalhadores e empresas.
        </p>
        <p className={styles.paragrafo}>
          Atendemos clientes em vários estados, incluindo RS, SP, RJ, MG, SC, PR, BA e outros, sempre com 
          transparência e agilidade na resolução de casos.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
