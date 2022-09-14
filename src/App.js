import React from 'react';
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
