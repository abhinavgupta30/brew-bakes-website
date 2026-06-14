import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { galleryImages } from '../data/siteData';

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="gallery" className="section-padding bg-foam">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">Our Space</span>
          <h2 className="section-heading">
            Every Corner Tells{' '}
            <span className="italic text-coffee-600">a Story</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`gallery-item relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer
                ${img.span === 'col-span-2' ? 'col-span-2' : 'col-span-1'}
                ${i === 0 ? 'row-span-2' : ''}`}
              style={{ aspectRatio: img.span === 'col-span-2' ? '16/7' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay absolute inset-0 bg-espresso/50 flex items-end p-4">
                <span className="text-cream font-display italic text-sm md:text-base">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 text-coffee-500 text-sm"
        >
          📸 Tag us on Instagram{' '}
          <a href="#" className="text-caramel font-medium hover:underline">@brewandbakes</a>
        </motion.p>
      </div>
    </section>
  );
}
