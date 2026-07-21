import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GitFork, Globe, Mail, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Curriculum Vitae (CV)', path: '/cv' },
  { label: 'Contact', path: '/contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/IndalAwalaikal', icon: GitFork },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/indalawalaikal', icon: Globe },
  { label: 'Email', href: 'mailto:indalawalaikal05@gmail.com', icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 relative overflow-hidden bg-[#0d1116]">
      {/* Background large text */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.03] flex justify-center overflow-hidden">
        <h2 className="text-[22vw] font-display font-bold leading-none whitespace-nowrap select-none">
          INDAL
        </h2>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00df8f]/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-white">
              INDAL<span className="text-[#00df8f]">.</span>
            </Link>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-xs">
              Backend-focused Full-Stack Developer based in Makassar, Indonesia. Building fast, scalable APIs and digital products.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00df8f] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-[#00df8f] uppercase">Available for new projects</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-6">Get In Touch</h4>
            <a
              href="mailto:indalawalaikal05@gmail.com"
              className="text-sm text-gray-400 hover:text-[#00df8f] transition-colors block mb-2"
            >
              indalawalaikal05@gmail.com
            </a>
            <a
              href="tel:+6285757106358"
              className="text-sm text-gray-400 hover:text-[#00df8f] transition-colors block mb-6"
            >
              +62 857-5710-6358
            </a>
            <div className="flex items-center gap-3 mt-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00df8f] hover:border-[#00df8f]/40 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Indal Awalaikal. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-600">
            <span>Built with React</span>
            <span className="mx-1">·</span>
            <span>Vite</span>
            <span className="mx-1">·</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
