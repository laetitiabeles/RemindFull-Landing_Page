import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";
import styles from '../styles/About.module.css';
import about from '../assets/about.jpg';

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");
  const [description4, setDescription4] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);

  const someCallback = () => {
    setMessage1("Semaine 1");
    setDescription1("Base de données, serveur et API, paramétrage d'Android Studio");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Semaine 2");
    setDescription2("Hot fix de la base de données, serveur et de l'API. Développement de la v1 de l'interface utilisateur");
  };

  const someCallback3 = () => {
    setMessage3("Semaine 3");
    setDescription3("Ajout des features cadeaux et idées cadeaux. Hot fix des features contacts et tâches. Développement de l'interface utilisateur finale.");
  };

  const someCallback4 = () => {
    setMessage4("Semaine 4");
    setDescription4("Hot fix du front et du back");
    fireConfetti();
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
  }, [setObserver]);

  return (
    <div className={styles.wrapper}>
      <div id="timeline1" ref={timeline1} className={`${styles.timeline}`} />
      <div className={styles.circleWrapper}>
        <div id="circle1" ref={circle1} className={styles.circle}>
          1
        </div>
        <div className={styles.message}>{message1}</div>
        <div className={styles.description}>{description1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className={styles.timeline} />
      <div className={styles.circleWrapper}>
        <div id="circle2" ref={circle2} className={styles.circle}>
          2
        </div>
        <div className={styles.message}>{message2}</div>
        <div className={styles.description}>{description2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className={styles.timeline} />
      <div className={styles.circleWrapper}>
        <div id="circle3" ref={circle3} className={styles.circle}>
          3
        </div>
        <div className={styles.message}>{message3}</div>
        <div className={styles.description}>{description3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className={styles.timeline} />
      <div className={styles.circleWrapper}>
        <div id="circle4" ref={circle4} className={styles.circle}>
          4
        </div>
        <div className={styles.message}>{message4}</div>
        <div className={styles.description}>{description4}</div>
      </div>
    </div>
  );
};

const About = () => {
  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.story}>
        <div className={styles.storyText}>
          <img src={about} alt="About" className={styles.aboutImage}/>
          <h2 className={styles.title}>A propos de RemindFull</h2>
          <p>
            RemindFull a été un projet inspiré par toutes les personnes neurodivergentes de mon entourage. J'ai pu constater que la gestion des tâches quotidiennes et des interactions sociales peut être difficile pour certaines personnes. Il était nécessaire de créer une application simple qui permet de gérer les tâches quotidiennes et de planifier des rappels pour garder le lien.
          </p>
          <p>
            C'est un projet from scratch que j'ai développé seule en 4 semaines avec les précieux conseils de mon entourage. Le challenge technique était de créer une application simple et intuitive pour les utilisateurs tout en utilisant des technologies modernes.
          </p>
          <h3>Technologies utilisées:</h3>
          <p>
            React Native, NodeJS, ExpressJS, MySQL
          </p>
          <div className={styles.buttonContainer}>
            <a href="https://github.com/laetitiabeles/RemindFull_Mobile_Web" className={styles.button}>Voir sur GitHub</a>
          </div>
        </div>
        <div className={styles.roadmapStart}>
          <TimelineObserver
            initialColor="#e5e5e5"
            fillColor="#031D44"
            threshold={0.1}
            rootMargin="0px 0px -200px 0px"
            handleObserve={(setObserver) => (
              <Timeline
                callback={onCallback}
                setObserver={setObserver}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
