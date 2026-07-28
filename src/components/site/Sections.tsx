import {
  Search,
  Brain,
  PenLine,
  Handshake,
  Filter,
  FileText,
  Target,
  Mail,
  CalendarCheck,
  NotebookPen,
  BarChart3,
  Gem,
  Check,
  X,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  "Commercial Solar",
  "Commercial Roofing",
  "Commercial HVAC",
  "Industrial Services",
];

const principles = [
  {
    icon: Search,
    title: "Research First",
    body: "Every campaign starts with understanding your ideal customer before a single message is sent.",
  },
  {
    icon: Brain,
    title: "Understand Deeply",
    body: "We study every prospect's business, goals, and context before reaching out.",
  },
  {
    icon: PenLine,
    title: "Personalize Thoughtfully",
    body: "Every message is written for the prospect—not copied from a template.",
  },
  {
    icon: Handshake,
    title: "Build Trust",
    body: "We begin conversations before asking for meetings.",
  },
  {
    icon: Filter,
    title: "Qualify Carefully",
    body: "Your calendar should only be filled with qualified opportunities—not random conversations.",
  },
  {
    icon: FileText,
    title: "Prepare Thoroughly",
    body: "Every meeting is supported with research, insights, and warm-up notes.",
  },
];

const traditional = [
  "Generic templates",
  "Mass emails",
  "No research",
  "Sales-first messaging",
  "Low-quality responses",
  "One-size-fits-all outreach",
  "Random meetings",
];

const duxsocio = [
  "Research First",
  "Personalized Conversations",
  "Deep Business Understanding",
  "Relationship-First Approach",
  "Qualified Opportunities",
  "Tailored Outreach Strategy",
  "Fully Prepared Conversations",
];

const framework = [
  {
    title: "Research",
    body: "We identify the right companies and decision-makers before outreach begins.",
  },
  {
    title: "Understand",
    body: "We study every prospect's business, industry, and current situation.",
  },
  {
    title: "Personalize",
    body: "Every outreach is written around the prospect—not around a generic template.",
  },
  {
    title: "Build Trust",
    body: "We focus on creating genuine conversations instead of immediate sales pitches.",
  },
  {
    title: "Qualify",
    body: "We identify genuine interest before scheduling qualified meetings.",
  },
  {
    title: "Prepare",
    body: "Before every meeting, we provide research, warm-up notes, and context so your team enters every conversation prepared.",
  },
];

const services = [
  { icon: Target, title: "Outbound Lead Generation" },
  { icon: Search, title: "Prospect Research" },
  { icon: Mail, title: "Personalized Outreach" },
  { icon: CalendarCheck, title: "Appointment Setting" },
  { icon: NotebookPen, title: "Meeting Preparation" },
  { icon: BarChart3, title: "Weekly Reporting" },
];

const pillars = [
  { title: "Research", body: "Every decision starts with understanding—not assumptions." },
  { title: "Relationships", body: "We build trust before asking for meetings." },
  { title: "Precision", body: "Quality always comes before quantity." },
  {
    title: "Preparation",
    body: "Every meeting begins long before it appears on your calendar.",
  },
];

const deliverables = [
  "Qualified Prospect Lists",
  "Personalized Outreach Campaigns",
  "Cold Email Sequences",
  "LinkedIn Outreach",
  "Weekly Campaign Reports",
  "Prospect Research",
  "Meeting Warm-Up Notes",
  "Executive Meeting Briefs",
  "Campaign Performance Insights",
  "Next-Step Recommendations",
];

const faqs = [
  {
    q: "How long before outreach starts?",
    a: "Most campaigns begin outreach within 7 to 10 business days. That window is spent on research: defining your ideal customer profile, building a verified prospect list, and writing messaging that reflects how your business actually creates value.",
  },
  {
    q: "Which industries do you work with?",
    a: "We focus on commercial service companies—commercial solar, commercial roofing, commercial HVAC, and industrial services—where deal sizes are meaningful and decisions are made by a small group of executives.",
  },
  {
    q: "How do you research prospects?",
    a: "We review company filings, project announcements, hiring signals, facility footprints, leadership changes, and public commentary from decision-makers, then translate that into a specific, relevant reason to reach out.",
  },
  {
    q: "How often do I receive reports?",
    a: "Weekly. Each report covers outreach volume, reply quality, booked meetings, messaging performance, and the adjustments we're making for the following week.",
  },
  {
    q: "Do you personalize every campaign?",
    a: "Yes. Campaigns are built from scratch around your offer, your market, and your positioning. Individual messages reference the prospect's own business context—never a swapped-in variable in a shared template.",
  },
  {
    q: "What happens before meetings?",
    a: "You receive a warm-up note and an executive brief: who you're meeting, what their business looks like, what prompted the conversation, and the questions worth asking.",
  },
  {
    q: "How do discovery calls work?",
    a: "We review your business before the call. The conversation is a working session about your market, your growth goals, and whether research-driven outbound is the right fit—not a pitch.",
  },
];

