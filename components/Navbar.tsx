import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <Link href="#header" legacyBehavior>
          <a className={styles.navbar__logo}>
            <img src="/assets/logo.png" alt="mktlogo" />
          </a>
        </Link>
        <ul className={styles.navbar__links}>
          <li><Link href="#header">Início</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#skills">TCC</Link></li>
          <li><Link href="#projects">Projetos</Link></li>
          <li><Link href="#footer">Contato</Link></li>
        </ul>
        {/* ... restante do código do menu mobile ... */}
      </div>
    </nav>
  );
}