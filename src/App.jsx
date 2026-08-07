import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;