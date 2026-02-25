import { MapPin, Phone, Clock, Trophy, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-charcoal-brand-light relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-brand/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-brand blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-brand" />
            <span className="font-body text-gold-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Location & Contact
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Find Us &
            <br />
            <span className="text-gradient-gold">Get In Touch</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-charcoal-brand-mid">
          {/* Address */}
          <div className="bg-charcoal-brand-light p-8 group hover:bg-charcoal-brand-mid transition-colors">
            <div className="w-12 h-12 emerald-gradient flex items-center justify-center mb-6 shadow-emerald">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-gold-brand text-lg mb-3 uppercase tracking-wide">
              Our Location
            </h3>
            <address className="font-body text-white/65 text-base not-italic leading-relaxed mb-4">
              Sani Market, New Society<br />
              Jhaonda Majra – 110084
            </address>
            <p className="font-body text-white/35 text-sm">
              Easily accessible from surrounding areas of Delhi
            </p>
          </div>

          {/* Phone */}
          <div className="bg-charcoal-brand-light p-8 group hover:bg-charcoal-brand-mid transition-colors">
            <div className="w-12 h-12 emerald-gradient flex items-center justify-center mb-6 shadow-emerald">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-gold-brand text-lg mb-3 uppercase tracking-wide">
              Call Us
            </h3>
            <div className="space-y-4">
              <a
                href="tel:6206899318"
                className="flex items-center gap-3 group/link"
              >
                <span className="font-heading font-black text-white text-2xl group-hover/link:text-gold-brand transition-colors">
                  6206899318
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover/link:text-gold-brand group-hover/link:translate-x-1 transition-all" />
              </a>
              <a
                href="tel:8252065374"
                className="flex items-center gap-3 group/link"
              >
                <span className="font-heading font-black text-white text-2xl group-hover/link:text-gold-brand transition-colors">
                  8252065374
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover/link:text-gold-brand group-hover/link:translate-x-1 transition-all" />
              </a>
            </div>
            <p className="font-body text-white/35 text-xs mt-4">Tap to call directly</p>
          </div>

          {/* Hours */}
          <div className="bg-charcoal-brand-light p-8 group hover:bg-charcoal-brand-mid transition-colors">
            <div className="w-12 h-12 emerald-gradient flex items-center justify-center mb-6 shadow-emerald">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-heading font-bold text-gold-brand text-lg mb-3 uppercase tracking-wide">
              Study Hours
            </h3>
            <p className="font-body text-white/65 text-base leading-relaxed mb-2">
              Long study hours available
            </p>
            <p className="font-body text-white/35 text-sm">
              Call for exact timings and batch schedules
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-px bg-charcoal-brand-mid p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold-lg animate-float">
              <Trophy className="w-8 h-8 text-charcoal-brand" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-brand animate-pulse" />
                <span className="font-body font-bold text-emerald-brand-light text-xs tracking-wider uppercase">
                  Admissions Open Now
                </span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Limited Seats Available!
              </h3>
              <p className="font-body text-white/50 text-sm mt-1">
                Don't miss your chance — secure your seat today
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:6206899318"
              className="group flex items-center justify-center gap-3 px-7 py-4 gold-gradient text-charcoal-brand font-body font-bold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call: 6206899318
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:8252065374"
              className="group flex items-center justify-center gap-3 px-7 py-4 border border-gold-brand/40 text-gold-brand font-body font-bold text-base hover:bg-gold-brand/10 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call: 8252065374
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
