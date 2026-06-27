import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Process, FAQList, FinalCTA } from "@/components/site/sections";
import { img, BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/cara-pemesanan")({
  head: () => ({
    meta: [
      { title: `Cara Pemesanan — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Booking rental mobil di Jogja hanya dalam 4 langkah mudah via WhatsApp. Konsultasi, pilih armada, konfirmasi, nikmati perjalanan.",
      },
      { property: "og:title", content: `Cara Pemesanan — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Proses booking yang sederhana, cepat, dan transparan.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Cara Pemesanan"
        title="Booking mudah"
        italic="dalam 4 langkah"
        desc="Proses sederhana, respon cepat, dan harga transparan — Anda tinggal menikmati perjalanan."
        image={img("1469854523086-cc02fe5d8800")}
      />
      <Process />
      <FAQList limit={4} showCta />
      <FinalCTA />
    </SiteLayout>
  ),
});
