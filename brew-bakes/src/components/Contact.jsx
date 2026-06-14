import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-foam">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-heading">
            We'd Love to{' '}
            <span className="italic text-coffee-600">Hear from You</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={52} />
                <h3 className="font-display text-2xl font-bold text-espresso mb-2">Message Sent!</h3>
                <p className="text-coffee-600">We'll get back to you within 24 hours. ☕</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  className="mt-6 text-caramel text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-coffee-800 text-sm font-medium mb-1.5" htmlFor="name">Your Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full border-2 border-beige rounded-xl px-4 py-3 text-espresso text-sm
                        focus:outline-none focus:border-caramel transition-colors bg-foam"
                    />
                  </div>
                  <div>
                    <label className="block text-coffee-800 text-sm font-medium mb-1.5" htmlFor="phone">Phone</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border-2 border-beige rounded-xl px-4 py-3 text-espresso text-sm
                        focus:outline-none focus:border-caramel transition-colors bg-foam"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-coffee-800 text-sm font-medium mb-1.5" htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="priya@example.com"
                    className="w-full border-2 border-beige rounded-xl px-4 py-3 text-espresso text-sm
                      focus:outline-none focus:border-caramel transition-colors bg-foam"
                  />
                </div>
                <div>
                  <label className="block text-coffee-800 text-sm font-medium mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your order, event, or feedback..."
                    className="w-full border-2 border-beige rounded-xl px-4 py-3 text-espresso text-sm
                      focus:outline-none focus:border-caramel transition-colors bg-foam resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
              <div className="bg-coffee-100 p-3 rounded-xl">
                <Phone className="text-coffee-700" size={22} />
              </div>
              <div>
                <div className="text-sm text-coffee-500 mb-0.5">Call Us</div>
                <a href="tel:+919876543210" className="font-display font-bold text-espresso text-lg hover:text-caramel transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
              <div className="bg-coffee-100 p-3 rounded-xl">
                <Mail className="text-coffee-700" size={22} />
              </div>
              <div>
                <div className="text-sm text-coffee-500 mb-0.5">Email Us</div>
                <a href="mailto:hello@brewandbakes.in" className="font-display font-bold text-espresso text-lg hover:text-caramel transition-colors">
                  hello@brewandbakes.in
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Brew%20%26%20Bakes!%20I'd%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] text-white rounded-2xl p-6 shadow-md text-center
                hover:bg-[#22c45d] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">💬</div>
              <div className="font-display font-bold text-xl">Chat on WhatsApp</div>
              <div className="text-white/80 text-sm mt-1">Get instant replies • Order easily</div>
            </a>

            {/* Mobile Call CTA */}
            <a
              href="tel:+919876543210"
              className="md:hidden block btn-primary text-center text-base py-4"
            >
              📞 Call Now
            </a>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-display font-bold text-espresso mb-3">Events & Bulk Orders</h4>
              <p className="text-coffee-600 text-sm leading-relaxed">
                Planning a birthday, corporate event, or bulk cake order? We cater! Write to us or WhatsApp and we'll craft a custom menu just for you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
