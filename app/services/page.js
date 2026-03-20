"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Wrench, Cpu, Zap, PenTool, Settings, X } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("repair");
  // State to manage the currently selected service for the popup
  const [selectedService, setSelectedService] = useState(null);

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

  const serviceCards = [
    // --- Ship Repair & Dry Docking ---
    {
      id: 1,
      title: "Ship Repairs & Drydocking",
      desc: "Complete ship repair and drydocking services, ensuring safe operations, reliable workmanship, and on-time delivery.",
      details: "We provide complete ship repair and drydocking services, ensuring safe operations, reliable workmanship, and on-time delivery in compliance with international marine standards. Our certified engineers handle everything from routine maintenance to complex structural repairs.",
      img: "/images/ship_pic_1.png",
      category: "repair"
    },
    {
      id: 2,
      title: "Ship Conversion",
      desc: "Transform your vessel with confidence. Innovative ship conversion solutions that enhance performance and extend lifespan.",
      details: "Transform your vessel with confidence. Our expert team delivers innovative ship conversion solutions that enhance performance, extend lifespan, and meet the demands of modern marine operations. We oversee the entire process from feasibility studies to final commissioning.",
      img: "/images/ship_pic_2.png",
      category: "repair"
    },
    {
      id: 3,
      title: "Propulsion Services",
      desc: "High-quality work on MAN, ZF, Wartsila, Berg, & Kawasaki. Includes FPP/CPP overhauls, thruster overhauls, and blade polishing.",
      details: "Our engineers are experienced and highly skilled in products of the best-known brands in the industry such as MAN, ZF, Wartsila, Berg, Kawasaki & etc. We provide propulsion services by arranging flying squads attending vessels in worldwide shipyards, an ideal option for difficult areas with no service facilities.",
      img: "/images/ship_pic_3.png",
      category: "repair"
    },
    // --- System Configuration ---
    {
      id: 4,
      title: "System Integration",
      desc: "Seamless connection. Superior control. Unite every component of your vessel into one efficient network for smart operations.",
      details: "Seamless connection. Superior control. Our system integration solutions unite every component of your vessel into one efficient network, enhancing performance, reliability, and smart marine operations across navigation, communication, and automation systems.",
      img: "/images/ship_pic_4.png",
      category: "systems"
    },
    {
      id: 5,
      title: "System Configurations",
      desc: "Tailored configurations optimizing performance: Generator sets, Energy storage, Switchboards, Transformers, and Drives.",
      details: "Configuring excellence for every voyage. Our expert team delivers tailored system configuration solutions that optimize performance, ensure reliability, and align your vessel’s technology with operational success. We cover main switchboards, distribution boards, motor control centers, and more.",
      img: "/images/ship_pic_5.png",
      category: "systems"
    },
    {
      id: 6,
      title: "Thruster & DP Control",
      desc: "Configuration and optimization of main and auxiliary thrusters, including advanced Thruster control, Joystick, and DP systems.",
      details: "We deliver advanced configurations for electric thruster motors, electric propulsion systems, and main/auxiliary thrusters. Our expertise includes integrating seamless Joystick and Dynamic Positioning (DP) systems for superior maneuverability in harsh conditions.",
      img: "/images/ship_pic_6.png",
      category: "systems"
    },
    // --- Automation & Control ---
    {
      id: 7,
      title: "Pneumatic Technology",
      desc: "Actuators, valves, solenoid valves, proportional fittings, and vacuum handling. Combining mechanics and electronics.",
      details: "The range of pneumatic solutions includes actuators, valves, solenoid valves, proportional technology fittings, handling vacuum and air treatment components. All combine the mechanics and electronics required for motion management and control with optimized consumption and functional parameters.",
      img: "/images/ship_pic_7.png",
      category: "automation"
    },
    {
      id: 8,
      title: "Electric Actuation",
      desc: "Reliable electric actuation solutions engineered for precision, durability, and efficiency across marine systems.",
      details: "We deliver reliable electric actuation solutions engineered for precision, durability, and efficiency, enabling smooth control and enhanced performance across marine and industrial systems. Designed to operate safely in challenging environments.",
      img: "/images/ship_pic_8.png",
      category: "automation"
    },
    {
      id: 9,
      title: "Fluid & Process Automation",
      desc: "Engineered for precision. Streamlined performance through smart process automation and fluid control.",
      details: "Engineered for precision, built for performance. Our fluid control and process automation solutions ensure smooth, reliable, and efficient operations — keeping your systems running at optimum flow. We drive efficiency in every stage of your vessel's operation.",
      img: "/images/ship_pic_9.png",
      category: "automation"
    },
    // --- Machining & Reconditioning ---
    {
      id: 10,
      title: "Reconditioning Services",
      desc: "Precision machining for Piston Crowns/Skirts, Cylinder Heads, Exhaust Valves, Rods, and Remetalling Bearings.",
      details: "Your trusted partner for comprehensive engine reconditioning services. We specialize in revitalizing engines across diverse industries. From precision machining to meticulous assembly of Cylinder Heads, Piston Skirts, Exhaust Valve Spindles, and Remetalling Babbitt Bearings.",
      img: "/images/ship_pic_10.png",
      category: "machining"
    },
    {
      id: 11,
      title: "Mobile In-Situ Machining",
      desc: "On-site Turning, Line Boring, Milling, Grinding, and Drilling. Eliminates logistical issues related to moving heavy equipment.",
      details: "Our mobile in-site/on-site machining capacity eliminates the logistical and budgetary issues related to maintenance and replacements on large equipment. We provide on-site Turning & Line Boring, Milling, Grinding, specialized Drilling, and Shaft machining made to measure.",
      img: "/images/ship_pic_11.png",
      category: "machining"
    },
    {
      id: 12,
      title: "Flange Machining & Pipe Cutting",
      desc: "On-site machining of new or worn flanges. Mobile pipe cutting solutions and precision weld seam preparation.",
      details: "On-site machining of new, worn, or damaged flanges to achieve perfect sealing surfaces and correct alignment. We also offer mobile pipe cutting solutions for a wide range of diameters and wall thicknesses with clean, accurate separation and optimal weld seam preparation.",
      img: "/images/ship_pic_8.png",
      category: "machining"
    }
  ];

  const filteredServices = serviceCards.filter(service => service.category === activeTab);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030712] font-['Poppins'] transition-colors duration-300 pb-24 relative">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
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

      {/* ================= TABS ================= */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 relative z-20">
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 border-b border-gray-200 dark:border-gray-800">
          
          <button 
            onClick={() => setActiveTab("repair")}
            className={`relative pb-4 text-sm md:text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === "repair" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`}
          >
            <Wrench className="w-4 h-4 md:w-5 md:h-5" />
            Ship Repairs
            {activeTab === "repair" && <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md" />}
          </button>

          <button 
            onClick={() => setActiveTab("systems")}
            className={`relative pb-4 text-sm md:text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === "systems" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`}
          >
            <Cpu className="w-4 h-4 md:w-5 md:h-5" />
            Systems
            {activeTab === "systems" && <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md" />}
          </button>

          <button 
            onClick={() => setActiveTab("automation")}
            className={`relative pb-4 text-sm md:text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === "automation" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`}
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            Automation
            {activeTab === "automation" && <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md" />}
          </button>

          <button 
            onClick={() => setActiveTab("machining")}
            className={`relative pb-4 text-sm md:text-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === "machining" ? "text-[#FF4500]" : "text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"}`}
          >
            <PenTool className="w-4 h-4 md:w-5 md:h-5" />
            Machining
            {activeTab === "machining" && <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-1 bg-[#FF4500] rounded-t-md" />}
          </button>

        </nav>
      </section>

      {/* ================= GRID ================= */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20 min-h-[400px]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id} 
                layout 
                variants={fadeUpVariant} 
                initial="hidden" 
                animate="visible" 
                exit="exit"
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
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
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= MODAL / POPUP SECTION ================= */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)} // Click outside to close
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
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