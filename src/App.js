
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Achievements from './components/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Achievements />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
