import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
      
      {/* Left side - Logo */}
      {/* We keep w-48 to balance the right side and keep links centered */}
      <div className="w-48"> 
        <Link href="/" className="block">
          <Image 
            src="/dpv-offshore-redesign-website/images/dpv_logo.jpg" // Ensure this file is in your 'public' folder
            alt="DPV Offshore & Marine Services"
            width={180} // Adjusted to fit within the w-48 container
            height={85} // Calculated based on aspect ratio
            className="object-contain h-auto"
            priority // Loads image immediately for better performance
          />
        </Link>
      </div>
      
      {/* Center - Navigation Links */}
      <div className="flex gap-12 font-semibold text-gray-800 text-sm tracking-wide">
        <Link href="/" className="hover:text-brand-orange transition-colors uppercase">
          Home
        </Link>
        <Link href="/industries" className="hover:text-brand-orange transition-colors uppercase">
          Industries
        </Link>
        <Link href="/products" className="hover:text-brand-orange transition-colors uppercase">
          Products
        </Link>
        <Link href="/services" className="hover:text-brand-orange transition-colors uppercase">
          Services
        </Link>
        <Link href="/career" className="hover:text-brand-orange transition-colors uppercase">
          Career
        </Link>
      </div>
      
      {/* Right side - Search, Language, Menu */}
      <div className="flex items-center gap-4">
        
        {/* Search Button */}
        <button className="w-48 px-4 py-2 border-2 border-brand-orange rounded-full flex items-center justify-between hover:bg-orange-50 transition-all">
          <span className="text-transparent">Search</span>
          <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        {/* Language Selector */}
        <button className="px-6 py-2 bg-brand-purple text-white rounded-full font-semibold hover:bg-purple-700 transition-all flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
          </svg>
          English
        </button>
        
        {/* Hamburger Menu */}
        <button className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded transition-all">
          <span className="w-6 h-0.5 bg-brand-orange"></span>
          <span className="w-6 h-0.5 bg-brand-orange"></span>
          <span className="w-6 h-0.5 bg-brand-orange"></span>
        </button>
      </div>
    </nav>
  );
}