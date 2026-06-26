export const WA_NUMBER = "82363389893";

export const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Diubah agar langsung mengarah ke folder lokal src/assets
export const img = (path: string) => `/assets/${path}`;

export const BRAND = {
  name: "PT. VICKY RENTCAR JOGJA",
  short: "VICKY RENTCAR JOGJA",
  tagline: "RENTAL MOBIL PREMIUM · JOGJA",
};

export const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/armada", label: "Armada" },
  { to: "/layanan", label: "Layanan" },
  { to: "/destinasi", label: "Destinasi" },
  { to: "/cara-pemesanan", label: "Cara Pemesanan" },
  { to: "/faq", label: "FAQ" },
] as const;

export const fleet = [
  {
    category: "Luxury",
    name: "Hiace Premio Luxury",
    seats: "10 Kursi",
    transmission: "Manual",
    img: "armada/hiace-premio.webp",
  },
  {
    category: "Luxury",
    name: "Toyota Alphard New",
    seats: "6 Kursi",
    transmission: "Automatic",
    img: "armada/TOYOTA-ALPHARD.webp",
  },
  {
    category: "PremiumMPV",
    name: "Toyota Innova Reborn",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/INNOVA-REBORN.webp",
  },
  {
    category: "PremiumVan",
    name: "Toyota Hiace Premio",
    seats: "12 Kursi",
    transmission: "Manual",
    img: "armada/hiace-premio.webp",
  },
  {
    category: "PremiumSUV",
    name: "Toyota Fortuner",
    seats: "7 Kursi",
    transmission: "Automatic",
    img: "armada/TOYOTA-FORTUNER.webp",
  },
  {
    category: "Van",
    name: "Toyota Hiace Commuter",
    seats: "15 Kursi",
    transmission: "Manual",
    img: "armada/HIACE-COMMUTER.webp",
  },
  {
    category: "MPV",
    name: "Toyota All New Avanza",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/TOYOTA-ALL-NEW-AVANZA.webp",
  },
  {
    category: "MPV",
    name: "Mitsubishi Xpander",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/MITSUBISHI-XPANDER.webp",
  },
  {
    category: "LuxurySUV",
    name: "Mitsubishi Pajero",
    seats: "7 Kursi",
    transmission: "Automatic",
    img: "armada/MITSUBISHI-PAJERO.webp",
  },
  {
    category: "MPV",
    name: "Suzuki Ertiga Hybrid",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/SUZUKI-ERTIGA-HYBRID.webp",
  },
  {
    category: "Van",
    name: "Isuzu Elf Minibus",
    seats: "18 Kursi",
    transmission: "Manual",
    img: "armada/ISUZU-ELF-MINIBUS.webp",
  },
  {
    category: "Hatchback",
    name: "Honda Brio",
    seats: "5 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/HONDA-BRIO.webp",
  },
  {
    category: "SUV",
    name: "Toyota Rush",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/TOYOTA-RUSH.webp",
  },
  {
    category: "SUV",
    name: "Suzuki XL7",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/SUZUKI-XL-7.webp",
  },
  {
    category: "SUV",
    name: "Toyota Terios",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/DAIHATSU-TERIOS.webp",
  },
  {
    category: "PremiumPick-up",
    name: "Toyota Hilux Double Cabin",
    seats: "5 Kursi",
    transmission: "Manual",
    img: "armada/TOYOTA-HILUX-DOUBLE-CABIN.webp",
  },
  {
    category: "Hatchback",
    name: "Toyota Agya",
    seats: "5 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/TOYOTA-AGYA.webp",
  },
  {
    category: "MPV",
    name: "Toyota Calya",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/TOYOTA-CALYA.webp",
  },
  {
    category: "PremiumMPV",
    name: "Toyota Innova Zenix",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/TOYOTA-INNOVA-ZENIX.webp",
  },
  {
    category: "SUV",
    name: "Mitsubishi Xpander Cross",
    seats: "7 Kursi",
    transmission: "Automatic & Manual",
    img: "armada/MITSUBISHI-XPANDER.webp", // Menggunakan aset Xpander karena Xpander Cross tidak ada di ls
  },
];

// Data lainnya (services, destinations, testimonials, faqs, processSteps) tetap sama seperti sebelumnya...
export const services = [
  {
    title: "Premium Rentcar",
    desc: "Rental mobil + driver profesional untuk perjalanan harian, mingguan, atau bulanan.",
    img: "section-premium-rentcar.webp", // Menggunakan hero-car lokal sebagai fallback
    size: "lg" as const,
  },
  {
    title: "Antar Jemput Bandara YIA",
    desc: "Penjemputan tepat waktu di Bandara YIA & Adisutjipto dengan meet & greet.",
    img: "antar-jemput-bandara-yia.webp",
    size: "sm" as const,
  },
  {
    title: "Paket Wisata Jogja",
    desc: "Paket wisata fleksibel ke seluruh objek wisata Yogyakarta.",
    img: "paket-wisata-jogja.webp",
    size: "sm" as const,
  },
  {
    title: "Perjalanan Korporat",
    desc: "Layanan profesional untuk perjalanan dinas, meeting, dan kunjungan kerja.",
    img: "perjalanan-korporat.webp",
    size: "sm" as const,
  },
  {
    title: "Family Trip",
    desc: "Armada lega dan nyaman untuk liburan keluarga, reuni, dan acara.",
    img: "family-trip.webp",
    size: "sm" as const,
  },
  {
    title: "Wedding & Event",
    desc: "Solusi transportasi untuk wedding, gathering, dan corporate event.",
    img: "paket-wedding.webp",
    size: "lg" as const,
  },
];

