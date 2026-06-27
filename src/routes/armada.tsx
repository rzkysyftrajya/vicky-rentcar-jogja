import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FleetGrid, FinalCTA } from "@/components/site/sections";
import { img, BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/armada")({
  head: () => ({
    meta: [
      { title: `Armada — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Pilih armada premium kami: Alphard, Innova Zenix, Fortuner, Hiace, dan lainnya. Semua armada terawat dengan driver profesional.",
      },
      { property: "og:title", content: `Armada Premium — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Armada lengkap dari city car hemat hingga MPV mewah dan van rombongan.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Armada Kami"
        title="Armada premium"
        italic="untuk setiap perjalanan"
        desc="Lebih dari 11 pilihan kendaraan terawat — dari city car hemat, MPV keluarga, SUV eksekutif, hingga Hiace rombongan."
        image={img("1606664515524-ed2f786a0bd6")}
      />
      <FleetGrid />
      <FinalCTA />
    </SiteLayout>
  ),
});
