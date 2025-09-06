// app/components/ShowcaseSlider.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { src: "/images/1.jpg", title: "Pesona Lampung Digital" },
  { src: "/images/2.jpg", title: "Keindahan Pantai dan Laut" },
  { src: "/images/3.jpg", title: "Budaya & Tradisi Lokal" },
  { src: "/images/4.jpg", title: "Festival & Kreativitas" },
];

export default function ShowcaseSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".slide");

    // Animasi horizontal utama
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        id: "main-scroll",
        trigger: containerRef.current,
        pin: true,
        scrub: 1.2,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    // Efek zoom + animasi title per slide
    sections.forEach((slide) => {
      const img = slide.querySelector(".slide-img");
      const title = slide.querySelector(".slide-title");

      // Zoom-in → normal → zoom-out
      gsap.fromTo(
        img,
        { scale: 1.4 },
        {
          scale: 0.95,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true,
          },
        }
      );

      // Title fade + zoom
      gsap.fromTo(
        title,
        { opacity: 0, y: 80, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTween,
            start: "left center",
            end: "center center",
            scrub: true,
          },
        }
      );

      // Title keluar sedikit mengecil lagi
      gsap.to(title, {
        opacity: 0,
        scale: 0.9,
        y: -60,
        ease: "power3.in",
        scrollTrigger: {
          trigger: slide,
          containerAnimation: scrollTween,
          start: "center center",
          end: "right center",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden flex">
      {slides.map((slide, i) => (
        <section
          key={i}
          className="slide relative flex-shrink-0 w-screen h-screen flex items-center justify-center"
        >
          {/* Background Image */}
          <Image
            src={slide.src}
            alt={slide.title}
            fill
            priority={i === 0}
            className="slide-img object-cover will-change-transform"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Title */}
          <h2 className="slide-title relative z-10 text-white text-4xl md:text-6xl font-bold drop-shadow-2xl text-center">
            {slide.title}
          </h2>
        </section>
      ))}
    </div>
  );
}
