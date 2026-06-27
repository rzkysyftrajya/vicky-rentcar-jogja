import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import heroCar from "@/assets/hero-car.jpg";
import { wa, fade, BRAND } from "@/lib/site-data";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  TrustStrip,
  WhyUs,
  FleetGrid,
  ServicesGrid,
  DestinationsGrid,
  Process,
  Testimonials,
  FAQList,
  FinalCTA,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${BRAND.name} — Premium Rentcar + Driver Profesional di Jogja` },
      {
        name: "description",
        content:
          "Layanan rental mobil premium dengan driver profesional di Yogyakarta. Wisata Jogja, antar jemput Bandara YIA, perjalanan eksekutif. Booking via WhatsApp.",
      },
      { property: "og:title", content: `${BRAND.name} — Premium Rentcar Jogja` },
      {
        property: "og:description",
        content: "Layanan transportasi premium, nyaman, dan terpercaya di Yogyakarta.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <WhyUs />
      <FleetGrid limit={6} showCta />
      <ServicesGrid showCta />
      <DestinationsGrid limit={4} showCta />
      <Process showCta />
      <Testimonials />
      <FAQList limit={4} showCta />
      <FinalCTA />
    </SiteLayout>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-navy-dark">
      <motion.div style={{ y, scale: 1.05 }} className="absolute inset-0">
        <img
          src={heroCar}
          alt={`Armada premium ${BRAND.name} di Yogyakarta`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/70 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(212,175,55,0.18), transparent 60%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-24 min-h-[100svh] flex flex-col justify-center"
      >
        <motion.div {...fade} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold-light">
              Premium Rentcar · Yogyakarta
            </span>
          </div>

          <h1 className="font-display text-white text-[2.4rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold leading-[1.02] tracking-tight">
            Perjalanan Tanpa Repot.
            <br />
            <span className="text-gradient-gold italic font-medium">Berkelas</span> di Setiap
            <br />
            Sudut Jogja.
          </h1>

          <p className="mt-7 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed font-light">
            {BRAND.name} — rental mobil premium dengan driver profesional. Dirancang untuk
            wisatawan, eksekutif, dan keluarga yang mengutamakan kenyamanan dan keandalan.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={wa("Halo Vicky, saya ingin booking rental mobil + driver di Jogja.")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp"
            >
              <img src="/assets/icon/wa.webp" alt="" className="h-5 w-5" /> Booking via WhatsApp
            </a>
            <Link to="/armada" className="btn-outline-gold">
              Lihat Armada <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 sm:gap-10 max-w-lg">
            {[
              { n: "500+", l: "Pelanggan Puas" },
              { n: "11+", l: "Armada Premium" },
              { n: "24/7", l: "Concierge" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl sm:text-4xl font-bold text-white">{s.n}</div>
                <div className="text-[10px] sm:text-xs tracking-[0.18em] uppercase text-white/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 text-[10px] hidden sm:flex flex-col items-center gap-2 tracking-[0.4em] uppercase">
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
