import Link from 'next/link';
import estilo from './BannerCTA.module.css';

export default function BannerCTA() {
  return (
    <section className={estilo.container}>
      <Link href="https://wa.me/5551993724928" target="_blank" rel="noopener noreferrer" className={estilo.botao}>
        CLIQUE AQUI E FALE COM UM ADVOGADO
      </Link>
    </section>
  );
}
