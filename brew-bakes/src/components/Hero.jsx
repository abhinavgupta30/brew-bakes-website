import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&q=85')`,
        }}
      />
      {/* Layered overlays for warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/70 to-espresso/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/40 via-transparent to-coffee-900/20" />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-caramel/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-coffee-400/10 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          {...fadeUp(0.1)}
          className="inline-block font-accent text-caramel text-2xl md:text-3xl mb-4"
        >
          Welcome to Brew & Bakes
        </motion.span>

        <motion.h1
          {...fadeUp(0.3)}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 text-balance"
        >
          Freshly Brewed{' '}
          <span className="italic text-caramel">Happiness</span>
          <br />Every Day
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Artisan coffee crafted with single-origin beans, paired with lovingly baked goods
          made fresh each morning. Your neighbourhood café, elevated.
        </motion.p>

        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="btn-primary bg-caramel hover:bg-coffee-600 text-espresso hover:text-cream text-base px-9 py-3.5 font-semibold"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline text-base px-9 py-3.5 font-semibold"
          >
            Visit Café
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { num: '5+', label: 'Years Serving' },
            { num: '50+', label: 'Menu Items' },
            { num: '10K+', label: 'Happy Customers' },
            { num: '4.9★', label: 'Rating' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-caramel">{num}</div>
              <div className="font-body text-xs md:text-sm text-cream/60 mt-0.5 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs uppercase tracking-widest font-body">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
