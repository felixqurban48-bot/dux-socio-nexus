import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { toast } from "sonner";

const fields = [
  { name: "name", label: "Full Name", type: "text", placeholder: "Jane Whitmore" },
  { name: "email", label: "Business Email", type: "email", placeholder: "jane@company.com" },
  { name: "company", label: "Company Name", type: "text", placeholder: "Whitmore Industrial" },
  { name: "website", label: "Company Website", type: "url", placeholder: "https://" },
];

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="relative isolate overflow-hidden px-6 py-32 lg:py-44">
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute inset-x-0 top-0 h-[60vh] [background:var(--gradient-halo)]"
      />
      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Discovery"
          title="Let's Build Your Next Sales Pipeline."
          subtitle="Tell us about your business and growth goals. We'll review your business before reaching out because every conversation starts with research—not a sales pitch."
        />

        <Reveal delay={140}>
          <form
            className="glass-panel mt-16 rounded-[1.75rem] p-8 sm:p-11"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              const form = e.currentTarget;
              setTimeout(() => {
                setSubmitting(false);
                form.reset();
                toast.success("Request received", {
                  description: "We'll review your business and reach out shortly.",
                });
              }, 700);
            }}
          >
            <div className="grid gap-7 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="eyebrow">{f.label}</span>
                  <input
                    required={f.name !== "website"}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    className="mt-3 h-11 w-full border-0 border-b border-border bg-transparent text-sm text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-gold/60"
                  />
                </label>
              ))}
            </div>

            <label className="mt-9 block">
              <span className="eyebrow">What is your biggest growth challenge?</span>
              <textarea
                required
                name="challenge"
                rows={4}
                placeholder="Tell us where pipeline breaks down today."
                className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-sm text-foreground outline-none transition-colors duration-500 placeholder:text-muted-foreground/50 focus:border-gold/60"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-11 inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {submitting ? "Sending…" : "Request a Discovery Call"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
