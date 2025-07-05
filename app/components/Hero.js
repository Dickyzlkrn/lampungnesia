// app/components/Hero.js
'use client';

import { motion } from 'framer-motion';
import LogoTicker from './LogoTicker';
// Menambahkan ikon untuk App Store & Google Play
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  const title = "RRI Bandarlampung Setia Melayani";
  const subtitle = "RRI Bandar Lampung adalah platform media siaran publik yang menghadirkan informasi terkini, edukatif, dan inspiratif untuk masyarakat Lampung dan sekitarnya.";

  // Varian animasi untuk container teks
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Jeda antar huruf
      },
    },
  };

  // Varian animasi untuk setiap huruf
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 via-zinc-200 to-zinc-400"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.5 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.8 }}
        >
          <motion.button
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Beriklan
          </motion.button>

          <motion.button
            className="bg-transparent border border-slate-700 text-slate-300 font-semibold px-6 py-3 rounded-lg"
            whileHover={{ scale: 1.05, backgroundColor: '#1e293b', borderColor: '#475569' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* --- BAGIAN BARU: BANNER APLIKASI RRI DIGITAL --- */}
      <motion.div
        className="w-full mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 2.1 }}
      >
        <div className="max-w-3xl mx-auto p-6 bg-slate-800/20 backdrop-blur-lg rounded-2xl border border-slate-700/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Sisi Kiri: Teks */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl text-white">Dengarkan Kapan Saja, Di Mana Saja</h3>
              <p className="text-slate-400 text-sm mt-1">Unduh aplikasi resmi RRI Digital sekarang.</p>
            </div>
            {/* Sisi Kanan: Tombol Download */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors">
                <FaApple size={20} />
                <div>
                  <p className="text-xs -mb-1">Download on the</p>
                  <p className="font-semibold text-sm">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors">
                <FaGooglePlay size={18} />
                <div>
                  <p className="text-xs -mb-1">GET IT ON</p>
                  <p className="font-semibold text-sm">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* --- AKHIR BAGIAN BARU --- */}

      <motion.div
        className="w-full mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }} // Tambah delay
      >
        <p className="text-sm text-slate-500 mb-4">TERPERCAYA MASYARAKAT LAMPUNG</p>
        <LogoTicker />
      </motion.div>

    </section>
  );
};

export default Hero;
