'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaIndustry, FaBolt, FaShip, FaGlobe } from 'react-icons/fa';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import StatItem from '../ui/StatItem';

const COUNTER_TARGETS = [
  { target: 12, duration: 1200 },
  { target: 100, duration: 1800 },
  { target: 12, duration: 2200 },
  { target: 7, duration: 2600 },
  { target: 465, duration: 2400 },
  { target: 14, duration: 1500 },
];

const AboutUsSection = () => {
  const { counts, sectionRef } = useCounterAnimation(COUNTER_TARGETS);
  const [experience, employee, epc, powerPlants, vessels, countries] = counts;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712] p-[15px] transition-colors duration-300">
      <div
        ref={sectionRef}
        className="relative w-full h-full rounded-[24px] overflow-hidden shadow-2xl"
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/Videos/jackup_barge .mp4" type="video/mp4" />
          <img src="/fallback-image.jpg" alt="Offshore background" className="w-full h-full object-cover" />
        </video>

        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col justify-between h-full pt-12 pb-8 md:pb-16 px-4">
          <h2 className="font-['Poppins'] text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase drop-shadow-lg mt-4 md:mt-8">
            About Us
          </h2>

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
              <br />
              <a href="/about" className="inline-block ml-2 text-[#FF4500] font-bold hover:text-white transition-colors duration-300 underline underline-offset-4 not-italic">
                Learn more about our journey &rarr;
              </a>
            </p>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2 max-w-6xl mx-auto w-full mb-4 md:mb-8">
            <StatItem icon={FaAward} label="Experience" value={experience} suffix="Y+" />
            <StatItem icon={FaUsers} label="Employees" value={employee} />
            <StatItem icon={FaIndustry} label="EPC" value={epc} />
            <StatItem icon={FaBolt} label="Power Plants" value={powerPlants} />
            <StatItem icon={FaShip} label="Vessels" value={vessels} />
            <StatItem icon={FaGlobe} label="Countries" value={countries} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