function Section({
  id,
  children,
  tone = "light",
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "light" | "alt";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 py-32 lg:py-48 ${tone === "alt" ? "bg-canvas-alt" : "bg-canvas"} ${className}`}
    >
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Watermark({ className = "" }: { className?: string }) {
  return (
    <img
      src={mark}
      alt=""
      aria-hidden
      loading="lazy"
      width={1024}
      height={1024}
      className={`watermark pointer-events-none absolute select-none ${className}`}
    />
  );
}

export function Industries() {
  return (
    <Section>
      <SectionHeading eyebrow="Focus" title="Built for Commercial Service Companies" />
      <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
        {industries.map((item, i) => (
          <Reveal key={item} delay={i * 90}>
            <span className="lux-card lux-card-hover inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm text-secondary-foreground">
              <span className="size-1 rounded-full bg-gold" />
              {item}
            </span>
          </Reveal>
        ))}
      </div>
      <div className="hairline mx-auto mt-28 max-w-3xl opacity-70" />
    </Section>
  );
}

export function Relationships() {
  return (
    <Section id="philosophy" tone="alt">
      <Watermark className="-right-24 -top-40 w-[26rem]" />
      <SectionHeading
        eyebrow="Philosophy"
        title={
          <>
            Relationships <span className="italic text-gradient-gold">Before</span> Revenue.
          </>
        }
        subtitle={
          <>
            Most outbound campaigns fail because they focus on selling too early. At
            DuxSocio, we believe lasting business relationships begin with research,
            understanding, and genuine conversations—not mass outreach. Every campaign we
            build is designed to earn trust before asking for a meeting, because better
            conversations create better business opportunities.
          </>
        }
      />
      <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <div className="group lux-card lux-card-hover h-full rounded-3xl p-10">
              <p.icon
                className="size-5 text-gold transition-transform duration-700 [transition-timing-function:var(--ease-lux)] group-hover:-translate-y-0.5"
                strokeWidth={1.25}
              />
              <h3 className="mt-8 text-lg font-medium text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Difference() {
  return (
    <Section id="difference">
      <SectionHeading
        eyebrow="Comparison"
        title="The DuxSocio Difference"
        subtitle="Most outbound fails because it's designed to send more messages. Ours is designed to create better conversations."
      />
      <div className="relative mt-24 grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-border bg-canvas-alt p-10">
            <p className="eyebrow">Traditional Outreach</p>
            <ul className="mt-8 space-y-5">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" strokeWidth={1.5} />
                  <span className="text-sm text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex items-center justify-center lg:self-center">
          <span className="font-display text-sm tracking-[0.3em] text-muted-foreground/70">
            VS
          </span>
        </Reveal>

        <Reveal delay={200}>
          <div className="lux-card lux-card-hover rounded-3xl p-10">
            <p className="eyebrow !text-gold">The DuxSocio Approach</p>
            <ul className="mt-8 space-y-5">
              {duxsocio.map((t) => (
                <li key={t} className="flex items-start gap-3.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-sm text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Framework() {
  return (
    <Section id="framework" tone="alt">
      <Watermark className="-left-32 bottom-0 w-[24rem]" />
      <SectionHeading
        eyebrow="Process"
        title={
          <>
            The DuxSocio Outbound Framework
            <span className="align-super text-base text-muted-foreground">&trade;</span>
          </>
        }
        subtitle="A great outbound campaign isn't built by sending more messages. It's built by following the right process—every single time."
      />
      <div className="relative mx-auto mt-28 max-w-3xl">
        <div className="absolute bottom-0 left-[15px] top-2 w-px bg-gradient-to-b from-gold/50 via-border to-transparent md:left-[19px]" />
        <ol className="space-y-16">
          {framework.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={40}>
                <div className="group relative flex gap-7 pl-0">
                  <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-xs text-gold shadow-[var(--shadow-card)] transition-transform duration-700 [transition-timing-function:var(--ease-lux)] group-hover:-translate-y-0.5 md:size-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl text-foreground">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-20 flex items-center justify-center gap-4">
          <span className="hairline max-w-24 flex-1" />
          <img
            src={mark}
            alt=""
            aria-hidden
            loading="lazy"
            width={1024}
            height={1024}
            className="size-6 object-contain opacity-40"
          />
          <span className="hairline max-w-24 flex-1" />
        </div>
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Services Built for Sustainable Growth"
        subtitle="We handle the outbound work that helps your team spend less time chasing prospects and more time building meaningful business relationships."
      />
      <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 100}>
            <div className="group lux-card lux-card-hover h-full rounded-3xl p-10">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-canvas-alt">
                <s.icon className="size-[18px] text-gold" strokeWidth={1.25} />
              </span>
              <h3 className="mt-8 text-base font-medium text-foreground">{s.title}</h3>
              <div className="hairline mt-6 opacity-60" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Pillars() {
  return (
    <Section id="why" tone="alt">
      <SectionHeading
        eyebrow="Principles"
        title="The Four Pillars of DuxSocio"
        subtitle="Everything we do is built on four principles that guide every campaign, every conversation, and every client relationship."
      />
      <div className="mt-24 grid gap-6 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <div className="group lux-card lux-card-hover relative h-full overflow-hidden rounded-[1.75rem] p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-30 [background:var(--gradient-gold)]"
              />
              <Gem className="size-5 text-gold" strokeWidth={1.1} />
              <h3 className="font-display mt-10 text-3xl text-foreground">{p.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Deliverables() {
  return (
    <Section id="deliverables">
      <SectionHeading eyebrow="Deliverables" title="What You'll Receive" />
      <div className="mt-24 grid gap-4 sm:grid-cols-2">
        {deliverables.map((d, i) => (
          <Reveal key={d} delay={(i % 2) * 80}>
            <div className="lux-card lux-card-hover flex items-center gap-4 rounded-2xl px-7 py-5">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-gold/40">
                <Check className="size-3 text-gold" strokeWidth={2} />
              </span>
              <span className="text-sm text-foreground/90">{d}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" tone="alt">
      <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
      <Reveal className="mx-auto mt-20 max-w-3xl">
        <div className="lux-card rounded-[1.75rem] px-8 sm:px-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-7 text-left text-base font-normal text-foreground transition-colors duration-500 hover:text-gold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8 pr-8 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}
