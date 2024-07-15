import React, { useEffect, useRef } from 'react';
import styles from '../styles/Features.module.css';
import feature1 from '../assets/feature-1.jpg';
import feature2 from '../assets/feature-2.jpg';
import feature3 from '../assets/feature-3.jpg';

const Features = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      featureRefs.current.forEach((ref, index) => {
        const delay = index * 0.2; // Délai basé sur l'index
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.style.transitionDelay = `${delay}s`;
            ref.classList.add(styles.visible);
          } else {
            ref.style.transitionDelay = `0s`;
            ref.classList.remove(styles.visible);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      image: feature3,
      name: 'Restez informé des proches que vous devez contacter',
      description: 'Il n\'est pas rare de se dire "Je dois appeler ma mère" et de l\'oublier. RemindFull vous permet de noter ces tâches et de vous rappeler de les effectuer. Vous pouvez également ajouter des rappels pour les anniversaires, les fêtes et les événements importants.'
    },
    {
      image: feature2,
      name: 'Créez des listes de tâches pour simplifier votre quotidien',
      description: 'Les listes de tâches sont un excellent moyen de rester organisé. Créez des listes pour vos courses, vos tâches ménagères, vos projets et bien plus encore. Cochez les éléments de votre liste au fur et à mesure que vous les accomplissez. Le dashboard vous permettra de voir vos tâches à effectuer dans les trois jours.'
    },
    {
      image: feature1,
      name: 'Ne soyez plus à cours d\'idées pour les prochaines fêtes',
      description: 'RemindFull vous permet également de gérer vos événements et de garder une trace des cadeaux que vous avez offerts. Vous pouvez ajouter des idées de cadeaux pour vos amis et votre famille.'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.featureList}>
        <h2 className={styles.title}>Fonctionnalités</h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className={styles.feature}
            ref={(el) => (featureRefs.current[index] = el)}
          >
            <img src={feature.image} alt={feature.name} />
            <div>
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
