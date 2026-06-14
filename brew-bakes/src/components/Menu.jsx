import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { menuItems, menuCategories } from '../data/siteData';

function MenuCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      layout
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover cursor-default"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {item.badge && (
          <span className="absolute top-3 left-3 bg-caramel text-espresso text-xs font-bold px-2.5 py-1 rounded-full">
            {item.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-bold text-espresso leading-tight">{item.name}</h3>
          <span className="font-display text-lg font-bold text-caramel whitespace-nowrap">{item.price}</span>
        </div>
        <p className="text-coffee-600 text-sm leading-relaxed">{item.desc}</p>
        <button className="mt-4 w-full py-2 rounded-full border-2 border-coffee-200 text-coffee-700 text-sm font-semibold
          hover:bg-coffee-700 hover:text-cream hover:border-coffee-700 transition-all duration-300">
          Add to Order
        </button>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeFilter === 'all'
    ? menuItems
    : menuItems.filter(i => i.category === activeFilter);

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container-max">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">Our Menu</span>
          <h2 className="section-heading mb-4">
            Crafted with Care,<br />
            <span className="italic text-coffee-600">Served with Love</span>
          </h2>
          <p className="text-coffee-600 max-w-xl mx-auto">
            From the first espresso shot at dawn to the last brownie of the evening — everything you see here is made fresh, right here, every single day.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {menuCategories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`filter-btn px-5 py-2 rounded-full font-body text-sm font-medium border-2 transition-all duration-300
                ${activeFilter === id
                  ? 'bg-coffee-700 text-cream border-coffee-700 shadow-lg'
                  : 'bg-white text-coffee-700 border-coffee-200 hover:border-coffee-500'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
