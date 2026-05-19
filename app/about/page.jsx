"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Handshake, Clock, Globe, Download, FileText } from "lucide-react";
import { FaAward, FaUsers, FaShip, FaGlobe as FaGlobeIcon, FaIndustry, FaBolt } from "react-icons/fa";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import StatItem from "@/components/ui/StatItem";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

const COUNTER_TARGETS = [
  { target: 12, duration: 1200 },
  { target: 100, duration: 1800 },
  { target: 12, duration: 2000 },
  { target: 7, duration: 2200 },
  { target: 465, duration: 2500 },
  { target: 14, duration: 1500 },
];

const AboutUsPage = () => {
  const { counts, sectionRef } = useCounterAnimation(COUNTER_TARGETS);
  const [experience, employee, epc, powerPlants, vessels, countries] = counts;

  return (
    <div className="bg-white dark:bg-[#030712] min-h-screen transition-colors duration-300 font-['Poppins']">

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden p-[15px]">
        <div
          ref={sectionRef}
          className="relative w-full h-full rounded-[24px] overflow-hidden shadow-2xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/Videos/jackup_barge .mp4" type="video/mp4" />
            <img src="/fallback-image.jpg" alt="Offshore background" className="w-full h-full object-cover" />
          </video>

          <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10 pointer-events-none"></div>

          <div className="relative z-20 flex flex-col justify-between h-full pt-12 pb-8 md:pb-16 px-4">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-[#FF4500] text-center tracking-widest uppercase drop-shadow-lg mt-4 md:mt-8"
            >
              About Us
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-center px-4 flex-grow flex flex-col justify-center my-6"
            >
              <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
                <span className="text-[#FF4500] font-bold">DPV Offshore & Marine Services</span> does more than deliver maritime services — we deliver trust, reliability, and innovation. With every project, we navigate challenges with the same precision and dedication that define the maritime world we serve.
              </p>
              <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md mb-4 md:mb-6">
                Our skilled team approaches every task with passion, technical mastery, and a relentless pursuit of perfection, operating with one clear mission: to help our clients move forward with confidence.
              </p>
              <p className="text-white text-sm sm:text-base md:text-xl leading-relaxed drop-shadow-md">
                Your success is at the heart of everything we do, and we are dedicated to delivering the most effective and reliable maritime solutions to support your goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2 max-w-6xl mx-auto w-full mb-4 md:mb-8"
            >
              <StatItem icon={FaAward} label="Experience" value={experience} suffix="Y+" />
              <StatItem icon={FaUsers} label="Employees" value={employee} />
              <StatItem icon={FaIndustry} label="EPC" value={epc} />
              <StatItem icon={FaBolt} label="Power Plants" value={powerPlants} />
              <StatItem icon={FaShip} label="Vessels" value={vessels} />
              <StatItem icon={FaGlobeIcon} label="Countries" value={countries} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF4500] uppercase tracking-widest mb-8">Our Journey</h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-6 text-lg max-w-4xl mx-auto leading-relaxed">
            <p>
              Founded in 2018 by a team of seasoned marine professionals, DPV emerged from a shared vision to raise industry standards by offering comprehensive, dependable, and high-quality maritime solutions. What began as a focused local initiative has evolved into an internationally respected name recognised for excellence, integrity, and an unwavering commitment to our clients.
            </p>
            <p>
              With over 18 years of hands-on industry experience, our skilled team approaches every task with passion, technical mastery, and a relentless pursuit of perfection. Whether tackling complex offshore projects, vessel repairs, or tailored marine solutions, we operate with one clear mission: to help our clients move forward with confidence.
            </p>
            <p className="font-semibold text-gray-900 dark:text-gray-100">
              At DPV, we believe excellence is not a destination — it is a continuous journey. A journey we proudly share with our partners worldwide, steering them toward safer, smarter, and more successful marine engineering operations. With a commitment to excellence and a spirit of true collaboration, we stand by your side — navigating industry challenges together and ensuring seamless, confident progress at every stage.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#FF4500] shadow-2xl">
              <Image
                src="/images/owner.jpeg"
                alt="Mr. Duminda Gunathilake"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-xl font-bold text-gray-900 dark:text-white">Mr. Duminda Gunathilake</p>
              <p className="text-[#FF4500] font-semibold text-sm mt-1 tracking-wide uppercase">Founder & General Manager</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">DPV Offshore & Marine Services L.L.C.</p>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-[#FF4500] font-semibold text-sm uppercase tracking-widest mb-3">Meet Our Founder</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Driven by Excellence,<br className="hidden md:block" /> Built on Trust
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              <p>
                Mr. Duminda Gunathilake founded DPV Offshore & Marine Services L.L.C. in 2018 with a clear vision — to build a world-class engineering company that delivers reliable, end-to-end marine and industrial solutions across the Middle East and beyond.
              </p>
              <p>
                With over 12 years of hands-on industry experience, he has led the company to complete over 100 projects across the Middle East and South Asia, serving key sectors including marine, oil & gas, power generation, and heavy industry.
              </p>
              <p>
                Under his leadership, DPV has grown into a trusted name recognized for technical excellence, safety, and a commitment to long-term partnerships with clients across the GCC region.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fff0eb] dark:bg-[#1a0e0a] flex items-center justify-center">
                  <FaAward className="text-[#FF4500] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Experience</p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">12+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fff0eb] dark:bg-[#1a0e0a] flex items-center justify-center">
                  <FaIndustry className="text-[#FF4500] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects Delivered</p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">100+</p>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-50 dark:bg-[#0f172a] py-16 md:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-[#FF4500]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF4500] uppercase tracking-wider mb-6">Our Mission</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                <span>We strive to deliver exceptional results in all our comprehensive services & value your timelines.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                <span>We are innovative to new technology with our well-equipped & highly skilled professionals.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#FF4500] mr-3 mt-1">▹</span>
                <span>We are committed to always maintain the highest safety & quality standards.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-[#FF4500]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF4500] uppercase tracking-wider mb-6">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              To be a trusted marine offshore & subsea service partner in region, recognized for quality workmanship, safety, and timely project delivery.
            </p>
          </motion.div>

        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF4500] uppercase tracking-widest">Values</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeUpVariant} className="bg-white dark:bg-[#030712] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-[#FF4500] w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Safety First</h4>
            <p className="text-gray-600 dark:text-gray-400">Safety first in every job and location.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white dark:bg-[#030712] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="text-[#FF4500] w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Quality</h4>
            <p className="text-gray-600 dark:text-gray-400">Quality workmanship and attention to detail.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white dark:bg-[#030712] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="text-[#FF4500] w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Integrity</h4>
            <p className="text-gray-600 dark:text-gray-400">Integrity and transparency in all dealings.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white dark:bg-[#030712] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="text-[#FF4500] w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Timeliness</h4>
            <p className="text-gray-600 dark:text-gray-400">Commitment to on-time delivery.</p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="bg-white dark:bg-[#030712] border border-gray-100 dark:border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="text-[#FF4500] w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Global Mindset</h4>
            <p className="text-gray-600 dark:text-gray-400">Respect, teamwork, and pride in Sri Lankan roots and global service.</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gray-50 dark:bg-[#0f172a] py-16 md:py-24 px-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF4500] uppercase tracking-widest mb-4">Our Brochures</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Download our service brochures to learn more about what we offer.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Electromechanical Brochure */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border-t-4 border-[#FF4500] overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="text-[#FF4500] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Electromechanical Services</h3>
                    <p className="text-[#FF4500] text-sm font-semibold mt-1">For Processing Industries</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  A multi-discipline engineering house delivering over 100 projects across the Middle East and South Asia. Specialising in electrical & automation, mechanical, hydraulic, and calibration & balancing solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Electrical & Automation', 'Mechanical', 'Hydraulic', 'Calibration & Balancing'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>⚡ 4-Hour Response</span>
                  <span>🕐 24/7 Support</span>
                  <span>🌍 GCC Coverage</span>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="/PDF/DPV%20OFFSHORE%20ELECTROMECHANICAL%20%20BROCHURE.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              </div>
            </motion.div>

            {/* Yacht Retrofit Brochure */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border-t-4 border-[#FF4500] overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="text-[#FF4500] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Yacht Refitting & Maintenance</h3>
                    <p className="text-[#FF4500] text-sm font-semibold mt-1">"Secure, Transparent and Reliable Yacht Care"</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  Top-quality yacht refitting and maintenance services from hull & painting to engine overhauls. Our experienced team ensures your yacht receives the best possible care, tailored to your specific needs.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Hull & Painting', 'Electrical Systems', 'On-Board Instrumentation', 'Engine & Propeller'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>⚓ Dubai Maritime City</span>
                  <span>🛥️ Complete Yacht Service</span>
                  <span>✅ ISO 9001</span>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="/PDF/YACHT%20RETROFIT%20%20DPV%20OFFSHORE%202026.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              </div>
            </motion.div>

            {/* Company Profile 2026 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border-t-4 border-[#FF4500] overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="text-[#FF4500] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Company Profile 2026</h3>
                    <p className="text-[#FF4500] text-sm font-semibold mt-1">DPV Offshore & Marine Services</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  A comprehensive overview of DPV Offshore & Marine Services — our history, full range of capabilities, key achievements, and our commitment to delivering world-class marine and offshore engineering solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Marine Services', 'Offshore Engineering', 'Oil & Gas', 'Power Generation'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>🏆 Founded 2018</span>
                  <span>🌍 100+ Projects</span>
                  <span>⚓ GCC Region</span>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="/PDF/DPV%20OFFSHORE%20COMPANY%20PROFILE%202026.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Profile
                </a>
              </div>
            </motion.div>

            {/* Electrical & Supply 2026 */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-xl border-t-4 border-[#FF4500] overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#fff0eb] dark:bg-[#1a0e0a] rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="text-[#FF4500] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Electrical & Supply</h3>
                    <p className="text-[#FF4500] text-sm font-semibold mt-1">Marine & Offshore Electrical Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  Discover our comprehensive electrical supply and procurement services for the marine and offshore industry — providing certified components, materials, and end-to-end electrical solutions for your operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {['Electrical Supply', 'Procurement', 'Marine Components', 'Offshore Equipment'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span>⚡ Certified Products</span>
                  <span>🕐 24/7 Supply</span>
                  <span>🇦🇪 UAE-Based</span>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a
                  href="/PDF/DPV%20OFFSHORE%20ELECTRICAL%20%26%20SUPPLY%202026.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold rounded-full shadow-md hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
