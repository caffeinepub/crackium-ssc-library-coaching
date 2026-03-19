import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Bloom Botanicals",
    category: "Brand Identity",
    year: "2025",
    description:
      "A complete rebrand for an artisan plant shop — earthy tones, hand-drawn illustrations, and a packaging system that feels alive.",
    color: "bg-[oklch(42%_0.1_155)]",
    textColor: "text-[var(--cream)]",
  },
  {
    id: "02",
    title: "Meridian Finance",
    category: "Web Design",
    year: "2025",
    description:
      "A bold, editorial website for a boutique investment firm that breaks every financial industry cliché.",
    color: "bg-[oklch(92%_0.018_95)]",
    textColor: "text-[var(--charcoal)]",
  },
  {
    id: "03",
    title: "Solstice Festival",
    category: "Motion & Print",
    year: "2024",
    description:
      "Visual identity and motion package for a summer music festival — kinetic typography, vibrant posters, and animated stage graphics.",
    color: "bg-[oklch(72%_0.12_85)]",
    textColor: "text-[var(--charcoal)]",
  },
  {
    id: "04",
    title: "Kova Architecture",
    category: "Digital Strategy",
    year: "2024",
    description:
      "Repositioning strategy and website redesign for a modernist architecture studio entering the luxury residential market.",
    color: "bg-[oklch(22%_0.06_155)]",
    textColor: "text-[var(--cream)]",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-border">
          <div>
            <span className="font-mono text-xs tracking-widest uppercase text-[var(--forest)] mb-3 block">
              Selected Work
            </span>
            <h2 className="font-display text-display-lg font-light text-[var(--charcoal)]">
              Recent Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[var(--forest)] hover:text-[var(--forest-dark)] transition-colors link-underline"
          >
            View All Work
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`group relative ${project.color} overflow-hidden cursor-pointer hover-scale`}
            >
              {/* Content */}
              <div
                className={`p-10 lg:p-12 min-h-72 flex flex-col justify-between ${project.textColor}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs tracking-widest uppercase opacity-50 block mb-2">
                      {project.category} · {project.year}
                    </span>
                    <h3 className="font-display text-3xl lg:text-4xl font-light leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1"
                  />
                </div>

                <p className="font-sans text-sm leading-relaxed opacity-70 max-w-sm mt-6">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--charcoal)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
