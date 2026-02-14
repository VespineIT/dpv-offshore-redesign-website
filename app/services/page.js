"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Wrench, Cpu, Settings } from "lucide-react";

export default function Services() {
  // State for active tab
  const [activeTab, setActiveTab] = useState("repair");

  // Expanded Service Cards Data with categories for the tabs
  const serviceCards = [
    {
      id: 1,
      title: "Ship Conversion",
      desc: "Comprehensive structural and functional conversion services tailored to meet modern maritime requirements.",
      img: "/dpv-offshore-redesign-website/images/ship-1.jpg", // Replace with your actual paths
      category: "repair"
    },
    {
      id: 2,
      title: "Hull Repair & Fabrication",
      desc: "Advanced welding and fabrication services to restore hull integrity and ensure vessel safety.",
      img: "/dpv-offshore-redesign-website/images/ship-4.jpg",
      category: "repair"
    },
    {
      id: 3,
      title: "Ship Electrical Engineering",
      desc: "State-of-the-art electrical diagnostics, rewiring, and power management system upgrades.",
      img: "/dpv-offshore-redesign-website/images/ship-2.jpg",
      category: "systems"
    },
    {
      id: 4,
      title: "System Integration",
      desc: "Seamless integration of modern navigation, communication, and automation systems for smart vessels.",
      img: "/dpv-offshore-redesign-website/images/ship-3.jpg",
      category: "systems"
    }
  ];

  // Filter cards based on active tab
  const filteredServices = serviceCards.filter(service => service.category === activeTab);

  // --- Framer Motion Variants ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] font-['Poppins'] transition-colors duration-300 pb-24">
      
      {/* ================= HERO SECTION (Updated to match Industries/Production) ================= */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/dpv-offshore-redesign-website/images/services-hero.jpg" // Use a relevant hero image here
            alt="Offshore Services"
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
            <Settings className="w-4 h-4 text-[#FF4500]" />
            What We Do
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg mb-4"
          >
            Our <span className="text-[#FF4500]">Services</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md"
          >
            From heavy-duty dry docking to advanced system integrations, we provide end-to-end maritime solutions you can trust.
          </motion.p>
        </div>
      </section>

      {/* ================= TAB NAVIGATION ================= */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 relative z-20">
        <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-16 border-b border-gray-200 dark:border-gray-800">
          
          {/* Tab 1 */}
          <button 
            onClick={() => setActiveTab("repair")}
            className={`relative pb-4 text-lg md:text-xl font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${
              activeTab === "repair" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
          >
            <Wrench className="w-5 h-5" />
            Ship Repair & Dry Docking
            {activeTab === "repair" && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md"
              />
            )}
          </button>

          {/* Tab 2 */}
          <button 
            onClick={() => setActiveTab("systems")}
            className={`relative pb-4 text-lg md:text-xl font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${
              activeTab === "systems" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
            }`}
          >
            <Cpu className="w-5 h-5" />
            System Configuration
            {activeTab === "systems" && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md"
              />
            )}
          </button>

        </nav>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20 min-h-[400px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id}
                layout
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-white dark:bg-[#1e293b] rounded-[30px] shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Container (Inset Style) */}
                <div className="relative w-[calc(100%-16px)] h-48 mx-auto mt-2 bg-blue-50/50 dark:bg-gray-800/50 rounded-[24px] overflow-hidden flex items-center justify-center">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Overlay for dark mode blending */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/20 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF4500] transition-colors duration-300 pr-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>

                  {/* Orange Action Button */}
                  <div className="absolute bottom-6 right-6">
                    <button className="w-10 h-10 rounded-full bg-[#FF4500] hover:bg-[#E63E00] flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300 group/btn">
                      <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

    </div>
  );
}