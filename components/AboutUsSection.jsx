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
          // Updated targets to match the image: 2, 120, 456
          animateCount(setExperience, 2, 1000); 
          animateCount(setEmployee, 120, 2000);
          animateCount(setVessels, 456, 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (setter, target, duration) => {
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

  return (
    // Added gradient background to match the design
    <section 
      ref={sectionRef} 
      className="py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-purple-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column: Image */}
        {/* Using the wireframe/rig image here. Ensure your PNG has a transparent background for best effect */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
           <img 
            src="/dpv-offshore-redesign-website/images/about-us.png" 
            alt="Offshore Rig Structure" 
            className="w-full max-w-lg object-contain transform scale-110 lg:scale-125"
          />
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 text-center lg:text-left">
          
          <div className="space-y-6">
            <h2 className="text-orange-500 text-2xl font-bold tracking-wider uppercase">
              About Us
            </h2>

            <p className="text-gray-800 leading-relaxed text-sm lg:text-base text-justify">
              Dvp offshore specializes in the engineering procurement and construction (EPC) services for the offshore industry, encompassing onshore, offshore and subsea operation. Our comprehensive from design engineering to manufacturing installation, maintenance, repair, and component supply enable us to deliver seamless project execution with uncompromising safety and quality standard.
            </p>

            <p className="text-gray-800 leading-relaxed text-sm lg:text-base text-justify">
              Built on long term client relationships and proven performance, we continue to earn the trust of our partners through our consistent commitment to excellence, reliability, and value-driven delivery.
            </p>
          </div>

          {/* Statistics Row */}
          <div className="flex flex-row justify-between items-start pt-4 lg:pr-12">
            
            {/* Experience */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500">
                {experience}Y+
              </div>
              <div className="text-indigo-900 font-semibold mt-2">Experience</div>
            </div>
            
            {/* Employees */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500">
                {employee}+
              </div>
              <div className="text-indigo-900 font-semibold mt-2">Employee</div>
            </div>
            
            {/* Vessels */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500">
                {vessels}
              </div>
              <div className="text-indigo-900 font-semibold mt-2">Complete Vessels</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;