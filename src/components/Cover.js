import React, { useEffect } from 'react';
import styles from '../styles/Cover.module.css';
import coverImage from '../assets/cover-image.jpg';

const Cover = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElements = document.querySelectorAll(`.${styles.textElement}`);
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      textElements.forEach((el, index) => {
        const offset = index * 50;
        if (scrollTop > offset) {
          el.style.opacity = 1 - (scrollTop - offset) / 300;
        } else {
          el.style.opacity = 1;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.cover}>
      <img src={coverImage} alt="Cover" className={styles.coverImage} />
      <div className={styles.textContainer}>
        <h1 className={`${styles.textElement} ${styles.title}`}></h1>
        <div className={styles.textRow}>
          <p className={`${styles.textElement} ${styles.leftText}`}>N'oubliez plus<br></br>de contacter<br></br>vos amis et<br></br>votre famille</p>
          <p className={`${styles.textElement} ${styles.rightText}`}>Rendez vos<br></br> tâches et vos<br></br>journées plus<br></br> simples</p>
        </div>
      </div>
    </section>
  );
}

export default Cover;