export const destinations = [
  { name: "Candi Borobudur", region: "Magelang", img: "hero-car.jpg", span: "lg:row-span-2" },
  { name: "Candi Prambanan", region: "Yogyakarta", img: "hero-car.jpg", span: "" },
  { name: "Pantai Parangtritis", region: "Bantul", img: "hero-car.jpg", span: "" },
  { name: "Malioboro", region: "Kota Yogyakarta", img: "hero-car.jpg", span: "" },
  {
    name: "Keraton Yogyakarta",
    region: "Kota Yogyakarta",
    img: "hero-car.jpg",
    span: "lg:row-span-2",
  },
  { name: "HeHa Sky View", region: "Gunungkidul", img: "hero-car.jpg", span: "" },
  { name: "Merapi Lava Tour", region: "Sleman", img: "hero-car.jpg", span: "" },
];

export const testimonials = [
  {
    name: "Andika Pratama",
    role: "Family Trip · Jakarta",
    avatar: "men/32",
    rating: 5,
    text: "Driver-nya ramah banget, mobil bersih dan wangi. Anak-anak nyaman selama trip 3 hari di Jogja. Highly recommended!",
  },
  {
    name: "Sinta Wahyuni",
    role: "Korporat · Surabaya",
    avatar: "women/44",
    rating: 5,
    text: "Booking Hiace untuk tim 12 orang. On time, sopir profesional, dan harga sesuai kesepakatan. Pasti repeat order.",
  },
  {
    name: "Ridwan Hakim",
    role: "Bisnis · Bandung",
    avatar: "men/45",
    rating: 5,
    text: "Selalu pakai Vicky untuk perjalanan dinas ke Jogja. Innova-nya nyaman, driver sigap. Komunikasi cepat via WA.",
  },
  {
    name: "Maya Lestari",
    role: "Honeymoon · Bali",
    avatar: "women/68",
    rating: 5,
    text: "Pakai Alphard untuk honeymoon. Mobilnya mewah banget, driver sopan, paham tempat-tempat romantis di Jogja.",
  },
  {
    name: "Bagus Setiawan",
    role: "Wedding · Semarang",
    avatar: "men/22",
    rating: 5,
    text: "Sewa 3 unit untuk wedding family. Semua armada bersih, koordinasi rapi, driver kompak. Pelayanan top!",
  },
  {
    name: "Dewi Anggraini",
    role: "Tour Group · Jakarta",
    avatar: "women/29",
    rating: 5,
    text: "Paket wisata Borobudur–Prambanan–Merapi sukses besar. Driver hafal rute, fleksibel ganti jadwal. Sangat puas.",
  },
];

export const faqs = [
  {
    q: "Apakah driver sudah termasuk?",
    a: "Ya, semua armada kami sudah termasuk driver profesional yang berpengalaman dan hafal rute Yogyakarta serta kota-kota sekitarnya.",
  },
  {
    q: "Bagaimana cara booking?",
    a: "Cukup hubungi kami via WhatsApp. Tim kami akan membantu memilih armada yang sesuai, menjadwalkan, dan mengonfirmasi pemesanan Anda dengan cepat.",
  },
  {
    q: "Apakah bisa antar jemput Bandara YIA?",
    a: "Tentu. Kami melayani penjemputan & pengantaran di Bandara YIA dan Adisutjipto dengan layanan meet & greet di terminal kedatangan.",
  },
  {
    q: "Area layanan mencakup apa saja?",
    a: "Kami melayani seluruh wilayah Yogyakarta dan sekitarnya — Sleman, Bantul, Kulon Progo, Gunungkidul — serta perjalanan luar kota seperti Solo, Semarang, Magelang.",
  },
  {
    q: "Apakah tersedia untuk perjalanan luar kota?",
    a: "Ya, kami menerima perjalanan luar kota dengan berbagai pilihan armada. Hubungi kami untuk konsultasi tujuan, durasi, dan armada terbaik.",
  },
  {
    q: "Bagaimana sistem pemesanan?",
    a: "Konsultasi → konfirmasi armada & jadwal → DP sesuai kesepakatan → driver siap menjemput di lokasi pada waktu yang disepakati.",
  },
];

export const processSteps = [
  { n: "01", title: "Hubungi Kami", desc: "Chat WhatsApp untuk memulai konsultasi pemesanan." },
  { n: "02", title: "Pilih Armada", desc: "Tim kami bantu pilih armada dan rancang itinerary." },
  { n: "03", title: "Konfirmasi", desc: "Konfirmasi armada, jadwal, dan DP sesuai kesepakatan." },
  { n: "04", title: "Nikmati Perjalanan", desc: "Driver profesional menjemput tepat waktu." },
];
