import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ScrollButton from './components/ScrollButton/ScrollButton';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

function App() {
  const twitterLink = "https://twitter.com/tiny_perceptron";
  const linkedInLink = "https://www.linkedin.com/in/kehinde-adejumobi-05799b1bb";
  return (
    <div className="App">
      <ScrollButton />
      <Hero tLink={twitterLink} lnLink={linkedInLink} />
      <About tLink={twitterLink} lnLink={linkedInLink} />
      <Skills />
      <Services />
      <Projects />
      <Contact tLink={twitterLink} lnLink={linkedInLink} />
      <Footer tLink={twitterLink} lnLink={linkedInLink} />
    </div>
  );
}

export default App;
