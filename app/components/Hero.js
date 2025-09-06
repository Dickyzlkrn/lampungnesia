// app/components/Hero.js
'use client';

import { motion } from 'framer-motion';
import LogoTicker from './LogoTicker';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Hero = () => {
  const title = "Jelajahi Pesona Provinsi Lampung";
  const subtitle =
    "Dari pantai berpasir putih, taman nasional yang menakjubkan, hingga kekayaan budaya dan kuliner khasnya, Lampung menawarkan pengalaman tak terlupakan bagi siapa saja yang berkunjung. Jelajahi keindahan alam, tradisi, dan inspirasi yang menjadikan Lampung sebagai salah satu destinasi istimewa di Indonesia.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative hero-section min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-2]"
      >
        <source src="/images/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradien Animasi */}
      <div className="absolute inset-0 bg-black/20 z-[-1] animate-gradient"></div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white"
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
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
        >
          <motion.button
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Mulai Beriklan
          </motion.button>

          <motion.button
            className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1e293b",
              borderColor: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Banner Aplikasi */}
      <motion.div
        className="w-full mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 2.1 }}
      >
        <div className="max-w-3xl mx-auto p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg shadow-black/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl text-white">
                Lampung Indah dan Maju
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Unduh aplikasi resmi Lampung GO!
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all border border-white/30 backdrop-blur-md shadow-sm">
                <FaApple size={20} />
                <div>
                  <p className="text-xs -mb-1 text-white/70">Download on the</p>
                  <p className="font-semibold text-sm text-white">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all border border-white/30 backdrop-blur-md shadow-sm">
                <FaGooglePlay size={18} />
                <div>
                  <p className="text-xs -mb-1 text-white/70">GET IT ON</p>
                  <p className="font-semibold text-sm text-white">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Logo Ticker */}
      <motion.div
        className="w-full mt-16 md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p className="text-sm text-white mb-4">TERPERCAYA MASYARAKAT LAMPUNG</p>
        <LogoTicker />
      </motion.div>
    </section>
  );
};

export default Hero;
