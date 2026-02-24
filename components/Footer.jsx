'use client'; // Required for Next.js if you are using app router with useState

import React, { useState } from 'react';
import Link from 'next/link';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsAndConditionsModal from './TermsAndConditionsModal';
import FAQModal from './FAQModal';
import ContactUsModal from './ContactUsModal';

export default function Footer() {
  // States to control the popup visibility
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1C1C1C] text-white pt-20 pb-8 font-sans border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* 1. Logo Section (Left) */}
            <div className="lg:col-span-2 flex flex-col items-start">
               <h2 className="text-[#FF5722] text-3xl font-bold tracking-tight whitespace-nowrap">
                 DPV Offshore
               </h2>
            </div>

            {/* 2. ISO Certification & Memberships Section (Center-Left) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-center lg:text-center mt-4 lg:mt-0">
               
               {/* Badge Icon / Footer Logo - Removed margin and set h-auto to strip inner visual padding */}
               <div className="mb-0">
                  <img 
                    src="/dpv-offshore-redesign-website/images/iso_logo.jpg" 
                    alt="Footer Logo" 
                    className="w-48 h-auto object-contain" 
                  />
               </div>
               
               {/* Certification Text - Tighter spacing */}
               <div className="space-y-1 text-base lg:text-lg font-medium tracking-wide text-gray-200 mb-4">
                  <p>ISO 9001: 2015 Quality</p>
                  <p>ISO 14001: 2015 Environment</p>
                  <p>ISO 45001: 2018 Health & Safety</p>
               </div>

               {/* ShipServ & Bureau Veritas Logos - Removed top margin */}
               <div className="flex flex-row items-center justify-center gap-4 mt-0">
                 <img 
                   src="/dpv-offshore-redesign-website/images/ship_serv.jpg" 
                   alt="ShipServ TradeNet" 
                   className="h-10 w-auto object-contain rounded-md"
                 />
               </div>
            </div>

            {/* 3. Quick Links (Center-Right) */}
            <div className="lg:col-span-2 lg:pl-8">
              <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="/" className="hover:text-[#FF5722] transition-colors">Home</Link></li>
                <li><Link href="/industries" className="hover:text-[#FF5722] transition-colors">Industries</Link></li>
                <li><Link href="/products" className="hover:text-[#FF5722] transition-colors">Products</Link></li>
                <li><Link href="/services" className="hover:text-[#FF5722] transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-[#FF5722] transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* 4 & 5. Resources & Follow Us (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              
              {/* Resources (Horizontal) */}
              <div>
                <h4 className="font-bold text-xl mb-6 text-white">Resources</h4>
                <ul className="flex flex-wrap lg:flex-nowrap gap-4 text-gray-400 whitespace-nowrap">
                  <li>
                    <button 
                      onClick={() => setIsPrivacyOpen(true)} 
                      className="hover:text-[#FF5722] transition-colors text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setIsTermsOpen(true)} 
                      className="hover:text-[#FF5722] transition-colors text-left"
                    >
                      Terms & Conditions
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setIsContactOpen(true)} 
                      className="hover:text-[#FF5722] transition-colors text-left"
                    >
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setIsFaqOpen(true)} 
                      className="hover:text-[#FF5722] transition-colors text-left"
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
              </div>

              {/* Follow Us (Below Resources) */}
              <div>
                <h4 className="font-bold text-xl mb-6 text-white">Follow Us</h4>
                <div className="flex gap-3">
                   {/* LinkedIn */}
                   <a href="https://www.linkedin.com/company/102757900/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.608 5.472-4.474 5.472 0v8.321h5v-9.643c0-6.18-7.093-6.007-10.504-2.88v-1.798z"/></svg>
                   </a>
                   {/* Instagram */}
                   <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                   </a>
                   {/* Facebook */}
                   <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                   </a>
                   {/* X (Twitter) */}
                   <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                   </a>
                </div>
              </div>

            </div>

          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DPV Offshore. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Renders the Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsAndConditionsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <FAQModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <ContactUsModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} /> 
    </>
  );
}