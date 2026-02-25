import { ClipboardCheck, CheckCircle, Phone, ArrowRight } from 'lucide-react';

const coursesList = [
  'SSC-CGL / CHSL / MTS / CPO / Steno',
  'Delhi Police / GD / JE',
  'Foundation & Target Batches',
];

export default function MockTestSection() {
  return (
    <section
      id="mock-test"
      className="relative py-0 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-new.dim_1600x900.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal-brand/92" />

      {/* Left gold bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 gold-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
          {/* Left: Giant Typography */}
          <div className="flex flex-col justify-center py-20 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-gold-brand/15">
            <div className="flex items-center gap-3 mb-8">
              <ClipboardCheck className="w-5 h-5 text-gold-brand" />
              <span className="font-body text-gold-brand text-xs font-semibold tracking-[0.2em] uppercase">
                Now Available
              </span>
            </div>

            <div className="mb-6">
              <div className="font-heading font-black leading-none tracking-tight">
                <span className="block text-7xl sm:text-8xl md:text-9xl text-gradient-gold">
                  MOCK
                </span>
                <span className="block text-7xl sm:text-8xl md:text-9xl text-gradient-gold">
                  TEST
                </span>
                <div className="flex items-center gap-4 my-3">
                  <div className="h-0.5 w-16 bg-gold-brand/50" />
                  <span className="text-3xl sm:text-4xl text-white/30">+</span>
                  <div className="h-0.5 w-16 bg-gold-brand/50" />
                </div>
                <span className="block text-5xl sm:text-6xl md:text-7xl text-white/85">
                  SOLUTION
                </span>
              </div>
            </div>

            <p className="font-body text-white/50 text-base max-w-sm">
              Practice with real exam-pattern mock tests and get detailed solutions to sharpen your preparation.
            </p>
          </div>

          {/* Right: Details Panel */}
          <div className="flex flex-col justify-center py-20 pl-0 lg:pl-12">
            {/* Courses label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-emerald-brand" />
              <span className="font-body text-emerald-brand-light text-xs font-semibold tracking-[0.2em] uppercase">
                Courses Covered
              </span>
            </div>

            {/* Course List */}
            <ul className="space-y-4 mb-10">
              {coursesList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-brand flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white text-base sm:text-lg font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px w-full bg-gold-brand/15 mb-8" />

            {/* Phone Numbers */}
            <div className="space-y-3 mb-8">
              <p className="font-body text-white/40 text-xs tracking-widest uppercase">Call to Enroll</p>
              <a
                href="tel:6206899318"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 emerald-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-black text-white text-2xl sm:text-3xl group-hover:text-gold-brand transition-colors">
                  6206899318
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-brand group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="tel:8252065374"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 emerald-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-black text-white text-2xl sm:text-3xl group-hover:text-gold-brand transition-colors">
                  8252065374
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-gold-brand group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="tel:6206899318"
              className="inline-flex items-center gap-3 px-8 py-4 gold-gradient text-charcoal-brand font-body font-bold text-base shadow-gold-lg hover:shadow-gold transition-all duration-300 hover:scale-105 self-start"
            >
              <Phone className="w-5 h-5" />
              Enroll for Mock Tests Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
