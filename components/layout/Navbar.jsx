'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { navLinks } from '@/data/navigation';

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w20/fr.png' },
  { code: 'de', name: 'German', flag: 'https://flagcdn.com/w20/de.png' },
  { code: 'ru', name: 'Russian', flag: 'https://flagcdn.com/w20/ru.png' },
];

const activeStyles =
  'bg-[#ec4a0a] text-white px-4 py-1.5 rounded-full flex items-center justify-center font-bold tracking-wider shadow-md transition-all duration-300 ease-in-out transform scale-105';

const inactiveStyles =
  'text-[#1a1a54] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2.5 rounded-full flex items-center font-bold tracking-wider transition-all duration-300 ease-in-out';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

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
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="w-full h-20 bg-white dark:bg-[#030712] sticky top-0 z-50 shadow-md transition-colors duration-300">
        <div className="px-6 md:px-12 h-full flex items-center justify-between">

          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/dpv_logo.png"
                alt="DPV Offshore Logo"
                width={160}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2 h-full text-[14px]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={isActive(link.path) ? activeStyles : inactiveStyles}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative">
            <div
              className="relative"
              onMouseEnter={() => setIsLangMenuOpen(true)}
              onMouseLeave={() => setIsLangMenuOpen(false)}
            >
              <div
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 bg-[#ec4a0a] hover:bg-[#d44309] text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
              >
                <img src={currentLang.flag} alt={`${currentLang.name} flag`} width="20" height="15" className="rounded-sm object-cover" />
                <span className="text-[13px] font-bold hidden sm:inline-block">{currentLang.name}</span>
                <ChevronDown size={16} strokeWidth={3} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </div>

              {isLangMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-32 bg-white dark:bg-[#1a1a54] shadow-xl rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className="w-full flex items-center gap-3 text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-[#ec4a0a] hover:text-white transition-colors"
                      >
                        <img src={lang.flag} alt={`${lang.name} flag`} width="20" height="15" className="rounded-sm object-cover shadow-sm" />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-colors z-50 ml-2"
              aria-label="Toggle Menu"
            >
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-7 h-[3px] bg-[#ec4a0a] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </button>

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
