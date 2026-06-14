import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
];

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="section-padding bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,137,42,0.1),transparent_60%)]" />

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">Find Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
            Come Say{' '}
            <span className="italic text-caramel">Hello</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-80 md:h-96"
          >
            <iframe
              title="Brew & Bakes Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBrew+%26+Bakes!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(20%) saturate(120%) hue-rotate(340deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-caramel/20 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="text-caramel" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream text-lg mb-1">Our Address</h3>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    Shop 12, Café Lane, Near Central Park,<br />
                    Nashik, Maharashtra – 422001
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-caramel text-sm font-medium hover:underline"
                  >
                    <Navigation size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-caramel/20 p-3 rounded-xl flex-shrink-0">
                  <Clock className="text-caramel" size={22} />
                </div>
                <div className="w-full">
                  <h3 className="font-display font-bold text-cream text-lg mb-3">Opening Hours</h3>
                  <ul className="space-y-2">
                    {hours.map(({ day, time }) => (
                      <li key={day} className="flex justify-between text-sm">
                        <span className="text-cream/70">{day}</span>
                        <span className="text-caramel font-medium">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-caramel/20 p-3 rounded-xl flex-shrink-0">
                  <Phone className="text-caramel" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream text-lg mb-1">Reservations</h3>
                  <a href="tel:+919876543210" className="text-caramel font-medium hover:underline">
                    +91 98765 43210
                  </a>
                  <p className="text-cream/50 text-xs mt-1">Call us for bulk orders & events</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
