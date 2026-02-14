"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

export default function Careers() {
  // Job Listing Data
  const jobOpenings = [
    { title: "Marine Electrician / ETO", location: "Colombo" },
    { title: "Naval Architect", location: "Colombo" },
    { title: "Marine Surveyor", location: "Colombo" },
    { title: "Ship Repair Technician", location: "Colombo" },
    { title: "Automation & Instrumentation Engineer", location: "Colombo" },
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
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] pb-24 font-['Poppins'] transition-colors duration-300">
      
      {/* ================= HERO SECTION ================= */}
      {/* Adjusted height to be more balanced (min 400px, max 500px on desktop) */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] rounded-b-[40px] md:rounded-b-[60px] overflow-hidden shadow-2xl">
        
        {/* Background Image */}
        <Image 
          src="/dpv-offshore-redesign-website/images/career-hero.jpg" // Replace with actual path
          alt="Offshore Marine Careers" 
          fill 
          priority
          className="object-cover object-center z-0"
        />
        
        {/* Modern Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/50 to-transparent z-10"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Briefcase className="w-4 h-4 text-[#FF4500]" />
            Join Our Team
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase drop-shadow-lg mb-4"
          >
            Build The <span className="text-[#FF4500]">Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md"
          >
            Take your maritime career to the next level with industry-leading offshore engineering, repair, and subsea projects.
          </motion.p>
        </div>
      </section>

      {/* ================= JOB LISTINGS SECTION ================= */}
      {/* Negative top margin pulls this section up to overlap the hero nicely */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 md:-mt-24 relative z-30 space-y-6">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible" // Auto-animates when it mounts since it's right under the hero
          className="space-y-4 md:space-y-6"
        >
          {jobOpenings.map((job, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariant}
              className="group w-full bg-white dark:bg-[#1e293b] rounded-[24px] p-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between shadow-lg hover:shadow-2xl border border-transparent dark:border-gray-800 hover:border-[#FF4500]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Job Title */}
              <h3 className="text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-bold mb-4 md:mb-0 w-full md:w-5/12 text-center md:text-left transition-colors group-hover:text-[#FF4500]">
                {job.title}
              </h3>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-6 md:mb-0 w-full md:w-3/12">
                <MapPin className="w-5 h-5 text-[#5A45D3]" />
                <span className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                  {job.location}
                </span>
              </div>

              {/* Apply Button */}
              <div className="w-full md:w-4/12 flex justify-center md:justify-end">
                <button className="bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300 flex items-center space-x-2 group/btn">
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State / General Application Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center text-gray-500 dark:text-gray-400 py-8"
        >
          Don't see a role that fits? Send your CV to <a href="mailto:careers@dpvoffshore.com" className="text-[#FF4500] font-bold hover:underline">careers@dpvoffshore.com</a>
        </motion.div>

      </section>
    </main>
  );
}