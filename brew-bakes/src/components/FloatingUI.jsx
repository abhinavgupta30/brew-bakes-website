import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Phone } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 gradient-coffee rounded-full shadow-xl
            flex items-center justify-center text-cream hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      href="https://wa.me/919876543210?text=Hi%20Brew%20%26%20Bakes!%20I'd%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] text-white
        px-4 py-3 rounded-full shadow-xl whatsapp-pulse hover:bg-[#22c45d] transition-all duration-300
        hover:scale-105 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-xl">💬</span>
      <span className="font-medium text-sm max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
        Order on WhatsApp
      </span>
    </motion.a>
  );
}

export function CallButton() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2 }}
      href="tel:+919876543210"
      className="md:hidden fixed bottom-24 left-6 z-50 w-12 h-12 bg-coffee-700 text-cream
        rounded-full shadow-xl flex items-center justify-center hover:bg-coffee-800 transition-all hover:scale-110"
      aria-label="Call Now"
    >
      <Phone size={20} />
    </motion.a>
  );
}
