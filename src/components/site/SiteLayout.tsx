import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

import { useEffect, useState, type ReactNode } from "react";

import { BRAND, WA_NUMBER, wa, navLinks, img } from "@/lib/site-data";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-navy-dark/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="grid h-11 w-11 place-items-center rounded-full overflow-hidden bg-transparent">
            <img
              src={img("logoVRN.webp")}
              alt="Logo VRN"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] sm:text-base font-bold text-white tracking-wide">
              {BRAND.name}
            </div>
            <div className="text-[9px] tracking-[0.3em] text-gold uppercase">{BRAND.tagline}</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/85">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold transition"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={wa("Halo Vicky, saya ingin tanya tentang rental mobil di Jogja.")}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex btn-whatsapp !py-2.5 !px-5 !text-sm"
          >
            <img src="/assets/icon/wa.webp" alt="" className="h-4 w-4" /> WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-dark/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-white/85 text-sm font-medium hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70 pt-20 pb-28 sm:pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full overflow-hidden bg-transparent">
                <img
                  src={img("logoVRN.webp")}
                  alt="Logo VRN"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
              <div>
                <div className="font-display text-base font-bold text-white">{BRAND.name}</div>
                <div className="text-[9px] tracking-[0.3em] text-gold uppercase">
                  {BRAND.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              Layanan rental mobil premium dengan driver profesional di Yogyakarta. Nyaman, aman,
              dan terpercaya untuk setiap perjalanan Anda.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-semibold">Navigasi</h4>
            <div className="gold-divider mt-3 mb-5" />
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-semibold">Kontak</h4>
            <div className="gold-divider mt-3 mb-5" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <img
                  src="/assets/icon/wa.webp"
                  alt=""
                  className="h-4 w-4 text-gold mt-0.5 shrink-0"
                />
                <a
                  href={wa("Halo Vicky, saya ingin tanya tentang rental mobil.")}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-gold transition"
                >
                  WhatsApp: +62 823-6338-9893
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href={`tel:+${WA_NUMBER}`} className="hover:text-gold transition">
                  +62 823-6338-9893
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:info@vickyrentcarjogja.com" className="hover:text-gold transition">
                  info@vickyrentcarjogja.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-semibold">Booking Cepat</h4>
            <div className="gold-divider mt-3 mb-5" />
            <p className="text-sm mb-4">Respon cepat 24/7 via WhatsApp.</p>
            <a
              href={wa("Halo Vicky, saya ingin booking rental mobil.")}
              target="_blank"
              rel="noopener"
              className="btn-whatsapp !py-3 !px-5 !text-sm w-full"
            >
              <img src="/assets/icon/wa.webp" alt="" className="h-4 w-4" /> Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div>{BRAND.tagline} · Yogyakarta, Indonesia</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={wa("Halo Vicky, saya ingin tanya tentang rental mobil di Jogja.")}
      target="_blank"
      rel="noopener"
      className="hidden sm:flex fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-whatsapp hover:bg-whatsapp-dark items-center justify-center shadow-2xl transition hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <img src="/assets/icon/wa.webp" alt="" className="relative h-7 w-7" />
    </a>
  );
}

function StickyMobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-navy-dark/95 backdrop-blur-xl border-t border-gold/20 px-4 py-3">
      <div className="flex gap-2">
        <a
          href={`tel:+${WA_NUMBER}`}
          className="flex items-center justify-center gap-2 rounded-full border border-gold/40 text-gold font-semibold py-3 px-4 text-sm"
        >
          <Phone className="h-4 w-4" /> Telp
        </a>
        <a
          href={wa("Halo Vicky, saya ingin booking rental mobil + driver di Jogja.")}
          target="_blank"
          rel="noopener"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white font-semibold py-3 text-sm"
        >
          <img src="/assets/icon/wa.webp" alt="" className="h-4 w-4" /> WhatsApp Sekarang
        </a>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      {children}
      <Footer />
      <FloatingWA />
      <StickyMobileCTA />
    </main>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  desc,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  desc: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-navy-dark text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/50" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/[0.04] backdrop-blur-md px-4 py-1.5 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold-light">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-4xl">
          {title}{" "}
          {italic && <span className="text-gradient-gold italic font-medium">{italic}</span>}
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </section>
  );
}
