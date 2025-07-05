// app/components/LogoTicker.js
'use client';

// --- KONTEN DIPERBARUI agar lebih relevan dengan RRI ---
// Menggunakan ikon yang lebih umum untuk program atau partner media.
import { FiRss, FiMusic, FiAward, FiGlobe, FiMic, FiUsers } from 'react-icons/fi';

const logos = [
  { icon: <FiRss />, name: 'Berita' },
  { icon: <FiMusic />, name: 'Musik & Hiburan' },
  { icon: <FiAward />, name: 'Program Unggulan' },
  { icon: <FiGlobe />, name: 'Jaringan Nasional' },
  { icon: <FiMic />, name: 'Siaran Langsung' },
  { icon: <FiUsers />, name: 'Untuk Masyarakat' },
];

const LogoTicker = () => {
  return (
    // Container utama, overflow-hidden sangat penting
    <div className="w-full overflow-hidden">
      
      {/* --- PERBAIKAN DI SINI: Menggunakan CSS Mask untuk fade effect --- */}
      {/* Gradien overlay yang lama (div absolut) telah dihapus. */}
      {/* Mask akan membuat bagian tepi menjadi transparan secara alami. */}
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">

        <div className="flex animate-ticker">
          {/* Kita duplikat logo agar loop terlihat mulus */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-10 flex items-center justify-center" 
              style={{ minWidth: '120px' }} // Sedikit diperkecil agar lebih banyak logo terlihat
            >
              <div className="text-4xl text-slate-500 hover:text-white transition-colors duration-300">
                {logo.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LogoTicker;
