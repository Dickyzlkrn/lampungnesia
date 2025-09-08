// app/components/PotensiEkonomi.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const dataPotensi = [
  {
    title: 'Pariwisata Bahari',
    desc: 'Lampung memiliki potensi wisata pantai kelas dunia seperti Pahawang dan Tanjung Setia.',
    img: '/images/1.jpg',
  },
  {
    title: 'Perkebunan Kopi',
    desc: 'Daerah Lampung terkenal sebagai penghasil kopi robusta terbaik di Indonesia.',
    img: '/images/kopi.jpg',
  },
  {
    title: 'Pertanian Padi',
    desc: 'Sektor pertanian padi masih menjadi tulang punggung perekonomian masyarakat.',
    img: '/images/sawah.jpg',
  },
  {
    title: 'Energi Terbarukan',
    desc: 'Lampung memiliki potensi PLTA dan energi surya yang terus dikembangkan.',
    img: '/images/eng.jpg',
  },
  {
    title: 'UMKM & Ekonomi Kreatif',
    desc: 'Batik Lampung, kerajinan tangan, hingga kuliner khas membuka peluang besar.',
    img: '/images/2.jpg',
  },
  {
    title: 'Industri Perikanan',
    desc: 'Wilayah pesisir menjadikan Lampung salah satu produsen ikan terbesar di Sumatera.',
    img: '/images/ikn.jpg',
  },
];

export default function PotensiEkonomi() {
  const cardsRef = useRef([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // animasi cards GSAP
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: { amount: 1, from: 'random' },
      }
    );

    // Particles
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
    <section
      id="potensi-ekonomi"
      className="relative py-20 md:py-28 px-6 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-teal-400/40 blur-3xl animate-[aurora_12s_linear_infinite]" />
        <div className="absolute w-[120%] h-[120%] top-1/4 left-1/4 bg-gradient-to-r from-pink-500/30 via-yellow-400/20 to-green-400/30 blur-3xl animate-[aurora_15s_linear_infinite_reverse]" />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Potensi & Ekonomi Daerah Lampung
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Sumber daya dan peluang unggulan yang menjadi penggerak pembangunan daerah.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {dataPotensi.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`relative group overflow-hidden rounded-2xl shadow-xl border border-slate-700/40 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/50 hover:border-slate-600 transition-all duration-300 
              ${idx % 3 === 0 ? 'sm:row-span-2' : 'sm:row-span-1'}`}
            >
              {/* Gambar */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>

              {/* Konten */}
              <div className="absolute bottom-0 p-5 text-white z-10">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}