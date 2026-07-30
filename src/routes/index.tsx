import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Craft } from "@/components/site/Craft";
import { Gallery } from "@/components/site/Gallery";
import { Barbers } from "@/components/site/Barbers";
import { Visit } from "@/components/site/Visit";

const title = "Ironhand Barbers — Iron Hand, Light Touch · Shoreditch";
const description =
  "A three-chair barbershop in Shoreditch cutting hair that holds its edge. Skin fades, scissor cuts, beard shaping and straight-razor shaves from £12. Walk-ins welcome, Tue–Sun.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Services />
      <Craft />
      <Gallery />
      <Barbers />
      <Visit />
    </main>
  );
}
