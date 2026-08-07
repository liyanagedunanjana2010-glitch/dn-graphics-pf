import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials'; // 👈 1. Import කරගන්න
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import FacebookButton from './components/FacebookButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials /> {/* 👈 2. මෙතැනට එකතු කරන්න */}
        <Contact />
      </main>
      <WhatsAppButton />
    </div>
  );
}

export default App;