import React from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
