import React from 'react';

export default function CallToAction() {
  return (
    <section className="w-full px-4 py-20 flex justify-center items-center bg-white dark:bg-[#030712] transition-colors duration-500">
      
      {/* Main Container Card 
          Note: REMOVED overflow-hidden so the icon can float outside.
          Added 'relative' to ensure z-index works.
      */}
      <div className="relative w-full max-w-6xl bg-[#E0DEF7] dark:bg-[#1e293b] rounded-[50px] p-10 md:p-20 shadow-xl transition-colors duration-500">
        
        {/* Animated Background Glows 
            Wrapped in overflow-hidden to keep blobs inside the card.
        */}
        <div className="absolute inset-0 overflow-hidden rounded-[50px] pointer-events-none">
          {/* Top-left Purple Blob */}
          <div className="absolute -top-[15%] -left-[10%] w-[30rem] h-[30rem] bg-brand-purple/40 dark:bg-brand-purple/60 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse" />
          
          {/* Bottom-right Orange Blob (Dual-tone effect) */}
          <div className="absolute -bottom-[15%] -right-[10%] w-[35rem] h-[35rem] bg-brand-orange/30 dark:bg-brand-orange/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-pulse [animation-delay:2s]" />
          
          {/* Center Subtle Bridge Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-brand-purple/20 dark:bg-white/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-pulse [animation-delay:4s]" />
        </div>

        {/* Floating Paper Plane Icon + WiFi Wave Animation */}
        <div className="absolute -top-8 -right-4 md:-top-10 md:-right-6 z-30 animate-float">
          
          {/* WiFi Ripple Waves using your config 'ping-slow' */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full bg-brand-purple/40 animate-ping-slow" />
            <div className="absolute w-full h-full rounded-full bg-brand-purple/30 animate-ping-slow [animation-delay:1s]" />
            <div className="absolute w-full h-full rounded-full bg-brand-purple/20 animate-ping-slow [animation-delay:2s]" />
          </div>

          {/* Icon Circle */}
          <div className="relative w-16 h-16 md:w-24 md:h-24 bg-brand-purple rounded-full flex items-center justify-center shadow-2xl ring-8 ring-white dark:ring-[#1e293b] transition-all duration-500">
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               fill="currentColor" 
               className="w-8 h-8 md:w-12 md:h-12 text-white translate-x-[-2px] translate-y-[2px]"
            >
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#4A4A68] dark:text-white leading-tight max-w-4xl tracking-tight transition-colors duration-300">
            Become our Customer and Ready to Get <span className="text-brand-purple">Smarter</span> and <span className="text-brand-purple">Faster</span> Service?
          </h2>

          {/* Form Area */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            
            {/* Input Field */}
            <div className="flex items-center bg-white dark:bg-[#0f172a] rounded-2xl px-6 py-4 w-full md:w-[450px] shadow-inner transition-all duration-300 group focus-within:ring-2 focus-within:ring-brand-purple/50">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6 text-gray-400 group-focus-within:text-brand-purple transition-colors"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              
              <input
                type="email"
                placeholder="Enter Your Email"
                className="ml-3 flex-grow outline-none text-gray-700 dark:text-gray-100 placeholder-gray-400 font-medium text-lg bg-transparent"
              />
            </div>

            {/* Action Button using brand-orange */}
            <button className="relative group overflow-hidden bg-brand-orange hover:brightness-110 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 w-full md:w-auto text-lg whitespace-nowrap">
              <span className="relative z-10">Start Now!</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Join 10,000+ users already scaling their business.
          </p>
        </div>
      </div>
    </section>
  );
}