'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const expertiseList = [
  { title: 'Products',          imageUrl: '/images/expertise_products.png' },
  { title: 'Operations',        imageUrl: '/images/expertise_operations.png' },
  { title: 'Technical Support', imageUrl: '/images/expertise_support.png' },
  { title: 'Repair Orders',     imageUrl: '/images/expertise_repair.png' },
  { title: 'Maintenance',       imageUrl: '/images/expertise_maintenance.png' },
];

const ORANGE = '#FF4500';
const PURPLE = '#4A3FA0';

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the accordion
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % expertiseList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-[#030712] overflow-hidden transition-colors duration-300 flex flex-col items-center min-h-screen">
      
      {/* ── Top Header Zone ── */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-['Poppins'] text-3xl md:text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-4 transition-colors duration-300">
          Our Expertise
        </h2>
        <p className="text-center text-[#1E3A8A] dark:text-white text-xl md:text-3xl font-bold max-w-3xl mx-auto tracking-tight transition-colors duration-300">
        Delivering  safe,efficient, and cost-effective  solutions for asset management projects , ensuring  maximum value  every time.
        </p>
      </div>

      {/* ── Expanding Image Accordion (Desktop) ── */}
      <div className="hidden md:flex px-4 gap-4 w-full max-w-[1200px] h-[500px] mb-12">
        {expertiseList.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={item.title}
              onClick={() => setActiveIndex(index)}
              animate={{ flex: isActive ? 5 : 1 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="relative rounded-[24px] overflow-hidden cursor-pointer bg-[#E5E0F5]"
            >
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                animate={{
                  scale: isActive ? 1.05 : 1,
                  opacity: isActive ? 1 : 0.6
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full object-cover object-center"
              />

              <motion.div
                animate={{
                  background: isActive
                    ? 'linear-gradient(to top, rgba(74, 63, 160, 0.9) 0%, rgba(0,0,0,0) 50%)'
                    : 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)',
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              />

              <div className="absolute bottom-0 left-0 w-full p-[32px_24px] flex items-end">
                <motion.h3
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20
                  }}
                  transition={{
                    duration: 0.4,
                    delay: isActive ? 0.2 : 0
                  }}
                  className={`font-['Poppins'] text-white text-[28px] font-extrabold m-0 whitespace-nowrap ${isActive ? 'relative' : 'absolute'}`}
                >
                  {item.title}
                </motion.h3>

                <motion.h3
                  initial={false}
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`font-['Poppins'] text-white text-[18px] font-semibold m-0 whitespace-nowrap origin-bottom-left -rotate-90 translate-x-[20px] translate-y-[15px] pointer-events-none ${isActive ? 'absolute' : 'relative'}`}
                >
                  {item.title}
                </motion.h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Mobile Crossfade View ── */}
      <div className="md:hidden w-full px-4 mb-10">
        {/* Main active image card */}
        <div className="relative rounded-[20px] overflow-hidden h-[260px] bg-[#E5E0F5]">
          {expertiseList.map((item, index) => (
            <motion.div
              key={item.title}
              className="absolute inset-0"
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(74,63,160,0.88)] via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-white text-2xl font-extrabold font-['Poppins']">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-3">
          {expertiseList.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-1 rounded-xl overflow-hidden transition-all duration-300 ${
                index === activeIndex
                  ? 'ring-2 ring-[#FF4500] opacity-100'
                  : 'opacity-40 hover:opacity-60'
              }`}
              aria-label={item.title}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-[52px] object-cover object-center"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Bottom Boilerplate & Progress ── */}
      {/* ── Bottom Boilerplate & Progress ── */}
      <div className="px-4 transition-colors duration-300 max-w-[820px] w-full text-center mx-auto">
        <p className="text-[#1A1A24] dark:text-gray-200 transition-colors duration-300 text-[clamp(14px,1.5vw,16px)] font-normal leading-[1.8] mb-5">
          DPV offshore delivers engineering, procurement and construction services to the offshore industry.
        </p>

        {/* 3 Columns Layout styled as pill buttons (Centered with reduced vertical spacing) */}
        <div className="flex justify-center gap-4 md:gap-12 items-center w-full my-6 text-[clamp(12px,1.2vw,16px)]">
          <span className="bg-[#FF4500] text-white font-bold uppercase rounded-full px-4 py-2 md:px-8 md:py-3 shadow-md tracking-wider text-center">
            ONSHORE
          </span>
          <span className="bg-[#FF4500] text-white font-bold uppercase rounded-full px-4 py-2 md:px-8 md:py-3 shadow-md tracking-wider text-center">
            OFFSHORE
          </span>
          <span className="bg-[#FF4500] text-white font-bold uppercase rounded-full px-4 py-2 md:px-8 md:py-3 shadow-md tracking-wider text-center">
            SUBSEA
          </span>
        </div>

        <p className="text-[#1A1A24] dark:text-gray-200 transition-colors duration-300 text-[clamp(14px,1.5vw,16px)] font-normal leading-[1.8] mb-8 text-left">
          The service, which ranges from design engineering to the manufacture, installation, maintenance, repair and supply of components, has allowed us to have a long history with a good level of satisfaction on the part of our customers, and that they place their trust in our work.
        </p>

        {/* Simple Progress Indicators */}
        <div className="flex justify-center gap-3 w-full">
          {expertiseList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-3 rounded-full border-none cursor-pointer p-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                width: i === activeIndex ? '32px' : '12px',
                backgroundColor: i === activeIndex ? ORANGE : '#D1CAF5',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}