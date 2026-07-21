import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { recentWorks as works } from '../data/projects';

const RecentWorks = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClick = (index) => {
    if (index === activeIdx) {
      setActiveIdx((prev) => (prev + 1) % works.length);
    } else {
      setActiveIdx(index);
    }
  };

  return (
    <section id="work" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-sm text-dark-accent font-medium tracking-widest uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">RECENT WORKS</h3>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#00df8f] transition-colors font-medium text-sm">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-start">
          {/* Stacked Cards Container - Left Side */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="relative h-[340px] sm:h-[450px] md:h-[480px] w-full perspective-1000">
            {works.map((work, index) => {
              const diff = (index - activeIdx + works.length) % works.length;
              const isActive = diff === 0;

              return (
                <motion.div
                  key={index}
                  onClick={() => handleClick(index)}
                  animate={{
                    y: diff * 35,
                    scale: 1 - diff * 0.05,
                    zIndex: works.length - diff,
                    opacity: 1 - diff * 0.15,
                    rotateX: diff * 2
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  className={`absolute top-0 left-0 w-full md:w-[90%] aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 origin-top cursor-pointer`}
                >
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100 grayscale-[50%]'}`}
                  />
                  
                  {/* Overlay on Image */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/40 to-transparent flex flex-col justify-end p-8 pointer-events-none"
                  >
                    <motion.h4 
                      animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter"
                    >
                      {work.title}
                    </motion.h4>
                  </motion.div>
                </motion.div>
              );
            })}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8 justify-center w-full md:w-[90%]">
              {works.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleClick(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-[#00df8f]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description Panel - Right Side */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-start pt-0 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00df8f] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

                <p className="text-[#00df8f] text-sm font-medium tracking-widest uppercase mb-2">
                  {works[activeIdx].category}
                </p>
                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  {works[activeIdx].title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  {works[activeIdx].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {works[activeIdx].tags.map(tag => (
                    <span key={tag} className="text-xs px-4 py-1.5 rounded-full border border-white/10 text-gray-300 bg-black/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {works[activeIdx].link && (
                  <a
                    href={works[activeIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white hover:text-[#00df8f] transition-colors font-medium group"
                  >
                    Explore Project 
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#00df8f]/20 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#00df8f]" />
                    </div>
                  </a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
