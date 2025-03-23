import React from "react";
import styles from "./Topo.module.css";
import Image from "next/image";
import Logo from "/public/log_ad.png"; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

const Topo = () => {
  return (
    <div>
    <header className={styles.secao_topo}>
      {/* Navegação principal */}
      <div className={styles.container_topo}>
        <nav className={styles.navBar}>
          <div className={styles.logoContainer}>
            <Image src={Logo} alt="Logo" className={styles.logo} />
          </div>
          <ul className={styles.menu}>
            <li><a href="#">HOME</a></li>
            <li><a href="#problema">SEU PROBLEMA</a></li>
            <li><a href="#sobre">SOBRE</a></li>
            <li><a href="#contato">CONTATOS</a></li>
          </ul>
          <div className={styles.consultaButton}>
            <a href="#" className={styles.icon}><BsTelephone /></a>
            <a href="https://wa.me/5551993724928" target="_blank" 
            rel="noopener noreferrer">Consulta Gratuita</a>
          </div>
        </nav>

        {/* Ícones sociais */}
        <div className={styles.redes_sociais}>
            <span className={styles.brand}>
              <a href="https://wa.me/5551993724928" target="_blank" 
              rel="noopener noreferrer">Contrate.advogados@.com</a>
            </span>

          <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/jader.alves.7330" target="_blank" 
              rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/home" target="_blank" 
              rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/jader.alves.7330/" target="_blank" 
              rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/jader-alves-228bb6336/" target="_blank" 
              rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

    </header>
      <div className={styles.spacer}></div>
    </div>

  );
};

export default Topo;
