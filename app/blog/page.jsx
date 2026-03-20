"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";

// --- DPV Offshore Blog Data ---
const blogPosts = [
  {
    id: 1,
    title: "Welding Special Processes in Offshore & Marine Services",
    subtitle: "MIG, TIG & ARC Welding: Critical Special Processes for Marine Repairs & Offshore Integrity",
    excerpt: "Explore why welding is classified as a \"special process\" in marine and offshore industries, covering MIG, TIG, and ARC techniques essential for ship repair incidents and structural integrity.",
    content: `Introduction: Why Welding is a "Special Process"
In the marine and offshore services industry, welding isn't just another maintenance task-it's classified as a special process under ISO 9001 and IACS (International Association of Classification Societies) standards. Why? Because the quality of a weld cannot be fully verified by subsequent testing alone. Once the weld is complete, you cannot easily inspect what lies beneath the surface without destructive testing. This makes qualification of welding procedures, welder certification, and process control critical-especially when dealing with ship repairing incidents where structural failure isn't an option.

The "Big Three" Welding Processes for Marine Applications
1. SMAW (Shielded Metal Arc Welding) - The Workhorse
Also known as manual metal arc (MMA) or stick welding, SMAW remains the most common method in wet welding and ship repair. It's versatile, robust, and works in challenging positions. For underwater repairs, special waterproof electrodes are used, though quality is affected by water pressure and currents.

2. GMAW/MAG (MIG/Metal Inert Gas) - The Productivity Choice
MIG welding uses continuous solid wire fed through a welding gun with external shielding gas (argon, CO2, or mixtures). In shipbuilding, robotic MIG welding is increasingly used for double-hull constructions and complex geometries. It offers higher deposition rates and better consistency than manual processes-critical when repairing large hull sections.

3. GTAW (TIG/Tungsten Inert Gas) - The Precision Specialist
TIG welding provides superior arc control and minimal contamination, making it ideal for stainless steel piping, critical structural joints, and dry hyperbaric chamber repairs. When quality cannot be compromised-such as in high-pressure piping systems or offshore platform repairs-TIG is the go-to process.

Why Classification Societies Care About Your Welds
When a ship repairing incident occurs, classification societies (DNV, ABS, Lloyd's Register) require:
• Welding Procedure Qualification Records (WPQR): Documented evidence that your welding process produces acceptable joints
• Welder Qualification Testing (WQT): Certification that individual welders can execute the procedures correctly
• Non-Destructive Testing (NDT): Radiographic or ultrasonic inspection of critical welds

Failure to maintain these qualifications can result in vessel detention, insurance complications, or catastrophic structural failures at sea.

Emerging Trends: Robotic Welding in Marine Structures
The industry is rapidly adopting 6-axis robotic welding systems for shipbuilding and repairs. These systems can access confined spaces between double hulls and maintain consistent quality where human access is limited. Research shows robotic welding is particularly effective for repetitive structural joints in marine environments.

Conclusion
Whether you're dealing with emergency hull repairs after a collision or planned maintenance on offshore platforms, understanding that welding is a "special process" changes how you approach quality. It's not just about laying down a bead-it's about documented procedures, certified personnel, and verification that stands up to the harshest marine environments.

Need certified welding services for your vessel? Our marine welding specialists hold current certifications from major classification societies and are available for emergency response worldwide.`,
    category: "Welding",
    date: "March 12, 2026",
    image: "/images/blog_1.png"
  },
  {
    id: 2,
    title: "Shaft Generator Systems - Technical Deep Dive",
    subtitle: "Shaft Generator Alternators: Air-Cooled vs. Seawater-Cooled Systems for Marine Applications",
    excerpt: "Technical guide to shaft generator alternator cooling systems, covering PTO/PTI/PTH modes, air-cooled and seawater-cooled designs, and critical selection criteria for marine electrical engineers.",
    content: `Understanding Shaft Generator Terminology
Before diving into cooling systems, let's clarify the special terminology used in shaft generator applications:
• PTO (Power Take Out): Alternator mode-driven by the main engine to supply shipboard electrical power
• PTI (Power Take In): Motor mode-shaft generator acts as an electric motor to boost propulsion power alongside the main engine
• PTH (Power Take Home): Emergency motor mode-shaft generator provides standalone propulsion when the main engine is out of commission

Cooling System Options: Air vs. Seawater
Air-Cooled Systems (IP22/IP44 Enclosure)
Standard marine alternators typically use drip-proof (IP22) or totally enclosed (IP44) enclosures with air cooling. These systems use shaft-mounted fans to circulate cooling air through the windings. Key characteristics:
• Simpler maintenance-no seawater piping to corrode or leak
• Suitable for smaller vessels or applications where seawater cooling infrastructure isn't practical
• Limited heat dissipation capacity compared to liquid cooling

Seawater-Cooled (Heat Exchanger) Systems
High-capacity shaft generators and those operating in PTI/PTH modes often require more aggressive cooling:
• Jacket-water cooled: Engine coolant circulates through the alternator housing
• Dedicated seawater cooling: Separate seawater pumps circulate raw water through heat exchangers
• Critical for high-power applications (1,000+kVA) where air cooling is insufficient

Technical Considerations for Electrical Engineers
When specifying a shaft generator system, critical parameters include:
1. Bearing Requirements: Marine applications require bearings rated for high angles of inclination (typically 15-30 degrees continuous, up to 45 degrees intermittent)
2. Excitation Systems: For PTH (self-starting) applications, the alternator needs modified excitation systems with enhanced rotor damper windings and special switching arrangements to isolate rotating rectifiers during startup
3. Variable Frequency Drive (VFD) Starting: For PTH mode, VFDs gradually rotate the generator shaft, limiting inrush current while delivering correct torque until synchronous speed is achieved
4. Classification Society Compliance: Ensure the alternator meets requirements for your vessel's class notation, including special winding protection (typically tested at 25 megohms, 4x operational levels)

The Business Case for Shaft Generators
From an operational perspective, shaft generators in PTO mode allow auxiliary diesel generators to be stopped during sea passages, reducing:
• Fuel consumption (main engine is more efficient than auxiliaries)
• Maintenance costs on auxiliary engines
• Engine room noise and vibration levels

For vessels with varying speed requirements, modern inverter-driven systems can optimize cooling seawater pump speeds, contributing to significant energy savings.

Conclusion
Selecting between air-cooled and seawater-cooled shaft generators depends on power requirements, operating modes (PTO vs. PTI/PTH), and vessel-specific constraints. As electrical engineers, understanding these cooling methodologies and the special terminology around shaft generator operation ensures you specify systems that deliver reliable performance across all operating conditions.

Technical Support Available: Our marine electrical team can assist with shaft generator selection, bearing specifications, and cooling system design for newbuilds and retrofits.`,
    category: "Power Systems",
    date: "March 5, 2026",
    image: "/images/blog_2.png"
  },
  {
    id: 3,
    title: "Advanced Marine Electrical Engineering - MSB & Power Systems",
    subtitle: "Main Switchboard (MSB) Mastery: A Technical Guide for Marine Electrical Engineers",
    excerpt: "Comprehensive technical blog covering MSB operations, cable layering, troubleshooting, synchronization, PMS integration, and advanced maintenance techniques for marine power systems.",
    content: `Introduction: The Heart of Shipboard Power
As marine electrical engineers, we know the Main Switchboard (MSB) is more than a distribution panel-it's the central nervous system of vessel power management. This blog covers advanced technical aspects that every shipboard electrical engineer should master, from cable layering strategies to Power Management System (PMS) integration.

1. MSB Architecture & Cable Layering Best Practices
Proper cable segregation in marine switchboards isn't just good practice-it's mandated by IEC 60092 and classification society rules to prevent electromagnetic interference and ensure safety.

Layering Strategy:
• Power cables (high current): Bottom layers, separated by metallic barriers
• Control/signal cables: Upper layers, minimum 300mm separation from power cables or steel separation plates
• Communication/network cables: Topmost layer, shielded and routed away from VFD output cables
• Emergency circuits: Physically separated routing to prevent single-point failures

Cable Management Tips:
• Use marine-rated cable supports with anti-chafing protection
• Maintain 10% spare capacity in cable trays for future modifications
• Label both ends of every cable with heat-shrink markers (not just tape)
• Document "as-built" cable schedules-vessels rarely match design drawings after years of modifications

2. Troubleshooting Methodology: A Systematic Approach
When facing intermittent faults or total power failures:
• Step 1: Visual Inspection Check for overheating (discoloration), moisture ingress (corrosion on busbars), and loose connections (indicated by tracking marks or burnt insulation).
• Step 2: Thermal Imaging Use infrared cameras during loaded conditions to identify high-resistance connections before they fail. Look for temperature differentials >10°C compared to similar connections.
• Step 3: Insulation Resistance Testing Megger test results should be >1 MΩ for 440V systems, >5 MΩ for high-voltage systems. Trending insulation resistance values over time predicts degradation before failure occurs.
• Step 4: Power Quality Analysis Use power loggers to check for voltage imbalances (>3% is unacceptable), harmonic distortion (THD should be <5% for generators), and frequency stability.

3. Synchronization: Beyond the Basics
Modern vessels use automatic synchronizers, but understanding manual paralleling remains essential for emergency situations:

Synchronization Checklist:
• Voltage difference: <5%
• Frequency difference: <0.2 Hz
• Phase angle: <10° at the moment of breaker closure
• Phase sequence: Verified before first paralleling (only needs checking once unless modifications made)

Dynamic Load Sharing: Once synchronized, ensure active power (kW) is shared proportionally to generator ratings. Reactive power (kVAR) sharing depends on matching voltage regulator droop characteristics-typically 3-5% droop settings work best for stability.

4. Power Management System (PMS) Integration
Modern PMS platforms do more than auto-start generators-they optimize vessel efficiency:

Key PMS Functions:
• Load-dependent start/stop: Automatically starts next generator at 80% load, stops at 30% (adjustable setpoints)
• Non-essential load shedding: Prioritized tripping of non-critical loads during overload conditions
• Automatic synchronization and paralleling: Reduces operator error during power changes
• Fuel optimization: Selects most efficient generator combinations based on specific fuel consumption curves

Troubleshooting PMS Issues:
• Check communication cables (typically Modbus or Ethernet) for integrity
• Verify analog input signals (4-20mA) from power meters are calibrated
• Review event logs before clearing faults-root cause analysis requires historical data

5. Circuit Breaker Testing & Maintenance
Primary Injection Testing: Test breaker trip units at actual operating currents (not just secondary injection). This verifies current transformer ratios and wiring integrity.

Contact Resistance: Measure across closed breaker contacts using micro-ohmmeter. Values should be consistent across all phases and within manufacturer specifications (typically <100 micro-ohms for air circuit breakers).

Insulation Resistance: Test breaker pole-to-pole and pole-to-ground with 1kV megger before recommissioning after maintenance.

6. Thermography & Predictive Maintenance
Infrared Survey Schedule:
• Monthly: Main busbar connections and generator breaker terminations
• Quarterly: Distribution panels and motor control centers
• Annually: Complete vessel survey with thermal imaging report

Critical Findings:
• Hot spots >70°C require immediate attention
• Temperature rises >40°C above ambient indicate potential failure within weeks
• Compare thermal images year-over-year to track degradation trends

7. Insulation Resistance Testing Protocols
Testing Standards:
• IEEE 43-2013 for rotating machinery
• IEC 60092-350 for shipboard cables

Acceptance Criteria:
• New equipment: >100 MΩ
• In-service equipment: >1 MΩ minimum, >10 MΩ preferred
• Trend analysis is more valuable than single measurements-plot monthly readings to identify moisture ingress or insulation aging

Testing Procedure:
1. Isolate and discharge the equipment completely
2. Use appropriate test voltage (500V for 440V systems, 1kV for 690V systems)
3. Apply voltage for 60 seconds (note Polarization Index if testing motors)
4. Record temperature and humidity-readings must be corrected to standard conditions for trending

Conclusion
Mastering these MSB and power system disciplines separates competent marine electricians from true shipboard electrical engineers. In an industry where power failure can mean disaster, our attention to cable layering detail, systematic troubleshooting, and predictive maintenance through thermography and insulation testing ensures vessel safety and operational reliability.

Training Available: We offer advanced marine electrical training for engineering teams, covering MSB maintenance, PMS commissioning, and troubleshooting methodologies.`,
    category: "Electrical",
    date: "February 24, 2026",
    image: "/images/blog_3.png"
  },
  {
    id: 4,
    title: "Calibration Services for Marine & Offshore Operations",
    subtitle: "Precision at Sea: Critical Calibration Services for Marine & Offshore Electrical Systems",
    excerpt: "Essential guide to marine calibration services covering electrical instruments, insulation testers, multi-meters, and class-approved calibration procedures for offshore operations.",
    content: `Introduction: Why Calibration Matters in Marine Environments
In the marine and offshore sectors, instrument accuracy isn't just about efficiency-it's about safety, compliance, and environmental protection. Salt air, vibration, temperature variations, and humidity all cause measurement drift over time. Regular calibration ensures your critical instruments provide reliable data when making decisions about equipment operation and safety systems.

The Marine Calibration Imperative
Classification societies (DNV, ABS, Lloyd's Register) and international regulations (SOLAS, MARPOL) require documented calibration of safety-critical equipment. But beyond compliance, uncalibrated instruments lead to:
• Unexpected equipment failures due to missed insulation degradation
• Incorrect power quality readings causing generator damage
• Safety system failures during emergencies
• Environmental incidents from incorrect cargo or ballast monitoring

Critical Instruments Requiring Regular Calibration
1. Insulation Resistance Testers (Meggers)
Testing up to 1,000V, these verify cable and motor insulation integrity. Calibration ensures the test voltage output is accurate and resistance readings are traceable to international standards. Annual calibration is typical, with more frequent intervals for heavily used units.

2. Digital & Analog Multi-Meters
Used for everything from troubleshooting control circuits to verifying generator outputs. Calibration checks DC/AC voltage, current, and resistance accuracy across all ranges. Marine-grade meters require special attention to salt air corrosion of input jacks.

3. Power Quality Analysers & Power Loggers
Critical for generator commissioning and harmonic analysis. Calibration verifies accuracy of voltage, current, power factor, and harmonic measurements-essential when troubleshooting PMS issues or generator instability.

4. Temperature Measurement Devices
Includes thermocouples, RTDs, and infrared thermometers used for bearing monitoring and transformer temperature verification. Marine applications require calibration across the full operating range, typically -20°C to +150°C.

5. Panel Meters (kW, KVAR, Power Factor)
These indicate generator loading to operators. Inaccurate readings lead to poor load sharing decisions and potential overload conditions. On-site calibration is often preferred to avoid system downtime.

Calibration Standards & Traceability
Marine calibration must comply with ISO/IEC 17025:2017 standards, ensuring:
• Measurement traceability to national/international standards
• Documented calibration procedures
• Uncertainty calculations for all measurements
• Accredited laboratory conditions (temperature, humidity controlled)

Calibration certificates must be maintained onboard for classification society audits and port state control inspections.

Onboard vs. Shore-Based Calibration
Onboard Calibration:
• Advantages: No equipment removal, performed during cargo operations or port stays, immediate return to service
• Limitations: Limited by reference standard accuracy, environmental conditions affect measurements
• Best for: Multi-meters, clamp meters, portable insulation testers

Shore-Based Laboratory Calibration:
• Advantages: Controlled environment, higher accuracy reference standards, comprehensive testing capabilities
• Limitations: Equipment downtime, shipping logistics
• Best for: Precision panel meters, power analysers, complex multi-function instruments

Special Considerations for Offshore Calibration
Offshore platforms and vessels present unique challenges:
• Vibration effects: Transport to offshore locations can affect instrument calibration-post-installation verification is essential
• Temperature cycling: Equipment moved between climate-controlled accommodations and exposed weather decks requires more frequent calibration
• Explosion-proof equipment: Intrinsically safe instruments require specialized calibration procedures maintaining certification integrity

The Business Case for Proactive Calibration
While calibration represents an operational cost, the alternative is far more expensive:
• Preventive: Regular calibration identifies instrument drift before it affects operations
• Predictive: Trending calibration data predicts instrument failure
• Compliance: Avoid vessel detention and class notation withdrawals
• Insurance: Many underwriters require documented calibration programs

Conclusion
In marine and offshore operations, you can't manage what you can't measure accurately. A robust calibration program, using ISO/IEC 17025 accredited services and maintaining traceable records, ensures your electrical systems operate safely and efficiently while meeting all regulatory requirements.

Calibration Services: We provide onboard and shore-based calibration services for all marine electrical instruments, with ISO/IEC 17025 accredited procedures and class-accepted certification. Emergency calibration services available in major ports worldwide.`,
    category: "Calibration",
    date: "February 16, 2026",
    image: "/images/blog_4.png"
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

                  {/* Main Title displayed in the Card view */}
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
              className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-2xl shadow-2xl overflow-y-auto"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-[#FF4500] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md mb-3 inline-block">
                    {selectedPost.category}
                  </span>
                  {/* Modal displays BOTH Title and Subtitle */}
                  <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2">
                    {selectedPost.title}
                  </h2>
                  <h3 className="text-lg md:text-xl font-medium text-gray-300 leading-snug">
                    {selectedPost.subtitle}
                  </h3>
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
                          <span className="text-[#FF4500] mr-2 mt-1 font-bold">•</span>
                          <span>{paragraph.replace('•', '').trim()}</span>
                        </div>
                      );
                    }

                    // Check if it's a sub-heading (like "1. SMAW" or "Introduction")
                    const isHeading = paragraph.length < 70 && !paragraph.endsWith('.') && !paragraph.endsWith(',');

                    // Standard paragraph
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