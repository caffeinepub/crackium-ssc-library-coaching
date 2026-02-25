import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Courses', href: '#courses' },
    { label: 'Mock Test', href: '#mock-test' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'Library', href: '#library' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal-brand/96 backdrop-blur-md border-b border-gold-brand/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/logo-new.dim_400x120.png"
              alt="Crackium SSC Logo"
              className="h-10 md:h-12 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2" style={{ display: 'none' }}>
              <div className="w-9 h-9 rounded-sm emerald-gradient flex items-center justify-center">
                <span className="font-heading font-black text-white text-sm">C</span>
              </div>
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline">
                  <span className="font-heading font-black text-white text-xl tracking-tight">CRACKIUM</span>
                  <span className="font-heading font-black text-gold-brand text-xl tracking-tight">SSC</span>
                </div>
                <span className="text-white/40 text-[10px] font-body tracking-widest uppercase">Coaching & Library</span>
              </div>
            </div>
            {/* Always visible text brand alongside logo */}
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline">
                <span className="font-heading font-black text-white text-xl md:text-2xl tracking-tight">CRACKIUM</span>
                <span className="font-heading font-black text-gold-brand text-xl md:text-2xl tracking-tight">SSC</span>
              </div>
              <span className="text-white/40 text-[10px] font-body tracking-widest uppercase">Coaching & Library</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-white/65 hover:text-gold-brand font-body font-medium text-sm transition-colors duration-200 rounded-sm hover:bg-gold-brand/8 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:6206899318"
              className="hidden sm:flex items-center gap-2 text-emerald-brand-light hover:text-emerald-brand font-body font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>6206899318</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-sm gold-gradient text-charcoal-brand font-body font-bold text-sm shadow-gold hover:shadow-gold-lg transition-all duration-200 hover:scale-105 tracking-wide"
            >
              Enroll Now
            </a>
            <button
              className="md:hidden p-2 text-white/70 hover:text-gold-brand transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-brand-light border-t border-gold-brand/15 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-white/70 hover:text-gold-brand font-body font-medium text-sm transition-colors rounded-sm hover:bg-gold-brand/8"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gold-brand/15 flex flex-col gap-2">
            <a
              href="tel:6206899318"
              className="flex items-center gap-2 px-4 py-2 text-emerald-brand-light font-body font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              6206899318
            </a>
            <a
              href="tel:8252065374"
              className="flex items-center gap-2 px-4 py-2 text-emerald-brand-light font-body font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              8252065374
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="inline-flex justify-center items-center px-4 py-2 rounded-sm gold-gradient text-charcoal-brand font-body font-bold text-sm shadow-gold"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
