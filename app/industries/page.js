"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Factory, X, Flame, Anchor, Wrench, Building2, Zap, Droplets, Cog, Settings2, Cpu, Car, Package, Ship } from "lucide-react";
import { industryData } from "@/data/industries";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const industryIconMap = {
  'Oil & Gas': Flame,
  'Ship Repairs': Anchor,
  'Rig Repairs': Wrench,
  'EPC Projects': Building2,
  'Power Plants': Zap,
  'Hydro Power': Droplets,
  'Cranes': Cog,
  'Process Automation & Fluid Control': Settings2,
  'Industrial Automation': Cpu,
  'Automotive': Car,
  'Integrated Products & Trading': Package,
  'Ship Management': Ship,
};

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    if (selectedIndustry) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndustry]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] pb-24 font-['Poppins'] transition-colors duration-300 relative">

      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Our_industries_hero_banner.png"
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
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industryData.map((item, index) => {
            const Icon = industryIconMap[item.title] || Factory;
            return (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                onClick={() => setSelectedIndustry(item)}
                className="group cursor-pointer bg-white dark:bg-[#1e293b] rounded-[24px] shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-40 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="p-2 bg-[#FF4500] rounded-lg shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between bg-white dark:bg-[#1e293b]">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-[#FF4500] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300 w-max">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
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

                {selectedIndustry.description && (
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#FF4500] pl-4">
                    {selectedIndustry.description}
                  </h4>
                )}

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedIndustry.details}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href="mailto:info@dpvoffshore.com?subject=Project Inquiry"
                    className="inline-block"
                  >
                    <button className="px-6 py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white rounded-full font-medium transition-colors duration-300 shadow-md">
                      Discuss a Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
