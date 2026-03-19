import { ArrowDownRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--charcoal)] overflow-hidden flex flex-col">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, oklch(97% 0.012 95) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--forest-light)] opacity-20"
        style={{ animation: "pulse-ring 6s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--gold)] opacity-15"
        style={{ animation: "pulse-ring 6s ease-in-out infinite 1s" }}
      />

      {/* Top bar */}
      <div className="relative z-10 border-b border-[oklch(97%_0.012_95_/_0.1)] mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)]">
            Est. 2024
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)]">
              Available for projects
            </span>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            {/* Left: headline */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-8 fade-up">
                <Sparkles size={14} className="text-[var(--gold)]" />
                <span className="font-mono text-xs tracking-widest uppercase text-[var(--gold)]">
                  Creative Studio
                </span>
              </div>

              <h1 className="font-display text-display-2xl font-light text-[var(--cream)] leading-none mb-6 fade-up fade-up-delay-1">
                We craft{" "}
                <em className="italic text-[var(--gold)]">bold</em>
                <br />
                digital stories
              </h1>

              <p className="font-sans text-lg font-light text-[oklch(97%_0.012_95_/_0.55)] max-w-xl leading-relaxed fade-up fade-up-delay-2">
                Verdant Studio is a creative agency specializing in brand identity, 
                digital design, and immersive web experiences that leave a lasting impression.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10 fade-up fade-up-delay-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[var(--gold)] text-[var(--charcoal)] font-sans text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[var(--gold-light)] hover:shadow-gold-sm"
                >
                  View Our Work
                  <ArrowDownRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-[oklch(97%_0.012_95_/_0.25)] text-[var(--cream)] font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:border-[oklch(97%_0.012_95_/_0.5)] hover:bg-[oklch(97%_0.012_95_/_0.05)]"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div className="lg:col-span-4 fade-up fade-up-delay-4">
              <div className="border border-[oklch(97%_0.012_95_/_0.12)] p-8 space-y-8">
                {[
                  { num: "120+", label: "Projects Delivered" },
                  { num: "8 yrs", label: "Studio Experience" },
                  { num: "40+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="border-b border-[oklch(97%_0.012_95_/_0.08)] pb-8 last:border-0 last:pb-0">
                    <div className="font-display text-5xl font-light text-[var(--gold)] leading-none mb-1">
                      {stat.num}
                    </div>
                    <div className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 border-t border-[oklch(97%_0.012_95_/_0.1)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {["Brand Identity", "Web Design", "Motion", "Strategy"].map((tag) => (
              <span key={tag} className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.3)] hidden sm:block">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[oklch(97%_0.012_95_/_0.3)]">
            <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDownRight size={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
