import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 text-xs font-bold tracking-widest transition-colors duration-300 group ${
                    active ? 'text-[#00df8f]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Active Smooth Animated Underline */}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00df8f] rounded-full shadow-[0_0_12px_#00df8f]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00df8f] shadow-[0_0_6px_#00df8f]" />
                    </motion.div>
                  )}

                  {/* Hover Underline Expansion for Inactive Items */}
                  {!active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#00df8f]/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                  )}
                </Link>
              );
            })}
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
              {navLinks.map((link, i) => {
                const active = isActive(link.path);
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-widest transition-all ${
                        active
                          ? 'text-[#00df8f] bg-[#00df8f]/10 border-l-2 border-[#00df8f] pl-5'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
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
