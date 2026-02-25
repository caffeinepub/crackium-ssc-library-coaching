import { BookOpen, GraduationCap, Shield, Zap, Target, Star } from 'lucide-react';

const courses = [
  { name: 'SSC CGL', desc: 'Combined Graduate Level', icon: GraduationCap, highlight: true },
  { name: 'SSC CHSL', desc: 'Combined Higher Secondary Level', icon: BookOpen, highlight: false },
  { name: 'SSC MTS', desc: 'Multi Tasking Staff', icon: Star, highlight: false },
  { name: 'SSC CPO', desc: 'Central Police Organisation', icon: Shield, highlight: false },
  { name: 'SSC Steno', desc: 'Stenographer Grade C & D', icon: BookOpen, highlight: false },
  { name: 'Delhi Police', desc: 'Constable & Head Constable', icon: Shield, highlight: true },
  { name: 'SSC GD', desc: 'General Duty Constable', icon: Shield, highlight: false },
  { name: 'SSC JE', desc: 'Junior Engineer', icon: Zap, highlight: false },
  { name: 'Foundation & Target', desc: 'Batches for All Levels', icon: Target, highlight: true },
  { name: 'Crash Course', desc: 'Test Series & Quick Prep', icon: Zap, highlight: false },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 bg-charcoal-brand relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.78 0.16 85 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.16 85 / 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold-brand/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-brand" />
            <span className="font-body text-gold-brand text-xs font-semibold tracking-[0.2em] uppercase">
              Courses Offered
            </span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            All SSC Exams
            <br />
            <span className="text-gradient-gold">Under One Roof</span>
          </h2>
          <p className="font-body text-white/50 text-base sm:text-lg max-w-xl">
            Complete preparation for every SSC examination — learn, practice, and crack with confidence.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.name}
                className={`group relative p-5 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  course.highlight
                    ? 'bg-emerald-brand-deeper/60 border-emerald-brand/40 shadow-emerald'
                    : 'bg-charcoal-brand-light border-charcoal-brand-mid hover:border-gold-brand/30 hover:bg-charcoal-brand-mid'
                }`}
              >
                {course.highlight && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 gold-gradient flex items-center justify-center">
                    <Star className="w-3 h-3 text-charcoal-brand fill-charcoal-brand" />
                  </div>
                )}
                <div className={`w-10 h-10 flex items-center justify-center mb-4 ${
                  course.highlight ? 'emerald-gradient shadow-emerald' : 'bg-charcoal-brand-mid group-hover:bg-emerald-brand-deeper/50 transition-colors'
                }`}>
                  <Icon className={`w-5 h-5 ${course.highlight ? 'text-white' : 'text-gold-brand'}`} />
                </div>
                <h3 className={`font-heading font-bold text-sm leading-tight mb-1 uppercase tracking-wide ${
                  course.highlight ? 'text-emerald-brand-light' : 'text-white group-hover:text-gold-brand transition-colors'
                }`}>
                  {course.name}
                </h3>
                <p className="font-body text-white/40 text-xs leading-snug">
                  {course.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-gold-brand/30 to-transparent hidden sm:block" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-body text-white/45 text-sm">
              All SSC exams — one institute, complete preparation
            </p>
            <a
              href="tel:6206899318"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm gold-gradient text-charcoal-brand font-body font-bold text-sm shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Enquire About Admissions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
