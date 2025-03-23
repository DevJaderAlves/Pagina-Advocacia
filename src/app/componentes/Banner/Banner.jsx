
import Image from "next/image";
import estilo from "./Banner.module.css";
import Logo from "../../../../public/cliente1.png";

const Banner = () => {
    return (
        <div className={estilo.container_principal}>
            <div className={estilo.container}>
                <div className={estilo.secao_titulo}>
                    <h1 className={estilo.titulo}>Está enfrentando desafios no trabalho?</h1>
                    <p className={estilo.paragrafo}>O esforço de quem trabalha merece respeito e o cumprimento de todos os direitos garantidos por lei.</p>
                </div>
                <Image className={estilo.imagem} src={Logo} alt="Cliente" />
            </div>
        </div>
    );
}

export default Banner;
