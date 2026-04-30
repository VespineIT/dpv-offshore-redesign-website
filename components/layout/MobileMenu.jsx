'use client';

import Link from 'next/link';
import { navLinks } from '@/data/navigation';

const MobileMenu = ({ onClose }) => {
  return (
    <div className="w-[240px] rounded-2xl p-2 overflow-hidden transition-all duration-300
      bg-white/70 border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      dark:bg-[#030712]/80 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      backdrop-blur-lg
    ">
      {navLinks.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          onClick={onClose}
          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-orange-50/70 dark:hover:bg-white/10 group transition-all"
        >
          <span className="text-[16px] font-bold text-[#1a1a54] dark:text-gray-100 group-hover:text-[#ec4a0a] dark:group-hover:text-[#ec4a0a] transition-colors">
            {item.name}
          </span>
          <div className="w-8 h-8 rounded-full bg-[#ec4a0a] flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d={item.icon} />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
