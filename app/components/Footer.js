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
      className="relative bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50 text-slate-300 py-16 px-6 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Aurora Background Footer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-teal-400/20 blur-3xl animate-[aurora_18s_linear_infinite]" />
        <div className="absolute w-[120%] h-[120%] top-1/4 left-1/4 bg-gradient-to-r from-pink-500/20 via-yellow-400/20 to-green-400/20 blur-3xl animate-[aurora_20s_linear_infinite_reverse]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
        
        {/* Kolom 1: Logo & Deskripsi */}
        <div className="md:col-span-2">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Image
              src="/images/lpg.png"
              alt="Logo RRI Bandar Lampung"
              width={90}
              height={90}
              className="rounded-lg"
            />
            <h3 className="text-white font-bold text-xl">Jelajahi Lampung</h3>
          </div>
          <p className="text-sm max-w-md mx-auto md:mx-0 leading-relaxed">
            Lampung, pintu gerbang Sumatera, menyimpan pesona pantai, gunung, budaya, hingga kuliner khas.
            RRI Bandar Lampung mendukung promosi pariwisata daerah melalui informasi, edukasi, dan hiburan untuk masyarakat.
          </p>
        </div>

        {/* Kolom 2: Link Cepat */}
        <div>
          <h4 className="font-semibold text-white mb-4">Eksplorasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#pariwisata" className="hover:text-white transition-colors">Pariwisata</Link></li>
            <li><Link href="#budaya" className="hover:text-white transition-colors">Budaya</Link></li>
            <li><Link href="#kuliner" className="hover:text-white transition-colors">Kuliner</Link></li>
            <li><Link href="#ekonomi" className="hover:text-white transition-colors">Ekonomi Daerah</Link></li>
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
      
      <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Jelajahi Provinsi Lampung. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
