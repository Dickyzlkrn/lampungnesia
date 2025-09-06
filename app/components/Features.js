"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMapPin, FiFeather, FiCoffee, FiCamera, FiAnchor } from "react-icons/fi";

const featuresData = [
  { icon: <FiSun size={32} className="text-yellow-400" />, title: "Pantai Pasir Putih", description: "Destinasi populer dengan pasir putih lembut dan air laut jernih, cocok untuk liburan keluarga maupun wisata bahari." },
  { icon: <FiMapPin size={32} className="text-red-400" />, title: "Gunung Anak Krakatau", description: "Ikon Lampung yang mendunia, menawarkan panorama dan pengalaman wisata petualangan mendaki gunung berapi." },
  { icon: <FiFeather size={32} className="text-green-400" />, title: "Taman Nasional Way Kambas", description: "Habitat alami gajah Sumatera dan satwa langka, sekaligus pusat konservasi dan wisata edukasi." },
  { icon: <FiCoffee size={32} className="text-amber-500" />, title: "Lampung Culinary Tour", description: "Nikmati kuliner khas Lampung seperti seruit, tempoyak ikan, dan kopi robusta terbaik dari perkebunan lokal." },
  { icon: <FiCamera size={32} className="text-blue-400" />, title: "Pahawang Island", description: "Surga snorkeling dan diving dengan terumbu karang memukau serta panorama bawah laut yang kaya." },
  { icon: <FiAnchor size={32} className="text-purple-400" />, title: "Teluk Kiluan", description: "Terkenal dengan atraksi lumba-lumba di laut lepas, tempat terbaik untuk wisata bahari yang memikat." },
];

const Features = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
      ctx.fillStyle = "rgba(255,255,255,0.7)";
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

    createParticles();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="pariwisata" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-teal-400/40 blur-3xl animate-[aurora_12s_linear_infinite]" />
        <div className="absolute w-[120%] h-[120%] top-1/4 left-1/4 bg-gradient-to-r from-pink-500/30 via-yellow-400/20 to-green-400/30 blur-3xl animate-[aurora_15s_linear_infinite_reverse]" />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pariwisata Unggulan Lampung
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Jelajahi keindahan alam, budaya, dan kuliner khas Lampung yang menjadi daya tarik utama wisatawan lokal maupun mancanegara.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group p-8 rounded-2xl border border-slate-700/40 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
