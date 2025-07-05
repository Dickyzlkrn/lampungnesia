// app/components/SliderBanner.js
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Menggunakan path gambar yang sudah Anda perbarui.
const bannerImages = [
  '/images/rdg.png',
  '/images/rcg.png',
  '/images/rrcs.jpg',
  '/images/rrf.png',
];

const SliderBanner = () => {
  // Inisialisasi carousel dengan opsi loop
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fungsi untuk navigasi
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Efek untuk auto-play dan sinkronisasi titik indikator
  useEffect(() => {
    if (!emblaApi) return;

    // Set auto-play, ganti slide setiap 5 detik
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    // Update dot indicator saat slide berubah
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect(); // Set dot awal saat komponen dimuat

    // Membersihkan interval dan event listener saat komponen dibongkar
    return () => {
      clearInterval(autoplay);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-12">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* --- STYLE DIUBAH DI SINI UNTUK EFEK GLASSMORPHISM --- */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/10 backdrop-blur-sm border border-slate-700/20" ref={emblaRef}>
          <div className="flex">
            {bannerImages.map((src, index) => (
              <div className="relative flex-[0_0_100%]" key={index}>
                <Image
                  src={src}
                  alt={`Banner RRI Digital ${index + 1}`}
                  width={1920}
                  height={1080}
                  // Menambahkan sedikit opasitas pada gambar agar background glassy terlihat
                  className="w-full h-auto object-cover aspect-video opacity-95"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Tombol Navigasi dengan efek glassmorphism yang lebih kuat */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full transition-all z-10 border border-white/20"
            aria-label="Previous slide"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full transition-all z-10 border border-white/20"
            aria-label="Next slide"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Titik Indikator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all backdrop-blur-sm ${
                  index === selectedIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SliderBanner;
