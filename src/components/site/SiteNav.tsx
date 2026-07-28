import { useEffect, useState } from "react";
import mark from "@/assets/duxsocio-mark.png";
import { cn } from "@/lib/utils";

const links = [
  { id: "philosophy", label: "Philosophy" },
  { id: "difference", label: "Difference" },
  { id: "framework", label: "Framework" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why DuxSocio" },
  { id: "deliverables", label: "Deliverables" },
  { id: "faq", label: "FAQ" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-border px-3 py-2.5 pl-5 backdrop-blur-2xl transition-all duration-700 [transition-timing-function:var(--ease-lux)] sm:px-4 sm:pl-6",
          scrolled
            ? "bg-background/90 shadow-[var(--shadow-card-hover)]"
            : "bg-background/85 shadow-[var(--shadow-card)]",
        )}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2.5"
          aria-label="DuxSocio home"
        >
          <img
            src={mark}
            alt=""
            width={1024}
            height={1024}
            className="size-7 object-contain transition-transform duration-700 [transition-timing-function:var(--ease-lux)] group-hover:scale-105"
          />
          <span className="font-display text-xl tracking-tight text-foreground">DuxSocio</span>
        </button>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[0.8rem] transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:bg-accent",
                  active === l.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-1 block h-px origin-center bg-gold transition-transform duration-700 [transition-timing-function:var(--ease-lux)]",
                    active === l.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center rounded-full px-4 text-[0.8rem] text-muted-foreground transition-colors duration-500 hover:text-foreground sm:inline-flex"
          >
            LinkedIn
          </a>
          <button
            onClick={() => go("contact")}
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-[0.8rem] font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-all duration-500 [transition-timing-function:var(--ease-lux)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
          >
            Book a Discovery Call
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border xl:hidden"
          >
            <span className="h-px w-4 bg-foreground/70" />
            <span className="h-px w-4 bg-foreground/70" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/90 shadow-[var(--shadow-card)] backdrop-blur-2xl xl:hidden">
          <ul className="px-5 py-3">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="w-full rounded-xl px-2 py-3 text-left text-sm text-muted-foreground transition-colors duration-500 hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
