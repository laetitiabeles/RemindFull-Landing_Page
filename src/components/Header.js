import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="Logo"/>
        <h1 className={styles.title}>RemindFull</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">A propos</a></li>
        </ul>
        <a href="deployed_project_url" className={styles.button}>Voir le projet</a>
      </nav>
    </header>
  );
}

export default Header;
