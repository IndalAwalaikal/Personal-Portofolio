import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, Eye } from 'lucide-react';

const CVModal = ({ isOpen, onClose, cvUrl = '/Indal_Awalaikal_CV.pdf' }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-5xl h-[88vh] bg-[#0f1117] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#141822] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#00df8f]/10 border border-[#00df8f]/20 text-[#00df8f]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white leading-tight">
                  Curriculum Vitae
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  Indal Awalaikal · Teknik Informatika & Komputer (UNM)
                </p>
              </div>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-2">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Buka di Tab Baru"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Tab Baru</span>
              </a>

              <a
                href={cvUrl}
                download="Indal_Awalaikal_CV.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00df8f] text-[#0d1116] text-xs font-bold hover:bg-[#00c980] transition-all shadow-[0_0_15px_rgba(0,223,143,0.3)]"
                title="Unduh CV PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh</span>
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                aria-label="Tutup CV"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body: PDF Viewer */}
          <div className="flex-1 bg-[#0a0c10] relative overflow-hidden flex flex-col">
            <iframe
              src={`${cvUrl}#toolbar=1`}
              className="w-full h-full border-0"
              title="CV Indal Awalaikal"
            >
              {/* Fallback for browsers that don't support inline iframe PDFs */}
              <div className="p-8 text-center flex flex-col items-center justify-center h-full text-gray-400">
                <FileText className="w-12 h-12 text-[#00df8f] mb-4 opacity-80" />
                <p className="text-base text-white font-medium mb-2">
                  Browser Anda tidak mendukung preview PDF langsung.
                </p>
                <p className="text-sm text-gray-400 mb-6 max-w-md">
                  Anda dapat membuka CV di tab baru atau mengunduh dokumen secara langsung.
                </p>
                <div className="flex gap-4">
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    Buka CV
                  </a>
                  <a
                    href={cvUrl}
                    download="Indal_Awalaikal_CV.pdf"
                    className="px-5 py-2.5 bg-[#00df8f] text-[#0d1116] rounded-xl text-xs font-bold hover:bg-[#00c980] transition-all flex items-center gap-2"
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
    </AnimatePresence>
  );
};

export default CVModal;
