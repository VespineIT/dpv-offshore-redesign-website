"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Handshake, Clock, Globe } from "lucide-react";
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

    </div>
  );
};

export default AboutUsPage;
