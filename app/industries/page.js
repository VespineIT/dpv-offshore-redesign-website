"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Factory } from "lucide-react";

export default function Industries() {
  // Data for the cards
  const industryData = [
    {
      title: "Oil & Gas",
      description: "Comprehensive offshore engineering and maintenance services tailored for the demanding oil and gas sector.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Repairs",
      description: "Fast, reliable, and class-approved ship repair services minimizing downtime for your vessel operations.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Conversion",
      description: "Expert end-to-end conversion solutions, upgrading legacy vessels to meet modern industry standards.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Electrical Engineering",
      description: "Advanced electrical diagnostics, rewiring, and power management system upgrades for marine vessels.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Mechanical Engineering",
      description: "Precision mechanical overhauls, engine maintenance, and drivetrain optimization for maximum efficiency.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Oil Field Services",
      description: "Robust support and procurement services designed specifically for offshore oil field infrastructure.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Process Automation",
      description: "State-of-the-art fluid control and automation system integration for safer, smarter offshore operations.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Subsea Operations",
      description: "Specialized engineering and structural support for deep-water and subsea exploration projects.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Maritime Procurement",
      description: "Global sourcing of high-grade marine components, ensuring quality and compliance at every step.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    }
  ];

  // --- Framer Motion Variants ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] pb-24 font-['Poppins'] transition-colors duration-300">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/dpv-offshore-redesign-website/images/worker-hero.png" // Replace with actual path
            alt="Offshore Industries"
            fill 
            priority
            className="object-cover object-center"
          />
          
          {/* Deep Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 dark:bg-[#030712]/70 mix-blend-multiply z-10"></div>
          {/* Bottom gradient to blend smoothly into the page */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#030712] via-transparent to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Factory className="w-4 h-4 text-[#FF4500]" />
            What We Do
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg mb-4"
          >
            Our <span className="text-[#FF4500]">Industries</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md"
          >
            Delivering world-class engineering, procurement, and construction solutions across the global maritime and energy sectors.
          </motion.p>
        </div>
      </section>

      {/* ================= CARDS GRID SECTION ================= */}
      {/* -mt-20 pulls the grid up to overlap the hero section beautifully */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-16 md:-mt-24 relative z-30">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industryData.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant}
              className="group bg-white dark:bg-[#1e293b] rounded-[30px] border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2"
            >
              {/* Card Image Area (Inset style) */}
              <div className="relative w-[calc(100%-16px)] h-56 mx-auto mt-2 bg-gray-100 dark:bg-gray-800 rounded-[24px] overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Subtle dark overlay on image for dark mode consistency */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-[#FF4500] transition-colors duration-300 pr-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Orange Action Button (Bottom Right) */}
                <div className="absolute bottom-6 right-6">
                  <button className="w-10 h-10 rounded-full bg-[#FF4500] hover:bg-[#E63E00] flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300 group/btn">
                    <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}