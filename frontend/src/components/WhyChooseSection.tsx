import { Quote } from "lucide-react";

const values = [
  {
    title: "Craft Over Commodity",
    body: "We treat every project as a unique creative challenge. No templates, no shortcuts — only thoughtful, handcrafted design.",
  },
  {
    title: "Clarity in Complexity",
    body: "Great design simplifies. We distill complex ideas into clear, compelling visual narratives that resonate instantly.",
  },
  {
    title: "Partnership, Not Transactions",
    body: "We embed ourselves in your team, understanding your goals deeply before we ever open a design tool.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-[var(--charcoal)] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Pull quote */}
        <div className="max-w-4xl mb-20 lg:mb-28">
          <Quote size={32} className="text-[var(--gold)] mb-6 opacity-60" />
          <blockquote className="font-display text-display-xl font-light text-[var(--cream)] leading-tight">
            Design is not just what it looks like and feels like.{" "}
            <em className="italic text-[var(--gold)]">Design is how it works.</em>
          </blockquote>
          <cite className="block mt-6 font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.35)] not-italic">
            — Our Studio Philosophy
          </cite>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[oklch(97%_0.012_95_/_0.08)]">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="bg-[var(--charcoal)] p-10 group hover:bg-[oklch(97%_0.012_95_/_0.03)] transition-colors duration-300"
            >
              <div className="font-mono text-xs tracking-widest uppercase text-[var(--gold)] opacity-60 mb-6">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl font-light text-[var(--cream)] mb-4 group-hover:text-[var(--gold)] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="font-sans text-sm text-[oklch(97%_0.012_95_/_0.5)] leading-relaxed">
                {value.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-px bg-[oklch(97%_0.012_95_/_0.08)]">
          <div className="bg-[var(--charcoal)] grid grid-cols-2 md:grid-cols-4 divide-x divide-[oklch(97%_0.012_95_/_0.08)]">
            {[
              { num: "2016", label: "Founded" },
              { num: "12", label: "Team Members" },
              { num: "98%", label: "Client Retention" },
              { num: "4×", label: "Award Winner" },
            ].map((item) => (
              <div key={item.label} className="p-8 text-center">
                <div className="font-display text-4xl font-light text-[var(--gold)] mb-1">
                  {item.num}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.35)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
