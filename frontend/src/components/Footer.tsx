import { Heart, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'crackium-ssc');

  return (
    <footer className="bg-charcoal-brand border-t border-gold-brand/10 relative overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gold-gradient" />

      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.78 0.16 85 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.16 85 / 1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/generated/logo-new.dim_400x120.png"
                alt="Crackium SSC Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <div className="flex items-baseline">
                  <span className="font-heading font-black text-white text-xl tracking-tight">CRACKIUM</span>
                  <span className="font-heading font-black text-gold-brand text-xl tracking-tight">SSC</span>
                </div>
                <div className="font-body text-white/35 text-[10px] uppercase tracking-widest">Coaching & Library</div>
              </div>
            </div>
            <p className="font-body text-white/45 text-sm leading-relaxed max-w-xs">
              Where Aspirants Become Achievers. Delhi's trusted SSC coaching institute and premium study library.
            </p>
            <div className="mt-5 h-px w-16 bg-gold-brand/30" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-gold-brand text-xs uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Courses Offered', href: '#courses' },
                { label: 'Mock Test + Solution', href: '#mock-test' },
                { label: 'Why Choose Us', href: '#why-choose' },
                { label: 'Study Library', href: '#library' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-white/45 hover:text-gold-brand text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:bg-gold-brand group-hover:w-5 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-semibold text-gold-brand text-xs uppercase tracking-[0.2em] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-brand mt-0.5 flex-shrink-0" />
                <address className="font-body text-white/45 text-sm not-italic leading-relaxed">
                  Sani Market, New Society<br />
                  Jhaonda Majra – 110084
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-brand flex-shrink-0" />
                <a href="tel:6206899318" className="font-body text-white/45 hover:text-gold-brand text-sm transition-colors">
                  6206899318
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-brand flex-shrink-0" />
                <a href="tel:8252065374" className="font-body text-white/45 hover:text-gold-brand text-sm transition-colors">
                  8252065374
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold-brand/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            © {year} Crackium SSC Coaching & Library. All rights reserved.
          </p>
          <p className="font-body text-white/30 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-gold-brand fill-gold-brand" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-brand hover:text-gold-brand-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
