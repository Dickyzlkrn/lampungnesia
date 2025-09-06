// app/components/PotensiEkonomi.js
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Data card potensi ekonomi
const dataPotensi = [
  {
    title: 'Pariwisata Bahari',
    desc: 'Lampung memiliki potensi wisata pantai kelas dunia seperti Pahawang dan Tanjung Setia.',
    img: '/images/1.jpg',
  },
  {
    title: 'Perkebunan Kopi',
    desc: 'Daerah Lampung terkenal sebagai penghasil kopi robusta terbaik di Indonesia.',
    img: '/images/2.jpg',
  },
  {
    title: 'Pertanian Padi',
    desc: 'Sektor pertanian padi masih menjadi tulang punggung perekonomian masyarakat.',
    img: '/images/3.jpg',
  },
  {
    title: 'Energi Terbarukan',
    desc: 'Lampung memiliki potensi PLTA dan energi surya yang terus dikembangkan.',
    img: '/images/4.jpg',
  },
  {
    title: 'UMKM & Ekonomi Kreatif',
    desc: 'Batik Lampung, kerajinan tangan, hingga kuliner khas membuka peluang besar.',
    img: '/images/2.jpg',
  },
  {
    title: 'Industri Perikanan',
    desc: 'Wilayah pesisir menjadikan Lampung salah satu produsen ikan terbesar di Sumatera.',
    img: '/images/4.jpg',
  },
];

export default function PotensiEkonomi() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: {
          amount: 1,
          from: 'random',
        },
      }
    );
  }, []);

  return (
    <section id="potensi-ekonomi" className="py-20 md:py-28 px-6 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Potensi & Ekonomi Daerah Lampung
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Sumber daya dan peluang unggulan yang menjadi penggerak pembangunan daerah.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {dataPotensi.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`relative group overflow-hidden rounded-2xl shadow-lg border border-slate-800/50 bg-[#121212] 
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
