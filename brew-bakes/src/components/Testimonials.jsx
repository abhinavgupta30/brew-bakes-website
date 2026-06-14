import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '../data/siteData';

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-caramel text-lg">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">Reviews</span>
          <h2 className="section-heading">
            What Our Guests{' '}
            <span className="italic text-coffee-600">Are Saying</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ id, name, role, rating, avatar, text }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md card-hover flex flex-col"
            >
              <Stars count={rating} />
              <p className="text-coffee-700 text-sm leading-relaxed mt-3 mb-5 flex-1">
                "{text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-beige">
                <div className="w-10 h-10 rounded-full gradient-coffee flex items-center justify-center flex-shrink-0">
                  <span className="text-cream font-bold text-xs">{avatar}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-espresso text-sm">{name}</div>
                  <div className="text-coffee-500 text-xs">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
