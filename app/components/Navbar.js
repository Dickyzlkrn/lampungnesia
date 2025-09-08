// app/components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menu navigasi dengan anchor ke section
  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Pariwisata', href: '#potensiekonomi' },
    { name: 'Fitur', href: '#features' },
    { name: 'Potensi Ekonomi', href: '#harga' },
    { name: 'Galeri', href: '#sliderbanner' },
    { name: 'Kontak', href: '#footer' },
  ];

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
            "bg-slate-900/60 backdrop-blur-lg border-b border-slate-800/50 shadow-md": scrolled,
            "bg-transparent border-b border-transparent": !scrolled,
          }
        )}
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/lpg.png"
              alt="Logo Lampung"
              width={40}
              height={40}
              priority
            />
            <span className="text-white font-bold text-lg">Jelajahi Lampung</span>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.div className="hidden md:block" whileHover={{ scale: 1.05 }}>
            <a
              href="#potensiekonomi"
              className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Yuk Mulai!
            </a>
          </motion.div>

          {/* Tombol Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl z-50"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-900 h-screen w-screen pt-24 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={menuVariants}>
                  <a
                    href={link.href}
                    className="text-2xl text-slate-300 hover:text-white transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={menuVariants} className="pt-6">
                <a
                  href="#potensiekonomi"
                  onClick={() => setIsOpen(false)}
                  className="bg-white text-black font-semibold px-8 py-3 text-xl rounded-lg"
                >
                  Yuk Mulai!
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
