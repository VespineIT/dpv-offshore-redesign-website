import React from 'react';

export default function Footer() {
  return (
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
             {/* Badge Icon */}
             <div className="mb-6 relative">
                {/* Simple Rosette/Badge SVG */}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" className="text-white fill-transparent opacity-20 absolute scale-125" />
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78z" />
                  <path d="M12 8l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z" fill="white" stroke="none"/>
                </svg>
             </div>
             
             {/* Certification Text */}
             <div className="space-y-3 text-sm tracking-wide text-gray-200">
                <p>ISO 9001: 2015 Quality – <span className="font-semibold">ALREDY HAVE</span></p>
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
              <li><a href="#" className="hover:text-[#FF5722] transition-colors">Privacy Policy</a></li>
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
               <a href="#" className="w-10 h-10 bg-white rounded flex items-center justify-center text-black hover:bg-[#FF5722] hover:text-white transition-all">
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
  );
}