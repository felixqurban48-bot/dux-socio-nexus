import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import {
  Industries,
  Relationships,
  Difference,
  Framework,
  Services,
  Pillars,
  Deliverables,
  Faq,
} from "@/components/site/Sections";
import { ContactSection } from "@/components/site/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "DuxSocio — Research-Driven Outbound Lead Generation";
const description =
  "DuxSocio connects commercial service companies with qualified decision-makers through research-driven prospecting, personalized outreach, and appointment setting.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <Industries />
      <Relationships />
      <Difference />
      <Framework />
      <Services />
      <Pillars />
      <Deliverables />
      <Faq />
      <ContactSection />
      <SiteFooter />
      <Toaster />
    </main>
  );
}
