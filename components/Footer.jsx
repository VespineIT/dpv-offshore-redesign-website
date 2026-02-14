'use client'; // Required for Next.js if you are using app router with useState

import React, { useState } from 'react';

export default function Footer() {
  // State to control the popup visibility
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1C1C1C] text-white pt-20 pb-8 font-sans">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* 1. Logo Section (Left) */}
            <div className="lg:col-span-2 flex flex-col items-start">
               <h2 className="text-[#FF5722] text-3xl font-bold tracking-tight">DPV Offshore</h2>
            </div>

            {/* 2. ISO Certification Section (Center-Left) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-center lg:text-center mt-4 lg:mt-0">
               
               {/* Badge Icon / Footer Logo */}
               <div className="mb-6">
                  <img 
                    src="/dpv-offshore-redesign-website/images/footer-logo.svg" 
                    alt="Footer Logo" 
                    className="w-16 h-16 object-contain" 
                  />
               </div>
               
               {/* Certification Text */}
               <div className="space-y-3 text-sm tracking-wide text-gray-200">
                  <p>ISO 9001: 2015 Quality – <span className="font-semibold">ALREADY HAVE</span></p>
                  <p>ISO 14001: 2015 Environment – <span className="font-semibold">PENDING</span></p>
                  <p>ISO 45001: 2018 Health & Safety – <span className="font-semibold">PENDING</span></p>
               </div>
            </div>

            {/* 3. Quick Links (Center-Right) */}
            <div className="lg:col-span-2 lg:pl-8">
              <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Career</a></li>
              </ul>
            </div>

            {/* 4. Resources (Right) */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-xl mb-6 text-white">Resources</h4>
              <ul className="space-y-4 text-gray-400">
                {/* Changed this to a button to trigger the popup */}
                <li>
                  <button 
                    onClick={() => setIsPrivacyOpen(true)} 
                    className="hover:text-[#FF5722] transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#FF5722] transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* 5. Follow Us (Far Right) */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-xl mb-6 text-white">Follow Us</h4>
              <div className="flex gap-3">
                 {/* LinkedIn */}
                 <a href="https://www.linkedin.com/company/102757900/admin/dashboard/" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
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

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
            © 2026 DPV Offshore. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ========================================== */}
      {/* PRIVACY POLICY & ISO MODAL POPUP           */}
      {/* ========================================== */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
          
          {/* Modal Container */}
          <div className="bg-white text-gray-800 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">Policies & Certifications</h3>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-red-500"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-base leading-relaxed">
              
              {/* Quality Policy */}
              <section>
                <h4 className="text-xl font-bold text-[#FF5722] mb-3">ISO Quality Policy</h4>
                <p className="text-gray-700">
                  Our policy to Quality assurance is in line with policy and procedures adapting to the Statutory requirements and international legislation.
                </p>
              </section>

              {/* Environmental Protection & Social Responsibility */}
              <section>
                <h4 className="text-xl font-bold text-[#FF5722] mb-3">Environmental Protection & Social Responsibility Policy</h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We are committed to having zero spills to sea, green energy initiatives and low carbon footprints to reduce our impact on the environment.
                  </p>
                  <p>
                    We are committed to zero incidents at the workplace and care for the well-being of our staff, customers, visitors and the community. Our policies comply with the legal requirements of the local / International regulating Bodies and is relevant to the standards and guidelines.
                  </p>
                </div>
              </section>

              {/* ISO Certifications */}
              <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="text-lg font-bold text-[#1C1C1C] mb-4">Current Certifications Status</h4>
                <ul className="space-y-3 font-medium text-gray-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    ISO 9001: 2015 Quality – <span className="text-green-600 font-bold ml-1">ALREADY HAVE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    ISO 14001: 2015 Environment - <span className="text-yellow-600 font-bold ml-1">PENDING</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    ISO 45001: 2018 Health & Safety - <span className="text-yellow-600 font-bold ml-1">PENDING</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      )}
    </>
  );
}