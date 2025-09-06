// app/components/LogoTicker.js
'use client';

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
    <div className="w-full overflow-hidden">
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex animate-ticker">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 flex items-center justify-center"
              style={{ minWidth: '120px' }}
            >
              <div className="text-4xl text-white">
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
