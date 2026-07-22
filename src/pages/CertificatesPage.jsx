import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, BadgeCheck } from 'lucide-react';
import { certificates, levelColors } from '../data/certificates';
import SEO from '../components/SEO';

/* ─── Animation ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

/* ─── Card ───────────────────────────────────────────────── */
const CertCard = ({ cert, index, onView }) => {
  const lc = levelColors[cert.level] || levelColors.Beginner;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      custom={index}
      className="group relative rounded-[2rem] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      {/* Top color stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{ background: `linear-gradient(to right, transparent, ${cert.color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: cert.color }}
      />

      <div className="p-8 relative z-10 flex flex-col flex-grow justify-between h-full">
        {/* Upper content */}
        <div className="flex-grow">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
            >
              <Award className="w-6 h-6" style={{ color: cert.color }} />
            </div>
            <span
              className="text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{ background: lc.bg, color: lc.text, border: `1px solid ${lc.border}` }}
            >
              {cert.level}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="min-h-[80px] flex flex-col justify-start">
            <h3 className="text-xl font-display font-bold text-white mb-1 line-clamp-2 leading-tight">{cert.title}</h3>
            <p className="text-xs text-gray-500">{cert.subtitle}</p>
          </div>

          {/* Issuer & Date */}
          <div className="flex flex-col gap-2 my-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cert.color }} />
              <span className="text-xs text-gray-400">{cert.issuer}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-gray-600" />
              <span className="text-xs text-gray-500">{cert.date}</span>
            </div>
          </div>

          {/* Credentials box */}
          <div className="min-h-[96px] mb-6 flex flex-col justify-start">
            {cert.credentialId || cert.credentialUrl ? (
              <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2 h-full justify-center">
                {cert.credentialId && (
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-0.5">Credential ID</p>
                    <p className="text-xs text-gray-400 font-mono break-all leading-none">{cert.credentialId}</p>
                  </div>
                )}
                {cert.credentialUrl && (
                  <div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold hover:underline inline-flex items-center gap-1"
                      style={{ color: cert.color }}
                    >
                      Verify Credential ↗
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="px-4 py-3 rounded-xl bg-white/[0.01] border border-dashed border-white/5 flex items-center justify-center h-full">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">No online verification</p>
              </div>
            )}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-7 min-h-[64px] content-start">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-gray-500 bg-white/[0.01]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-6 border-t border-white/5 mt-auto">
          {cert.pdf ? (
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0d1116] transition-all hover:scale-105"
              style={{ background: `linear-gradient(to right, ${cert.color}cc, ${cert.color})` }}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View PDF
            </a>
          ) : (
            <span className="text-[10px] text-gray-600 italic py-2.5">PDF not available</span>
          )}
          {cert.preview && (
            <button
              onClick={() => onView(cert)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-gray-400 border border-white/10 hover:text-white hover:border-white/30 transition-all"
            >
              Preview
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Modal Preview ──────────────────────────────────────── */
const PreviewModal = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-3xl w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#12161c] shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={cert.preview} alt={cert.title} className="w-full object-contain" />
        <div className="p-6 flex items-center justify-between">
          <div>
            <h4 className="font-display font-bold text-white">{cert.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{cert.issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};


/* ─── Page ───────────────────────────────────────────────── */
const CertificatesPage = () => {
  const [viewing, setViewing] = useState(null);

  return (
    <div className="min-h-screen bg-[#0d1116]">
      <SEO
        title="Certificates of Indal Awalaikal"
        description="Sertifikat & Lisensi Profesional Indal Awalaikal — Backend & Full-Stack Development, Golang, Python, DevOps, Cloud Computing, dan Machine Learning."
        keywords="Sertifikat Indal Awalaikal, Lisensi Indal Awalaikal, Indal Awalaikal Certificates, Backend Developer Certification"
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
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#a855f7] rounded-full blur-[160px] opacity-[0.06] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#00df8f]" />
              <span className="text-[#00df8f] text-xs font-bold tracking-widest uppercase">Credentials</span>
            </div>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
              <span className="text-white block">CERTIFICATES</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>
                & TRAINING<span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span>
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Professional certifications and courses completed to sharpen skills in{' '}
              <span className="text-[#00df8f]">backend development</span>, Go, Python, server infrastructure, and full-stack engineering.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="flex flex-wrap gap-10 mt-14">
            {[
              { value: `${certificates.length}`, label: 'Certificates' },
              { value: '2026', label: 'Most Recent' },
              { value: 'Alison & TestDome', label: 'Latest Issuers' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-display font-bold text-white">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Cards Grid ───────────────────────────────────── */}
      <section className="pb-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} onView={setViewing} />
            ))}
          </div>

          {/* Placeholder note */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-[2rem] border border-dashed border-white/10 text-center"
          >
            <Award className="w-8 h-8 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-600 text-sm">
              More certifications and courses coming soon — constantly learning and growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {viewing && <PreviewModal cert={viewing} onClose={() => setViewing(null)} />}
    </div>
  );
};

export default CertificatesPage;
