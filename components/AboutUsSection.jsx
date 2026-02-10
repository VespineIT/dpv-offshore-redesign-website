'use client';

import React, { useState, useEffect, useRef } from 'react';

const AboutUsSection = () => {
  const [experience, setExperience] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [vessels, setVessels] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const animate = (setter, target, duration) => {
            const increment = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setter(target);
                clearInterval(timer);
              } else {
                setter(Math.ceil(current));
              }
            }, 16);
          };

          animate(setExperience, 2, 1000);
          animate(setEmployee, 120, 2000);
          animate(setVessels, 456, 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="w-full py-12 px-4 bg-white dark:bg-[#0f172a] flex flex-col items-center transition-colors duration-300">
      
      <h2 className="text-[#FF4500] text-xl md:text-2xl font-bold tracking-widest uppercase mb-8">
        About Us
      </h2>

      {/* Container optimized: 
          - aspect-video (16/9) on large screens
          - h-[400px] or aspect-square on small screens to ensure content fits
      */}
      <div 
        ref={sectionRef}
        className="relative w-full max-w-7xl aspect-video min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-[20px] overflow-hidden shadow-2xl"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/dpv-offshore-redesign-website/Videos/jackup_barge .mp4" type="video/mp4" />
          <img src="/fallback-image.jpg" alt="Offshore background" className="w-full h-full object-cover" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10"></div>

        {/* Statistics Overlay - Responsive Grid and Padding */}
        <div className="absolute inset-0 flex flex-col justify-end pb-8 md:pb-16 z-20">
          <div className="grid grid-cols-3 gap-2 px-4 max-w-5xl mx-auto w-full">
            
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {experience}Y+
              </div>
              <div className="text-white text-[10px] sm:text-xs md:text-lg font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
                Experience
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {employee}+
              </div>
              <div className="text-white text-[10px] sm:text-xs md:text-lg font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
                Employees
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {vessels}
              </div>
              <div className="text-white text-[10px] sm:text-xs md:text-lg font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
                Vessels
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;