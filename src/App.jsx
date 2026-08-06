import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;