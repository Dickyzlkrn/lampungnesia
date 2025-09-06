// app/components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'; // Impor ikon panah bawah
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // <-- STATE BARU untuk dropdown

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- DATA BARU DENGAN STRUKTUR DROPDOWN ---
  const navLinks = [
    {
      name: 'Programa',
      href: '#programa',
      dropdown: [
        { name: 'Pro 1 (Informasi & Berita)', href: '/program/pro1' },
        { name: 'Pro 2 (Musik & Gaya Hidup)', href: '/program/pro2' },
        { name: 'Pro 4 (Budaya)', href: '/program/pro4' },
      ]
    },
    { name: 'Iklan', href: '#iklan' },
    { name: 'Harga', href: '#harga' },
  ];

  // Varian animasi untuk dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <motion.nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          {
            "bg-slate-900/50 backdrop-blur-lg border-b border-slate-800/50 shadow-md": scrolled,
            "bg-transparent border-b border-transparent": !scrolled,
          }
        )}
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/lpg.png"
              alt="Logo RRI"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* --- Link Navigasi Desktop DENGAN LOGIKA DROPDOWN --- */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown size={16} />}
                </Link>

                {/* --- PANEL DROPDOWN --- */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      // Styling untuk dropdown dark theme
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Tombol CTA */}
          <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }}>
            <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Yuk Mulai!
            </button>
          </motion.div>


          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl z-50">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay untuk Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-900 h-screen w-screen pt-24 md:hidden"
          >
            {/* ... sisa kode menu mobile Anda ... */}
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={menuVariants}>
                  <Link
                    href={link.href}
                    className="text-3xl text-slate-300 hover:text-white transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {/* Tampilkan sub-menu di mobile */}
                  {link.dropdown && (
                    <ul className="mt-4 text-center space-y-3">
                      {link.dropdown.map(sublink => (
                        <li key={sublink.name}>
                          <Link href={sublink.href} className="text-lg text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
              <motion.li variants={menuVariants} className="pt-4">
                <button className="bg-white text-black font-semibold px-8 py-4 text-xl rounded-lg">
                  Beriklan di RRI!
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;