import mark from "@/assets/duxsocio-mark.png";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-6 pb-16 pt-24">
      <div className="hairline mx-auto max-w-6xl" />
      <div className="mx-auto mt-20 max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={mark}
                  alt="DuxSocio"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="size-9 object-contain"
                />
                <span className="font-display text-2xl tracking-tight">DuxSocio</span>
              </div>
              <p className="font-display mt-8 text-xl leading-snug text-muted-foreground">
                Research. <span className="text-foreground">Relationships.</span>{" "}
                <span className="text-gradient-gold italic">Results.</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-muted-foreground md:items-end">
              <a
                href="mailto:hello@duxsocio.com"
                className="transition-colors duration-500 hover:text-foreground"
              >
                hello@duxsocio.com
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-500 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <div className="hairline mt-20 opacity-70" />

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            We don&rsquo;t believe in sending more emails.
            <br />
            We believe in starting better conversations.
          </p>
          <p className="text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} DuxSocio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
