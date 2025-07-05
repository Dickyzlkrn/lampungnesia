// app/components/Testimonials.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

// Data untuk testimonial. Ganti dengan data asli Anda.
// Untuk foto, Anda bisa menggunakan URL dari layanan seperti Unsplash,
// atau unggah foto ke folder /public Anda.
const testimonialsData = [
  {
    quote: "This platform transformed our workflow. The speed and user experience are simply unparalleled. We launched our project weeks ahead of schedule!",
    name: 'Sarah Johnson',
    title: 'CEO, Innovate Inc.',
    avatar: '/avatars/sarah.jpg', // Contoh path ke folder public
  },
  {
    quote: "I was skeptical at first, but the features are incredibly powerful and intuitive. The support team is also top-notch. Highly recommended!",
    name: 'Michael Chen',
    title: 'Lead Developer, Tech Solutions',
    avatar: '/avatars/michael.jpg',
  },
  {
    quote: "A game-changer for our agency. We can now deliver high-quality websites to our clients faster than ever. Radison is a must-have tool.",
    name: 'Emily Rodriguez',
    title: 'Creative Director, Design Hub',
    avatar: '/avatars/emily.jpg',
  },
];

const Testimonials = () => {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 bg-[#2b0e7013]">
      <div className="container mx-auto max-w-6xl">
        {/* Judul Bagian */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Apa Kata Pendengar
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See what our happy customers have to say about their experience.
          </motion.p>
        </div>

        {/* Grid untuk Kartu Testimonial */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={sectionAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#121212] p-8 rounded-xl border border-slate-800/50 flex flex-col justify-between"
              variants={itemAnimation}
            >
              <div>
                <FaQuoteLeft className="text-3xl text-slate-600 mb-4" />
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;