import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { whyUs } from '../data/siteData';

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="section-padding bg-espresso relative overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,137,42,0.15),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coffee-800/30 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            The Brew & Bakes{' '}
            <span className="italic text-caramel">Promise</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyUs.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center
                hover:bg-caramel/20 hover:border-caramel/40 transition-all duration-400 cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3 className="font-display font-bold text-cream text-lg mb-2">{title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 bg-caramel/20 border border-caramel/30 rounded-2xl p-6 text-center"
        >
          <p className="font-accent text-caramel text-xl md:text-2xl">
            "A cup of coffee shared with a friend is happiness tasted and time well spent."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
