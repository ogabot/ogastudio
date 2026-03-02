
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contactUrl = "https://linktr.ee/tooga.pro";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Impact', href: '#impact' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Projets', href: '#projets' },
    { name: 'Témoignages', href: '#temoignages' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter uppercase italic flex items-center gap-1 group cursor-pointer">
          <span className="group-hover:text-blue-500 transition-all duration-300 transform group-hover:-translate-y-0.5">Oga</span>
          <span className="text-blue-500 underline decoration-2 underline-offset-4 group-hover:text-white transition-all duration-300 transform group-hover:translate-y-0.5">Studio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => window.open(contactUrl, '_blank')}
            className="bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5 border border-transparent hover:border-blue-400"
          >
            Contactez-moi !
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-blue-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-3xl font-black uppercase italic tracking-tighter hover:text-blue-500 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open(contactUrl, '_blank');
            }}
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest hover:scale-110 transition-transform"
          >
            Contactez-moi !
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
