"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Wrench, Cpu, Zap, PenTool, Settings, X, Anchor, Activity, Power, Toolbox, Cog } from "lucide-react";

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
      // Calculates position and scrolls smoothly, offsetting by 40px for breathing room
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

  // The 11 Main Categories (The "Hub")
  const categories = [
    { id: "cat_1", label: "Ship Repair", icon: Anchor, img: "/images/ship_pic_1.png", desc: "Comprehensive dry docking, conversions, and hull maintenance." },
    { id: "cat_2", label: "Yacht Refitting", icon: PenTool, img: "/images/ship_pic_5.png", desc: "Premium painting, electrical, and fiberglass restorations." },
    { id: "cat_3", label: "Ship Electrical Engineering & Technology", icon: Zap, img: "/images/ship_pic_2.png", desc: "System integration, configuration, and motor rewinding." },
    { id: "cat_4", label: "Ship Pneumatic Technology", icon: Activity, img: "/images/ship_pic_4.png", desc: "Advanced electric actuation and intelligent fluid control." },
    { id: "cat_5", label: "Ship Mechanical Engineering & Technology", icon: Cog, img: "/images/ship_pic_6.png", desc: "Heavy mechanical overhauls and bearing remetalling." },
    { id: "cat_6", label: "PROPULSION", icon: Toolbox, img: "/images/ship_pic_3.png", desc: "FPP, CPP, and thruster overhauls with precision blade polishing." },
    { id: "cat_7", label: "Mobile In-Situ Machining", icon: Wrench, img: "/images/ship_pic_7.png", desc: "On-site turning, milling, grinding, and line boring." },
    { id: "cat_8", label: "Power Plant Related Services", icon: Power, img: "/images/ship_pic_8.png", desc: "Maintenance, retrofits, and emergency breakdown repairs." },
    { id: "cat_9", label: "Electrical Services for Hydro Power Stations", icon: Zap, img: "/images/ship_pic_4.png", desc: "Stator rewinding and high-voltage transformer solutions." },
    { id: "cat_10", label: "Cranes", icon: Settings, img: "/images/ship_pic_9.png", desc: "Shipyard diagnostics, new systems, and life-extension retrofits." },
    { id: "cat_11", label: "OEM Solutions", icon: Cpu, img: "/images/ship_pic_2.png", desc: "Genuine spare parts for engines, cranes, and auxiliary machinery." },
  ];

  // The specific services mapped to categories (The "Spokes")
  const serviceCards = [
    // 1. Ship Repair
    { id: 101, title: "Dry Docking", desc: "Expert Dry Docking services.", details: "Comprehensive dry docking solutions ensuring your vessel meets all operational standards.", img: "/images/ship_pic_1.png", category: "cat_1" },
    { id: 102, title: "Dry Docking Management", desc: "Professional Dry Docking Management.", details: "Complete management of dry docking schedules, logistics, and operational execution.", img: "/images/ship_pic_2.png", category: "cat_1" },
    { id: 103, title: "Ship Conversion", desc: "Ship Conversion solutions.", details: "Transform your vessel's capabilities and extend its lifespan with our specialized conversion services.", img: "/images/ship_pic_3.png", category: "cat_1" },
    { id: 104, title: "Piping", desc: "Marine Piping systems.", details: "High-quality fabrication, installation, and repair for all marine piping configurations.", img: "/images/ship_pic_4.png", category: "cat_1" },

    // 2. Yacht Refitting
    { id: 201, title: "Hull Painting & Fiberglass Works", desc: "Protective Hull Painting & Fiberglass.", details: "Premium coating applications and structural fiberglass repairs for ultimate durability.", img: "/images/ship_pic_5.png", category: "cat_2" },
    { id: 202, title: "Electrical Systems & Lighting", desc: "Electrical Systems & Lighting.", details: "Complete servicing and installation of yacht electrical grids and advanced lighting systems.", img: "/images/ship_pic_6.png", category: "cat_2" },
    { id: 203, title: "Onboard Instrumentation", desc: "Onboard Instrumentation maintenance.", details: "Calibration and repair of crucial navigation and operational instruments.", img: "/images/ship_pic_7.png", category: "cat_2" },
    { id: 204, title: "Anti-Osmosis Treatment", desc: "Anti-Osmosis Treatment.", details: "Specialized hull treatments to prevent and repair osmotic blistering on yachts.", img: "/images/ship_pic_8.png", category: "cat_2" },

    // 3. Ship Electrical Engineering & Technology
    { id: 301, title: "Ship Electrical Engineering", desc: "Ship Electrical Engineering.", details: "Expert engineering covering all electrical power generation and distribution onboard.", img: "/images/ship_pic_9.png", category: "cat_3" },
    { id: 302, title: "System Integration", desc: "System Integration.", details: "Uniting distinct marine systems into a single efficient, monitored network.", img: "/images/ship_pic_1.png", category: "cat_3" },
    { id: 303, title: "System Configuration", desc: "System Configuration.", details: "Tailored setups for generators, switchboards, and drives for optimal performance.", img: "/images/ship_pic_2.png", category: "cat_3" },
    { id: 304, title: "Motors & Rotors Rewinding", desc: "Motors & Rotors Rewinding.", details: "Precision rewinding extending the lifecycle and efficiency of critical marine motors.", img: "/images/ship_pic_3.png", category: "cat_3" },

    // 4. Ship Pneumatic Technology
    { id: 401, title: "Electric Actuation", desc: "Electric Actuation.", details: "Motion management systems engineered for marine precision and durability.", img: "/images/ship_pic_4.png", category: "cat_4" },
    { id: 402, title: "Fluid Control", desc: "Fluid Control.", details: "Advanced valves, fittings, and air treatment components for streamlined fluid handling.", img: "/images/ship_pic_5.png", category: "cat_4" },

    // 5. Ship Mechanical Engineering & Technology
    { id: 501, title: "Overhaul Services", desc: "Overhaul Services.", details: "Full breakdown, inspection, and rebuilding of essential mechanical systems.", img: "/images/ship_pic_6.png", category: "cat_5" },
    { id: 502, title: "RECONDITIONING SERVICES", desc: "RECONDITIONING SERVICES.", details: "Machining and revitalizing worn engine components to factory specifications.", img: "/images/ship_pic_7.png", category: "cat_5" },
    { id: 503, title: "REMETALLING BABBITT BEARINGS", desc: "REMETALLING BABBITT BEARINGS.", details: "Specialized remetalling to restore bearing surfaces for high-load machinery.", img: "/images/ship_pic_8.png", category: "cat_5" },

    // 6. PROPULSION
    { id: 601, title: "FPP Overhaul", desc: "FPP Overhaul.", details: "Inspection, repair, and balancing of fixed pitch propellers.", img: "/images/ship_pic_9.png", category: "cat_6" },
    { id: 602, title: "CPP Overhaul", desc: "CPP Overhaul.", details: "Complex overhauls for controllable pitch propeller units.", img: "/images/ship_pic_1.png", category: "cat_6" },
    { id: 603, title: "Thruster Overhaul", desc: "Thruster Overhaul.", details: "Restoring maneuverability by overhauling crucial thruster assemblies.", img: "/images/ship_pic_2.png", category: "cat_6" },
    { id: 604, title: "Polishing Blades", desc: "Polishing Blades.", details: "Propeller polishing to enhance hydrodynamic efficiency and save fuel.", img: "/images/ship_pic_3.png", category: "cat_6" },

    // 7. Mobile In-Situ Machining
    { id: 701, title: "Turning & Line Boring", desc: "Turning & Line Boring.", details: "Mobile lathe and spindle work for all applications on site.", img: "/images/ship_pic_4.png", category: "cat_7" },
    { id: 702, title: "Mobile lathe and spindle work for all applications", desc: "Mobile lathe and spindle work for all applications.", details: "Comprehensive in-situ lathe and spindle machining.", img: "/images/ship_pic_5.png", category: "cat_7" },
    { id: 703, title: "Milling", desc: "Milling.", details: "High-precision on-site milling for heavy equipment structures.", img: "/images/ship_pic_6.png", category: "cat_7" },
    { id: 704, title: "Grinding", desc: "Grinding.", details: "Precision surface grinding for demanding industrial applications.", img: "/images/ship_pic_7.png", category: "cat_7" },
    { id: 705, title: "Blade grinding for the efficiency of gas turbines", desc: "Blade grinding for the efficiency of gas turbines.", details: "Specialized grinding to maintain peak gas turbine performance.", img: "/images/ship_pic_8.png", category: "cat_7" },
    { id: 706, title: "Drilling", desc: "Drilling.", details: "In-situ drilling operations for structural and mechanical repairs.", img: "/images/ship_pic_9.png", category: "cat_7" },
    { id: 707, title: "Shaft machining", desc: "Shaft machining.", details: "In-place shaft machining and restoration.", img: "/images/ship_pic_1.png", category: "cat_7" },
    { id: 708, title: "Professional rotor shaft machining on site", desc: "Professional rotor shaft machining on site.", details: "Expert on-site machining specifically for rotor shafts.", img: "/images/ship_pic_2.png", category: "cat_7" },
    { id: 709, title: "Flange Machining", desc: "Flange Machining.", details: "Restoring worn flanges to achieve perfect sealing surfaces.", img: "/images/ship_pic_3.png", category: "cat_7" },
    { id: 710, title: "Runner Processing and Balancing Operations", desc: "Runner Processing and Balancing Operations.", details: "Accurate processing and balancing to eliminate vibrations.", img: "/images/ship_pic_4.png", category: "cat_7" },
    { id: 711, title: "Honing and burnishing", desc: "Honing and burnishing.", details: "Surface finish improvements for cylinders and liners.", img: "/images/ship_pic_5.png", category: "cat_7" },
    { id: 712, title: "Pipe cutting and weld seam preparation", desc: "Pipe cutting and weld seam preparation.", details: "Mobile cutting solutions ensuring perfect preparation for critical welds.", img: "/images/ship_pic_6.png", category: "cat_7" },

    // 8. Power Plant Related Services
    { id: 801, title: "Preventive Maintenance", desc: "Preventive Maintenance.", details: "Routine maintenance programs maximizing plant uptime.", img: "/images/ship_pic_7.png", category: "cat_8" },
    { id: 802, title: "Retrofit and Upgrades", desc: "Retrofit and Upgrades.", details: "Modernizing existing power infrastructure with the latest technology.", img: "/images/ship_pic_8.png", category: "cat_8" },
    { id: 803, title: "Engine Services", desc: "Engine Services.", details: "Servicing massive power generators for continuous reliable output.", img: "/images/ship_pic_9.png", category: "cat_8" },
    { id: 804, title: "Turbine Related Maintenance", desc: "Turbine Related Maintenance.", details: "Specialized care for gas and steam turbine systems.", img: "/images/ship_pic_1.png", category: "cat_8" },
    { id: 805, title: "Emergency Breakdown Services", desc: "Emergency Breakdown Services.", details: "Rapid response teams deployed to troubleshoot and repair sudden failures.", img: "/images/ship_pic_2.png", category: "cat_8" },
    { id: 806, title: "Control Systems & Automation", desc: "Control Systems & Automation.", details: "Upgrading PLC networks and SCADA systems for modern plant management.", img: "/images/ship_pic_3.png", category: "cat_8" },

    // 9. Electrical Services for Hydro Power Stations
    { id: 901, title: "Rewinding of the generator stators", desc: "Rewinding of the generator stators.", details: "High-voltage stator rewinding extending generator operational life.", img: "/images/ship_pic_4.png", category: "cat_9" },
    { id: 902, title: "Increasing of power hydroelectric generators", desc: "Increasing of power hydroelectric generators.", details: "Capacity and efficiency boosting for active hydro facilities.", img: "/images/ship_pic_5.png", category: "cat_9" },
    { id: 903, title: "Transformer solutions", desc: "Transformer solutions.", details: "Testing, oil purification, and repair for crucial transformers.", img: "/images/ship_pic_6.png", category: "cat_9" },

    // 10. Cranes
    { id: 1001, title: "Automation, system integration and diagnostics for port & shipyard, Ship crane applications", desc: "Automation, system integration and diagnostics.", details: "Complete integration and diagnostics for port, shipyard, and ship crane applications.", img: "/images/ship_pic_7.png", category: "cat_10" },
    { id: 1002, title: "Crane System Upgrades", desc: "Crane System Upgrades.", details: "Modernizing older crane systems with safer, faster drives and controls.", img: "/images/ship_pic_8.png", category: "cat_10" },
    { id: 1003, title: "New Crane Systems to Fit Your Needs", desc: "New Crane Systems to Fit Your Needs.", details: "Turnkey installations of new lifting equipment tailored to operations.", img: "/images/ship_pic_9.png", category: "cat_10" },
    { id: 1004, title: "Retrofit Solutions to Extend a Crane’s Service Life", desc: "Retrofit Solutions to Extend a Crane’s Service Life.", details: "Targeted component replacements extending functionality economically.", img: "/images/ship_pic_1.png", category: "cat_10" },

    // 11. OEM Solutions
    { id: 1101, title: "Engine Spare Parts Supply", desc: "Engine Spare Parts Supply.", details: "Sourcing and delivering crucial engine parts for uninterrupted operations.", img: "/images/ship_pic_2.png", category: "cat_11" },
    { id: 1102, title: "Crane Spare Parts Supply", desc: "Crane Spare Parts Supply.", details: "Direct supply of certified replacement parts for crane systems.", img: "/images/ship_pic_3.png", category: "cat_11" },
    { id: 1103, title: "Auxiliary Machinery Spare Parts Supply", desc: "Auxiliary Machinery Spare Parts Supply.", details: "Supplying vital components for onboard pumps, compressors, and purifiers.", img: "/images/ship_pic_4.png", category: "cat_11" },
    { id: 1104, title: "Propulsion Spare Supply", desc: "Propulsion Spare Supply.", details: "Ensuring top-tier genuine parts for drive mechanisms and main engines.", img: "/images/ship_pic_5.png", category: "cat_11" }
  ];

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
      {/* We add the ref right here to this wrapping section */}
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Select a Service Division</h2>
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
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
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
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-2">
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

      {/* ================= MODAL / POPUP SECTION ================= */}
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
              className="bg-white dark:bg-[#1e293b] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[30px] shadow-2xl flex flex-col md:flex-row relative"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 dark:bg-white/10 hover:bg-[#FF4500] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[300px]">
                <Image 
                  src={selectedService.img} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e293b] to-transparent md:hidden"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[#FF4500] text-xs font-semibold tracking-wider uppercase mb-4 w-max">
                  <Settings className="w-3 h-3" />
                  Service Details
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedService.title}
                </h2>
                
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#FF4500] pl-4">
                  {selectedService.desc}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedService.details}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
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