"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";

// --- DPV Offshore Blog Data ---
const blogPosts = [
  {
    id: 1,
    title: "Why Reliable Electrical Supply Is Critical for Offshore & Marine Projects",
    excerpt: "In offshore and marine environments, electrical systems are not just components. They are the backbone of safe and continuous operations.",
    content: "In offshore and marine environments, electrical systems are not just components. They are the backbone of safe and continuous operations. From motors and alternators to sensors and control panels, every part must perform under extreme conditions.\n\nAt DPV Offshore & Marine Services LLC, we understand the importance of:\n• Marine-grade electrical components\n• Corrosion-resistant materials\n• Reliable temperature sensors and AVR systems\n• High-performance winding coils and red varnish insulation\n\nUsing the right supplier ensures reduced downtime, improved safety, and long-term reliability. In offshore projects, failure is not an option, quality is everything.",
    category: "Electrical Supply",
    date: "February 20, 2026",
    image: "/dpv-offshore-redesign-website/images/blog_1.png"
  },
  {
    id: 2,
    title: "How Preventive Maintenance Saves Cost in Marine & Offshore Operations",
    excerpt: "Electrical failures at sea can lead to costly delays and safety risks. Preventive maintenance helps avoid unexpected breakdowns by identifying issues early.",
    content: "Electrical failures at sea can lead to costly delays and safety risks. Preventive maintenance helps avoid unexpected breakdowns by identifying issues early.\n\nKey areas to monitor include:\n• Alternator performance\n• Temperature sensor accuracy\n• Diodes and resistors condition\n• AVR system stability\n• Winding insulation health\n\nAt DPV Offshore & Marine Services LLC, we support our clients with quality parts and technical guidance to maintain peak system performance.",
    category: "Maintenance",
    date: "February 15, 2026",
    image: "https://via.placeholder.com/800x500/FF4500/FFFFFF?text=Preventive+Maintenance"
  },
  {
    id: 3,
    title: "Professional Welding Services for Offshore & Marine Structures",
    excerpt: "Welding in offshore environments requires skill, certification, and strict safety standards. The quality of welding directly impacts structural integrity.",
    content: "Welding in offshore environments requires skill, certification, and strict safety standards. Whether it is structural fabrication or repair works, the quality of welding directly impacts structural integrity.\n\nOur welding department supports:\n• Marine structural fabrication\n• Equipment frame repair\n• Platform modifications\n• On-site emergency welding support\n\nWith qualified personnel and proper inspection standards (including NDT where required), we ensure durability and compliance.",
    category: "Welding & Fabrication",
    date: "February 10, 2026",
    image: "https://via.placeholder.com/800x500/030712/FF4500?text=Welding+Services"
  },
  {
    id: 4,
    title: "Reliable Marine Power Systems. What You Need to Know",
    excerpt: "Marine generators are essential for powering vessels, rigs, and offshore facilities. Learn how to select the right generator system for uninterrupted operations.",
    content: "Marine generators are essential for powering vessels, rigs, and offshore facilities. Selecting the right generator system involves:\n\n• Correct load calculation\n• Suitable alternator capacity\n• Proper AVR configuration\n• Environmental protection\n\nWe assist our clients in selecting, supplying, and integrating marine power systems that ensure uninterrupted operations.",
    category: "Power Systems",
    date: "February 5, 2026",
    image: "https://via.placeholder.com/800x500/5A45D3/FFFFFF?text=Power+Systems"
  },
  {
    id: 5,
    title: "Key Electrical Components in Offshore & Marine Applications",
    excerpt: "Discover the critical components that make up offshore electrical systems, from motors and alternators to temperature sensors and AVRs.",
    content: "Offshore electrical systems consist of several critical components:\n\n• Motors – for pumps and mechanical drives\n• Alternators – for power generation\n• Sensors – for temperature and system monitoring\n• Resistors & Diodes – for control circuits\n• Winding Coils – for motor and generator efficiency\n• AVR – for voltage regulation\n\nUsing high-quality components ensures long service life and operational stability.",
    category: "Electrical Components",
    date: "January 28, 2026",
    image: "https://via.placeholder.com/800x500/251a66/E0E7FF?text=Electrical+Components"
  },
  {
    id: 6,
    title: "What to Look for in an Offshore & Marine Service Company",
    excerpt: "Selecting the right offshore service partner is crucial. Explore the important factors including technical experience, fast response times, and quality assurance.",
    content: "Selecting the right offshore service partner is crucial. Important factors include:\n\n• Technical experience\n• Quality assurance standards\n• Fast response time\n• Availability of spare parts\n• Skilled welding and electrical teams\n\nAt DPV Offshore & Marine Services LLC, we combine supply capability with technical expertise to support our clients efficiently.",
    category: "Industry Insights",
    date: "January 22, 2026",
    image: "https://via.placeholder.com/800x500/FF4500/FFFFFF?text=Service+Partner"
  },
  {
    id: 7,
    title: "Why Fast Electrical Support Is Critical in Offshore Projects",
    excerpt: "Electrical failures can cause serious operational delays. Learn why quick response and reliable spare parts availability are essential for offshore success.",
    content: "In offshore environments, electrical failures can cause serious operational delays and financial losses. Quick response and reliable spare parts availability are essential.\n\nCritical areas where emergency support is required:\n• Generator breakdown\n• AVR malfunction\n• Temperature sensor failure\n• Motor winding damage\n• Power distribution faults\n\nA dependable offshore electrical partner ensures fast supply, technical guidance, and minimal downtime. Proper preparation and stock availability make the difference between hours and days of delay.",
    category: "Emergency Support",
    date: "January 15, 2026",
    image: "https://via.placeholder.com/800x500/030712/FF4500?text=Emergency+Support"
  },
  {
    id: 8,
    title: "Understanding the Importance of Automatic Voltage Regulators (AVR)",
    excerpt: "An AVR maintains stable voltage output in generators. In marine environments, voltage stability is critical for protecting onboard electrical systems.",
    content: "An Automatic Voltage Regulator (AVR) maintains stable voltage output in generators. In marine environments, voltage stability is critical for:\n\n• Navigation systems\n• Communication equipment\n• Reefer containers\n• Control panels\n\nPoor voltage regulation can damage sensitive equipment. Choosing a high-quality AVR and proper calibration ensures smooth operations and protects onboard electrical systems.",
    category: "AVR Systems",
    date: "January 10, 2026",
    image: "https://via.placeholder.com/800x500/5A45D3/FFFFFF?text=AVR+Systems"
  },
  {
    id: 9,
    title: "Motor Rewinding & Insulation. Enhancing Performance and Lifespan",
    excerpt: "Motor winding failure is common in marine applications. Learn how professional rewinding increases efficiency and extends equipment life.",
    content: "Motor winding failure is common in marine and offshore applications due to humidity, heat, and heavy load conditions.\n\nKey factors in proper rewinding:\n• High-quality copper winding coils\n• Correct insulation class\n• Use of red varnish for protection\n• Proper drying and curing process\n\nProfessional rewinding increases motor efficiency, reduces power loss, and extends equipment life.",
    category: "Maintenance",
    date: "January 4, 2026",
    image: "https://via.placeholder.com/800x500/251a66/E0E7FF?text=Motor+Rewinding"
  },
  {
    id: 10,
    title: "Precision Fabrication Services for Offshore Structures",
    excerpt: "Offshore projects often require customized fabrication. Quality fabrication ensures safety, durability, and compliance with strict marine standards.",
    content: "Offshore projects often require structural modifications, equipment base frames, cable tray supports, and customized fabrication.\n\nProfessional fabrication services include:\n• Design interpretation\n• Accurate cutting and welding\n• Structural reinforcement\n• Surface treatment for corrosion resistance\n\nQuality fabrication ensures safety, durability, and compliance with marine standards.",
    category: "Welding & Fabrication",
    date: "December 28, 2025",
    image: "https://via.placeholder.com/800x500/FF4500/FFFFFF?text=Precision+Fabrication"
  },
  {
    id: 11,
    title: "Why Temperature Sensors Are Essential in Offshore Electrical Systems",
    excerpt: "Overheating is a major cause of equipment failure. Continuous temperature monitoring prevents unexpected shutdowns and protects valuable assets.",
    content: "Overheating is one of the major causes of equipment failure in offshore environments.\n\nTemperature sensors help monitor:\n• Motor windings\n• Generator bearings\n• Control panels\n• Power transformers\n\nContinuous temperature monitoring prevents unexpected shutdowns and protects valuable assets.",
    category: "Sensors",
    date: "December 20, 2025",
    image: "https://via.placeholder.com/800x500/030712/FF4500?text=Temperature+Sensors"
  },
  {
    id: 12,
    title: "Challenges in Offshore Electrical Installation and How to Overcome Them",
    excerpt: "Offshore installation presents unique challenges like limited space and harsh weather. Proper planning and quality materials ensure safe installation.",
    content: "Offshore electrical installation presents unique challenges:\n\n• Limited working space\n• Harsh weather conditions\n• Corrosion exposure\n• Strict safety regulations\n\nProper planning, skilled technicians, and quality materials ensure safe and reliable installation work.",
    category: "Installation",
    date: "December 14, 2025",
    image: "https://via.placeholder.com/800x500/5A45D3/FFFFFF?text=Electrical+Installation"
  },
  {
    id: 13,
    title: "Investing in Quality Electrical Spare Parts Saves Money in the Long Run",
    excerpt: "Low-cost components often lead to frequent breakdowns. Using reliable marine-grade electrical components improves performance and reduces downtime.",
    content: "Low-cost components may seem attractive initially but often lead to:\n\n• Frequent breakdowns\n• Increased maintenance\n• System inefficiency\n• Safety risks\n\nUsing reliable marine-grade electrical components improves performance, reduces downtime, and protects investment.",
    category: "Spare Parts",
    date: "December 8, 2025",
    image: "https://via.placeholder.com/800x500/251a66/E0E7FF?text=Quality+Spare+Parts"
  },
  {
    id: 14,
    title: "Electrical Safety Practices in Offshore Operations",
    excerpt: "Electrical safety is critical in hazardous environments. Discover important safety measures including proper grounding and explosion-proof equipment.",
    content: "Electrical safety is critical in hazardous offshore environments.\n\nImportant safety measures include:\n• Proper grounding systems\n• Explosion-proof equipment\n• Routine inspection\n• Insulation resistance testing\n• Certified welding practices\n\nA strong safety culture protects personnel and equipment.",
    category: "Safety",
    date: "December 2, 2025",
    image: "https://via.placeholder.com/800x500/FF4500/FFFFFF?text=Electrical+Safety"
  },
  {
    id: 15,
    title: "Understanding LOTOTO in Offshore & Marine Electrical Safety",
    excerpt: "Electrical isolation is not optional. LOTOTO (Lock Out, Tag Out, Try Out) is a structured procedure that ensures equipment is fully de-energized.",
    content: "In offshore environments, electrical isolation is not optional, it is critical. LOTOTO (Lock Out, Tag Out, Try Out) is a structured safety procedure that ensures equipment is fully de-energized before maintenance or repair.\n\nWhat is LOTOTO?\n• Lock Out – Physically locking the energy source\n• Tag Out – Placing identification tags\n• Try Out – Verifying zero energy state\n\nWhy LOTOTO Is Critical Offshore\n• High voltage systems\n• Multiple energy sources (electrical, hydraulic, pneumatic)\n• Confined spaces\n• High-risk maintenance tasks\n\nCommon Mistakes in Offshore LOTOTO\n• Not verifying residual energy\n• Incomplete isolation\n• Poor documentation\n\nHow DPV Supports Safe Isolation\n• Electrical inspection support\n• Isolation verification\n• Locking devices supply\n• Safety compliance assistance",
    category: "Safety",
    date: "November 25, 2025",
    image: "https://via.placeholder.com/800x500/030712/FF4500?text=LOTOTO+Safety"
  },
  {
    id: 16,
    title: "Why PAGA Systems Are Critical for Offshore Emergency Response",
    excerpt: "A centralized communication and alarm system used in offshore platforms. Learn why Speech Transmission Index testing ensures clear emergency communication.",
    content: "What Is a PAGA System?\nA centralized communication and alarm system used in offshore platforms and marine vessels.\n\nKey Functions:\n• Emergency evacuation alarms\n• Fire alarm integration\n• Live voice announcements\n• Zonal broadcasting\n• ESD (Electrostatic Discharge) integration\n\nImportance of Intelligibility (STI - Speech Transmission Index)\nIn an emergency, unclear voice communication can cause confusion. Speech Transmission Index (STI) testing ensures clear communication even in noisy environments.\n\nOffshore Challenges:\n• High ambient noise\n• Explosion hazard areas\n• Weather exposure\n• Corrosion\n\nDPV Capability:\n• System audit\n• Intelligibility testing\n• Coverage mapping\n• Integration with ESD systems",
    category: "Emergency Systems",
    date: "November 18, 2025",
    image: "https://via.placeholder.com/800x500/5A45D3/FFFFFF?text=PAGA+Systems"
  },
  {
    id: 17,
    title: "Understanding PMG in Marine Generator Excitation Systems",
    excerpt: "Permanent Magnet Generators supply excitation power to the AVR. Explore the benefits of PMG systems, including better voltage stability under load variation.",
    content: "What is PMG (Permanent Magnet Generator)?\nPMG is an independent power source that supplies excitation power to the AVR.\n\nBenefits:\n• Better voltage stability\n• Improved short-circuit performance\n• Reliable startup\n\nWhy PMG Systems Are Preferred in Offshore Generators:\n• Stable voltage under load variation\n• Protection of sensitive equipment\n• Better harmonic control\n\nApplication in:\n• Marine generators\n• Platform power modules\n• Emergency generators",
    category: "Power Systems",
    date: "November 10, 2025",
    image: "https://via.placeholder.com/800x500/251a66/E0E7FF?text=PMG+Systems"
  },
  {
    id: 18,
    title: "The Importance of High-Quality Winding in Marine Motors & Alternators",
    excerpt: "Moisture and salt corrosion can ruin winding. Learn why proper insulation class and red varnish coating are crucial for offshore motors and alternators.",
    content: "What Is Electrical Winding?\nCopper coils placed inside motors or generators to create magnetic fields.\n\nCommon Offshore Problems:\n• Moisture damage\n• Insulation breakdown\n• Overheating\n• Salt corrosion\n\nImportance of:\n• Proper insulation class\n• Red varnish coating\n• Vacuum pressure impregnation (VPI if applicable)\n• Correct slot insulation\n\nSigns of Winding Failure:\n• High temperature\n• Vibration\n• Reduced output\n• Insulation resistance drop\n\nDPV Expertise:\n• Rewinding services\n• Insulation upgrade\n• Performance testing\n• Terminal Box repairing & re-arrange in motors for work in",
    category: "Electrical Components",
    date: "November 4, 2025",
    image: "https://via.placeholder.com/800x500/FF4500/FFFFFF?text=Advanced+Winding"
  }
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

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

  // Close modal when pressing Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedPost]);

  return (
    <div className="bg-white dark:bg-[#030712] min-h-screen transition-colors duration-300 font-['Poppins']">
      
      {/* ================= STATIC HERO SECTION ================= */}
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

              {/* Content Container */}
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
      </section>

      {/* ================= MODAL POP-UP ================= */}
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
              className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-[#FF4500] text-white p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative w-full h-64 md:h-80">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md mb-3 inline-block">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                  <Calendar className="w-4 h-4 mr-2 text-[#5A45D3]" />
                  {selectedPost.date}
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  {/* Splitting the content by new lines to render paragraphs and bullet points properly */}
                  {selectedPost.content.split('\n').map((paragraph, index) => {
                    if (!paragraph.trim()) return null; // Skip empty lines
                    
                    // Style bullet points dynamically
                    if (paragraph.trim().startsWith('•')) {
                      return (
                        <div key={index} className="flex items-start ml-4 mb-2">
                          <span className="text-[#FF4500] mr-2">•</span>
                          <span>{paragraph.replace('•', '').trim()}</span>
                        </div>
                      );
                    }

                    // Standard paragraph
                    return (
                      <p key={index} className="mb-4">
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