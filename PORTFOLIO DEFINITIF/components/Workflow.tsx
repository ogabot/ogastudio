
import React from 'react';
import { HardDrive, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const Workflow: React.FC = () => {
  const steps = [
    { 
      step: "01", 
      title: "Réception rushs", 
      desc: "Réception par Swisstransfert ou Google Drive pour être plus efficace.",
      icon: <img src="images/google-drive.svg" className="w-24 h-24 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" alt="Drive" />
    },
    { 
      step: "02", 
      title: "Montage Stratégique", 
      desc: "Storytelling, J-cuts et Sound Design immersif. Chaque frame sert votre rétention.",
      icon: <Film className="w-24 h-24 text-blue-500 opacity-20 group-hover:opacity-50 transition-all duration-700" />
    },
    { 
      step: "03", 
      title: "Feedback Chirurgical", 
      desc: "Révisions à la seconde près via Frame.io",
      icon: <span className="text-7xl opacity-20 group-hover:opacity-60 transition-all duration-700">👀</span>
    },
    { 
      step: "04", 
      title: "LIVRAISON HAUTE QUALITE", 
      desc: "Export Master haute performance (Drive / Swisstransfer) prêt pour l'upload immédiat.",
      icon: <span className="text-7xl opacity-20 group-hover:opacity-60 transition-all duration-700">✅</span>
    }
  ];

  return (
    <section id="workflow" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none mb-4">
            WORKFLOW <br />
            <span className="text-blue-500 underline decoration-4 underline-offset-[12px] uppercase">Zéro Friction</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium italic max-w-md flex flex-wrap gap-x-1.5">
            Un Workflow machine de guerre pour éliminer la logistique et allez 
            <motion.span 
              animate={{ 
                scale: [1, 1.05, 1],
                color: ["#6b7280", "#ef4444", "#6b7280"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="font-black text-red-500/60 underline decoration-red-500/30 decoration-2 underline-offset-4"
            >
              2x plus vite.
            </motion.span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, i) => (
          <div 
            key={i} 
            className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-blue-500/40 transition-all duration-700 group hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Hover Icon Background */}
            <div className="absolute -right-4 -bottom-4 transform rotate-12 group-hover:rotate-0 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
              {item.icon}
            </div>

            <div className="text-blue-500 font-black text-3xl mb-6 italic group-hover:scale-110 transition-transform origin-left relative z-10">
              {item.step}
            </div>
            <h4 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-blue-400 transition-colors relative z-10">{item.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
