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
          // Helper to wrap the animation logic
          const animate = (setter, target, duration) => {
             const start = 0;
             const increment = target / (duration / 16);
             let current = start;
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    // Section Background: bg-white -> dark:bg-[#0f172a]
    <section className="w-full py-12 px-4 bg-white dark:bg-[#0f172a] flex flex-col items-center transition-colors duration-300">
      
      {/* "ABOUT US" Header 
          The orange color (#FF4500) works well on both white and dark backgrounds.
      */}
      <h2 className="text-[#FF4500] text-2xl font-bold tracking-widest uppercase mb-8">
        About Us
      </h2>

      {/* Main Container with Video and Stats 
          Added a subtle dark mode shadow/border effect to make the video pop
      */}
      <div 
        ref={sectionRef}
        className="relative w-full max-w-6xl h-[500px] md:h-[600px] rounded-[30px] overflow-hidden shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Note: Corrected the backslash in path to forward slash for better compatibility */}
          <source src="/dpv-offshore-redesign-website/Videos/jackup_barge .mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src="/fallback-image.jpg" alt="Offshore background" className="w-full h-full object-cover" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>

        {/* Statistics Overlay at the Bottom */}
        <div className="absolute bottom-10 left-0 w-full px-6">
          <div className="grid grid-cols-3 text-center max-w-4xl mx-auto">
            
            {/* Experience */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {experience}Y+
              </div>
              <div className="text-white text-sm md:text-lg font-bold mt-2 drop-shadow-md">
                Experience
              </div>
            </div>

            {/* Employee */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {employee}+
              </div>
              <div className="text-white text-sm md:text-lg font-bold mt-2 drop-shadow-md">
                Employee
              </div>
            </div>

            {/* Complete Vessels */}
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black text-[#FF4500] drop-shadow-lg">
                {vessels}
              </div>
              <div className="text-white text-sm md:text-lg font-bold mt-2 drop-shadow-md">
                Complete Vessels
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;