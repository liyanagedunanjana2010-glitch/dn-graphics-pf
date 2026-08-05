import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <footer className="py-8 text-center text-sm text-secondaryText border-t border-white/10">
        © {new Date().getFullYear()} DN Graphics. All rights reserved.
      </footer>
    </div>
  );
}

export default App;