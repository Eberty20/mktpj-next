// components/Navbar.tsx - VERSÃO FINAL CORRIGIDA
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // Usando nosso arquivo .css de volta

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo MKT PJ" width={80} height={32} />
        </Link>

        <ul className={styles.navbar__links}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/hotsite">Feira ETEC</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
        </ul>

        <button
          className={styles.navbar__mobile_button}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <Image src="/assets/menu.svg" alt="Ícone do menu" width={32} height={32} />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className={styles.navbar__mobile_menu}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link href="/sobre" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
          <Link href="/hotsite" onClick={() => setIsMenuOpen(false)}>Feira ETEC</Link>
          <Link href="/projetos" onClick={() => setIsMenuOpen(false)}>Projetos</Link>
        </div>
      )}
    </nav>
  );
}