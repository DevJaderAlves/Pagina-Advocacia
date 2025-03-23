import estilo from "./Rodape.module.css";
import Image from "next/image";
import Logo from "/public/log_ad.png"; 
import { SiGooglemaps } from "react-icons/si";
import { BsFillTelephoneXFill } from "react-icons/bs";
import { TbClockHour10 } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { BiConversation } from "react-icons/bi";

const Rodape = () => {
    return (
        <div id="contato" className={estilo.secao_rodape}>

            <div className={estilo.info}>
                <div className={estilo.container_logo}>
                    <Image src={Logo} alt="Logo" className={estilo.logo} />
                    <p className={estilo.paragrafo}>Trabalhador(a), não aceite menos do que você merece. Seu esforço vale muito.</p>
                </div>

                <nav className={estilo.navegacao}>
                    <ul className={estilo.lista}>
                    <li className={estilo.item}>
                        <figure className={estilo.icon}><SiGooglemaps width={80} height={80} /></figure>
                        <p className={estilo.item_paragrafo}>Endereço: R. Osvaldo Aranha, 1467 - sala 201 e 202 - Centro, Viamão - RS, 99999-999
                        </p>
                    </li>
                    <li className={estilo.item}>
                        <figure className={estilo.icon}><BsFillTelephoneXFill  width={80} height={80} /></figure>
                        <p className={estilo.item_paragrafo}>Telefone: (99) 9999-9999</p>
                    </li>
                    <li className={estilo.item}>
                        <figure className={estilo.icon}><TbClockHour10  width={80} height={80} /></figure>
                        <p className={estilo.item_paragrafo}>Horário de Funcionamento: Segunda a Sexta:08:00 - 18:00 </p>
                    </li>
                    <li className={estilo.item}>
                        <figure className={estilo.icon}><FaWhatsapp  width={80} height={80} /></figure>
                        <p className={estilo.item_paragrafo}>Whatsapp</p>
                    </li>
                    <li className={estilo.item}>
                        <figure className={estilo.icon}><BiConversation  width={80} height={80} /></figure>
                        <p className={estilo.item_paragrafo}>Chat: Atendimento ao cliente</p>
                    </li>
                    </ul>
                </nav>
            </div>

            <div className={estilo.mapa_container}>
                <h2 className={estilo.subtitulo}>Localização</h2>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d1726.3441067553845!2d-51.0656512!3d-30.0744704!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d-30.09285744553215!2d-51.07574467063566!5e0!3m2!1spt-BR!2sbr!4v1742556517324!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>





    );
};

export default Rodape;