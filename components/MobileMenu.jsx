'use client';

import Link from 'next/link';

const MobileMenu = ({ onClose }) => {
  return (
    <div className="w-[145px] h-[219px] relative bg-white shadow-lg rounded-lg p-4 text-left text-[25px] text-[#6246e5] font-['Inter'] overflow-auto">
      {/* Home */}
      <Link href="/" onClick={onClose} className="absolute w-[80px] top-[13px] left-0 font-semibold hover:text-[#ec4a0a] transition-colors">
        Home
      </Link>
      <div className="absolute w-[26px] h-[26px] top-[7px] right-0 rounded-full bg-[#ec4a0a]" />
      <svg className="absolute w-[12px] h-[12px] top-[14px] right-[7px]" fill="white" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>

      {/* About Us */}
      <Link href="/about" onClick={onClose} className="absolute w-[125px] top-[56px] left-0 font-semibold hover:text-[#ec4a0a] transition-colors">
        About Us
      </Link>
      <div className="absolute w-[26px] h-[26px] top-[50px] right-0 rounded-full bg-[#ec4a0a]" />
      <svg className="absolute w-[14px] h-[11px] top-[58px] right-[6px]" fill="white" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>

      {/* Services */}
      <Link href="/services" onClick={onClose} className="absolute w-[117px] top-[106px] left-0 font-semibold hover:text-[#ec4a0a] transition-colors">
        Services
      </Link>
      <div className="absolute w-[26px] h-[26px] top-[100px] right-0 rounded-full bg-[#ec4a0a]" />
      <svg className="absolute w-[16px] h-[14px] top-[107px] right-[5px]" fill="white" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>

      {/* Blog */}
      <Link href="/blog" onClick={onClose} className="absolute w-[60px] top-[156px] left-0 font-semibold hover:text-[#ec4a0a] transition-colors">
        Blog
      </Link>
      <div className="absolute w-[26px] h-[26px] top-[150px] right-0 rounded-full bg-[#ec4a0a]" />
      <svg className="absolute w-[13px] h-[11px] top-[158px] right-[7px]" fill="white" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
      </svg>

      {/* Career */}
      <Link href="/career" onClick={onClose} className="absolute w-[91px] top-[206px] left-0 font-semibold hover:text-[#ec4a0a] transition-colors">
        Career
      </Link>
      <div className="absolute w-[26px] h-[26px] top-[200px] right-0 rounded-full bg-[#ec4a0a]" />
      <svg className="absolute w-[13px] h-[13px] top-[207px] right-[7px]" fill="white" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    </div>
  );
};

export default MobileMenu;
