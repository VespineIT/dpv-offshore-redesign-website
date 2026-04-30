'use client';

import React from 'react';

export default function BaseModal({ isOpen, onClose, title, subtitle, maxWidth = 'max-w-3xl', children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      <div className={`bg-white dark:bg-[#0a0f1c] text-gray-800 w-full ${maxWidth} rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800`}>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712] shrink-0">
          <div>
            <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto bg-white dark:bg-[#030712]">
          {children}
        </div>
      </div>
    </div>
  );
}
