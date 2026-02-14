'use client';

import Link from 'next/link';

const menuItems = [
  { name: 'Home', href: '/', icon: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" },
  { name: 'About Us', href: '/about', icon: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" },
  { name: 'Industries', href: '/industries', icon: "M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" },
  { name: 'Products', href: '/products', icon: "M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" },
  { name: 'Services', href: '/services', icon: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" },
  { name: 'Blog', href: '/blog', icon: "M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" },
  { name: 'Career', href: '/career', icon: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" },
];

const MobileMenu = ({ onClose }) => {
  return (
    <div className="w-[240px] rounded-2xl p-2 overflow-hidden transition-all duration-300
      /* Light Mode Glass */
      bg-white/70 border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]
      /* Dark Mode Glass */
      dark:bg-[#030712]/80 dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      /* Core Glassmorphism effect */
      backdrop-blur-lg
    ">
      {menuItems.map((item) => (
        <Link 
          key={item.name}
          href={item.href} 
          onClick={onClose}
          /* Added opacity to the hover states to maintain the glass illusion */
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