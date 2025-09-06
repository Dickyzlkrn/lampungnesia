// app/components/PreloaderWrapper.js
"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import Hero from "./Hero";

const COLS = 12; // jumlah kolom
const ROWS = 7;  // jumlah baris

const PreloaderWrapper = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const boxes = document.querySelectorAll(".grid-box");

    // animasi pixel hilang rapih
    gsap.to(boxes, {
      opacity: 0,
      duration: 1.0,
      ease: "power2.inOut",
      stagger: {
        amount: 2, // total durasi stagger
        grid: [ROWS, COLS],
        from: "center", // hilang dari tengah ke luar
      },
      onComplete: () => setDone(true),
    });
  }, []);

  return (
    <>
      {/* Hero selalu dirender */}
      <Hero />

      {/* Overlay pixel */}
      {!done && (
        <div
          className="fixed inset-0 z-50 grid bg-black/10"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {[...Array(COLS * ROWS)].map((_, i) => (
            <div key={i} className="grid-box bg-blue-600" />
          ))}
        </div>
      )}
    </>
  );
};

export default PreloaderWrapper;
