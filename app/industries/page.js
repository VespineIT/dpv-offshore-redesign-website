"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Factory, X } from "lucide-react";

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    if (selectedIndustry) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndustry]);

  const industryData = [
    {
      title: "Oil & Gas / Oil Field",
      description: "Comprehensive mechanical and automation support services tailored for oil field operations and harsh environments.",
      details: "We supply essential automation solutions, equipment, and structural integrity management directly to offshore rigs and drillships. Our supply chain ensures the timely delivery of critical components in remote oil field locations.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Repairs",
      description: "Complete ship repair and drydocking services, ensuring safe operations.",
      details: "We provide reliable workmanship and on-time delivery in compliance with international marine standards. Our certified engineers handle everything from routine dry-docking to emergency afloat repairs.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_1.png" 
    },
    {
      title: "Ship Conversion",
      description: "Transform your vessel with confidence through innovative conversion solutions.",
      details: "Our expert team delivers ship conversion solutions that enhance performance, extend lifespan, and meet the demands of modern marine operations seamlessly.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_2.png"
    },
    {
      title: "Ship Electrical Engineering",
      description: "Powering the future of marine operations through advanced electrical and technology solutions.",
      details: "We deliver innovation, reliability, and performance to keep your vessel operating at its best, covering everything from main switchboards to energy storage and electric thruster systems.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_3.png"
    },
    {
      title: "Ship Mechanical Engineering",
      description: "Comprehensive engine overhaul services designed to restore power and reliability.",
      details: "With meticulous attention to detail, we execute main and auxiliary engine overhauls, 2-stroke/4-stroke diagnostics, and provide skilled riding crews (CDC Holders) to restore maximum efficiency.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_4.png"
    },
    {
      title: "Process Automation & Fluid Control",
      description: "Driving efficiency through smart innovation and fluid control solutions.",
      details: "We offer the latest technology from pneumatic automation to electric actuation. Our solutions bring precision, reliability, and intelligent performance to every stage of your vessel's operation.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_5.png"
    },
    {
      title: "Power Plants",
      description: "Ensuring power generation systems run smoothly with minimal downtime.",
      details: "We provide preventive maintenance, mechanical and electrical repairs, turbine overhauls, emergency breakdown support, and control system upgrades to improve operational performance.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_6.png"
    },
    {
      title: "Hydropower",
      description: "Engineering excellence in hydropower development, from feasibility to commissioning.",
      details: "End-to-end solutions including hydrological studies, turbine selection, electrical services for stations, rewinding generator stators, and transformer solutions across Asia & Africa.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_7.png"
    },
    {
      title: "Cranes",
      description: "Automation solutions designed to increase crane productivity and operational safety.",
      details: "Specialized systems engineered to improve throughput and precise control management, directly increasing heavy-lifting efficiency and site safety.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_8.png"
    },
    {
      title: "EPC Projects",
      description: "Expert Engineering, Procurement, and Construction services.",
      details: "We manage and deliver complex turnkey EPC projects on time and on budget, aligning world-class engineering with robust procurement networks and solid construction execution.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_9.png"
    },
    {
      title: "Industrial Automation",
      description: "Empowering industries through precision, speed, and reliable automation.",
      details: "Transforming traditional operations into smarter, more efficient systems through comprehensive industrial and process automation architectures.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_10.png"
    },
    {
      title: "Automotive",
      description: "Driving innovation forward safely and efficiently.",
      details: "Our automotive solutions combine engineering excellence and reliable performance to keep complex systems and infrastructure running seamlessly.",
      image: "/dpv-offshore-redesign-website/images/ship_pic_11.png"
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] pb-24 font-['Poppins'] transition-colors duration-300 relative">
      
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/dpv-offshore-redesign-website/images/worker-hero.png" 
            alt="Offshore Industries"
            fill 
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-[#030712]/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#030712] via-transparent to-transparent z-10"></div>
        </div>

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

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-16 md:-mt-24 relative z-30">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industryData.map((item, index) => (
            <motion.div 
              key={index} variants={fadeUpVariant}
              className="group bg-white dark:bg-[#1e293b] rounded-[30px] border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedIndustry(item)}
            >
              <div className="relative w-[calc(100%-16px)] h-56 mx-auto mt-2 bg-gray-100 dark:bg-gray-800 rounded-[24px] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-[#FF4500] transition-colors duration-300 pr-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                  {item.description}
                </p>

                <div className="absolute bottom-6 right-6">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedIndustry(item); }}
                    className="w-10 h-10 rounded-full bg-[#FF4500] hover:bg-[#E63E00] flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300 group/btn"
                    aria-label={`View details for ${item.title}`}
                  >
                    <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white dark:bg-[#1e293b] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl flex flex-col md:flex-row relative"
            >
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 dark:bg-white/10 hover:bg-[#FF4500] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px]">
                <Image src={selectedIndustry.image} alt={selectedIndustry.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e293b] to-transparent md:hidden"></div>
              </div>

              <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[#FF4500] text-xs font-semibold tracking-wider uppercase mb-4 w-max">
                  <Factory className="w-3 h-3" /> Industry Details
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedIndustry.title}
                </h2>
                
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#FF4500] pl-4">
                  {selectedIndustry.description}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedIndustry.details}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <button className="px-6 py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white rounded-full font-medium transition-colors duration-300 shadow-md">
                    Discuss a Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}