import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Catalogue } from "@/components/site/Catalogue";
import { Why } from "@/components/site/Why";
import { Reviews } from "@/components/site/Reviews";
import { Visit } from "@/components/site/Visit";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HS Gadgets — Premium pre-owned phones, laptops & tablets in Bengaluru" },
      {
        name: "description",
        content:
          "Hand-inspected used iPhones, MacBooks, iPads and more from HS Gadgets, Bengaluru. Honest grading, fair prices, pan-India delivery.",
      },
      { property: "og:title", content: "HS Gadgets — Premium pre-owned gadgets, Bengaluru" },
      {
        property: "og:description",
        content:
          "Quality-tested used phones, laptops & tablets. 4.9★ on Google. Browse the WhatsApp catalogue.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Catalogue />
      <Why />
      <Reviews />
      <Visit />
      <CTA />
      <Footer />
    </main>
  );
}
