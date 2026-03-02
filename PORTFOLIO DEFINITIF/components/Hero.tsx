
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const calendlyUrl = "https://calendly.com/nathan-morin0034/30min";

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-700"></div>
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-500 group-hover:scale-105">
              <img 
                src="images/profile.jpg" 
                alt="Nathan Morin" 
                className="w-full h-full object-cover object-[center_15%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#050505] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
          <Zap size={12} fill="currentColor" /> Partenaire de Croissance Stratégique
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1] tracking-tighter mb-8 uppercase italic transition-all duration-700">
          JE NE MONTE PAS <br />
          <span className="relative inline-block hover:text-blue-500 transition-colors cursor-default">
            DE VIDÉOS.
            <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-blue-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            </svg>
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-white">
            JE SCALE VOTRE AUDIENCE.
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-medium">
          J'optimise tes vidéos pour l'<span className="text-white font-bold underline decoration-blue-500/50">algorithme</span>. Capte l'attention <span className="text-white font-bold underline decoration-blue-500/50">immédiatement</span>. Supprime les longueurs. Maximise ton <span className="text-white font-bold underline decoration-blue-500/50">temps de visionnage</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => window.open(calendlyUrl, '_blank')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-white hover:text-black text-white px-8 py-4 rounded-2xl font-black text-base md:text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group relative overflow-hidden active:scale-95"
          >
            <span className="relative z-10">Réserver mon appel</span>
            <ArrowRight className="group-hover:translate-x-1.5 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto border border-white/10 hover:bg-white/5 hover:border-white/30 text-white px-8 py-4 rounded-2xl font-black text-base md:text-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95"
          >
            Voir les exemples
          </button>
        </div>

        <div className="mt-16 flex justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex gap-6 items-center text-white font-black italic text-xs md:text-xl tracking-tighter">
              <span>YOUTUBE</span>
              <span>•</span>
              <span>REELS</span>
              <span>•</span>
              <span>TIKTOK</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
