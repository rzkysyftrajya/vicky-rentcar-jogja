import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { FinalCTA } from "@/components/site/sections";
import { img, BRAND, wa } from "@/lib/site-data";
import { ArrowRight, MapPin } from "lucide-react";

const paket = [
  {
    judul: "Paket Borobudur–Prambanan",
    waktu: "1–2 Hari",

    dest: ["Candi Borobudur", "Candi Prambanan"],
    img: "destinasi/candi-borobudur.webp",
    desc: "Kunjungan ikon budaya Yogyakarta dengan itinerary fleksibel dan driver yang hafal rute.",
  },
  {
    judul: "Paket Merapi Lava Tour",
    waktu: "1–2 Hari",
    dest: ["Merapi Lava Tour", "Sleman area"],
    img: "destinasi/merapi-lava-tour.webp",
    desc: "Sensasi wisata Merapi dengan pengalaman aman, nyaman, dan terarah.",
  },
  {
    judul: "Paket Selatan: Parangtritis–HeHa",
    waktu: "1 Hari",
    dest: ["Pantai Parangtritis", "HeHa Sky View"],
    img: "destinasi/heha-skyview.webp",
    desc: "Eksplor panorama selatan Jogja untuk momen liburan yang berkesan.",
  },
  {
    judul: "Paket Kraton & Malioboro Night Walk",
    waktu: "1 Hari",
    dest: ["Keraton Yogyakarta", "Malioboro"],
    img: "destinasi/keraton-yogyakarta.webp",
    desc: "Rasakan nuansa budaya Jawa di Keraton, lalu lanjut jelajah kuliner dan suasana malam di Malioboro.",
  },
  {
    judul: "Paket Kota Heritage: Taman Sari–Kotagede",
    waktu: "1 Hari",
    dest: ["Kota Yogyakarta"],
    img: "destinasi/malioboro.webp",
    desc: "Gaya jelajah santai: spot ikonik kota, bangunan bersejarah, dan rekomendasi kuliner lokal sesuai preferensi Anda.",
  },
  {
    judul: "Paket Sunset Pantai Parangtritis",
    waktu: "1 Hari",
    dest: ["Pantai Parangtritis"],
    img: "destinasi/pantai-parangtritis.webp",
    desc: "Fokus menikmati panorama selatan—jadwal fleksibel untuk momen sunset terbaik dengan driver berpengalaman.",
  },
  {
    judul: "Paket Borobudur Premium (Sunrise Option)",
    waktu: "1 Hari",
    dest: ["Candi Borobudur"],
    img: "destinasi/candi-borobudur.webp",
    desc: "Varian lebih praktis untuk menikmati Borobudur, dengan opsi early schedule agar lebih nyaman dan tidak tergesa.",
  },
  {
    judul: "Paket Keraton + HeHa View",
    waktu: "1 Hari",
    dest: ["Keraton Yogyakarta", "HeHa Sky View"],
    img: "destinasi/heha-skyview.webp",
    desc: "Kombinasi budaya dan pemandangan: diawali aktivitas di pusat budaya, diakhiri view spektakuler dari ketinggian.",
  },
] as const;

export const Route = createFileRoute("/paket-wisata")({
  head: () => ({
    meta: [
      { title: `Paket Wisata — ${BRAND.name}` },
      {
        name: "description",
        content:
          "Paket wisata Jogja fleksibel ke ikon budaya dan panorama alam. Booking via WhatsApp dengan driver profesional.",
      },
      { property: "og:title", content: `Paket Wisata Jogja — ${BRAND.name}` },
      {
        property: "og:description",
        content: "Paket wisata fleksibel ke destinasi favorit Yogyakarta.",
      },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Paket Wisata"
        title="Pilih paket"
        italic="sesuai gaya liburan Anda"
        desc="Kami susun itinerary yang rapi, driver berpengalaman, dan armada nyaman. Tinggal konsultasi via WhatsApp — kami bantu sesuaikan jadwal dan kebutuhan rombongan."
        image={img("section-home.webp")}
      />

      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
              Paket Unggulan
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
              Rekomendasi <span className="text-gradient-gold italic">perjalanan</span> terbaik
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
              Setiap paket bisa disesuaikan durasi, titik kumpul, dan preferensi destinasi.
              Konsultasi dulu, lalu kami bantu finalisasi itinerary.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {paket.map((p) => (
              <article
                key={p.judul}
                className="group overflow-hidden rounded-3xl bg-white border border-border hover:border-gold/40 transition-all duration-500 shadow-sm"
              >
                <div className="relative aspect-[16/10] bg-navy-dark/5 overflow-hidden">
                  <img
                    src={img(p.img)}
                    alt={p.judul}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white">
                      {p.waktu}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-navy">{p.judul}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.dest.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center rounded-full bg-navy-dark/5 border border-border px-3 py-1 text-xs font-semibold text-navy"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <a
                    href={wa(`Halo Vicky, saya ingin booking ${p.judul} (${p.waktu}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy hover:bg-navy-light text-white font-semibold py-3 text-sm transition group/btn"
                  >
                    <img src="/assets/icon/wa.webp" alt="" className="h-4 w-4" />
                    Booking via WhatsApp
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-navy-dark text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gold/15 via-transparent to-transparent" />
            <div className="relative p-8 sm:p-10">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold-light font-semibold">
                Tidak cocok dengan paket di atas?
              </div>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-[1.1]">
                Kami bisa buat itinerary <span className="text-gradient-gold italic">custom</span>
              </h3>
              <p className="mt-5 text-[15px] text-white/70 leading-relaxed max-w-2xl">
                Sebutkan destinasi, tanggal, jumlah penumpang, dan durasi. Tim kami akan bantu susun
                rute paling nyaman dan efisien.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={wa("Halo Vicky, saya ingin itinerary custom paket wisata.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-4 !px-7"
                >
                  <img src="/assets/icon/wa.webp" alt="" className="h-5 w-5" />
                  Buat Itinerary Custom
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  ),
});
