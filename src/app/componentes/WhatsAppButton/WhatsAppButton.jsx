
import estilo from "./WhatsAppButton.module.css";
import Image from "next/image";
import Logo from "../../assets/logo.png";

export default function WhatsAppButton() {
    return (
        <a
        href="https://wa.me/5551993724928"
        target="_blank"
        rel="noopener noreferrer"
        className={estilo.whatsapp}
      >
        <Image src={Logo} alt="WhatsApp" width={60} height={60} className={estilo.whatsapp} />
      </a>
    );
  }
  