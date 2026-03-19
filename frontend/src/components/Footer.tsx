import { ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  Studio: ["About Us", "Our Work", "Services", "Process"],
  Connect: ["Instagram", "Dribbble", "LinkedIn", "Behance"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "verdant-studio"
  );

  return (
    <footer className="bg-[oklch(12%_0.02_155)] border-t border-[oklch(97%_0.012_95_/_0.06)]">
      {/* Marquee ticker */}
      <div className="border-b border-[oklch(97%_0.012_95_/_0.06)] py-4 overflow-hidden">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 flex-shrink-0">
              <span className="font-display text-lg font-light italic text-[oklch(97%_0.012_95_/_0.15)]">
                Brand Identity
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-40 flex-shrink-0" />
              <span className="font-display text-lg font-light italic text-[oklch(97%_0.012_95_/_0.15)]">
                Web Design
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-40 flex-shrink-0" />
              <span className="font-display text-lg font-light italic text-[oklch(97%_0.012_95_/_0.15)]">
                Motion & Animation
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-40 flex-shrink-0" />
              <span className="font-display text-lg font-light italic text-[oklch(97%_0.012_95_/_0.15)]">
                Digital Strategy
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] opacity-40 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[var(--forest)] flex items-center justify-center">
                <span className="text-[var(--cream)] font-display font-bold text-sm">V</span>
              </div>
              <span className="font-display text-xl font-semibold text-[var(--cream)]">
                Verdant<span className="text-[var(--gold)]">.</span>
              </span>
            </div>
            <p className="font-sans text-sm text-[oklch(97%_0.012_95_/_0.4)] leading-relaxed max-w-xs mb-8">
              A creative studio crafting bold digital experiences, brand identities, and visual stories that move people.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[oklch(97%_0.012_95_/_0.2)] text-[var(--cream)] font-sans text-sm font-medium tracking-wide transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.35)] mb-5">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-sans text-sm text-[oklch(97%_0.012_95_/_0.5)] hover:text-[var(--cream)] transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(97%_0.012_95_/_0.06)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-xs text-[oklch(97%_0.012_95_/_0.3)]">
            © {year} Verdant Studio. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[oklch(97%_0.012_95_/_0.3)] hover:text-[oklch(97%_0.012_95_/_0.5)] transition-colors duration-200"
          >
            Built with{" "}
            <Heart size={11} className="text-[var(--gold)] fill-[var(--gold)]" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
