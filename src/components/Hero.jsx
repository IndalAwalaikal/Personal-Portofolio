
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Package, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0d1116]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Background large typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none opacity-[0.02] z-0">
        <h1 className="text-[20vw] font-display font-bold whitespace-nowrap">CODE</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical glowing line */}
            <div className="absolute left-0 top-12 bottom-20 w-[1px] bg-gradient-to-b from-[#00df8f]/0 via-[#00df8f]/50 to-[#00df8f]/0">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[2px] w-[5px] h-[5px] rounded-full bg-[#00df8f] shadow-[0_0_10px_#00df8f]"></div>
            </div>

            <div className="pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00df8f]"></div>
                <span className="text-[#00df8f] text-sm font-semibold tracking-widest uppercase">FULL-STACK DEVELOPER</span>
              </div>

              <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
                <span className="text-white block">FULL-STACK</span>
                <span className="text-transparent block" style={{ WebkitTextStroke: '2px #00df8f' }}>ENGINEER<span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span></span>
              </h1>

              <p className="text-lg text-gray-400 max-w-md leading-relaxed mb-12">
                I build <span className="text-[#00df8f]">full-stack web apps</span> and AI-powered systems — from scalable backend APIs to interactive frontends — using Golang, Python, React, and Next.js.
              </p>

              <div className="flex flex-wrap gap-4 mb-20">
                <Link to="/projects" className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] rounded-full font-bold text-[#0d1116] transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(0,223,143,0.3)]">
                  View My Work
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#0d1116]" />
                  </div>
                </Link>
                <Link to="/contact" className="flex items-center gap-3 px-8 py-4 bg-[#14181f] border border-white/5 hover:border-white/20 rounded-full font-bold text-white transition-all duration-300">
                  Contact Me
                  <div className="w-2 h-2 rounded-full bg-[#00df8f]"></div>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-12">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-[#00df8f]">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white leading-none mb-1">20+</h4>
                    <p className="text-xs text-gray-500 font-medium">Projects Built</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-[#00df8f]">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white leading-none mb-1">8+</h4>
                    <p className="text-xs text-gray-500 font-medium">Certifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 text-[#00df8f]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white leading-none mb-1">Full-Stack</h4>
                    <p className="text-xs text-gray-500 font-medium">Specialization</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image & Glass Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00df8f] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

            {/* Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[130%] h-[130%] max-w-[850px] max-h-[850px] border border-[#00df8f]/10 rounded-full rotate-x-60 -rotate-z-12 pointer-events-none"
              style={{ transformStyle: 'preserve-3d', transform: 'rotateX(65deg) rotateY(-10deg)' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00df8f] shadow-[0_0_20px_#00df8f]"></div>
            </motion.div>

            {/* Interactive ID Card */}
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.3}
              animate={{
                y: [-15, 15, -15],
                rotateZ: [-3, 3, -3],
                rotateY: [-5, 5, -5]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileDrag={{ scale: 1.02, cursor: "grabbing" }}
              className="relative w-[90%] sm:w-full max-w-[460px] aspect-[4/5] z-10 cursor-grab"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Lanyard Strip */}
              <div className="absolute bottom-[98%] left-1/2 -translate-x-1/2 w-6 h-[800px] bg-gradient-to-b from-[#00df8f]/0 via-[#00df8f]/20 to-[#00df8f]/40 -z-10 shadow-[0_0_15px_rgba(0,223,143,0.2)]">
                {/* Lanyard stitching/pattern detail */}
                <div className="w-full h-full border-x border-[#00df8f]/20 opacity-50"></div>
              </div>

              {/* ID Card Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-[#2a2f38] to-[#1a1d24] rounded-t-xl border border-white/20 z-20 shadow-xl flex items-center justify-center">
                <div className="w-8 h-2 rounded-full bg-[#0d1116] border border-white/10 shadow-inner"></div>
              </div>

              {/* Card Body */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md p-3 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/5 bg-[#0d1116]">
                  {/* Background grid dots for card */}
                  <div className="absolute inset-0 z-20 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                  <img
                    src="/profile.png"
                    alt="Indal Awalaikal - Backend & Full-Stack Developer"
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover filter brightness-110 pointer-events-none"
                    style={{ objectPosition: '50% top' }}
                  />


                  {/* Name and Designation */}
                  <div className="absolute bottom-0 left-0 w-full p-8 pt-24 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/80 to-transparent pointer-events-none z-30">
                    <h3 className="text-white text-4xl font-display font-bold mb-1 drop-shadow-lg">Indal.</h3>
                    <p className="text-[#00df8f] font-semibold tracking-widest uppercase text-sm drop-shadow-md">Backend & Full-Stack Dev</p>
                  </div>
                </div>
              </div>
            </motion.div>



          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
