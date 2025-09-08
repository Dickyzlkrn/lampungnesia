// app/components/Budaya.js
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const budayaData = [
  {
    title: 'Tari Sigeh Penguten',
    desc: 'Tarian tradisional yang sering ditampilkan untuk menyambut tamu kehormatan.',
    highlights: [
      'Simbol penghormatan dan keramahan',
      'Gerakan anggun dan penuh makna',
      'Diiringi musik gamolan pekhing',
    ],
    isHighlight: true,
  },
  {
    title: 'Kain Tapis',
    desc: 'Kain khas Lampung yang ditenun dengan benang emas dan motif etnik.',
    highlights: [
      'Melambangkan status sosial dan budaya',
      'Motif terinspirasi dari alam dan filosofi hidup',
      'Dipakai dalam upacara adat',
    ],
    isHighlight: false,
  },
  {
    title: 'Rumah Adat Nuwo Sesat',
    desc: 'Rumah adat tradisional Lampung yang menjadi pusat musyawarah adat.',
    highlights: [
      'Arsitektur khas panggung kayu',
      'Tempat bermusyawarah para penyimbang',
      'Simbol persatuan masyarakat',
    ],
    isHighlight: false,
  },
  {
    title: 'Makanan Khas Seruit',
    desc: 'Hidangan tradisional dari ikan bakar dengan sambal terasi, tempoyak, atau mangga.',
    highlights: [
      'Makanan khas saat acara keluarga',
      'Melambangkan kebersamaan',
      'Disajikan di acara adat',
    ],
    isHighlight: false,
  },
  {
    title: 'Gotong Royong',
    desc: 'Nilai luhur masyarakat Lampung yang tercermin dalam kehidupan sehari-hari.',
    highlights: [
      'Saling membantu antar tetangga',
      'Kuat dalam ikatan sosial',
      'Menjadi identitas budaya Lampung',
    ],
    isHighlight: true,
  },
  {
    title: 'Makanan Khas Seruit',
    desc: 'Hidangan tradisional dari ikan bakar dengan sambal terasi, tempoyak, atau mangga.',
    highlights: [
      'Makanan khas saat acara keluarga',
      'Melambangkan kebersamaan',
      'Disajikan di acara adat',
    ],
    isHighlight: false,
  },
];

const Budaya = () => {
  const sectionVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="budaya" className="relative py-24 md:py-32 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-teal-400/40 blur-3xl animate-[aurora_12s_linear_infinite]" />
        <div className="absolute w-[120%] h-[120%] top-1/4 left-1/4 bg-gradient-to-r from-pink-500/30 via-yellow-400/20 to-green-400/30 blur-3xl animate-[aurora_15s_linear_infinite_reverse]" />
      </div>

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl z-10">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Masyarakat & Budaya Lampung
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lampung kaya akan tradisi, nilai, dan kearifan lokal yang diwariskan turun-temurun. 
            Dari tarian hingga gotong royong, budaya Lampung mencerminkan semangat persatuan dan keindahan.
          </motion.p>
        </div>

        {/* Grid Card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {budayaData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative bg-slate-800/30 backdrop-blur-lg p-10 rounded-3xl border hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                item.isHighlight
                  ? 'border-yellow-400 hover:scale-105'
                  : 'border-slate-700 hover:scale-[1.02]'
              }`}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {item.isHighlight && (
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  KEARIFAN LOKAL
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white mb-6">{item.desc}</p>

              <ul className="space-y-3">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Budaya;