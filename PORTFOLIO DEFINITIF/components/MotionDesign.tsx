
import React from 'react';
import { PlayCircle } from 'lucide-react';

const MotionDesign: React.FC = () => {
  const motionProjects = [
    {
      id: "Ny9jHEZha5Q",
      title: "Motion design pour Mickael Wu"
    },
    {
      id: "uqPMOJUSNCI",
      title: "Motion design pour NutriLucie"
    },
    {
      id: "3Jh08Mdfqtw",
      title: "Motion design entrainement"
    }
  ];

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <section id="motion" className="py-28 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-[0.9] mb-4">
            MOTION <br />
            <span className="text-blue-500 uppercase">DESIGN</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {motionProjects.map((project, i) => (
          <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-all duration-1000 shadow-2xl">
            <div className="aspect-[3/4] relative overflow-hidden">
               <iframe 
                className="w-full h-full absolute inset-0 z-0 scale-[1.02]"
                src={`https://www.youtube.com/embed/${project.id}?rel=0&modestbranding=1&controls=1&enablejsapi=1&origin=${origin}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-80 z-10 pointer-events-none group-hover:opacity-40 transition-all duration-1000"></div>
              
              <div className="absolute bottom-10 left-10 right-10 z-20 pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-700">
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MotionDesign;
