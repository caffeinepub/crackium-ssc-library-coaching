import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[var(--charcoal)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[oklch(97%_0.012_95_/_0.1)]">
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--gold)] mb-3 block">
            Get In Touch
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="font-display text-display-lg font-light text-[var(--cream)]">
              Start a Project
            </h2>
            <p className="font-sans text-base text-[oklch(97%_0.012_95_/_0.5)] max-w-sm leading-relaxed">
              Have a project in mind? We'd love to hear about it. Let's create something remarkable together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact info */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="font-display text-xl font-light text-[var(--cream)] mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@verdantstudio.co" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 234-5678" },
                  { icon: MapPin, label: "Studio", value: "New York, NY 10001" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-8 h-8 border border-[oklch(97%_0.012_95_/_0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-[var(--gold)]" />
                    </div>
                    <div>
                      <div className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.35)] mb-0.5">
                        {label}
                      </div>
                      <div className="font-sans text-sm text-[var(--cream)]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[oklch(97%_0.012_95_/_0.1)] pt-8">
              <h3 className="font-display text-xl font-light text-[var(--cream)] mb-4">
                Follow Our Work
              </h3>
              <div className="flex gap-4">
                {["Instagram", "Dribbble", "LinkedIn", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.35)] hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="border border-[var(--forest-light)] p-12 text-center">
                <div className="font-display text-4xl font-light text-[var(--gold)] mb-4">
                  Thank you.
                </div>
                <p className="font-sans text-sm text-[oklch(97%_0.012_95_/_0.5)]">
                  We've received your message and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)] block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border border-[oklch(97%_0.012_95_/_0.15)] px-4 py-3 font-sans text-sm text-[var(--cream)] placeholder-[oklch(97%_0.012_95_/_0.25)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)] block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border border-[oklch(97%_0.012_95_/_0.15)] px-4 py-3 font-sans text-sm text-[var(--cream)] placeholder-[oklch(97%_0.012_95_/_0.25)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)] block mb-2">
                    Project Type
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full bg-[var(--charcoal)] border border-[oklch(97%_0.012_95_/_0.15)] px-4 py-3 font-sans text-sm text-[var(--cream)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
                  >
                    <option value="" className="bg-[var(--charcoal)]">Select a service...</option>
                    <option value="brand" className="bg-[var(--charcoal)]">Brand Identity</option>
                    <option value="web" className="bg-[var(--charcoal)]">Web Design & Dev</option>
                    <option value="motion" className="bg-[var(--charcoal)]">Motion & Animation</option>
                    <option value="strategy" className="bg-[var(--charcoal)]">Digital Strategy</option>
                    <option value="other" className="bg-[var(--charcoal)]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-[oklch(97%_0.012_95_/_0.4)] block mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-[oklch(97%_0.012_95_/_0.15)] px-4 py-3 font-sans text-sm text-[var(--cream)] placeholder-[oklch(97%_0.012_95_/_0.25)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200 resize-none"
                    placeholder="Describe your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-[var(--charcoal)] font-sans text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[var(--gold-light)] hover:shadow-gold-sm"
                >
                  Send Message
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
