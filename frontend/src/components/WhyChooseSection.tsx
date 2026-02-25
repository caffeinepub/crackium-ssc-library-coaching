import { Users, ClipboardCheck, BookMarked, UserCheck, Wifi, Leaf } from 'lucide-react';

const usps = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    desc: 'Learn from seasoned educators with deep expertise in SSC exam patterns and strategies.',
    number: '01',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Tests & Doubt Sessions',
    desc: 'Frequent mock tests and dedicated doubt-clearing sessions to keep you exam-ready.',
    number: '02',
  },
  {
    icon: BookMarked,
    title: 'Updated Study Material',
    desc: 'Comprehensive, regularly updated study material aligned with the latest SSC syllabus.',
    number: '03',
  },
  {
    icon: UserCheck,
    title: 'Small Batches for Better Focus',
    desc: 'Limited batch sizes ensure personalized attention and better learning outcomes.',
    number: '04',
  },
  {
    icon: Wifi,
    title: 'Offline + Online Support',
    desc: 'Flexible learning with both in-person classroom sessions and online support available.',
    number: '05',
  },
  {
    icon: Leaf,
    title: 'Disciplined & Peaceful Environment',
    desc: 'A fully disciplined, distraction-free atmosphere designed for serious aspirants.',
    number: '06',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 bg-charcoal-brand-light relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-brand/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-brand/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-brand" />
              <span className="font-body text-gold-brand text-xs font-semibold tracking-[0.2em] uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Why Choose
              <br />
              <span className="text-gradient-emerald">Crackium SSC?</span>
            </h2>
          </div>
          <div>
            <p className="font-body text-white/50 text-base sm:text-lg leading-relaxed">
              We don't just teach — we build champions. Here's what sets us apart from every other coaching institute in Delhi.
            </p>
          </div>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-brand-mid">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="group relative bg-charcoal-brand-light p-8 hover:bg-charcoal-brand-mid transition-all duration-300"
              >
                {/* Large number watermark */}
                <div className="absolute top-4 right-6 font-heading font-black text-6xl text-white/[0.04] select-none leading-none">
                  {usp.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 emerald-gradient flex items-center justify-center mb-6 shadow-emerald group-hover:shadow-emerald-lg transition-shadow">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-gold-brand transition-colors leading-tight">
                  {usp.title}
                </h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  {usp.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
