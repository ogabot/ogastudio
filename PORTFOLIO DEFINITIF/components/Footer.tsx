
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          <div className="text-2xl font-black tracking-tighter uppercase italic flex items-center gap-1">
            <span>Oga</span>
            <span className="text-blue-500 underline decoration-2 underline-offset-4">Studio</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            <a href="https://x.com/oga_td" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter (X)</a>
            <a href="https://www.linkedin.com/in/nathan-morin-454a9823a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/oga_editing/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] text-gray-600 font-mono uppercase tracking-[0.2em] mb-2">
                Focus on Quality over Quantity.
            </p>
            <p className="text-[9px] text-zinc-800 font-mono uppercase tracking-widest">
              &copy; {currentYear} / Oga Studio Portfolio / All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
