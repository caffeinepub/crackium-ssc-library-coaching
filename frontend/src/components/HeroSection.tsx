import { ChevronDown, Award, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector('#courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-new.dim_1600x900.png')" }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-brand/95 via-charcoal-brand/80 to-emerald-brand-deeper/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-brand via-transparent to-transparent" />

      {/* Decorative gold vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 gold-gradient opacity-70" />

      {/* Geometric accent shapes */}
      <div className="absolute top-16 right-16 w-72 h-72 border border-gold-brand/10 rotate-45 opacity-30" />
      <div className="absolute top-24 right-24 w-48 h-48 border border-emerald-brand/15 rotate-45 opacity-25" />
      <div className="absolute bottom-24 left-16 w-56 h-56 border border-gold-brand/8 rotate-12 opacity-20" />

      {/* Glowing orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-emerald-brand/8 blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gold-brand/6 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Content */}
          <div>
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gold-brand" />
              <span className="font-body text-gold-brand text-xs font-semibold tracking-[0.2em] uppercase">
                Delhi's Premier SSC Institute
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black leading-[1.05] mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
                Crack Every
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-gradient-gold">
                SSC Exam
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl text-white/70 mt-2 font-normal italic">
                with Confidence
              </span>
            </h1>

            {/* Tagline */}
            <p className="font-body text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Crackium SSC — where disciplined preparation meets expert guidance.
              Join Delhi's most trusted coaching institute for SSC aspirants.
            </p>

            {/* Hindi tagline */}
            <p className="font-body text-emerald-brand-light text-sm mb-8 italic">
              "जहाँ मेहनत मिलती है सफलता से"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6206899318"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm gold-gradient text-charcoal-brand font-body font-bold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300 hover:scale-105 animate-pulse-gold"
              >
                Call Now: 6206899318
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector('#courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm border border-white/20 text-white font-body font-medium text-base hover:border-gold-brand/50 hover:text-gold-brand transition-all duration-300"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right: Stats Panel */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main stats card */}
              <div className="bg-charcoal-brand-light/80 backdrop-blur-sm border border-gold-brand/20 rounded-none p-8 shadow-charcoal">
                {/* Top accent */}
                <div className="h-0.5 w-full gold-gradient mb-8" />

                <h3 className="font-heading font-bold text-white text-2xl mb-6">
                  Why Crackium SSC?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm emerald-gradient flex items-center justify-center flex-shrink-0 shadow-emerald">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gold-brand text-xl">Expert Faculty</div>
                      <div className="font-body text-white/55 text-sm">Seasoned SSC educators</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm emerald-gradient flex items-center justify-center flex-shrink-0 shadow-emerald">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gold-brand text-xl">Small Batches</div>
                      <div className="font-body text-white/55 text-sm">Personalized attention</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm emerald-gradient flex items-center justify-center flex-shrink-0 shadow-emerald">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-gold-brand text-xl">All SSC Exams</div>
                      <div className="font-body text-white/55 text-sm">CGL, CHSL, MTS, CPO & more</div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-px w-full bg-gold-brand/20 mt-8 mb-4" />

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-brand animate-pulse" />
                  <span className="font-body text-emerald-brand-light text-sm font-semibold">
                    Admissions Open — Limited Seats
                  </span>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-4 -right-4 bg-gold-brand px-5 py-3 shadow-gold-lg">
                <div className="font-heading font-black text-charcoal-brand text-lg leading-none">
                  📍 Jharoda Majra
                </div>
                <div className="font-body text-charcoal-brand/70 text-xs mt-0.5">Delhi – 110084</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold-brand transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
