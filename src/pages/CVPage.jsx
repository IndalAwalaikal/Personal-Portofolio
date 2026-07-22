import { motion } from 'framer-motion';
import { ExternalLink, Download, FileText, Eye } from 'lucide-react';
import SEO from '../components/SEO';

/* ─── Animation ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const CVPage = () => {
  const cvUrl = '/Indal_Awalaikal_CV.pdf';

  return (
    <div className="min-h-screen bg-[#0d1116]">
      <SEO
        title="CV Indal Awalaikal — Full-Stack & Backend Developer"
        description="Lihat dan unduh CV resmi Indal Awalaikal — Full-Stack & Backend Developer, Mahasiswa Teknik Informatika & Komputer UNM, spesialis Golang, Python, React, dan AI Systems."
        keywords="CV Indal Awalaikal, Resume Indal Awalaikal, Download CV Developer, Indal Awalaikal Curriculum Vitae"
      />
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative pt-36 pb-12 overflow-hidden">
        {/* Background Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,1) 1px,transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00df8f] rounded-full blur-[160px] opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#00df8f]" />
              <span className="text-[#00df8f] text-xs font-bold tracking-widest uppercase">
                Curriculum Vitae
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-6">
                  <span className="text-white block">CURRICULUM</span>
                  <span
                    className="block text-transparent"
                    style={{ WebkitTextStroke: '2px #00df8f' }}
                  >
                    VITAE<span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span>
                  </span>
                </h1>

                <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                  Dokumen Curriculum Vitae resmi Indal Awalaikal. Anda dapat membaca dokumen secara lengkap langsung di bawah ini.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-[#00df8f]" />
                  <span>Buka di Tab Baru</span>
                </a>

                <a
                  href={cvUrl}
                  download="Indal_Awalaikal_CV.pdf"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00df8f] to-[#00b373] text-[#0d1116] text-xs font-bold hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,223,143,0.3)] flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh File PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Document Viewer Section ─────────────────────── */}
      <section className="pb-24 pt-4">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* PDF Frame Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-3 sm:p-4 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] h-[82vh] min-h-[650px] overflow-hidden"
          >
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0a0c10] border border-white/5">
              <iframe
                src={`${cvUrl}#toolbar=1&view=FitH`}
                className="w-full h-full border-0"
                title="CV Indal Awalaikal"
              >
                {/* Fallback layout */}
                <div className="p-12 text-center flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="w-16 h-16 rounded-2xl bg-[#00df8f]/10 border border-[#00df8f]/20 flex items-center justify-center text-[#00df8f] mb-6">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    Pratinjau Dokumen CV
                  </h3>
                  <p className="text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                    Browser Anda tidak mendukung penayangan PDF langsung di dalam frame. Anda dapat langsung membuka atau mengunduh file di bawah ini.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#161b22] border border-white/10 rounded-full text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4 text-[#00df8f]" />
                      Buka CV di Tab Baru
                    </a>
                    <a
                      href={cvUrl}
                      download="Indal_Awalaikal_CV.pdf"
                      className="px-6 py-3 bg-[#00df8f] text-[#0d1116] rounded-full text-xs font-bold hover:bg-[#00c980] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,223,143,0.3)]"
                    >
                      <Download className="w-4 h-4" />
                      Unduh PDF
                    </a>
                  </div>
                </div>
              </iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CVPage;
