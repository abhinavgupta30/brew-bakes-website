import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-espresso/95 backdrop-blur-sm shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleLink(e, '#hero')} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full gradient-coffee flex items-center justify-center group-hover:scale-110 transition-transform">
            <Coffee size={18} className="text-cream" />
          </div>
          <div className="leading-none">
            <span className="font-display font-bold text-lg text-cream tracking-wide">Brew</span>
            <span className="font-accent text-caramel text-lg"> & Bakes</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleLink(e, href)}
                className="nav-link font-body text-sm font-medium text-cream/90 hover:text-caramel transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#menu"
          onClick={(e) => handleLink(e, '#menu')}
          className="hidden md:block btn-primary text-sm py-2.5 px-5"
        >
          View Menu
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-espresso border-t border-white/10 overflow-hidden"
          >
            <ul className="py-4 px-6 flex flex-col gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleLink(e, href)}
                    className="block py-3 text-cream/90 hover:text-caramel font-medium transition-colors border-b border-white/5"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="#menu" onClick={(e) => handleLink(e, '#menu')} className="btn-primary block text-center text-sm">
                  View Menu
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
