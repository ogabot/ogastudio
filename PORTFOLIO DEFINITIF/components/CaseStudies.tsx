
import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  const longFormVideos = [
    {
      id: "Isw4HWYyKM0",
      title: "Explosion des vues",
      category: "Loann LV",
      metric: "x3",
      metricLabel: "vues depuis le début de sa chaîne",
      tags: ["Storytelling", "Hook"]
    },
    {
      id: "bZiMuGMiiF0",
      title: "Optimisation Rétention",
      category: "Ananas musclé",
      metric: "+20%",
      metricLabel: "watchtime moyen",
      tags: ["Muscu", "Conseils"]
    },
    {
      id: "x-4ySAcZr6s",
      title: "Scale de Productivité",
      category: "Loann LV",
      metric: "x2",
      metricLabel: "productivité / fréquence",
      tags: ["Dev perso", "Critique"]
    }
  ];

  const shortFormVideos = [
    { id: "F9P33y0ixQY", title: "Short Histoire Marin Dubos" },
    { id: "43IkpyrNReA", title: "Short Histoire Marin Dubos" },
    { id: "Eo5d1qGmh58", title: "Short Histoire Oga" },
    { id: "uK3l7e44qqU", title: "UGC Papainshape" }
  ];

  return (
    <section id="projets" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-6 mb-20 overflow-hidden">
            <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase whitespace-nowrap">Exemples / Études de cas</h2>
            <div className="h-px w-full bg-white/5"></div>
        </div>

        {/* Loann LV YouTube Videos */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12 group cursor-default">
            <h3 className="text-xl md:text-2xl font-black text-blue-500 uppercase tracking-[0.2em] italic">Vidéos Youtubes</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {longFormVideos.map((video) => (
              <div key={video.id} className="group flex flex-col bg-zinc-900/40 rounded-[2rem] p-4 border border-white/5 hover:border-blue-500/30 transition-all duration-700">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6 group-hover:scale-[1.01] transition-transform duration-500">
                   <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&enablejsapi=1&origin=${origin}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="px-2 pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">{video.category}</span>
                    <div className="flex gap-2">
                       {video.tags.map(tag => (
                         <span key={tag} className="text-[9px] font-bold text-blue-400 border border-blue-400/20 px-2.5 py-1 rounded-md bg-blue-500/5">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-5 group-hover:text-blue-500 transition-colors flex items-center justify-between">
                    {video.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <div className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-xl border border-white/5 group-hover:bg-blue-600/10 transition-all duration-500">
                    <span className="text-blue-500 font-black text-3xl italic">{video.metric}</span>
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none group-hover:text-blue-400">{video.metricLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Playlist CTA Card */}
          <div className="mt-12">
            <a 
              href="https://youtube.com/playlist?list=PLEajKVCkml5LTWUJjkb4uojAasxaeaJmV&si=h6C64kC6dcushf4f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-red-600/10 to-zinc-900 p-8 md:p-12 rounded-[3rem] border border-red-600/20 hover:border-red-600/50 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-2">DÉCOUVRE LA SUITE</h4>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Plus de +30 exemples disponibles sur ma playlist YouTube</p>
                </div>
              </div>

              <div className="relative z-10 mt-8 md:mt-0 px-8 py-4 bg-white text-black rounded-2xl font-black uppercase italic tracking-tighter flex items-center gap-3 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                Voir la playlist <ExternalLink size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Testimonial Section */}
        <div id="temoignages" className="mb-32">
          <div className="flex items-center gap-5 mb-10">
            <div className="h-px flex-1 bg-blue-600/30"></div>
            <div className="px-5 py-2 border border-blue-500/50 text-blue-500 rounded-full font-black text-[10px] uppercase tracking-[0.4em] italic shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              Témoignage Client
            </div>
            <div className="h-px flex-1 bg-blue-600/30"></div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/10 via-zinc-900 to-transparent p-6 md:p-12 rounded-[3rem] border border-blue-500/10 relative overflow-hidden group">
            <Quote className="absolute top-6 right-6 md:top-10 md:right-10 text-blue-500/5 rotate-12 w-12 h-12 md:w-20 md:h-20" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-600 shadow-2xl group-hover:scale-105 transition-transform duration-700 overflow-hidden">
                    <img 
                      src="images/loann-lv.png" 
                      alt="Loann LV" 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase mb-1">LOANN LV</h4>
                    <p className="text-blue-500 text-xs font-black uppercase tracking-[0.3em] italic">Youtubeur Business / Développement personnel</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center lg:items-start gap-0 group-hover:-translate-y-2 transition-transform duration-700">
                    <span className="text-6xl md:text-8xl lg:text-[8rem] font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-600 tracking-tighter leading-none select-none">
                        220K
                    </span>
                    <span className="text-2xl md:text-3xl font-black uppercase italic tracking-[0.4em] text-blue-400 -mt-4 group-hover:text-blue-300 transition-colors duration-1000 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]">
                        ABONNÉS
                    </span>
                </div>
              </div>

              <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-3xl bg-black group-hover:rotate-1 transition-transform duration-1000">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/1bquAnzzwqw?rel=0&modestbranding=1&enablejsapi=1&origin=${origin}`}
                  title="Témoignage Loann LV"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Short Form Section */}
        <div>
          <h3 className="text-xl font-black text-blue-500 uppercase tracking-[0.3em] italic mb-12 flex items-center gap-5">
            <span className="w-12 h-px bg-blue-500/30"></span> Short Form (Reels/TikTok)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {shortFormVideos.map((video, i) => (
              <div key={i} className="group relative aspect-[9/16] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all duration-700 cursor-pointer shadow-xl">
                 <iframe 
                    className="w-full h-full absolute inset-0 z-0 scale-[1.02]"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&controls=0&enablejsapi=1&origin=${origin}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-70 z-10 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
                 <div className="absolute bottom-8 left-0 right-0 px-7 z-20 pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-500">
                     <div className="text-lg font-black uppercase tracking-tighter text-white">{video.title}</div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
