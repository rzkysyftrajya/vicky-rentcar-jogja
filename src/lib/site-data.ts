export const WA_NUMBER = "82363389893";

const WA_PREFIX = "Halo Vicky rentcar jogja";

export const wa = (msg: string) => {
  const text = msg.trim();
  const needsPrefix = text.length === 0 || !text.toLowerCase().startsWith(WA_PREFIX.toLowerCase());
  const finalMsg = needsPrefix ? `${WA_PREFIX}. ${text}` : text;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(finalMsg)}`;
};

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
  { to: "/paket-wisata", label: "Paket Wisata" },
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
    img: "/layanan/section-premium-rentcar.webp", // Menggunakan hero-car lokal sebagai fallback
    size: "lg" as const,
  },
  {
    title: "Antar Jemput Bandara YIA",
    desc: "Penjemputan tepat waktu di Bandara YIA & Adisutjipto dengan meet & greet.",
    img: "/layanan/antar-jemput-bandara-yia.webp",
    size: "sm" as const,
  },
  {
    title: "Paket Wisata Jogja",
    desc: "Paket wisata fleksibel ke seluruh objek wisata Yogyakarta.",
    img: "/layanan/paket-wisata-jogja.webp",
    size: "sm" as const,
  },
  {
    title: "Perjalanan Korporat",
    desc: "Layanan profesional untuk perjalanan dinas, meeting, dan kunjungan kerja.",
    img: "/layanan/perjalanan-korporat.webp",
    size: "sm" as const,
  },
  {
    title: "Family Trip",
    desc: "Armada lega dan nyaman untuk liburan keluarga, reuni, dan acara.",
    img: "/layanan/family-trip.webp",
    size: "sm" as const,
  },
  {
    title: "Wedding & Event",
    desc: "Solusi transportasi untuk wedding, gathering, dan corporate event.",
    img: "/layanan/paket-wedding.webp",
    size: "lg" as const,
  },
];

export const paketWisataFeatured = [
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
];

export const destinations = [
  {
    name: "Candi Borobudur",
    region: "Magelang",
    img: "destinasi/candi-borobudur.webp",
    span: "lg:row-span-2",
  },
  {
    name: "Candi Prambanan",
    region: "Yogyakarta",
    img: "destinasi/candi-prambanan.webp",
    span: "",
  },
  {
    name: "Pantai Parangtritis",
    region: "Bantul",
    img: "destinasi/pantai-parangtritis.webp",
    span: "",
  },
  { name: "Malioboro", region: "Kota Yogyakarta", img: "destinasi/malioboro.webp", span: "" },
  {
    name: "Keraton Yogyakarta",
    region: "Kota Yogyakarta",
    img: "destinasi/keraton-yogyakarta.webp",
    span: "lg:row-span-2",
  },
  {
    name: "HeHa Sky View",
    region: "Gunungkidul",
    img: "destinasi/heha-skyview.webp",
    span: "",
  },
  {
    name: "Merapi Lava Tour",
    region: "Sleman",
    img: "destinasi/merapi-lava-tour.webp",
    span: "",
  },
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
