import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollToTop, WhatsAppButton, CallButton } from './components/FloatingUI';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Menu />
            <WhyUs />
            <Gallery />
            <Testimonials />
            <Location />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <CallButton />
        </>
      )}
    </>
  );
}
