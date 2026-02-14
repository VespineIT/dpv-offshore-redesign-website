// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react'; 
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); // New state for language dropdown
  const [currentLang, setCurrentLang] = useState('English');   // New state for current language
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  /* ================= CYLINDER (PILL) STYLES ================= */
  const activeStyles =
    "bg-[#ec4a0a] text-white px-6 py-2.5 rounded-full flex items-center justify-center font-bold tracking-wider shadow-md transition-all duration-300 ease-in-out transform scale-105";

  const inactiveStyles =
    "text-[#1a1a54] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2.5 rounded-full flex items-center font-bold tracking-wider transition-all duration-300 ease-in-out";

  const navLinks = [
    { name: 'INDUSTRIES', path: '/industries' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SERVICES', path: '/services' },
  ];

  // Map out the languages you want in your dropdown
  // Note: 'code' must match Google Translate's official language codes
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
  ];

  // Function to trigger Google Translate via JavaScript
  const handleLanguageChange = (langCode, langName) => {
    setCurrentLang(langName);
    setIsLangMenuOpen(false);
    
    // Find the hidden Google select element and change its value
    const gtSelect = document.querySelector('.goog-te-combo');
    if (gtSelect) {
      gtSelect.value = langCode;
      gtSelect.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="w-full h-20 bg-white dark:bg-[#030712] sticky top-0 z-50 shadow-md transition-colors duration-300">
        <div className="px-6 md:px-12 h-full flex items-center justify-between">

          {/* LOGO */}
          <div className="flex-shrink-0">
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
          <div className="hidden lg:flex items-center gap-2 h-full text-[14px]">
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

            {/* CUSTOM LANGUAGE SELECTOR */}
            <div className="relative">
              <div 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 bg-[#ec4a0a] hover:bg-[#d44309] text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
              >
                <Globe size={18} strokeWidth={2.5} /> 
                <span className="text-[13px] font-bold">{currentLang}</span>
                <ChevronDown 
                  size={16} 
                  strokeWidth={3} 
                  className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                />
              </div>

              {/* DROPDOWN MENU */}
              {isLangMenuOpen && (
                <div className="absolute top-full mt-2 right-0 w-36 bg-white dark:bg-[#1a1a54] shadow-xl rounded-lg overflow-hidden z-50 border border-gray-100 dark:border-gray-800">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code, lang.name)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#ec4a0a] hover:text-white transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              /* Removed lg:hidden from the end of this line below */
              className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-colors z-50 ml-2"
              aria-label="Toggle Menu"
            >
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </button>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 z-50 min-w-[200px] animate-in slide-in-from-top-2 fade-in duration-200">
                <MobileMenu onClose={() => setIsMenuOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}