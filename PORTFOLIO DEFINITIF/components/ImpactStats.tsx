
import React from 'react';
import { Zap, MousePointer2, BarChart3 } from 'lucide-react';

const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Zap size={28} />,
      value: "x3",
      label: "Productivité",
      desc: "Passage de 1 à 3 vidéos/semaine sans perte de qualité."
    },
    {
      icon: <MousePointer2 size={28} />,
      value: "+200%",
      label: "Vues Moyennes",
      desc: "Grâce à une ingénierie chirurgicale du Hook et du rythme."
    },
    {
      icon: <BarChart3 size={28} />,
      value: "+20%",
      label: "Watch Time",
      desc: "Pacing optimisé pour minimiser le drop-off critique."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start space-y-5 group">
              <div className="p-3.5 bg-blue-500/10 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-500/5">
                {stat.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-5xl font-black tracking-tighter text-blue-500 italic uppercase leading-none mb-2 group-hover:translate-x-1.5 transition-transform duration-500">
                  {stat.value}
                </h3>
                <p className="text-white font-black uppercase tracking-widest text-[11px] mb-2">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
