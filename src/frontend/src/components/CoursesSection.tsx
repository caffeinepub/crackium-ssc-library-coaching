import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We build cohesive visual identities — logos, color systems, typography, and brand guidelines that communicate who you are at a glance.",
    tags: ["Logo Design", "Visual System", "Guidelines"],
  },
  {
    number: "02",
    title: "Web Design & Dev",
    description:
      "From concept to code, we design and build performant, beautiful websites that convert visitors into customers.",
    tags: ["UI/UX", "Frontend", "CMS"],
  },
  {
    number: "03",
    title: "Motion & Animation",
    description:
      "Purposeful motion that brings interfaces to life — micro-interactions, scroll animations, and cinematic brand films.",
    tags: ["After Effects", "Lottie", "GSAP"],
  },
  {
    number: "04",
    title: "Digital Strategy",
    description:
      "Data-informed creative strategy that aligns your brand's visual language with business goals and audience insights.",
    tags: ["Research", "Positioning", "Roadmap"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-border">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--forest)] mb-3 block">
              What We Do
            </span>
            <h2 className="font-display text-display-lg font-light text-[var(--charcoal)]">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-base text-muted-foreground max-w-sm leading-relaxed">
            End-to-end creative solutions for brands that want to stand out in a
            crowded world.
          </p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-border stagger-children">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 py-10 cursor-pointer hover:bg-cream-dark transition-colors duration-300 -mx-6 px-6 lg:-mx-10 lg:px-10"
            >
              {/* Number */}
              <span className="font-mono text-xs tracking-widest text-[var(--forest)] opacity-60 w-10 flex-shrink-0">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-display-md font-light text-[var(--charcoal)] w-56 flex-shrink-0 group-hover:text-[var(--forest)] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:w-48 flex-shrink-0">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs tracking-wide px-2.5 py-1 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={20}
                className="text-[var(--forest)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 -translate-x-2 group-hover:translate-x-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
