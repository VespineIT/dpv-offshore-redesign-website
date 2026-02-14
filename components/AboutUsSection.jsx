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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] p-[15px] transition-colors duration-300">
      
      {/* Removed the orange border classes, but kept rounded corners and shadow */}
      <div 
        ref={sectionRef}
        className="relative w-full h-full rounded-[24px] overflow-hidden shadow-2xl"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/dpv-offshore-redesign-website/Videos/jackup_barge .mp4" type="video/mp4" />
          <img src="/fallback-image.jpg" alt="Offshore background" className="w-full h-full object-cover" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10 pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 flex flex-col justify-between h-full pt-12 pb-8 md:pb-16 px-4">
          
          {/* Header */}
          <h2 className="font-['Poppins'] text-3xl md:text-3xl font-bold text-[#FF4500] text-center tracking-widest uppercase drop-shadow-lg mt-4 md:mt-8">
            About Us
          </h2>

          {/* ADDED TEXT SECTION */}
          <div className="max-w-4xl mx-auto text-center px-4 flex-grow flex flex-col justify-center my-6">
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
              <span className="text-[#FF4500] font-bold">DPV Offshore</span> specializes in engineering, procurement, and construction (EPC) services for the offshore industry, encompassing onshore, offshore, and subsea operations.
            </p>
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
              Our comprehensive capabilities — from design engineering to manufacturing, installation, maintenance, repair, and component supply — enable us to deliver seamless project execution with uncompromising safety and quality standards.
            </p>
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md">
              Built on long-term client relationships and proven performance, we continue to earn the trust of our partners through our consistent commitment to excellence, reliability, and value-driven delivery.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-2 max-w-5xl mx-auto w-full mb-4 md:mb-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FF4500] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                {experience}Y+
              </div>
              <div className="text-white text-[12px] sm:text-sm md:text-xl font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
                Experience
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FF4500] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                {employee}+
              </div>
              <div className="text-white text-[12px] sm:text-sm md:text-xl font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
                Employees
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-7xl font-black text-[#FF4500] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                {vessels}
              </div>
              <div className="text-white text-[12px] sm:text-sm md:text-xl font-bold mt-1 md:mt-2 uppercase tracking-tight drop-shadow-md">
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