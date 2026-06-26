import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ServicesGrid, FinalCTA } from "@/components/site/sections";
import { img, BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: `Layanan — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Layanan kami: Premium Rentcar, antar jemput Bandara YIA, paket wisata Jogja, perjalanan korporat, family trip, hingga wedding & event.",
      },
      { property: "og:title", content: `Layanan Lengkap — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Solusi transportasi premium untuk setiap momen di Yogyakarta.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Layanan Kami"
        title="Solusi transportasi"
        italic="untuk setiap momen"
        desc="Mulai dari antar jemput bandara, paket wisata, hingga kebutuhan korporat dan event — semua dengan standar premium."
        image={img("1507003211169-0a1dd7228f2d", 1920, 1080)}
      />
      <ServicesGrid />
      <FinalCTA />
    </SiteLayout>
  ),
});
