import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'CERTIFICATES', path: '/certificates' },
  { label: 'CV', path: '/cv' },
  { label: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f1115]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="text-2xl font-display font-bold tracking-tighter text-white hover:text-white transition-colors"
            >
              INDAL<span className="text-[#00df8f]">.</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-xs font-bold tracking-widest transition-colors duration-200 rounded-lg ${
                  isActive(link.path)
                    ? 'text-[#00df8f]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-[#00df8f]/10 rounded-lg border border-[#00df8f]/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </motion.div>

          {/* Right side: status dot + hamburger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Available dot */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00df8f]/20 bg-[#00df8f]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00df8f] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-widest text-[#00df8f] uppercase">Available</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00df8f]/40 transition-colors text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 inset-x-0 z-40 bg-[#0f1115]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-widest transition-colors ${
                      isActive(link.path)
                        ? 'text-[#00df8f] bg-[#00df8f]/10 border border-[#00df8f]/20'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00df8f] animate-pulse" />
                <span className="text-[10px] font-semibold tracking-widest text-[#00df8f] uppercase">Available for projects</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
