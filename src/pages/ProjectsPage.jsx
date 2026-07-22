import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, GitFork, Filter } from 'lucide-react';
import { projects, projectCategories as categories } from '../data/projects';
import SEO from '../components/SEO';

/* ─── Animation ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

/* ─── Card ───────────────────────────────────────────────── */
const ProjectCard = ({ project, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    custom={index}
    className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 flex flex-col h-full"
  >
    {/* Image */}
    <div className="relative overflow-hidden h-56 flex-shrink-0">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1116] via-[#0d1116]/40 to-transparent" />

      {/* Featured badge */}
      {project.featured && (
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
        >
          Featured
        </div>
      )}

      {/* Category */}
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-black/40 text-gray-300 border border-white/10 backdrop-blur-sm">
        {project.category}
      </div>
    </div>

    {/* Content */}
    <div className="p-7 flex flex-col flex-grow justify-between">
      <div>
        {/* Title & Subtitle block */}
        <div className="min-h-[64px] flex flex-col justify-start mb-3">
          <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-[#00df8f] transition-colors line-clamp-1 leading-tight">
            {project.title}
          </h3>
          {project.subtitle ? (
            <p className="text-xs text-[#00df8f] font-medium line-clamp-1">{project.subtitle}</p>
          ) : (
            <span className="text-xs text-transparent select-none">&nbsp;</span>
          )}
        </div>

        {/* Description block */}
        <div className="min-h-[78px] mb-5">
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{project.desc}</p>
        </div>

        {/* Tags block */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[56px] content-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-gray-500 bg-white/[0.01]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions block */}
      <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/5 mt-auto">
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0d1116] transition-all hover:scale-105"
            style={{ background: `linear-gradient(to right, ${project.color}cc, ${project.color})` }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        ) : (
          <span className="text-[10px] text-gray-600 italic py-2.5">Demo unavailable</span>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-gray-400 border border-white/10 hover:text-white hover:border-white/30 transition-all"
        >
          <GitFork className="w-3.5 h-3.5" />
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

/* ─── Page ───────────────────────────────────────────────── */
const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0d1116]">
      <SEO
        title="Projects by Indal Awalaikal"
        description="Koleksi proyek web & backend ciptaan Indal Awalaikal — AgentOps AI, LAKOO SaaS, LogicLeap Academy, AgroAdvisor, dan platform digital berbasis Golang, Python, React, Next.js."
        keywords="Proyek Indal Awalaikal, Indal Awalaikal Projects, AgentOps AI, LAKOO SaaS ERP, AgroAdvisor, Portfolio Developer"
      />
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,1) 1px,transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#00df8f] rounded-full blur-[160px] opacity-[0.07] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#00df8f]" />
              <span className="text-[#00df8f] text-xs font-bold tracking-widest uppercase">Portfolio</span>
            </div>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
              <span className="text-white block">SELECTED</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>
                PROJECTS<span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span>
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Digital products built with a focus on{' '}
              <span className="text-[#00df8f]">fast performance</span>, solid data architecture, and
              interactive UX.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex flex-wrap gap-10 mt-14"
          >
            {[
              { value: `${projects.length}`, label: 'Projects Shown' },
              { value: `${projects.filter(p => p.featured).length}`, label: 'Featured' },
              { value: `${projects.filter(p => p.live).length}`, label: 'Live Demos' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-display font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter & Grid ─────────────────────────────────── */}
      <section className="pb-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-wrap py-10"
          >
            <Filter className="w-4 h-4 text-gray-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#00df8f] text-[#0d1116]'
                    : 'border border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 bg-[#12161c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-10">
              I'm available for freelance projects and collaborations. Let's build something amazing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] rounded-full font-bold text-[#0d1116] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,223,143,0.3)]"
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
