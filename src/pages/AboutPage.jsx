import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, ArrowUpRight, ArrowRight, FileText } from 'lucide-react';
import { detailedSkills as skills, experiences } from '../data/about';

/* ─── Animation variants ───────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

/* ─── Component ────────────────────────────────────────── */
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1116]">
      {/* ── Hero Banner ───────────────────────────────────── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,1) 1px,transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00df8f] rounded-full blur-[160px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#00df8f]" />
                <span className="text-[#00df8f] text-xs font-bold tracking-widest uppercase">About Me</span>
              </div>

              <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
                <span className="text-white block">INDAL</span>
                <span
                  className="block text-transparent"
                  style={{ WebkitTextStroke: '2px #00df8f' }}
                >
                  AWALAIKAL
                  <span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span>
                </span>
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
                Student majoring in{' '}
                <span className="text-white font-medium">Teknik Informatika & Komputer</span> at{' '}
                <span className="text-white font-medium">Universitas Negeri Makassar (UNM)</span> since
                2023, specializing in{' '}
                <span className="text-[#00df8f]">full-stack web development</span> and AI integration.
                I build reliable, end-to-end web applications with powerful backends and responsive frontends.
              </p>

              <Link
                to="/cv"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#00df8f]/10 border border-[#00df8f]/30 hover:bg-[#00df8f] text-[#00df8f] hover:text-[#0d1116] font-bold text-xs transition-all duration-300 shadow-[0_0_20px_rgba(0,223,143,0.2)]"
              >
                <FileText className="w-4 h-4" />
                <span>Baca CV Online</span>
              </Link>
            </motion.div>

            {/* Right: profile photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#00df8f] blur-[60px] opacity-20" />
                {/* Photo */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00df8f]/30 shadow-[0_0_40px_rgba(0,223,143,0.15)]">
                  <img
                    src="/profile.webp"
                    alt="Indal Awalaikal"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Available badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1116] border border-[#00df8f]/30 shadow-lg whitespace-nowrap">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00df8f] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest text-[#00df8f] uppercase">Available for projects</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex flex-wrap gap-10 mt-14"
          >
            {[
              { value: 'Teknik Informatika & Komputer', label: 'Jurusan / Major' },
              { value: 'UNM', label: 'University' },
              { value: '2023', label: 'Batch Year' },
              { value: 'Makassar', label: 'Location' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-display font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      {/* ── Bio Section ───────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left: full bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              <h2 className="text-xs text-[#00df8f] font-bold tracking-widest uppercase mb-4">Who I Am</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8 leading-tight">
                Building Products with{' '}
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                  Backend & Full-Stack Engineering
                </span>
              </h3>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  I specialize in <span className="text-white">Full-Stack Web Development</span> with a strong backend foundation — designing relational databases, building fast REST APIs with Golang and Python, and crafting responsive frontends with React and Next.js.
                </p>
                <p>
                  I'm also passionate about <span className="text-[#00df8f] font-medium">AI integration in web applications</span> — connecting machine learning models to backend services and building intelligent, data-driven systems.
                </p>
                <p>
                  Beyond academics, I actively contribute through{' '}
                  <span className="text-[#00df8f] font-medium">COCONUT Computer Club</span>, sharpening my project management, leadership, and collaborative skills in real-world team environments.
                </p>
              </div>
            </motion.div>

            {/* Right: education card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              custom={1}
            >
              <h2 className="text-xs text-[#00df8f] font-bold tracking-widest uppercase mb-4">Education</h2>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md p-8">
                {/* Dot grid decoration */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,223,143,1) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#00df8f]/10 border border-[#00df8f]/20 flex items-center justify-center mb-6">
                    <GraduationCap className="w-6 h-6 text-[#00df8f]" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-1">
                    Teknik Informatika & Komputer (S1)
                  </h4>
                  <p className="text-[#00df8f] font-semibold text-sm mb-4">
                    Universitas Negeri Makassar (UNM)
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6">
                    <span>NIM: 230209502026</span>
                    <span>Jurusan Teknik Informatika & Komputer</span>
                    <span>2023 — Present</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Studying software engineering, algorithms &amp; data structures, web development,
                    computer networks, and database management. Active participant in faculty-level
                    student research activities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills Section ────────────────────────────────── */}
      <section className="py-24 bg-[#12161c] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-xs text-[#00df8f] font-bold tracking-widest uppercase mb-3">Toolkit</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Skills & Expertise
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={i}
                  className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
                >
                  {/* Corner glow */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: skill.color }}
                  />

                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border"
                      style={{
                        background: `${skill.color}15`,
                        borderColor: `${skill.color}30`,
                        color: skill.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-display font-bold text-white">{skill.title}</h4>
                        <span
                          className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ background: `${skill.color}15`, color: skill.color }}
                        >
                          {skill.label}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{skill.desc}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span>Proficiency</span>
                      <span style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(to right, ${skill.color}80, ${skill.color})` }}
                      />
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience Section ────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-xs text-[#00df8f] font-bold tracking-widest uppercase mb-3">Experience</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Work &amp; Organization
            </h3>
          </motion.div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00df8f]/40 via-[#00df8f]/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    custom={i}
                    className="md:pl-20 relative"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-[#00df8f]/10 border border-[#00df8f]/30 items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00df8f]" />
                    </div>

                    <div className="p-7 rounded-[2rem] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h4 className="text-lg font-display font-bold text-white">{exp.role}</h4>
                          <p className="text-[#00df8f] text-sm font-semibold mt-0.5">{exp.org}</p>
                        </div>
                        <span className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-gray-500 bg-white/5 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5 bg-[#12161c]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6">
              Ready to build something{' '}
              <span className="text-[#00df8f]">great</span>?
            </h2>
            <p className="text-gray-400 max-w-md mx-auto mb-10">
              I'm always open to interesting projects and collaborations. Let's talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] rounded-full font-bold text-[#0d1116] transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,223,143,0.3)]"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-white/30 font-bold text-white transition-all duration-300"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
