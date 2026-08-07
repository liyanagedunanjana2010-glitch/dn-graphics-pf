import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wider text-white">
          DN <span className="text-primary">GRAPHICS</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondaryText hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Right Actions: Theme Toggle + CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle /> {/* 👈 Desktop එකට Theme Toggle එක */}
          <a
            href="#contact"
            className="bg-primary text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Hire Us
          </a>
        </div>

        {/* Mobile View Right Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle /> {/* 👈 Mobile Menu එකට එළියෙන් Toggle එක (පහසුවෙන් click කිරීමට) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass px-6 py-4 flex flex-col space-y-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-secondaryText hover:text-primary transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-black text-center font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300"
          >
            Hire Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;