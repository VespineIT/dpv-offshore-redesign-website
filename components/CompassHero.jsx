'use client';

import React from 'react';

/**
 * COMPASS HERO COMPONENT - MOBILE OPTIMIZED
 */

export default function CompassHero() {
  // --- CONFIGURATION ---
  // Using dynamic sizing: large for desktop, smaller for mobile
  const compassSize = "w-[1250px] h-[1250px] max-w-[120vw] max-h-[120vw] md:max-w-none"; 
  // ---------------------

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[900px] flex items-center overflow-hidden bg-white">
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
  <img 
    src="/dpv-offshore-redesign-website/images/background.png" 
    alt="" 
    className="w-full h-full object-cover opacity-100 scale-70" 
  />
</div>

      {/* 2. Text Content */}
      <div className="container mx-auto relative z-20 px-6 pointer-events-none"> 
        <div className="max-w-2xl text-left space-y-4 md:space-y-6 pointer-events-auto pt-20 md:pt-0">
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.9]">
            <span className="block bg-gradient-to-r from-[#4A34CC] to-[#00B4D8] bg-clip-text text-transparent pb-2">
              Your Assets Are
            </span>
            <span className="block bg-gradient-to-r from-[#4A34CC] to-[#00B4D8] bg-clip-text text-transparent pb-2">
              In Safe Hands
            </span>
          </h1>
          
          <button className="px-8 py-3 md:px-10 md:py-4 bg-[#FF5722] text-white font-bold text-base md:text-lg rounded-xl shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
            CONTACT US
          </button>
        </div>
      </div>

      {/* 3. Compass Visualization */}
      <div 
        className={`absolute z-10 flex items-center justify-center transition-all duration-500 
          right-[-20%] md:right-[4%] top-[65%] md:top-1/2 -translate-y-1/2 ${compassSize}`}
      >
        {/* Compass Base */}
        <div className="absolute w-full h-full">
          <img 
            src="/dpv-offshore-redesign-website/images/compass.svg" 
            alt="Compass Base" 
            className="w-full h-full object-contain drop-shadow-2xl" 
          />
        </div>

        {/* BIG NEEDLE */}
        <div 
          className="absolute origin-center flex items-center justify-center"
          style={{ 
            width: '45%', 
            height: '45%', 
            left: '68%', // Centered relative to the compass base
            top: '50%',
            transform: 'translate(-50%, -50%)' 
          }} 
        >
          <img 
            src="/dpv-offshore-redesign-website/images/big_needle.svg" 
            alt="Large Compass Needle" 
            className="w-full h-full object-contain animate-rotate-cw"
          />
        </div>

        {/* SMALL NEEDLE */}
        <div 
          className="absolute origin-center flex items-center justify-center"
          style={{ 
            width: '45%', 
            height: '45%',
            left: '68%', // Centered relative to the compass base
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img 
            src="/dpv-offshore-redesign-website/images/small_needle.svg" 
            alt="Small Compass Needle" 
            className="w-full h-full object-contain animate-rotate-ccw"
          />
        </div>

      </div>

      <style jsx>{`
        @keyframes rotateCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateCCW {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-rotate-cw {
          animation: rotateCW 20s linear infinite;
        }
        .animate-rotate-ccw {
          animation: rotateCCW 15s linear infinite;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }
        }
      `}</style>
    </section>
  );
}