import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FAQList, FinalCTA } from "@/components/site/sections";
import { img, BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Jawaban atas pertanyaan yang sering diajukan seputar rental mobil + driver di Yogyakarta.",
      },
      { property: "og:title", content: `FAQ — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Tanya jawab seputar layanan rental mobil premium di Jogja.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang"
        italic="sering diajukan"
        desc="Tidak menemukan jawaban yang Anda cari? Tim kami siap membantu via WhatsApp 24/7."
        image={img("1492144534655-ae79c964c9d7")}
      />
      <FAQList />
      <FinalCTA />
    </SiteLayout>
  ),
});
