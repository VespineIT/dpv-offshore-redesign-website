'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react'; 
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  /* ================= ACTIVE TAB STYLES =================
     - No changes needed for dark mode here (Orange bg + White text works everywhere)
  ===================================================== */
  const activeStyles =
    "bg-[#ec4a0a] text-white px-10 h-[52px] flex items-center justify-center " +
    "font-bold tracking-wider " +
    "[clip-path:polygon(20%_0%,80%_0%,100%_100%,50%_135%,0%_100%)]";

  /* ================= INACTIVE TAB STYLES =================
     - Added: dark:text-gray-200 (Makes text readable on dark bg)
     - Added: dark:hover:text-[#ec4a0a] (Ensures hover state works)
  ===================================================== */
  const inactiveStyles =
    "text-[#1a1a54] dark:text-gray-200 hover:text-[#ec4a0a] dark:hover:text-[#ec4a0a] " +
    "px-8 h-[52px] flex items-center font-bold tracking-wider transition-colors duration-300";

  const navLinks = [
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SERVICES', path: '/services' },
  ];

  return (
    <>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* NAVBAR CONTAINER
         - Added dark:bg-[#0f172a] 
         - Added transition-colors for smooth theme switching
      */}
      <nav className="w-full h-20 bg-white dark:bg-[#0f172a] sticky top-0 z-50 shadow-sm border-b-2 border-[#ec4a0a] transition-colors duration-300">

        {/* WHITE TOP SPACER - matches navbar bg */}
        <div className="h-4 bg-white dark:bg-[#0f172a] transition-colors duration-300" />

        {/* MAIN NAV CONTENT */}
        <div className="px-6 md:px-12 h-[calc(100%-16px)] flex items-center justify-between">

          {/* LOGO - kept untouched as requested */}
          <div className="flex-shrink-0 -mt-4">
            <Link href="/">
              <Image
                src="/dpv-offshore-redesign-website/images/dpv_logo.png"
                alt="DPV Offshore Logo"
                width={160}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* CENTER NAV LINKS */}
          <div className="hidden lg:flex items-end h-full text-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={isActive(link.path) ? activeStyles : inactiveStyles}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 relative">

            {/* LANGUAGE SELECTOR - Orange bg works on both modes, no change needed */}
            <div className="flex items-center gap-2 bg-[#ec4a0a] hover:bg-[#d44309] text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
              <Globe size={18} strokeWidth={2.5} /> 
              <span className="text-[13px] font-bold">English</span>
              <ChevronDown size={16} strokeWidth={3} />
            </div>

            {/* HAMBURGER 
                - Added dark:hover:bg-gray-800 so the hover effect isn't bright white in dark mode
            */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors z-50 ml-2"
              aria-label="Toggle Menu"
            >
              {/* Lines - The orange color (#ec4a0a) pops well against dark backgrounds, so no change needed */}
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </button>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 z-50 min-w-[200px] animate-in slide-in-from-top-2 fade-in duration-200">
                {/* Note: Ensure MobileMenu component also has dark mode classes inside it! */}
                <MobileMenu onClose={() => setIsMenuOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}