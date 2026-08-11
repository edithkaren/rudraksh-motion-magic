import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Works } from "@/components/portfolio/Works";
import { ToolsMarquee, Stats, Contact } from "@/components/portfolio/Sections";

const title = "Rudraksh Paliwal — AI Video Editor & Motion Designer";
const description =
  "Portfolio of Rudraksh Paliwal, AI video editor: generative film, motion graphics and a full AI post pipeline. Watch live projects and hire for your next spot.";

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
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <ToolsMarquee />
      <Works />
      <Stats />
      <Contact />
    </main>
  );
}
