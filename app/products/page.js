"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Anchor, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Products() {
  // Production / Products Data based on the text in your image
  const productionData = [
    {
      id: 1,
      title: "Ship Design & Naval Architecture",
      description: "We specialize in comprehensive ship design and marine engineering solutions, blending innovative naval architecture with practical operational efficiency. From initial concept sketches and detailed 3D modeling to structural analysis and retrofit planning, our team ensures every vessel meets rigorous international safety standards while optimizing performance.",
      image: "/dpv-offshore-redesign-website/images/production-1.png", // Saved in public/images
      features: ["Concept Sketches", "3D Modeling", "Structural Analysis"],
    },
    {
      id: 2,
      title: "Modernization & Fleet Strategy",
      description: "Whether you require a new build design or a modernization strategy for an existing fleet, we deliver precision-engineered blueprints and visualizations that bring your maritime vision to reality. We ensure that every operational upgrade maximizes efficiency and extends the lifecycle of your marine assets.",
      image: "/dpv-offshore-redesign-website/images/production-2.png", // Saved in public/images
      features: ["New Build Design", "Retrofit Planning", "Precision Blueprints"],
    }
  ];

  // --- Framer Motion Variants ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] pb-24 font-['Poppins'] transition-colors duration-300 overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] flex items-center justify-center rounded-b-[40px] md:rounded-b-[60px] shadow-2xl overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/production-hero.jpg" // The main offshore worker art
            alt="Our Production Hero"
            fill 
            priority
            className="object-cover object-center"
          />
          
          {/* Deep Dark Overlay for Text Readability (Replaces the messy orange/blue gradient from the original with our clean dark mode gradient) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/50 to-transparent z-10"></div>
          {/* Light mode bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-transparent via-transparent to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Anchor className="w-4 h-4 text-[#FF4500]" />
            What We Build
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-widest uppercase drop-shadow-lg mb-4"
          >
            Our <span className="text-[#FF4500]">Production</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto drop-shadow-md"
          >
            Bringing maritime visions to reality through precision-engineered blueprints, 3D modeling, and world-class naval architecture.
          </motion.p>
        </div>
      </section>

      {/* ================= ALTERNATING CONTENT SECTION ================= */}
      {/* -mt-20 pulls the content up to overlap the hero section beautifully */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-16 md:-mt-24 relative z-30 space-y-12 md:space-y-20">
        
        {productionData.map((item, index) => {
          // Determine if image should be on the right (odd indices)
          const isReversed = index % 2 !== 0;

          return (
            <motion.div 
              key={item.id}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`bg-white dark:bg-[#1e293b] rounded-[30px] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 p-6 md:p-12`}
            >
              
              {/* Image Side */}
              <motion.div 
                variants={isReversed ? slideInRight : slideInLeft}
                className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-[24px] overflow-hidden bg-blue-50/50 dark:bg-gray-800/50 shadow-inner group"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Subtle dark overlay for dark mode consistency */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/20 transition-colors duration-300"></div>
              </motion.div>

              {/* Text Content Side */}
              <motion.div 
                variants={isReversed ? slideInLeft : slideInRight}
                className="w-full md:w-1/2 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-black text-gray-100 dark:text-gray-800/50 select-none">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                    {item.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#FF4500] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Call to Action Button */}
                <div>
                  <button className="inline-flex items-center gap-2 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(255,69,0,0.5)] transition-all duration-300 group">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

            </motion.div>
          );
        })}
        
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mt-20 px-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to start your next marine project?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Contact our engineering team today to discuss your specific requirements.
        </p>
        <button className="bg-transparent border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white font-bold py-3 px-10 rounded-full transition-all duration-300">
          Contact Us
        </button>
      </motion.section>

    </main>
  );
}