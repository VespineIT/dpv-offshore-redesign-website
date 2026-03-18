'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaIndustry, FaBolt } from 'react-icons/fa';

const AboutUsSection = () => {
  const [experience, setExperience] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [epc, setEpc] = useState(0);
  const [powerPlants, setPowerPlants] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Highly optimized animation using requestAnimationFrame
          const animate = (setter, target, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              // Calculate progress between 0 and 1
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              
              // Apply an ease-out cubic curve for a premium smooth finish
              const easeOutProgress = 1 - Math.pow(1 - progress, 3); 
              
              setter(Math.ceil(easeOutProgress * target));
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };

          // Adjusted durations slightly so they feel snappy but smooth
          animate(setExperience, 12, 1200);
          animate(setEmployee, 100, 1800);
          animate(setEpc, 12, 2200);
          animate(setPowerPlants, 7, 2600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] p-[15px] transition-colors duration-300">
      
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
          <h2 className="font-['Poppins'] text-2xl md:text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase drop-shadow-lg mt-4 md:mt-8">
            About Us
          </h2>

          {/* Animated Description with Link */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center px-4 flex-grow flex flex-col justify-center my-6"
          >
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
              <span className="text-[#FF4500] font-bold">DPV Offshore & Marine Services</span> does more than deliver maritime services — we deliver trust, reliability, and innovation. With every project, we navigate challenges with the same precision and dedication that define the maritime world we serve.
            </p>
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
              At DPV Offshore & Marine Services, we value every partnership we build. Your success is at the heart of everything we do, and we are dedicated to delivering the most effective and reliable maritime solutions to support your goals. 
            </p>
            <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md font-semibold italic">
              "DPV Offshore & Marine Services — Your trusted partner in navigating tomorrow's maritime challenges."
              <br/>
              <a 
                href="/dpv-offshore-redesign-website/about" 
                className="inline-block ml-2 text-[#FF4500] font-bold hover:text-white transition-colors duration-300 underline underline-offset-4 not-italic"
              >
                Learn more about our journey &rarr;
              </a>
            </p>
          </motion.div>

          {/* Restructured Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 max-w-5xl mx-auto w-full mb-4 md:mb-8">
            
            {/* Experience */}
            <div className="flex flex-col items-center justify-center p-2">
              <FaAward className="text-3xl sm:text-4xl md:text-5xl text-[#FF4500] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
              <div className="text-white text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight drop-shadow-md">
                Experience
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4500] mt-1 drop-shadow-md">
                {experience}Y+
              </div>
            </div>

            {/* Employees */}
            <div className="flex flex-col items-center justify-center p-2">
              <FaUsers className="text-3xl sm:text-4xl md:text-5xl text-[#FF4500] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
              <div className="text-white text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight drop-shadow-md">
                Employees
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4500] mt-1 drop-shadow-md">
                {employee}+
              </div>
            </div>

            {/* EPC */}
            <div className="flex flex-col items-center justify-center p-2">
              <FaIndustry className="text-3xl sm:text-4xl md:text-5xl text-[#FF4500] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
              <div className="text-white text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight drop-shadow-md">
                EPC
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4500] mt-1 drop-shadow-md">
                {epc}+
              </div>
            </div>

            {/* Power Plants */}
            <div className="flex flex-col items-center justify-center p-2">
              <FaBolt className="text-3xl sm:text-4xl md:text-5xl text-[#FF4500] mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
              <div className="text-white text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold uppercase tracking-tight drop-shadow-md">
                Power Plants
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4500] mt-1 drop-shadow-md">
                {powerPlants}+
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;