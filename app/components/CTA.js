// app/components/PetaLampung.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galeriLampung = [
  { name: 'Pantai Pasir Putih', src: '/images/1.jpg' },
  { name: 'Gunung Krakatau', src: '/images/2.jpg' },
  { name: 'Danau Ranau', src: '/images/3.jpg' },
  { name: 'Way Kambas', src: '/images/2.jpg' },
  { name: 'Pulau Pahawang', src: '/images/1.jpg' },
  { name: 'Bukit Senyum', src: '/images/3.jpg' },
];

function randomSizeVariant(i) {
  const variants = [
    'span 1 / span 1',
    'span 1 / span 2',
    'span 2 / span 1',
    'span 2 / span 2',
  ];
  return variants[i % variants.length];
}

const PetaLampung = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll('.galeri-item');

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      item.addEventListener('mouseenter', () => {
        gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <section className="py-0 px-0 overflow-hidden">
      <div
        ref={containerRef}
        className="grid grid-cols-4 auto-rows-fr gap-0 w-full h-full"
      >
        {galeriLampung.map((item, i) => (
          <div
            key={i}
            className="galeri-item relative overflow-hidden"
            style={{ gridArea: randomSizeVariant(i) }}
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetaLampung;