'use client';

import { motion } from 'framer-motion';
import { FiZap, FiLayout, FiCode, FiCloud, FiLock, FiSmile } from 'react-icons/fi';

const featuresData = [
  {
    icon: <FiZap size={32} className="text-blue-400" />,
    title: 'Berita Terkini & Akurat',
    description: 'Menyajikan liputan berita yang cepat, berimbang, dan terverifikasi dari seluruh penjuru Lampung.',
  },
  {
    icon: <FiLayout size={32} className="text-green-400" />,
    title: 'Siaran Langsung 24 Jam',
    description: 'Mengudara tanpa henti di frekuensi radio dan streaming digital, menemani aktivitas Anda setiap saat.',
  },
  {
    icon: <FiCode size={32} className="text-purple-400" />,
    title: 'Program Budaya Lokal',
    description: 'Melestarikan dan mempromosikan kekayaan seni, musik, dan tradisi khas Provinsi Lampung.',
  },
  {
    icon: <FiCloud size={32} className="text-sky-400" />,
    title: 'Jangkauan Luas',
    description: 'Didukung oleh infrastruktur pemancar yang kuat, menjangkau hingga ke pelosok daerah.',
  },
  {
    icon: <FiLock size={32} className="text-red-400" />,
    title: 'Interaksi Pendengar',
    description: 'Ruang interaktif bagi masyarakat untuk berbagi opini dan aspirasi melalui program dialog.',
  },
  {
    icon: <FiSmile size={32} className="text-yellow-400" />,
    title: 'Untuk Semua Kalangan',
    description: 'Menyajikan program yang beragam, informatif, dan edukatif untuk semua segmen usia.',
  },
];

const Features = () => {
  return (
    <section id="programa" className="py-20 md:py-28 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Programa Unggulan Kami</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            RRI Bandar Lampung berkomitmen menyajikan program berkualitas yang menginformasikan, mendidik, dan menghibur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative group p-8 rounded-2xl border border-slate-700/30 bg-slate-800/20 backdrop-blur-md hover:bg-slate-800/40 hover:border-slate-700 transition-all duration-300 shadow-md ${
                index % 2 === 0 ? 'md:-translate-y-2' : 'md:translate-y-2'
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
