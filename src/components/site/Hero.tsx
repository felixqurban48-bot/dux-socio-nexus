import { Reveal } from "./Reveal";
import mark from "@/assets/duxsocio-mark.png";

const particles = [
  { left: "12%", delay: "0s", dur: "14s" },
  { left: "26%", delay: "3s", dur: "18s" },
  { left: "41%", delay: "6s", dur: "16s" },
  { left: "58%", delay: "1.5s", dur: "20s" },
  { left: "73%", delay: "8s", dur: "15s" },
  { left: "88%", delay: "4.5s", dur: "19s" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-28 pt-40 sm:pt-48 lg:pb-40 lg:pt-56">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute inset-x-0 -top-40 h-[70vh] [background:var(--gradient-halo)]"
      />
      {/* Huge blurred logo */}
      <img
        src={mark}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(120vw,1100px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.055] blur-[6px] select-none"
      />
      {/* Particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-24 size-[3px] rounded-full bg-gold/60"
            style={{
              left: p.left,
              animation: `lux-float ${p.dur} linear ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="eyebrow !text-foreground/70">
              Outbound Lead Generation
            </span>
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display mt-10 text-balance text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem]">
            Business Doesn&rsquo;t Start With A Sale.
            <span className="mt-2 block text-gradient-gold italic">
              It Starts With A Conversation.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            DuxSocio helps commercial service companies connect with qualified
            decision-makers through research-driven outbound prospecting, personalized
            outreach, and appointment setting.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:-translate-y-0.5 hover:opacity-90"
            >
              Book a Discovery Call
              <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#framework"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-7 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:-translate-y-0.5 hover:border-gold/40"
            >
              See Our Framework
            </a>
          </div>
        </Reveal>
      </div>

      <div className="hairline mx-auto mt-28 max-w-6xl" />
    </section>
  );
}
