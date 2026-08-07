import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import FacebookButton from './components/FacebookButton'; // 👈 1. Import එක තිබිය යුතුය

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />
      <FacebookButton /> {/* 👈 2. මෙතැන එකතු කර තිබිය යුතුය */}
    </div>
  );
}

export default App;