// app/components/Footer.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
    { icon: <FaYoutube />, href: 'https://youtube.com' },
  ];

  return (
    <motion.footer
      className="bg-slate-900/70 backdrop-blur-sm border-t border-slate-700/50 text-slate-400 py-16 px-6"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
             <Image
              src="/images/rri.png" // Pastikan path ini benar
              alt="Logo RRI Bandar Lampung"
              width={100}
              height={100}
            />

          </div>
          <p className="text-sm max-w-md mx-auto md:mx-0">
            Sekali di Udara, Tetap di Udara. Radio Republik Indonesia berkomitmen menjadi radio publik yang menyajikan informasi terpercaya, edukasi, dan hiburan untuk membangun bangsa.
          </p>
        </div>

        {/* Kolom 2: Link Cepat */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#programa" className="hover:text-white transition-colors">Programa</Link></li>
            <li><Link href="#iklan" className="hover:text-white transition-colors">Iklan</Link></li>
            <li><Link href="#harga" className="hover:text-white transition-colors">Harga</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="font-semibold text-white mb-4">Kontak</h4>
          <address className="space-y-2 text-sm not-italic">
            <p>Jl. Gatot Subroto No.72, Pahoman, Enggal, Kota Bandar Lampung, Lampung 35213</p>
            <p>Telepon: (0721) 252261</p>
          </address>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
      
      <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} LPP RRI Bandar Lampung. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
