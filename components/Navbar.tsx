// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Usando next/image para o logo
import styles from './Navbar.module.css';

export default function Navbar() {
  // 1. Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <Link href="/">
          {/* Usando next/image para otimização do logo */}
          <Image src="/assets/logo.png" alt="Logo MKT PJ" width={70} height={40} />
        </Link>

        <ul className={styles.navbar__links}>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre</Link></li> {/* Aponta para a nova página */}
          <li><Link href="/hotsite">Feira ETEC</Link></li>
          <li><Link href="/projetos">Projetos</Link></li> {/* Aponta para a nova página */}
        </ul>

        {/* Botão do Menu Mobile (só aparece em telas pequenas) */}
        <button
          className={styles.navbar__mobile_button}
          onClick={() => setIsMenuOpen(!isMenuOpen)} // 2. Ação de clique para abrir/fechar
          aria-label="Abrir menu"
        >
          <Image src="/assets/menu.svg" alt="Ícone do menu" width={32} height={32} />
        </button>
      </div>
      
      {/* 3. Menu Mobile Dropdown (só renderiza se isMenuOpen for true) */}
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