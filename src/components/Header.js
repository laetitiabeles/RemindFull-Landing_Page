import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <h1 className={styles.title}>RemindFull</h1>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="https://github.com/laetitiabeles/remindfull-landing_page" className={styles.button}>Voir le projet</a>
      </nav>
    </header>
  );
};

export default Header;
