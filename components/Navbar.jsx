'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import PortalPopup from './PortalPopup';

const globeIcon = "http://localhost:3845/assets/7a17fe5483fcf5eeb97d867b173a720742e44df1.svg";
const chevronDownIcon = "http://localhost:3845/assets/68d8e5e08da6db4d63af25127e994a8bae1e6202.svg";

export default function Navbar() {
  const leadingIconContainerRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <nav className="w-full h-16 relative bg-white sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <div className="absolute left-0 top-0 h-16 w-[138px]">
          <Link href="/">
            <Image
              src="/images/dpv_logo.jpg"
              alt="DPV Offshore & Marine Services"
              width={138}
              height={64}
              className="object-cover h-16"
              priority
            />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[45px] text-[#251a66] text-[17px] font-bold">
          <Link href="/industries" className="hover:text-[#ec4a0a] transition-colors whitespace-nowrap">
            INDUSTRIES
          </Link>
          <Link href="/products" className="hover:text-[#ec4a0a] transition-colors whitespace-nowrap">
            PRODUCTS
          </Link>
          <Link href="/services" className="hover:text-[#ec4a0a] transition-colors whitespace-nowrap">
            SERVICES
          </Link>
        </div>

        {/* Search Bar */}
        <div className="absolute top-[14px] left-[925px] w-[292px] h-[40px] relative rounded-[25px] bg-[rgba(252,250,239,0.08)] border-2 border-[#ec4a0a] box-border overflow-hidden flex items-center p-1">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none border-none text-[#251a66] text-sm placeholder:text-gray-400 px-3"
          />
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[rgba(236,74,10,0.1)] transition-all flex-shrink-0">
            <svg className="w-5 h-5 text-[#ec4a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Language Selector */}
        <div className="absolute top-[17px] right-[69px] w-[87px] h-[30px] rounded-[10px] bg-[#ec4a0a] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#d43f00] transition-colors" data-node-id="2429:3444">
          <img 
            alt="globe" 
            className="w-3.5 h-3.5" 
            src={globeIcon}
            data-node-id="2608:3441"
          />
          <p className="text-white text-[11px] font-semibold" data-node-id="2429:3454">English</p>
          <img 
            alt="chevron" 
            className="w-2 h-2" 
            src={chevronDownIcon}
            data-node-id="2429:3455"
          />
        </div>
        
        {/* Hamburger Menu Icon */}
        <div 
          className="absolute top-[4px] right-0 w-14 h-14 flex items-center justify-center cursor-pointer"
          ref={leadingIconContainerRef}
          onClick={openMobileMenu}
        >
          <div className="w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5">
            <div className="w-6 h-0.5 bg-[#ec4a0a]"></div>
            <div className="w-6 h-0.5 bg-[#ec4a0a]"></div>
            <div className="w-6 h-0.5 bg-[#ec4a0a]"></div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          left={-72}
          bottom={-7}
          relativeLayerRef={leadingIconContainerRef}
          onOutsideClick={closeMobileMenu}
        >
          <MobileMenu onClose={closeMobileMenu} />
        </PortalPopup>
      )}
    </>
  );
}
