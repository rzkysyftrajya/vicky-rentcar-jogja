import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { DestinationsGrid, FinalCTA } from "@/components/site/sections";
import { img, BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/destinasi")({
  head: () => ({
    meta: [
      { title: `Destinasi Wisata — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Jelajahi destinasi wisata Yogyakarta: Borobudur, Prambanan, Malioboro, Parangtritis, Keraton, HeHa Sky View, Merapi Lava Tour.",
      },
      { property: "og:title", content: `Destinasi Wisata Jogja — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Paket wisata fleksibel ke ikon budaya dan panorama alam Yogyakarta.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Destinasi"
        title="Jelajahi keindahan"
        italic="Jogja bersama kami"
        desc="Dari ikon budaya hingga panorama alam, kami antar Anda ke destinasi favorit dengan armada nyaman dan driver yang hafal rute."
        image={img("1596402184320-417e7178b2cd")}
      />
      <DestinationsGrid />
      <FinalCTA />
    </SiteLayout>
  ),
});
