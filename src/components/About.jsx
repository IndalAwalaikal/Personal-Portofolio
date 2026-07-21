
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { simpleSkills as skills } from '../data/about';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#12161c] relative overflow-hidden">
       {/* Background decorative element */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00df8f]/5 to-transparent pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             
             {/* Left Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
             >
                <h2 className="text-sm text-[#00df8f] font-medium tracking-widest uppercase mb-4">About Me</h2>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-8">
                  BUILDING WITH <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>PURPOSE.</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I'm a student majoring in <span className="text-white font-medium">Teknik Informatika & Komputer</span> at <span className="text-white font-medium">Universitas Negeri Makassar (UNM)</span> specializing in full-stack web development and AI integration. I build complete web applications with strong backends and responsive interfaces.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  As a Full-Stack Developer at COCONUT Computer Club, I build internal systems using Golang, Python, React, and Next.js, bridging intelligent features with seamless user experiences.
                </p>

                <div className="flex flex-wrap items-center gap-8">
                  <div className="text-center">
                    <h4 className="text-4xl font-display font-bold text-white">20+</h4>
                    <p className="text-xs text-[#00df8f] mt-2 uppercase tracking-widest font-bold">Projects</p>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>
                  <div className="text-center">
                    <h4 className="text-4xl font-display font-bold text-white">8+</h4>
                    <p className="text-xs text-[#00df8f] mt-2 uppercase tracking-widest font-bold">Certifications</p>
                  </div>

                  <div className="w-[1px] h-12 bg-white/10 hidden sm:block"></div>

                  <Link
                    to="/cv"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#00df8f]/10 border border-[#00df8f]/30 hover:bg-[#00df8f] text-[#00df8f] hover:text-[#0d1116] font-bold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(0,223,143,0.2)]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Lihat CV Lengkap</span>
                  </Link>
                </div>
             </motion.div>

             {/* Right Skills/Visual Content */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative"
             >
               <div className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] backdrop-blur-md">
                 <h4 className="text-2xl font-display font-bold text-white mb-8">Tech Stack</h4>
                 <div className="flex flex-wrap gap-3">
                   {skills.map((skill, index) => (
                     <motion.div
                       key={skill}
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.4, delay: 0.1 * index }}
                       className="px-5 py-3 rounded-full bg-[#1a1f26]/80 border border-white/10 text-gray-300 font-medium hover:border-[#00df8f] hover:text-[#00df8f] hover:shadow-[0_0_15px_rgba(0,223,143,0.3)] transition-all cursor-default"
                     >
                       {skill}
                     </motion.div>
                   ))}
                 </div>
               </div>

               {/* Decorative dots grid behind */}
               <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,223,143,1) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

export default About;
