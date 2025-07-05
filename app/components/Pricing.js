// app/components/Pricing.js
'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

// Data untuk paket harga iklan. Anda bisa sesuaikan sesuai kebutuhan.
const pricingData = [
  {
    plan: 'Paket Basic',
    price: 'Hubungi Kami',
    description: 'Cocok untuk bisnis kecil atau promosi event singkat.',
    features: [
      'Ad-libs (spot sebutan)',
      'Durasi spot 30 detik',
      'Penayangan di 1 Program',
      'Laporan penayangan dasar',
    ],
    isPopular: false,
  },
  {
    plan: 'Paket Populer',
    price: 'Hubungi Kami',
    description: 'Pilihan terbaik untuk jangkauan maksimal dan branding.',
    features: [
      'Spot Iklan Profesional',
      'Durasi spot 60 detik',
      'Penayangan di 3 Program Unggulan',
      'Produksi Iklan Gratis',
      'Laporan penayangan lengkap',
      'Promosi di Media Sosial RRI',
    ],
    isPopular: true,
  },
  {
    plan: 'Paket Premium',
    price: 'Hubungi Kami',
    description: 'Solusi lengkap untuk kampanye iklan jangka panjang.',
    features: [
      'Semua di Paket Populer',
      'Sponsor Program Khusus',
      'Wawancara Eksklusif (Talkshow)',
      'Analisis & Konsultasi Kampanye',
    ],
    isPopular: false,
  },
];

const Pricing = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="harga" className="py-20 md:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Judul Bagian */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Paket Iklan Fleksibel
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pilih paket yang paling sesuai untuk menjangkau jutaan pendengar setia RRI Bandar Lampung.
          </motion.p>
        </div>

        {/* Grid untuk Kartu Harga */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pricingData.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 ${
                pkg.isPopular ? 'border-blue-500 scale-105' : 'border-slate-700/40'
              }`}
              variants={itemVariants}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PALING POPULER
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-2">{pkg.plan}</h3>
              <p className="text-slate-400 text-sm mb-6">{pkg.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{pkg.price}</span>
              </div>
              
              <ul className="space-y-4 text-sm mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FiCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                pkg.isPopular
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-slate-700/50 text-white hover:bg-slate-700'
              }`}>
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
