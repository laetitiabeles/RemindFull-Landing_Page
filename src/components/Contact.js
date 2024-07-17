import React from "react";
import styles from '../styles/Contact.module.css';
import contactImg from '../assets/contact.jpeg';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <img src={contactImg} alt="Contact" className={styles.contactImage} />
      <h2 className={styles.title}>Me retrouver</h2>
      <div className={styles.contactContainer}>
        <a href="https://linkedin.com/laetitiabeles" className={styles.contactButton}>LinkedIn</a>
        <a href="https://github.com/laetitiabeles" className={styles.contactButton}>GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
