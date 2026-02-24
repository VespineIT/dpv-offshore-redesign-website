// components/Navbar.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react'; 
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); 
  
  // Define languages with their respective flag CDN URLs
  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
    { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w20/fr.png' },
    { code: 'de', name: 'German', flag: 'https://flagcdn.com/w20/de.png' },
    { code: 'ru', name: 'Russian', flag: 'https://flagcdn.com/w20/ru.png' },
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);   
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  /* ================= CYLINDER (PILL) STYLES ================= */
  const activeStyles =
    "bg-[#ec4a0a] text-white px-4 py-1.5 rounded-full flex items-center justify-center font-bold tracking-wider shadow-md transition-all duration-300 ease-in-out transform scale-105";

  const inactiveStyles =
    "text-[#1a1a54] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2.5 rounded-full flex items-center font-bold tracking-wider transition-all duration-300 ease-in-out";

  // Center navigation links for desktop
  const centerLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CAREER', path: '/career' },
  ];

  // Solutions dropdown links
  const solutionsLinks = [
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  const handleLanguageChange = (langObj) => {
    setCurrentLang(langObj);
    setIsLangMenuOpen(false);
    
    const gtSelect = document.querySelector('.goog-te-combo');
    if (gtSelect) {
      gtSelect.value = langObj.code;
      gtSelect.dispatchEvent(new Event('change'));
    }
  };

  return (
    <>
      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
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

          {/* CENTER NAV LINKS (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 h-full text-[14px]">
            {centerLinks.map((link) => (
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
            <div 
              className="relative"
              onMouseEnter={() => setIsLangMenuOpen(true)}
              onMouseLeave={() => setIsLangMenuOpen(false)}
            >
              <div 
                onClick={() => {
                  setIsLangMenuOpen(!isLangMenuOpen);
                  setIsSolutionsOpen(false); 
                }}
                className="flex items-center gap-2 bg-[#ec4a0a] hover:bg-[#d44309] text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
              >
                <img 
                  src={currentLang.flag} 
                  alt={`${currentLang.name} flag`} 
                  width="20" 
                  height="15" 
                  className="rounded-sm object-cover" 
                />
                <span className="text-[13px] font-bold hidden sm:inline-block">{currentLang.name}</span>
                <ChevronDown 
                  size={16} 
                  strokeWidth={3} 
                  className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                />
              </div>

              {/* LANGUAGE DROPDOWN MENU */}
              {isLangMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-32 bg-white dark:bg-[#1a1a54] shadow-xl rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className="w-full flex items-center gap-3 text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#ec4a0a] hover:text-white transition-colors"
                      >
                        <img 
                          src={lang.flag} 
                          alt={`${lang.name} flag`} 
                          width="20" 
                          height="15" 
                          className="rounded-sm object-cover shadow-sm"
                        />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SOLUTIONS DROPDOWN (Desktop Only) */}
            <div 
              className="hidden lg:block relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                onClick={() => {
                  setIsSolutionsOpen(!isSolutionsOpen);
                  setIsLangMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold tracking-wider transition-all duration-300 ease-in-out ${
                  isSolutionsOpen 
                    ? "text-[#ec4a0a]" 
                    : "text-[#1a1a54] dark:text-gray-200 hover:text-[#ec4a0a] dark:hover:text-[#ec4a0a]"
                }`}
              >
                SOLUTIONS
                <ChevronDown 
                  size={16} 
                  strokeWidth={3} 
                  className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* SOLUTIONS DROPDOWN MENU */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-36 bg-white dark:bg-[#1a1a54] shadow-xl rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        onClick={() => setIsSolutionsOpen(false)}
                        className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#ec4a0a] hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* HAMBURGER (Mobile Only - hidden on 'lg' screens) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-colors z-50 ml-2"
              aria-label="Toggle Menu"
            >
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </button>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 z-50 min-w-[200px] animate-in slide-in-from-top-2 fade-in duration-200 lg:hidden">
                <MobileMenu onClose={() => setIsMenuOpen(false)} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}