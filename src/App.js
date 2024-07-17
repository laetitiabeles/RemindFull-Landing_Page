import React from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './styles/App.module.css';
import './styles/index.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Cover />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
