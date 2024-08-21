import React, { useEffect } from 'react';
import styles from '../styles/Cover.module.css';
import coverImage from '../assets/cover-image.jpg';

const Cover = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElements = document.querySelectorAll(`.${styles.textElement}`);
      const coverSection = document.querySelector(`.${styles.cover}`);
      const sectionTop = coverSection.offsetTop;
      const sectionHeight = coverSection.offsetHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      textElements.forEach((el) => {
        // Condition pour gérer l'opacité en fonction du scroll
        if (scrollTop > sectionTop + sectionHeight || scrollTop + windowHeight < sectionTop) {
          el.style.opacity = 0; // Cache le texte lorsque l'utilisateur quitte la section
        } else {
          const distanceFromTop = Math.max(0, scrollTop + windowHeight - sectionTop);
          el.style.opacity = 1 - (distanceFromTop / (sectionHeight + windowHeight));
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
        <div className={styles.textRow}>
          <p className={`${styles.textElement} ${styles.leftText}`}>N'oubliez plus de contacter vos amis et votre famille</p>
          <p className={`${styles.textElement} ${styles.rightText}`}>Rendez vos tâches et vos journées plus simples</p>
        </div>
      </div>
    </section>
  );
}

export default Cover;
