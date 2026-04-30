"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Wrench, Cpu, Zap, PenTool, Settings, X, Anchor, Activity, Power, Toolbox, Cog } from "lucide-react";
import { categories, serviceCards } from "@/data/services";

export default function Services() {
  // State for Hub & Spoke
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // State for Modal
  const [selectedService, setSelectedService] = useState(null);

  // Reference for auto-scrolling
  const contentTopRef = useRef(null);

  // Auto-scroll up when a category is selected
  useEffect(() => {
    if (selectedCategory && contentTopRef.current) {
      const y = contentTopRef.current.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [selectedCategory]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  // Helper variables for rendering the active Spoke
  const activeCategoryObj = categories.find(cat => cat.id === selectedCategory);
  const activeServices = serviceCards.filter(service => service.category === selectedCategory);

  // Animation Variants
  const viewTransition = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, staggerChildren: 0.1 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  const cardFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] font-['Poppins'] transition-colors duration-300 pb-24 relative">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[40vh] min-h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Our_Services_hero_banner.png"
            alt="Offshore Services"
            fill 
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-[#030712]/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#030712] via-transparent to-transparent z-10"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-6">
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
            Comprehensive solutions across marine, electrical, mechanical, and heavy industrial applications.
          </motion.p>
        </div>
      </section>

      {/* ================= HUB AND SPOKE CONTENT ================= */}
      <section ref={contentTopRef} className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20 min-h-[500px] pt-12 md:pt-16">
        <AnimatePresence mode="wait">
          
          {/* ----- THE HUB: SHOW ALL CATEGORIES ----- */}
          {!selectedCategory ? (
            <motion.div 
              key="hub-view"
              variants={viewTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Service Divisions</h2>
                <div className="w-24 h-1 bg-[#FF4500] mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <motion.div 
                      key={category.id}
                      variants={cardFadeUp}
                      onClick={() => setSelectedCategory(category.id)}
                      className="group cursor-pointer bg-white dark:bg-[#1e293b] rounded-[24px] shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
                    >
                      <div className="relative h-40 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <Image src={category.img} alt={category.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                           <div className="p-2 bg-[#FF4500] rounded-lg">
                             <Icon className="w-5 h-5 text-white" />
                           </div>
                           <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                             {category.label}
                           </h3>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow justify-between bg-white dark:bg-[#1e293b]">
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                          {category.desc}
                        </p>
                        <div className="flex items-center text-[#FF4500] text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300 w-max">
                          View Services <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ) 
          
          /* ----- THE SPOKES: SHOW SPECIFIC SERVICES FOR A CATEGORY ----- */
          : (
            <motion.div 
              key="spoke-view"
              variants={viewTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              {/* Top Navigation Bar inside Spoke */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#1e293b] text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-[#FF4500] transition-all duration-300 w-max"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Categories
                </button>
                
                <div className="flex items-center gap-3 pr-4">
                  {activeCategoryObj && <activeCategoryObj.icon className="w-6 h-6 text-[#FF4500]" />}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {activeCategoryObj?.label}
                  </h2>
                </div>
              </div>

              {/* Main Category Overview Text */}
              {activeCategoryObj?.overview && (
                <div className="mb-10 p-6 md:p-8 bg-white dark:bg-[#1e293b] rounded-[30px] shadow-sm border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 space-y-4">
                  <p>{activeCategoryObj.overview.intro}</p>
                  {(activeCategoryObj.overview.products || activeCategoryObj.overview.applications) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      {activeCategoryObj.overview.products && (
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-2">Products:</strong>
                          <ul className="list-disc pl-5 space-y-1">
                            {activeCategoryObj.overview.products.map((p, i) => <li key={i}>{p}</li>)}
                          </ul>
                        </div>
                      )}
                      {activeCategoryObj.overview.applications && (
                        <div>
                          <strong className="text-gray-900 dark:text-white block mb-2">Application areas:</strong>
                          <ul className="list-disc pl-5 space-y-1">
                            {activeCategoryObj.overview.applications.map((a, i) => <li key={i}>{a}</li>)}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {activeServices.map((service) => (
                  <motion.div 
                    key={service.id} 
                    variants={cardFadeUp} 
                    onClick={() => setSelectedService(service)}
                    className="group cursor-pointer bg-white dark:bg-[#1e293b] rounded-[30px] shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-2"
                  >
                    <div className="relative w-[calc(100%-16px)] h-48 mx-auto mt-2 bg-blue-50/50 dark:bg-gray-800/50 rounded-[24px] overflow-hidden flex items-center justify-center">
                      <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FF4500] transition-colors duration-300 pr-10">
                        {service.title}
                      </h3>
                      {/* Enforced line-clamp here so the card view never breaks visually */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                        {service.desc}
                      </p>
                      <div className="absolute bottom-6 right-6">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedService(service);
                          }}
                          className="w-10 h-10 rounded-full bg-[#FF4500] hover:bg-[#E63E00] flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300 group/btn"
                        >
                          <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* ================= MODAL / POPUP SECTION (FIXED LAYOUT) ================= */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)} 
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} 
              // Fixed Layout: Set a precise height constraint and hid overflow at the wrapper level
              className="bg-white dark:bg-[#1e293b] w-full max-w-5xl h-[85vh] rounded-[30px] shadow-2xl flex flex-col md:flex-row relative overflow-hidden"
            >
              
              {/* Close Button - Now absolutely positioned over everything to stay visible */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 dark:bg-white/10 hover:bg-[#FF4500] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image - Pinned to the left side and scales to fill its container */}
              <div className="relative w-full md:w-2/5 h-48 md:h-full shrink-0">
                <Image 
                  src={selectedService.img} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e293b] to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Modal Content - Independently scrollable right side */}
              <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col overflow-y-auto">
                
                {/* Header Section (Doesn't shrink) */}
                <div className="shrink-0 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[#FF4500] text-xs font-semibold tracking-wider uppercase mb-4 w-max">
                    <Settings className="w-3 h-3" />
                    Service Details
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white pr-12">
                    {selectedService.title}
                  </h2>
                </div>
                
                {/* Details Section (Expands and holds the long text) */}
                <div className="flex-grow">
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#FF4500] pl-4">
                    {selectedService.desc}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {selectedService.details}
                  </p>
                </div>

                {/* Footer Section (Pinned to bottom of scroll content) */}
                <div className="shrink-0 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <button className="px-6 py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white rounded-full font-medium transition-colors duration-300 shadow-md">
                    Request This Service
                  </button>
                </div>
                
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}