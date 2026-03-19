import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1–2",
    description:
      "We start by listening. Deep-dive workshops, stakeholder interviews, and competitive analysis to understand your world.",
    deliverables: ["Brand Audit", "Audience Research", "Creative Brief"],
  },
  {
    number: "02",
    title: "Strategy",
    duration: "Week 2–3",
    description:
      "We define the creative direction — positioning, visual language, and a roadmap that aligns design with business outcomes.",
    deliverables: ["Positioning Map", "Moodboards", "Creative Direction"],
  },
  {
    number: "03",
    title: "Design",
    duration: "Week 3–6",
    description:
      "Iterative design sprints with regular check-ins. We present concepts, gather feedback, and refine until it's right.",
    deliverables: ["Design Concepts", "Prototypes", "Revision Rounds"],
  },
  {
    number: "04",
    title: "Delivery",
    duration: "Week 6–8",
    description:
      "Final assets, handoff documentation, and launch support. We don't disappear after delivery — we're here for the long run.",
    deliverables: ["Final Files", "Brand Guidelines", "Launch Support"],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-border">
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--forest)] mb-3 block">
            How We Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-display-lg font-light text-[var(--charcoal)]">
              Our Process
            </h2>
            <p className="font-sans text-base text-muted-foreground max-w-sm leading-relaxed">
              A transparent, collaborative process designed to produce
              exceptional results — every time.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border stagger-children">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-cream-dark p-8 group hover:bg-cream transition-colors duration-300"
            >
              {/* Number + duration */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-widest uppercase text-[var(--forest)] opacity-70">
                  {step.number}
                </span>
                <span className="font-mono text-xs tracking-wide text-muted-foreground bg-cream px-2 py-1 group-hover:bg-cream-dark transition-colors duration-300">
                  {step.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-light text-[var(--charcoal)] mb-3 group-hover:text-[var(--forest)] transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-2">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      size={12}
                      className="text-[var(--forest)] flex-shrink-0"
                    />
                    <span className="font-mono text-xs text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
