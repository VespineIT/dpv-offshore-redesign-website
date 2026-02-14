"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

// --- Example Blog Data (JSON format inside the file) ---
const blogPosts = [
  {
    id: 1,
    title: "The Future of Subsea Engineering in Offshore Operations",
    excerpt: "Discover the latest technological advancements driving efficiency, precision, and safety in subsea EPC projects globally.",
    category: "Industry Insights",
    date: "October 12, 2023",
    image: "https://via.placeholder.com/600x400/251a66/E0E7FF?text=Subsea+Engineering"
  },
  {
    id: 2,
    title: "DPV Offshore Successfully Delivers Major Jack-Up Repair",
    excerpt: "A deep dive into our recent fast-track repair project, highlighting our commitment to minimizing downtime for our clients.",
    category: "Company News",
    date: "September 28, 2023",
    image: "https://via.placeholder.com/600x400/FF4500/FFFFFF?text=Jack-Up+Repair"
  },
  {
    id: 3,
    title: "Why Preventative Maintenance is Crucial for Marine Vessels",
    excerpt: "Learn how proactive mechanical and electrical maintenance can extend the lifecycle of your fleet and improve safety standards.",
    category: "Technical Guide",
    date: "September 15, 2023",
    image: "https://via.placeholder.com/600x400/030712/FF4500?text=Preventative+Maintenance"
  },
  {
    id: 4,
    title: "Navigating International Maritime Welding Standards",
    excerpt: "An overview of the strict welding and fabrication certifications required to operate at the highest level in offshore environments.",
    category: "Engineering",
    date: "August 30, 2023",
    image: "https://via.placeholder.com/600x400/5A45D3/FFFFFF?text=Welding+Standards"
  },
  {
    id: 5,
    title: "Sustainability in Offshore Procurement & Construction",
    excerpt: "How modern EPC services are shifting towards greener supply chains and reducing the carbon footprint of marine operations.",
    category: "Sustainability",
    date: "August 14, 2023",
    image: "https://via.placeholder.com/600x400/251a66/E0E7FF?text=Green+Operations"
  },
  {
    id: 6,
    title: "Expanding Our Global Reach: New Partnerships in 2024",
    excerpt: "We are proud to announce our latest strategic alliances that will allow us to serve a broader range of international shipyards.",
    category: "Company News",
    date: "July 22, 2023",
    image: "https://via.placeholder.com/600x400/FF4500/FFFFFF?text=Global+Reach"
  }
];

const BlogPage = () => {
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
    <div className="bg-white dark:bg-[#030712] min-h-screen transition-colors duration-300 font-['Poppins']">
      
      {/* ================= STATIC HERO SECTION (Light & Dark Mode Optimized) ================= */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#080c17] transition-colors duration-300 border-b border-gray-200 dark:border-gray-800/50">
        {/* Decorative background accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Top Orange Orb */}
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-b from-[#FF4500] to-transparent blur-[100px] opacity-10 dark:opacity-20 transition-opacity duration-300"></div>
          {/* Bottom Indigo Orb */}
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-t from-[#5A45D3] to-transparent blur-[100px] opacity-10 dark:opacity-20 transition-opacity duration-300"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#FF4500] tracking-widest uppercase drop-shadow-sm dark:drop-shadow-lg mb-6"
          >
            Insights & News
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto transition-colors duration-300"
          >
            Stay updated with the latest industry trends, technical guides, and company milestones from the team at <span className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">DPV Offshore</span>.
          </motion.p>
        </div>
      </section>

      {/* ================= BLOG GRID SECTION ================= */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                {/* Category Badge overlaying the image */}
                <div className="absolute top-4 left-4 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md shadow-md">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                  <Calendar className="w-4 h-4 mr-2 text-[#5A45D3]" />
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-[#FF4500] transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 transition-colors duration-300">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <a 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-[#FF4500] font-semibold hover:text-[#cc3700] transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default BlogPage;