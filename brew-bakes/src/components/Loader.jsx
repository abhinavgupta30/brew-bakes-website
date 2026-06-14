import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-espresso flex flex-col items-center justify-center"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="w-16 h-16 gradient-coffee rounded-full flex items-center justify-center mb-6 shadow-2xl"
      >
        <Coffee size={30} className="text-cream" />
      </motion.div>
      <div className="loader-coffee mb-4" />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="font-accent text-caramel text-xl"
      >
        Brewing your experience...
      </motion.p>
    </motion.div>
  );
}
