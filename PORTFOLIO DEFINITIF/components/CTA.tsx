
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  const calendlyUrl = "https://calendly.com/nathan-morin0034/30min";

  return (
    <section id="contact" className="py-40 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="p-8 md:p-24 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-blue-600/30 via-zinc-900/50 to-transparent border border-blue-500/30 relative overflow-hidden text-center group transition-all duration-1000 hover:shadow-[0_0_100px_rgba(59,130,246,0.1)]"
      >
        {/* Glow Effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
        ></motion.div>
        <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl font-black mb-14 leading-[0.95] tracking-tighter italic uppercase"
          >
            PRÊT À TRANSFORMER <br />
            <motion.span 
              animate={{ color: ["#fff", "#60a5fa", "#fff"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white italic"
            >
              TA RÉTENTION
            </motion.span> <br />
            EN CROISSANCE ?
          </motion.h2>
          
          <div className="flex flex-col items-center gap-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(calendlyUrl, '_blank')}
              className="bg-white text-black px-10 py-5 rounded-[1.5rem] text-xl md:text-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:shadow-blue-500/50 flex items-center justify-center gap-5 uppercase tracking-tighter group/btn"
            >
              <MessageSquare size={28} className="group-hover/btn:rotate-12 transition-transform" /> 
              Réserve ton appel gratuitement
              <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-5"
            >
                <div className="flex gap-3.5 items-center bg-white/5 p-2.5 rounded-full border border-white/5 hover:border-blue-500/30 transition-all backdrop-blur-md">
                    <div className="flex -space-x-2.5">
                      {[
                        "images/client-1.png",
                        "images/client-2.png",
                        "images/client-3.png",
                      ].map((src, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ y: -5, zIndex: 10 }}
                            className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 overflow-hidden ring-1 ring-white/10 transition-transform"
                          >
                              <img src={src} alt="Client" referrerPolicy="no-referrer" />
                          </motion.div>
                      ))}
                    </div>
                    <span className="px-3.5 text-blue-500 font-bold text-[11px] uppercase tracking-widest italic">+10 Créateurs satisfaits</span>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
