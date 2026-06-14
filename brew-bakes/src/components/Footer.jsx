import { Coffee } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const social = [
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '👥', label: 'Facebook', href: '#' },
  { icon: '🐦', label: 'Twitter', href: '#' },
  { icon: '▶️', label: 'YouTube', href: '#' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a0e07] text-cream/70">
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full gradient-coffee flex items-center justify-center">
                <Coffee size={18} className="text-cream" />
              </div>
              <span className="font-display font-bold text-lg text-cream">Brew</span>
              <span className="font-accent text-caramel text-lg">& Bakes</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Your neighbourhood café for artisan coffee and freshly baked happiness. Open every day, rain or shine.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-caramel/30 rounded-full flex items-center justify-center
                    transition-all duration-300 hover:scale-110 text-base"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="text-sm hover:text-caramel transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cream font-display font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-cream/50">Mon–Fri</span><br />7:00 AM – 10:00 PM</li>
              <li><span className="text-cream/50">Saturday</span><br />8:00 AM – 11:00 PM</li>
              <li><span className="text-cream/50">Sunday</span><br />9:00 AM – 9:00 PM</li>
            </ul>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Open Now
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <p>© 2024 Brew & Bakes. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with ☕ &amp; ❤️ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
