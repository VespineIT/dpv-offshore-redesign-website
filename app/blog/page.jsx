"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPost]);

  return (
    <div className="bg-white dark:bg-[#030712] min-h-screen transition-colors duration-300 font-['Poppins']">

      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 px-4 flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#080c17] transition-colors duration-300 border-b border-gray-200 dark:border-gray-800/50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[100%] rounded-full bg-gradient-to-b from-[#FF4500] to-transparent blur-[100px] opacity-10 dark:opacity-20 transition-opacity duration-300"></div>
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

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        {blogPosts.length > 0 ? (
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
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2 text-[#5A45D3]" />
                    {post.date}
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 hover:text-[#FF4500] dark:hover:text-[#FF4500] transition-colors duration-300 cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 transition-colors duration-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center text-[#FF4500] font-semibold hover:text-[#cc3700] transition-colors"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Articles Yet</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              We're currently working on creating insightful content. Check back soon for the latest updates from DPV Offshore.
            </p>
          </motion.div>
        )}
      </section>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-[#FF4500] text-white p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-64 md:h-80">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md mb-3 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2">
                    {selectedPost.title}
                  </h2>
                  <h3 className="text-lg md:text-xl font-medium text-gray-300 leading-snug">
                    {selectedPost.subtitle}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <Calendar className="w-4 h-4 mr-2 text-[#5A45D3]" />
                  {selectedPost.date}
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  {selectedPost.content.split('\n').map((paragraph, index) => {
                    if (!paragraph.trim()) return null;

                    if (paragraph.trim().startsWith('•')) {
                      return (
                        <div key={index} className="flex items-start ml-4 mb-2">
                          <span className="text-[#FF4500] mr-2 mt-1 font-bold">•</span>
                          <span>{paragraph.replace('•', '').trim()}</span>
                        </div>
                      );
                    }

                    const isHeading = paragraph.length < 70 && !paragraph.endsWith('.') && !paragraph.endsWith(',');

                    return (
                      <p key={index} className={`mb-4 ${isHeading ? 'font-bold text-gray-900 dark:text-white mt-6' : ''}`}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BlogPage;
