// components/Navbar.tsx

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        {/* Link do logo agora aponta para a Home Page */}
        <Link href="/" className={styles.navbar__logo}>
          <img src="/assets/logo.png" alt="Logo MKT PJ" />
        </Link>
        <ul className={styles.navbar__links}>
          {/* Links Corrigidos */}
          <li><Link href="/">Início</Link></li>
          <li><Link href="/#about">Sobre</Link></li> {/* Leva para a seção 'about' na home */}
          <li><Link href="/hotsite">Feira ETEC</Link></li> {/* Link direto para o Hotsite */}
          <li><Link href="/#projects">Projetos</Link></li> {/* Leva para a seção 'projects' na home */}
          <li><Link href="/landing-page">Inscrição</Link></li> {/* Link direto para a Inscrição */}
        </ul>
        {/* ... restante do código do menu mobile ... */}
      </div>
    </nav>
  );
}