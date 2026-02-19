import React from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712]">
          <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Policies & Certifications</h3>
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
          
          {/* Quality Policy */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">ISO Quality Policy</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Our policy to Quality assurance is in line with policy and procedures adapting to the Statutory requirements and international legislation.
            </p>
          </section>

          {/* Environmental Protection & Social Responsibility */}
          <section>
            <h4 className="text-xl font-bold text-[#FF5722] mb-3">Environmental Protection & Social Responsibility Policy</h4>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We are committed to having zero spills to sea, green energy initiatives and low carbon footprints to reduce our impact on the environment.
              </p>
              <p>
                We are committed to zero incidents at the workplace and care for the well-being of our staff, customers, visitors and the community. Our policies comply with the legal requirements of the local / International regulating Bodies and is relevant to the standards and guidelines.
              </p>
            </div>
          </section>

          {/* ISO Certifications */}
          <section className="bg-gray-50 dark:bg-[#111827] p-6 rounded-lg border border-gray-100 dark:border-gray-800">
            <h4 className="text-lg font-bold text-[#1C1C1C] dark:text-white mb-4">Current Certifications Status</h4>
            <ul className="space-y-3 font-medium text-gray-800 dark:text-gray-200">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                ISO 9001: 2015 Quality – <span className="text-green-600 dark:text-green-400 font-bold ml-1">ALREADY HAVE</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                ISO 14001: 2015 Environment - <span className="text-yellow-600 dark:text-yellow-400 font-bold ml-1">PENDING</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                ISO 45001: 2018 Health & Safety - <span className="text-yellow-600 dark:text-yellow-400 font-bold ml-1">PENDING</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}