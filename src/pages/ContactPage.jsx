import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/contact';
import SEO from '../components/SEO';

/* ─── Animation ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

/* ─── Form state ─────────────────────────────────────────── */
const initialForm = { name: '', email: '', subject: '', message: '' };

/* ─── Page ───────────────────────────────────────────────── */
const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    // Compose a mailto link as a simple contact mechanism
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:indalawalaikal05@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 800);
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border rounded-xl px-5 py-4 text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:bg-white/[0.07] ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500'
        : 'border-white/10 focus:border-[#00df8f]/50'
    }`;

  return (
    <div className="min-h-screen bg-[#0d1116]">
      <SEO
        title="Contact Indal Awalaikal"
        description="Hubungi Indal Awalaikal — Full-Stack & Backend Developer. Kirim pesan, diskusikan proyek, atau jalin kerja sama di bidang pengembangan web dan AI systems."
        keywords="Kontak Indal Awalaikal, Contact Indal Awalaikal, Hire Indal Awalaikal, Hubungi Developer Makassar"
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
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#00df8f] rounded-full blur-[160px] opacity-[0.06] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#00df8f]" />
              <span className="text-[#00df8f] text-xs font-bold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[6rem] font-display font-bold leading-[0.9] tracking-tighter mb-8">
              <span className="text-white block">LET'S</span>
              <span className="block text-transparent" style={{ WebkitTextStroke: '2px #00df8f' }}>
                CONNECT<span className="text-[#00df8f]" style={{ WebkitTextStroke: '0px' }}>.</span>
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Have a project in mind or just want to chat? I'm always open to interesting{' '}
              <span className="text-[#00df8f]">collaborations and opportunities</span>. My inbox is always open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────── */}
      <section className="pb-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20">

            {/* ── Left: Contact Info ───────────────────── */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-xs text-[#00df8f] font-bold tracking-widest uppercase mb-3">Contact</h2>
                <h3 className="text-2xl font-display font-bold text-white">
                  Reach out directly
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-40px' }}
                      custom={i}
                      className="group flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: info.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-sm text-gray-300 hover:text-white transition-colors truncate block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-sm text-gray-300">{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ── Right: Contact Form ──────────────────── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="lg:col-span-3"
            >
              <div className="relative p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00df8f]/40 to-transparent" />

                <h3 className="text-xl font-display font-bold text-white mb-8">Send a Message</h3>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00df8f]/10 border border-[#00df8f]/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#00df8f]" />
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-3">Message Sent!</h4>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Your email client should have opened. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="mt-8 px-6 py-3 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project collaboration, freelance work..."
                        className={inputClass('subject')}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project or idea..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00df8f] to-[#00b373] rounded-xl font-bold text-[#0d1116] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,223,143,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-[#0d1116]/30 border-t-[#0d1116] animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-600">
                      This will open your email client. Alternatively, email me directly at{' '}
                      <a href="mailto:indalawalaikal05@gmail.com" className="text-[#00df8f] hover:underline">
                        indalawalaikal05@gmail.com
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
