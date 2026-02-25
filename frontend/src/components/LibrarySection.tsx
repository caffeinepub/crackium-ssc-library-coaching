import { Wind, Armchair, Sun, Camera, VolumeX, Clock } from 'lucide-react';

const facilities = [
  {
    icon: Wind,
    title: 'Fully AC Reading Hall',
    desc: 'Stay comfortable year-round in our fully air-conditioned reading hall.',
  },
  {
    icon: Armchair,
    title: 'Comfortable Seating',
    desc: 'Ergonomic chairs and spacious desks designed for long study sessions.',
  },
  {
    icon: Sun,
    title: 'Proper Lighting',
    desc: 'Optimal lighting conditions to reduce eye strain during extended study hours.',
  },
  {
    icon: Camera,
    title: 'CCTV Security',
    desc: '24/7 CCTV surveillance ensuring a safe and secure study environment.',
  },
  {
    icon: VolumeX,
    title: 'Clean & Silent Environment',
    desc: 'Strictly maintained silence and cleanliness for maximum concentration.',
  },
  {
    icon: Clock,
    title: 'Long Study Hours',
    desc: 'Extended operating hours to accommodate your study schedule and goals.',
  },
];

export default function LibrarySection() {
  return (
    <section id="library" className="py-24 bg-charcoal-brand relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-brand/30 to-transparent" />

      {/* Right side emerald glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-brand/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Text Content (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-emerald-brand" />
              <span className="font-body text-emerald-brand-light text-xs font-semibold tracking-[0.2em] uppercase">
                Premium Study Library
              </span>
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Premium SSC
              <br />
              <span className="text-gradient-emerald">Study Library</span>
              <br />
              <span className="text-2xl sm:text-3xl text-white/50 font-normal italic">in Jharoda Majra</span>
            </h2>

            <p className="font-body text-white/55 text-base leading-relaxed mb-6">
              Serious aspirants ke liye — a{' '}
              <span className="text-emerald-brand-light font-semibold">distraction-free atmosphere</span>{' '}
              where you can focus entirely on your preparation. Our premium library is designed to give you
              the perfect environment to study, revise, and succeed.
            </p>

            <blockquote className="border-l-2 border-gold-brand pl-5 mb-8">
              <p className="font-body text-white/60 text-sm leading-relaxed italic">
                "A peaceful, disciplined study space is the foundation of every SSC topper's success.
                We've built exactly that for you at Crackium SSC."
              </p>
            </blockquote>

            <a
              href="tel:6206899318"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm gold-gradient text-charcoal-brand font-body font-bold text-sm shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
            >
              Book Your Library Seat
            </a>
          </div>

          {/* Right: Facilities Grid (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal-brand-mid">
            {facilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <div
                  key={facility.title}
                  className="group bg-charcoal-brand-light p-6 hover:bg-charcoal-brand-mid transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 emerald-gradient flex items-center justify-center flex-shrink-0 shadow-emerald group-hover:shadow-emerald-lg transition-shadow">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-gold-brand transition-colors">
                        {facility.title}
                      </h3>
                      <p className="font-body text-white/45 text-sm leading-relaxed">
                        {facility.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
