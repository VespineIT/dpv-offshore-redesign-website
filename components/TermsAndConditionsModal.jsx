import React from 'react';

export default function TermsAndConditionsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712]">
          <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Terms & Conditions</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-base leading-relaxed">
          
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">1. Introduction</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to DPV Offshore. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">2. Intellectual Property</h4>
            <p className="text-gray-700 dark:text-gray-300">
              All content included on this site, such as text, graphics, logos, images, and software, is the property of DPV Offshore or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">3. Service Limitations</h4>
            <p className="text-gray-700 dark:text-gray-300">
              While we strive to provide accurate information and uninterrupted services, we do not warrant that our website or service operations will be error-free or perfectly secure at all times. Service availability may occasionally be suspended for maintenance.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">4. Limitation of Liability</h4>
            <p className="text-gray-700 dark:text-gray-300">
              DPV Offshore shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services, or resulting from unauthorized access to or alteration of your transmissions or data.
            </p>
          </section>

          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">5. Governing Law</h4>
            <p className="text-gray-700 dark:text-gray-300">
              These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}