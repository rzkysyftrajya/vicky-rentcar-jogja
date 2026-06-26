import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  MessageCircle,
  ArrowRight,
  Users,
  MapPin,
  ChevronDown,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import {
  wa,
  img,
  fade,
  fleet,
  services,
  destinations,
  testimonials,
  faqs,
  processSteps,
  WA_NUMBER,
} from "@/lib/site-data";

export function TrustStrip() {
  const items = [
    "Driver Profesional",
    "Armada Premium Terawat",
    "Garansi Tepat Waktu",
    "Konsultasi Gratis 24/7",
    "Harga Transparan",
  ];
  return (
    <section className="bg-navy-dark border-y border-white/5 py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-white/60 text-sm">
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="tracking-[0.2em] uppercase text-xs font-medium">{it}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </section>
  );
}

export function WhyUs() {
  const features = [
    {
      title: "Driver Berpengalaman",
      desc: "Sopir profesional, hafal rute Jogja & sekitarnya, ramah dan komunikatif.",
    },
    {
      title: "Armada Terawat",
      desc: "Kendaraan rutin diservis, interior bersih, wangi, dan siap pakai.",
    },
    {
      title: "Tepat Waktu",
      desc: "Komitmen on-time pickup untuk setiap perjalanan, di mana pun lokasi Anda.",
    },
    {
      title: "Pelayanan Premium",
      desc: "Standar pelayanan setara eksekutif untuk semua tamu kami.",
    },
  ];
  return (
    <section className="py-24 sm:py-32 bg-background relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fade} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxe aspect-[4/5]">
              <img
                src={img("1494976388531-d1058494cdd8", 900, 1100)}
                alt="Pengalaman premium rentcar"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-light">
                  Since 2015
                </div>
                <div className="mt-2 font-display text-2xl font-bold">
                  Pengalaman premium rentcar
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-2xl overflow-hidden shadow-luxe border-4 border-background"
            >
              <img
                src={img("1583121274602-3e2820c69888", 500, 400)}
                alt="Interior mewah"
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div {...fade}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
              Mengapa Memilih Kami
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
              Standar premium untuk{" "}
              <span className="text-gradient-gold italic">setiap perjalanan</span>
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
              Kami percaya transportasi terbaik bukan sekadar sampai tujuan—melainkan pengalaman
              yang nyaman, terpercaya, dan berkesan. Itulah yang kami tawarkan untuk setiap tamu.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-gold font-bold text-sm">0{i + 1}</span>
                    <h3 className="font-display text-lg font-bold text-navy">{f.title}</h3>
                  </div>
                  <p className="mt-2 pl-9 text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <a
              href={wa("Halo Vicky, saya ingin tahu lebih lanjut tentang layanan Anda.")}
              target="_blank"
              rel="noopener"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition group"
            >
              Konsultasi via WhatsApp
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FleetGrid({ limit, showCta }: { limit?: number; showCta?: boolean }) {
  const list = limit ? fleet.slice(0, limit) : fleet;
  return (
    <section id="armada" className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div {...fade} className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
              Armada Kami
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
              Pilih armada untuk <span className="text-gradient-gold italic">setiap kebutuhan</span>
            </h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <p className="text-[15px] text-muted-foreground max-w-md leading-relaxed">
            Dari city car hemat hingga MPV mewah dan van rombongan—semua armada terawat, bersih, dan
            siap melayani perjalanan Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((v, i) => (
            <motion.article
              key={v.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-luxe transition-all duration-500"
            >
              {/* PERBAIKAN: Rasio disesuaikan ke tampilan 644x911 */}
              <div className="relative aspect-[644/911] overflow-hidden bg-navy-dark">
                <img
                  src={img(v.img, 1414, 2000)} // Resolusi gambar asli 1414x2000 px
                  alt={v.name}
                  className="absolute inset-0 h-full w-full object-cover" // Zoom hover dinonaktifkan
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white">
                    {v.transmission}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold-light font-semibold">
                    {v.category}
                  </div>
                  <div className="mt-1 font-display text-xl font-bold">{v.name}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-gold" /> {v.seats}
                  <span className="hidden sm:inline">Penumpang</span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-navy-dark/5 border border-border px-4 py-3">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                      Kursi
                    </div>
                    <div className="mt-1 font-display text-navy font-bold">{v.seats}</div>
                  </div>
                  <div className="rounded-2xl bg-navy-dark/5 border border-border px-4 py-3">
                    <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                      Transmisi
                    </div>
                    <div className="mt-1 font-display text-navy font-bold">{v.transmission}</div>
                  </div>
                </div>

                <a
                  href={wa(`Halo Vicky, saya ingin tanya ketersediaan ${v.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy hover:bg-navy-light text-white font-semibold py-3 text-sm transition group/btn"
                >
                  <MessageCircle className="h-4 w-4 text-gold" /> Tanya via WhatsApp
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {showCta && (
          <div className="mt-14 text-center">
            <Link to="/armada" className="btn-gold">
              Lihat Semua Armada <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ServicesGrid({ showCta }: { showCta?: boolean }) {
  return (
    <section
      id="layanan"
      className="py-24 sm:py-32 bg-navy-dark text-white relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <motion.div {...fade} className="max-w-2xl">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold">
            Layanan
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold leading-[1.1]">
            Solusi <span className="text-gradient-gold italic">transportasi lengkap</span>
            <br className="hidden sm:block" /> untuk setiap momen
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[260px]">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={wa(`Halo Vicky, saya tertarik dengan layanan ${s.title}.`)}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${s.size === "lg" ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <img
                src={img(s.img, s.size === "lg" ? 1000 : 600, s.size === "lg" ? 1000 : 600)}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7">
                <div
                  className={`font-display font-bold text-white ${s.size === "lg" ? "text-2xl sm:text-3xl" : "text-xl"}`}
                >
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed max-w-md">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold group-hover:translate-x-1 transition">
                  Tanya <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          <div className="inline-block rounded-full border border-gold/30 bg-white/[0.04] backdrop-blur px-6 py-3 text-sm">
            <span className="text-white/70">Semua layanan: </span>
            <span className="font-semibold text-gold">Hubungi Kami untuk Detail Harga</span>
          </div>
          {showCta && (
            <Link to="/layanan" className="btn-gold">
              Selengkapnya <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function DestinationsGrid({ limit, showCta }: { limit?: number; showCta?: boolean }) {
  const list = limit ? destinations.slice(0, limit) : destinations;
  return (
    <section id="destinasi" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div {...fade} className="max-w-2xl">
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
              Destinasi
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
              Jelajahi <span className="text-gradient-gold italic">keindahan Jogja</span> bersama
              kami
            </h2>
            <div className="gold-divider mt-6" />
          </motion.div>
          <p className="text-[15px] text-muted-foreground max-w-md leading-relaxed">
            Dari ikon budaya hingga panorama alam—kami antar Anda ke destinasi favorit dengan armada
            nyaman dan driver yang hafal rute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[260px]">
          {list.map((d, i) => (
            <motion.a
              key={d.name}
              href={wa(`Halo Vicky, saya ingin paket wisata ke ${d.name}.`)}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${d.span}`}
            >
              <img
                src={img(d.img, 900, d.span ? 1100 : 600)}
                alt={d.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
              <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5">
                <MapPin className="h-3 w-3 text-gold" />
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white">
                  {d.region}
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="font-display text-2xl font-bold text-white">{d.name}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gold group-hover:translate-x-1 transition">
                  Tanya Paket <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {showCta && (
          <div className="mt-14 text-center">
            <Link to="/destinasi" className="btn-gold">
              Lihat Semua Destinasi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function Process({ showCta }: { showCta?: boolean }) {
  return (
    <section id="proses" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img("1469854523086-cc02fe5d8800", 1920, 1080)}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-dark/90" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-white">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold font-semibold">
            Cara Pemesanan
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold leading-[1.1]">
            Booking dalam <span className="text-gradient-gold italic">4 langkah mudah</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="font-display text-6xl font-bold text-gradient-gold leading-none">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
              {i < processSteps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-10 -right-4 h-5 w-5 text-gold/40" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center flex flex-wrap justify-center gap-3">
          <a
            href={wa("Halo Vicky, saya ingin memulai booking.")}
            target="_blank"
            rel="noopener"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" /> Mulai Booking Sekarang
          </a>
          {showCta && (
            <Link to="/cara-pemesanan" className="btn-outline-gold">
              Detail Pemesanan <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const images = Array.from({ length: 40 }, (_, i) => {
    const n = i + 1;
    return `/assets/galeri-testimoni/testi-${n}.webp`;
  });

  return (
    <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
            Galeri Testimoni
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
            Dipercaya oleh <span className="text-gradient-gold italic">ratusan pelanggan</span>
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl border border-white"
            >
              <img
                src={src}
                alt={`Testimoni ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-navy-dark/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQList({ limit, showCta }: { limit?: number; showCta?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = limit ? faqs.slice(0, limit) : faqs;
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <motion.div {...fade}>
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold-dark font-semibold">
              FAQ
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy leading-[1.1]">
              Pertanyaan yang <span className="text-gradient-gold italic">sering diajukan</span>
            </h2>
            <div className="gold-divider mt-6" />
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
              Tidak menemukan jawaban? Tim kami siap membantu via WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa("Halo Vicky, saya ingin tanya tentang layanan Anda.")}
                target="_blank"
                rel="noopener"
                className="btn-whatsapp"
              >
                <MessageCircle className="h-5 w-5" /> Tanya Sekarang
              </a>
              {showCta && (
                <Link to="/faq" className="btn-outline-gold">
                  Semua FAQ <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </motion.div>
          <div className="space-y-3">
            {list.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-2xl border border-border bg-white overflow-hidden hover:border-gold/40 transition"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy text-[15px] sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gold shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      <img
        src={img("1492144534655-ae79c964c9d7", 1920, 1080)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/60" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(212,175,55,0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-white">
        <motion.div {...fade} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/[0.04] backdrop-blur px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold-light">
              Tersedia 24/7
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05]">
            Siap mengantar Anda
            <br />
            ke <span className="text-gradient-gold italic">setiap tujuan</span>.
          </h2>
          <p className="mt-7 text-lg text-white/75 max-w-xl leading-relaxed font-light">
            Konsultasi cepat, respon &lt; 5 menit, harga transparan. Hubungi tim Vicky sekarang.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={wa("Halo Vicky, saya ingin booking rental mobil + driver di Jogja.")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp !py-5 !px-9 !text-base"
            >
              <MessageCircle className="h-6 w-6" /> WhatsApp Sekarang
            </a>
            <a href={`tel:+${WA_NUMBER}`} className="btn-outline-gold !py-5 !px-8 !text-base">
              <Phone className="h-5 w-5" /> Telepon Kami
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Konsultasi Gratis
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Respon &lt; 5 Menit
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" /> Tanpa Biaya Tersembunyi
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
