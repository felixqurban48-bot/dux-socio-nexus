import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import mark from "@/assets/duxsocio-mark.png";
import { CalendarCheck, FileSearch, UserRound } from "lucide-react";

const particles = [
  { left: "12%", delay: "0s", dur: "14s" },
  { left: "26%", delay: "3s", dur: "18s" },
  { left: "41%", delay: "6s", dur: "16s" },
  { left: "58%", delay: "1.5s", dur: "20s" },
  { left: "73%", delay: "8s", dur: "15s" },
  { left: "88%", delay: "4.5s", dur: "19s" },
];

const cards = [
  {
    icon: UserRound,
    label: "Qualified Lead",
    lines: ["CEO", "Houston, TX"],
    pos: "left-[1%] top-[16%]",
    dur: "11s",
    delay: "0s",
  },
  {
    icon: CalendarCheck,
    label: "Meeting Booked",
    lines: ["Wednesday", "10:30 AM"],
    pos: "right-[1%] top-[22%]",
    dur: "13s",
    delay: "1.6s",
  },
  {
    icon: FileSearch,
    label: "Research Complete",
    lines: ["Industrial HVAC"],
    pos: "right-[3%] bottom-[18%]",
    dur: "15s",
    delay: "3.2s",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="lux-dark relative isolate overflow-hidden bg-background px-6 pb-40 pt-40 text-foreground sm:pt-48 lg:pb-56 lg:pt-56"
    >
      {/* Grid texture */}
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute inset-x-0 -top-40 h-[70vh] [background:var(--gradient-halo)]"
      />
      {/* Blurred light orbs */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -left-24 top-24 size-[26rem] rounded-full bg-gold/[0.07] blur-[110px]"
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-20 bottom-0 size-[22rem] rounded-full bg-silver/[0.05] blur-[120px]"
        style={{ animationDelay: "6s" }}
      />
      {/* Mouse spotlight */}
      <div aria-hidden className="hero-spotlight pointer-events-none absolute inset-0" />
      {/* Huge blurred logo */}
      <img
        src={mark}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(120vw,1100px)] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.055] blur-[6px]"
      />
      {/* Connection lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M6 26 C 30 40, 62 12, 96 34"
          className="lux-line"
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.28"
          strokeWidth="0.15"
        />
        <path
          d="M10 84 C 38 66, 66 92, 94 62"
          className="lux-line"
          fill="none"
          stroke="var(--gold)"
          strokeOpacity="0.2"
          strokeWidth="0.15"
          style={{ animationDelay: "3s" }}
        />
      </svg>
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

      {/* Floating glass cards */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden 2xl:block">
        {cards.map((c) => (
          <div
            key={c.label}
            className={`glass-panel absolute w-52 rounded-2xl px-5 py-4 ${c.pos}`}
            style={{ animation: `lux-hover ${c.dur} var(--ease-lux) ${c.delay} infinite` }}
          >
            <div className="flex items-center gap-2.5">
              <c.icon className="size-4 text-gold/85" strokeWidth={1.25} />
              <span className="eyebrow !text-foreground/70">{c.label}</span>
            </div>
            <div className="mt-3 space-y-0.5">
              {c.lines.map((l) => (
                <p key={l} className="text-sm text-muted-foreground">
                  {l}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="eyebrow !text-foreground/70">
              Research. Relationships. Results.
            </span>
          </span>
        </Reveal>

        <h1 className="font-display mt-10 text-balance text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem]">
          <Reveal delay={140}>
            <span className="block">Business Doesn&rsquo;t Start With A Sale.</span>
          </Reveal>
          <Reveal delay={620}>
            <span className="mt-2 block text-gradient-gold italic">
              It Starts With A Conversation.
            </span>
          </Reveal>
        </h1>

        <Reveal delay={980}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            DuxSocio helps commercial service companies connect with qualified
            decision-makers through research-driven outbound prospecting, personalized
            outreach, and appointment setting.
          </p>
        </Reveal>

        <Reveal delay={1160}>
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

        <Reveal delay={1400}>
          <a
            href="#philosophy"
            className="animate-nudge mt-24 inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors duration-500 hover:text-foreground"
          >
            <span aria-hidden className="text-base">
              &darr;
            </span>
            <span className="eyebrow">Scroll to Explore</span>
          </a>
        </Reveal>
      </div>

      {/* Cinematic fade into the light canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[oklch(0.155_0_0/0.6)] to-[oklch(1_0_0)]"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-28 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0 120 C 420 22, 1020 22, 1440 120 Z" fill="oklch(1 0 0)" />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-16 h-24 blur-2xl [background:radial-gradient(50%_100%_at_50%_100%,oklch(0.84_0.055_85/0.12),transparent_70%)]"
      />
    </section>
  );
}
