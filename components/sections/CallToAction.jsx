"use client";

import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full px-4 py-20 flex justify-center items-center bg-white dark:bg-[#030712] transition-colors duration-500 overflow-x-hidden">

      <div className="relative w-full max-w-6xl bg-[#E0DEF7] dark:bg-[#1e293b] rounded-[50px] p-10 md:p-20 shadow-xl transition-colors duration-500">

        {/* Animated Background Glows */}
        <div className="absolute inset-0 overflow-hidden rounded-[50px] pointer-events-none">
          <div className="absolute -top-[15%] -left-[10%] w-[30rem] h-[30rem] bg-brand-purple/40 dark:bg-brand-purple/60 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse" />
          <div className="absolute -bottom-[15%] -right-[10%] w-[35rem] h-[35rem] bg-brand-orange/30 dark:bg-brand-orange/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-brand-purple/20 dark:bg-white/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulse [animation-delay:4s]" />
        </div>

        {/* Floating Paper Plane Icon + WiFi Wave Animation */}
        <div className="absolute top-4 right-4 md:-top-10 md:-right-6 z-30 animate-float">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
            <div className="absolute w-full h-full rounded-full bg-brand-purple/40 animate-ping-slow" />
            <div className="absolute w-full h-full rounded-full bg-brand-purple/30 animate-ping-slow [animation-delay:1s]" />
            <div className="absolute w-full h-full rounded-full bg-brand-purple/20 animate-ping-slow [animation-delay:2s]" />
          </div>

          <div className="relative w-14 h-14 md:w-24 md:h-24 bg-brand-purple rounded-full flex items-center justify-center shadow-2xl ring-4 md:ring-8 ring-white dark:ring-[#1e293b] transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-12 md:h-12 text-white translate-x-[-2px] translate-y-[2px]">
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#4A4A68] dark:text-white leading-tight max-w-4xl tracking-tight transition-colors duration-300">
            Become our Customer and Ready to Get <span className="text-brand-purple">Smarter</span> and <span className="text-brand-purple">Faster</span> Service?
          </h2>

          {/* Centered Mailto Button */}
          <div className="flex justify-center w-full">
            <a 
              href="mailto:info@dpvoffshore.com?subject=Service Inquiry via Website"
              className="relative inline-block group overflow-hidden bg-brand-orange hover:brightness-110 text-white font-bold py-4 px-12 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 text-lg md:text-xl whitespace-nowrap"
            >
              <span className="relative z-10">Start Now!</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Join 10,000+ users already scaling their business.
          </p>
          
        </div>
      </div>
    </section>
  );
}