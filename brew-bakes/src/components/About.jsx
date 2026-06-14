import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-foam">
      <div className="container-max grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image collage */}
        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80"
                alt="Brew & Bakes interior – warm and welcoming"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Inset accent card */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-espresso rounded-2xl p-5 shadow-2xl w-40">
              <div className="font-accent text-caramel text-3xl leading-none">5+</div>
              <div className="font-body text-cream/80 text-xs mt-1 leading-snug">Years of crafting moments</div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 md:-left-8 bg-caramel rounded-xl p-3 shadow-xl">
              <span className="text-2xl">☕</span>
            </div>
          </div>
        </FadeIn>

        {/* Text */}
        <div className="pt-6 md:pt-0">
          <FadeIn delay={0.15}>
            <span className="section-eyebrow">Our Story</span>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h2 className="section-heading mb-6">
              More Than Coffee —<br />
              <span className="italic text-coffee-600">It's Community</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-coffee-700 leading-relaxed mb-4">
              Brew & Bakes was born from a simple belief: the best part of your morning should be the first sip of your coffee. Founded in 2019, we set out to create a space that felt like a second home — warm, unhurried, and full of flavour.
            </p>
          </FadeIn>
          <FadeIn delay={0.42}>
            <p className="text-coffee-700 leading-relaxed mb-8">
              Every bean is sourced from small, ethical farms. Every cake and brownie is baked in our kitchen before sunrise. We don't do shortcuts, and our regulars can taste the difference.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🫘', label: 'Single-Origin Beans' },
                { icon: '🧁', label: 'Baked Fresh Daily' },
                { icon: '🤝', label: 'Ethically Sourced' },
                { icon: '💚', label: 'No Preservatives' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-coffee-800 font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.58}>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-block"
            >
              Come Visit Us
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
