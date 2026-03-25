"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Wrench, Cpu, Zap, PenTool, Settings, X, Anchor, Activity, Power, Toolbox, Cog, Cpu as Microchip } from "lucide-react";

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

  // The Main Categories (The "Hub")
  const categories = [
    { id: "cat_1", label: "Ship Repair", icon: Anchor, img: "/images/ship_pic_1.png", desc: "Comprehensive dry docking, conversions, and hull maintenance." },
    { id: "cat_2", label: "Yacht Refitting", icon: PenTool, img: "/images/ship_pic_5.png", desc: "Premium painting, electrical, and fiberglass restorations." },
    { id: "cat_3", label: "Ship Electrical Engineering & Technology", icon: Zap, img: "/images/ship_pic_2.png", desc: "System integration, configuration, and motor rewinding." },
    { 
      id: "cat_4", 
      label: "Ship Pneumatic Technology", 
      icon: Activity, 
      img: "/images/ship_pic_4.png", 
      desc: "Advanced electric actuation and intelligent fluid control.",
      overview: (
        <div className="space-y-4">
          <p>
            The range of pneumatic solutions includes actuators, valves, solenoid valves, proportional technology fittings, handling vacuum and air treatment components. All combine the mechanics and electronics required for motion management and control. With optimized consumption, dimensions and functional parameters, each individual component contributes to the overall system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <strong className="text-gray-900 dark:text-white block mb-2">Products:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Air service units</li>
                <li>Boosters</li>
                <li>Spool valves and solenoid valves</li>
                <li>Flow adjusters</li>
                <li>Quick exhaust valves</li>
                <li>Non return valves</li>
                <li>Poppet valves</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900 dark:text-white block mb-2">Application areas:</strong>
              <ul className="list-disc pl-5 space-y-1">
                <li>Petrochemicals</li>
                <li>Oil & Gas</li>
                <li>Power Generation</li>
                <li>Water treatment</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "cat_4a", 
      label: "Marine Automation", 
      icon: Microchip, 
      img: "/images/ship_pic_2.png", 
      desc: "Advanced automation, control systems, and monitoring for modern vessels.",
      overview: (
        <div className="space-y-4">
          <p>Details and sub-topics for Marine Automation will be provided here.</p>
        </div>
      )
    },
    { id: "cat_5", label: "Ship Mechanical Engineering & Technology", icon: Cog, img: "/images/ship_pic_6.png", desc: "Heavy mechanical overhauls and bearing remetalling." },
    { id: "cat_6", label: "PROPULSION", icon: Toolbox, img: "/images/ship_pic_3.png", desc: "FPP, CPP, and thruster overhauls with precision blade polishing." },
    { id: "cat_7", label: "Mobile In-Situ Machining", icon: Wrench, img: "/images/ship_pic_7.png", desc: "On-site turning, milling, grinding, and line boring." },
    { id: "cat_8", label: "Power Plant Related Services", icon: Power, img: "/images/ship_pic_8.png", desc: "Maintenance, retrofits, and emergency breakdown repairs." },
    { id: "cat_9", label: "Electrical Services for Hydro Power Stations", icon: Zap, img: "/images/ship_pic_4.png", desc: "Stator rewinding and high-voltage transformer solutions." },
    { id: "cat_10", label: "Cranes", icon: Settings, img: "/images/ship_pic_9.png", desc: "Shipyard diagnostics, new systems, and life-extension retrofits." },
    { 
      id: "cat_10a", 
      label: "Hydraulic Systems Integration & Repairs", 
      icon: Wrench, 
      img: "/images/ship_pic_2.png", 
      desc: "Comprehensive hydraulic system integration, troubleshooting, and precision repairs.",
      overview: (
        <div className="space-y-4">
          <p>Details and sub-topics for Hydraulic Systems Integration & Repairs will be provided here.</p>
        </div>
      )
    },
    { id: "cat_11", label: "OEM Solutions", icon: Cpu, img: "/images/ship_pic_2.png", desc: "Genuine spare parts for engines, cranes, and auxiliary machinery." },
  ];

  // The specific services mapped to categories (The "Spokes")
  const serviceCards = [
    // ----------------------------------------------------------------------
    // 1. Ship Repair
    // ----------------------------------------------------------------------
    { 
      id: 101, 
      title: "Dry Docking", 
      desc: "Comprehensive ship repair and conversion services.", 
      details: (
        <div className="space-y-4">
          <p>We offer comprehensive ship repair and conversion services with advanced technologies to meet the evolving needs of the maritime industry.</p>
          <p>Our facilities are equipped to handle a wide range of projects, from routine maintenance and repairs to complex conversions and upgrades, ensuring that vessels remain operational, efficient, and compliant with the latest standards.</p>
        </div>
      ), 
      img: "/images/ship_pic_1.png", 
      category: "cat_1" 
    },
    { 
      id: 102, 
      title: "Dry Docking Management", 
      desc: "Dedicated and qualified staff for safe and economical dry docking.", 
      details: (
        <div className="space-y-4">
          <p>We at DPV Offshore offer a dedicated and qualified staff of superintendent, chief engineers, shipyard production engineers, coating inspectors, certified steel inspectors, and electrical inspectors to ensure a safe and economical dry docking of their vessels. Our dry-docking management teams are in Colombo, Sri Lanka & Dubai, Abu Dhabi, United Arab Emirates.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pre docking inspection reports</li>
            <li>Docking specification</li>
            <li>Yard inspections, vetting and selection criteria</li>
            <li>Docking Tender preparation and assessment</li>
            <li>Project risk identification and management</li>
            <li>Contingency planning</li>
            <li>Docking calculations and docking plans</li>
            <li>Acceptance tests</li>
          </ul>
          <p className="font-semibold text-gray-900 dark:text-white mt-4">OEM certified spare parts supply.</p>
        </div>
      ), 
      img: "/images/ship_pic_2.png", 
      category: "cat_1" 
    },
    { 
      id: 103, 
      title: "Ship Conversion", 
      desc: "Upgrading vessels to meet new operational requirements.", 
      details: (
        <div className="space-y-4">
          <p>We specialize in converting and upgrading vessels to meet new operational requirements, enhance capabilities, or comply with updated regulations. Our services include modifications for alternative fuel systems, hybrid power installations, and advanced automation solutions.</p>
        </div>
      ), 
      img: "/images/ship_pic_3.png", 
      category: "cat_1" 
    },
    { 
      id: 104, 
      title: "Piping", 
      desc: "Fabrication, installation, and repair for marine piping systems.", 
      details: (
        <div className="space-y-4">
          <p>Our piping systems provide flow of liquids ranging from chemicals to fresh water, and all medium and pressurized air, ranging from gases to circulation of heated air to the living areas from the central heating system.</p>
          <p>We handle this in a safe manner and ensure an efficient layout of the piping systems. Our team has a wide experience ensuring the safety and well-being of everyone on board and the operation of the vessel.</p>
          
          <strong className="text-gray-900 dark:text-white block mt-6 mb-2">Production & Installation</strong>
          <p>We put great efforts into routing the pipes throughout the vessel in the best way possible ensuring an effective layout, space saving and access for inspection.</p>
          <p>Our main goal is achieving the highest operational standards of the vessel by ensuring long term operating time of the pipe systems. When starting a new project with a new customer we create a standard for the pipe systems based on the customer’s expectations, class requirements and our competence. We thoroughly choose the right material according to the functionality of the different pipe systems and strictly follow the suppliers’ standards. The pipes are then prefabricated in our workshops in Norway and Tulcea.</p>
          <p>Prefabrication is handled in UAE requirements at Dubai Maritime City workshop and Sri Lanka requirements of prefabrications carried in Colombo, Workshop.</p>
        </div>
      ), 
      img: "/images/ship_pic_4.png", 
      category: "cat_1" 
    },

    // ----------------------------------------------------------------------
    // 2. Yacht Refitting
    // ----------------------------------------------------------------------
    { id: 201, title: "Hull Painting & Fiberglass Works", desc: "Comprehensive hull maintenance and repair services.", details: "Comprehensive hull maintenance and repair services. Expert painting and refinishing for a flawless finish. Skilled fiberglass and wood repairs, ensuring structural integrity and aesthetic appeal.", img: "/images/ship_pic_5.png", category: "cat_2" },
    { id: 202, title: "Electrical Systems & Lighting", desc: "Comprehensive electrical system services for safety and reliability.", details: "Comprehensive electrical system services for safety and reliability. Upgrades, repairs, and new installations. Energy-efficient LED lighting solutions to enhance your yacht's ambiance.", img: "/images/ship_pic_6.png", category: "cat_2" },
    { id: 203, title: "Onboard Instrumentation", desc: "Installation, calibration, and repair of navigation systems.", details: "Installation, calibration, and repair of navigation and communication systems. Ensuring precise and reliable operation. Keeping you connected and informed on the water.", img: "/images/ship_pic_7.png", category: "cat_2" },
    { id: 204, title: "Anti-Osmosis Treatment", desc: "Effective anti-osmosis treatments to protect your yacht's hull.", details: "Effective anti-osmosis treatments to protect your yacht's hull. Preventing blistering and ensuring long-term durability. Utilising industry-leading techniques and materials.", img: "/images/ship_pic_8.png", category: "cat_2" },
    { id: 205, title: "Engine, Re-Engines & Propellert", desc: "Full range of engine services and propeller repairs.", details: "Full range of engine services, from routine maintenance to complete overhauls. Professional re-engines solutions for optimal performance. Propeller repairs and replacements for smooth sailing.", img: "/images/ship_pic_9.png", category: "cat_2" },

    // ----------------------------------------------------------------------
    // 3. Ship Electrical Engineering & Technology
    // ----------------------------------------------------------------------
    { 
      id: 301, 
      title: "Ship Electrical Engineering", 
      desc: "Innovative technology and marine electrical systems.", 
      details: (
        <div className="space-y-4">
          <p>Innovative technology and marine electrical systems with reliable and sustainable solutions for the most demanding conditions.</p>
          <p>Since established in 2018, DPV has grown to become a Gulf & South Asia recognized and trusted provider of marine electrical systems, providing shipowners worldwide with reliable and sustainable solutions for the most demanding conditions.</p>
          <p>We offer innovating concepts and technologies with focus on cost-effective and sustainable solutions for performance optimalization, and constantly seek to develop new, innovative, and flexible solutions with a smart profile. Our strength lies in selecting, configuring, and testing the different components to address our customer's needs.</p>
          <p>We offer full-scale electrical engineering design, marine procurement, and integrated solutions for vessels in the marine industry. With the ability to operate as a specialized system integrator, we can provide everything from concept design to equipment purchase to equipment integration through the warranty period.</p>
        </div>
      ), 
      img: "/images/ship_pic_1.png", 
      category: "cat_3" 
    },
    { 
      id: 302, 
      title: "System Integration", 
      desc: "Unique expertise as system integrators for the maritime industry.", 
      details: (
        <div className="space-y-4">
          <p>At DPV Offshore we take pride in our unique expertise as system integrators, which comes from a long history in the maritime industry.</p>
          <p>We know that at the core of every vessel there is a complex network of seamlessly integrated electrical systems and components ensuring safe operations at sea. By utilizing our unique competence as system integrators, it allows us to work with all established brands in the market and deliver advanced electrical systems for all types of vessels in the maritime and offshore industry.</p>
          <p>With solid expertise in tailored solutions for diesel-electric, full electric, and hybrid vessels, our core competency lies in selecting the correct components to ensure optimal operations, and to deliver quality solutions addressing the customer's needs. Our tailored solutions include complete electrical system packages along with energy and automation technology, diesel-electric propulsion, electrics, and HVAC systems.</p>
        </div>
      ), 
      img: "/images/ship_pic_2.png", 
      category: "cat_3" 
    },
    { 
      id: 303, 
      title: "System Configuration", 
      desc: "Integration of modern electrical solutions for future marine operations.", 
      details: (
        <div className="space-y-4">
          <p>The marine industry is on the brink of a technological revolution. Innovations in marine electrical technology are changing how vessels operate, making them more efficient, sustainable, and safer. From advanced battery systems to smart grid technologies, the integration of modern electrical solutions is essential for future marine operations.</p>
          <ul className="list-disc pl-5 space-y-1 mt-4">
            <li>Generator sets</li>
            <li>Energy storage system</li>
            <li>Main switchboard</li>
            <li>Distribution switchboards</li>
            <li>Motor control centre & individual starters</li>
            <li>Transformers</li>
            <li>Drive</li>
            <li>Electric thruster motors</li>
            <li>Electric propulsion system</li>
            <li>Energy Management Systems</li>
            <li>Main and auxiliary thrusters</li>
            <li>Thruster control</li>
            <li>Joystick & DP Systems</li>
          </ul>
        </div>
      ), 
      img: "/images/ship_pic_3.png", 
      category: "cat_3" 
    },
    { 
      id: 304, 
      title: "Motors & Rotors Rewinding", 
      desc: "Wide range of services for DC and AC machinery MOTORS.", 
      details: (
        <div className="space-y-4">
          <p>We provide a wide range of services for both DC and AC machinery MOTORS and extensive experience in service of rotating electrical machinery.</p>
          
          <p><strong className="text-gray-900 dark:text-white">Interchangeability:</strong> (Fit, Form & Function) with existing original equipment’s</p>
          
          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Driven Equipment’s</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pumps, Compressors, Fans, Crushers</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Applications Areas</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Industrial Process and Oil & Gas</li>
            <li>Petrochemicals & Chemicals</li>
            <li>Power Plants (Thermal & Hydrulic)</li>
            <li>Water Supply & Irrigation</li>
            <li>Cruise, Yacht & Commercial Marine</li>
            <li>Ship propulsion & Thruster</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Housing Fabricating</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rigid housings, engineered to reduce vibrations throughout the whole range of operation mode Vertical & Horizontal</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Stator</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Core & Winding</li>
            <li>Stator End Winding</li>
            <li>Low loss laminations</li>
            <li>Cooling at the heart of the winding</li>
            <li>Compact design retrofit</li>
            <li>Reliable, durable insulation</li>
            <li>Anti-flash and anti-contamination coating</li>
            <li>Vacuum and pressure impregnation (VPI)</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Rotor</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Optimized construction</li>
            <li>High Balancing class</li>
            <li>Deep slots</li>
            <li>Copper coils; coper (or copper alloy) bars and rings</li>
            <li>Anti-flash and anti-contamination coating</li>
            <li>Mounting of rotor</li>
            <li>Short circuit ring</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Cooling Heat Exchangers</strong>
          <p>For all type of ambient conditions</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Air/Air type (T)</li>
            <li>Air/Water type (R)</li>
            <li>Open Type (A)</li>
          </ul>

          <strong className="text-gray-900 dark:text-white block mt-4 mb-2">Bearings</strong>
          <ul className="list-disc pl-5 space-y-1">
            <li>Anti-friction</li>
            <li>Sleeve</li>
          </ul>
        </div>
      ), 
      img: "/images/ship_pic_9.png", 
      category: "cat_3" 
    },

    // ----------------------------------------------------------------------
    // 4. Ship Pneumatic Technology
    // ----------------------------------------------------------------------
    { 
      id: 401, 
      title: "Electric Actuation", 
      desc: "Motion management systems engineered for marine precision.", 
      details: (
        <div className="space-y-4">
          <p>
            Electric actuation is an ideal solution for applications where, in addition to reliability, it is necessary to provide speed performance and flexibility in both the control and configuration, not only of the axes, but also of the electrical cylinders. The range includes actuators with recirculating ball screws, in-line or parallel cylinder configurations and electric motors. Customized flanges are available for mounting the customer’s motors and creating solutions for several alternative actuators.
          </p>
          <div>
            <strong className="text-gray-900 dark:text-white block mb-2">Products :</strong>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mechatronic Solutions</li>
              <li>Integrated systems</li>
              <li>Cylinders with piston rods</li>
              <li>Rodless cylinders</li>
              <li>Rotary actuators</li>
              <li>Magnetic sensors</li>
              <li>Accessories and fixing devices</li>
            </ul>
          </div>
        </div>
      ), 
      img: "/images/ship_pic_4.png", 
      category: "cat_4" 
    },
    { 
      id: 402, 
      title: "Fluid Control", 
      desc: "Advanced valves, fittings, and air treatment components.", 
      details: (
        <div className="space-y-4">
          <p>
            Wide range of brass and stainless-steel solenoid valves suitable for use with air, water, steam and other fluids compatible with the body and seals materials. The solenoid valves are 2 or 3 ways, normally open, normally closed, and designed for general service as either direct acting or servo assisted. Connections are available in both BSP and NPT 1/8” up to 2” and working pressures from vacuum up to 100 bar. Solenoid valves with coils enclosed in a CESI 03 and ATEX 344 certified housing are available for explosive environments.
          </p>
          
          <div>
            <strong className="text-gray-900 dark:text-white block mb-2">Products:</strong>
            <p className="font-semibold mb-1">Valves & Solenoid valves for fluids.</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Pneumatic activated valses 2/2 series PVF</li>
              <li>Direct active poppet type solenoid valves 2/2 -3/2 series F300</li>
              <li>Servo assisted diaphragm solenoid valves 2/2-series F300</li>
              <li>Assisted-lift diaphragm solenoid valves 2/2-series F300</li>
              <li>Servo assisted piston solenoid valves 2/2-series F300</li>
              <li>Solenoid coils-series F300</li>
              <li>pneumatic actuated angle seat valves 2/2-series PVF</li>
              <li>PAD valves 2/2-series PVA</li>
            </ul>

            <strong className="text-gray-900 dark:text-white block mb-2">FRL & Boosters;</strong>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Air service units’ series air plus aluminium</li>
              <li>Air service units’ series 1700 steel line</li>
              <li>Volume booster series flow plus</li>
            </ul>
            
            <p className="font-semibold">Manifold configurations</p>
          </div>
        </div>
      ), 
      img: "/images/ship_pic_5.png", 
      category: "cat_4" 
    },

    // ----------------------------------------------------------------------
    // 4a. Marine Automation (NEW)
    // ----------------------------------------------------------------------
    { 
      id: 451, 
      title: "Marine Automation Solutions", 
      desc: "Comprehensive marine automation services and system design.", 
      details: (
        <div className="space-y-4">
          <p>Details and sub-topics for Marine Automation will be added here soon.</p>
        </div>
      ), 
      img: "/images/ship_pic_2.png", 
      category: "cat_4a" 
    },

    // ----------------------------------------------------------------------
    // 5. Ship Mechanical Engineering & Technology
    // ----------------------------------------------------------------------
    { id: 501, title: "Overhaul Services", desc: "Overhaul Services.", details: "Full breakdown, inspection, and rebuilding of essential mechanical systems.", img: "/images/ship_pic_6.png", category: "cat_5" },
    { id: 502, title: "RECONDITIONING SERVICES", desc: "RECONDITIONING SERVICES.", details: "Machining and revitalizing worn engine components to factory specifications.", img: "/images/ship_pic_7.png", category: "cat_5" },
    { id: 503, title: "REMETALLING BABBITT BEARINGS", desc: "REMETALLING BABBITT BEARINGS.", details: "Specialized remetalling to restore bearing surfaces for high-load machinery.", img: "/images/ship_pic_8.png", category: "cat_5" },

    // ----------------------------------------------------------------------
    // 6. PROPULSION
    // ----------------------------------------------------------------------
    { id: 601, title: "FPP Overhaul", desc: "FPP Overhaul.", details: "Inspection, repair, and balancing of fixed pitch propellers.", img: "/images/ship_pic_9.png", category: "cat_6" },
    { id: 602, title: "CPP Overhaul", desc: "CPP Overhaul.", details: "Complex overhauls for controllable pitch propeller units.", img: "/images/ship_pic_1.png", category: "cat_6" },
    { id: 603, title: "Thruster Overhaul", desc: "Thruster Overhaul.", details: "Restoring maneuverability by overhauling crucial thruster assemblies.", img: "/images/ship_pic_2.png", category: "cat_6" },
    { id: 604, title: "Polishing Blades", desc: "Polishing Blades.", details: "Propeller polishing to enhance hydrodynamic efficiency and save fuel.", img: "/images/ship_pic_3.png", category: "cat_6" },

    // ----------------------------------------------------------------------
    // 7. Mobile In-Situ Machining
    // ----------------------------------------------------------------------
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

    // ----------------------------------------------------------------------
    // 8. Power Plant Related Services
    // ----------------------------------------------------------------------
    { id: 801, title: "Preventive Maintenance", desc: "Preventive Maintenance.", details: "Routine maintenance programs maximizing plant uptime.", img: "/images/ship_pic_7.png", category: "cat_8" },
    { id: 802, title: "Retrofit and Upgrades", desc: "Retrofit and Upgrades.", details: "Modernizing existing power infrastructure with the latest technology.", img: "/images/ship_pic_8.png", category: "cat_8" },
    { id: 803, title: "Engine Services", desc: "Engine Services.", details: "Servicing massive power generators for continuous reliable output.", img: "/images/ship_pic_9.png", category: "cat_8" },
    { id: 804, title: "Turbine Related Maintenance", desc: "Turbine Related Maintenance.", details: "Specialized care for gas and steam turbine systems.", img: "/images/ship_pic_1.png", category: "cat_8" },
    { id: 805, title: "Emergency Breakdown Services", desc: "Emergency Breakdown Services.", details: "Rapid response teams deployed to troubleshoot and repair sudden failures.", img: "/images/ship_pic_2.png", category: "cat_8" },
    { id: 806, title: "Control Systems & Automation", desc: "Control Systems & Automation.", details: "Upgrading PLC networks and SCADA systems for modern plant management.", img: "/images/ship_pic_3.png", category: "cat_8" },

    // ----------------------------------------------------------------------
    // 9. Electrical Services for Hydro Power Stations
    // ----------------------------------------------------------------------
    { id: 901, title: "Rewinding of the generator stators", desc: "Rewinding of the generator stators.", details: "High-voltage stator rewinding extending generator operational life.", img: "/images/ship_pic_4.png", category: "cat_9" },
    { id: 902, title: "Increasing of power hydroelectric generators", desc: "Increasing of power hydroelectric generators.", details: "Capacity and efficiency boosting for active hydro facilities.", img: "/images/ship_pic_5.png", category: "cat_9" },
    { id: 903, title: "Transformer solutions", desc: "Transformer solutions.", details: "Testing, oil purification, and repair for crucial transformers.", img: "/images/ship_pic_6.png", category: "cat_9" },

    // ----------------------------------------------------------------------
    // 10. Cranes
    // ----------------------------------------------------------------------
    { id: 1001, title: "Automation, system integration and diagnostics for port & shipyard, Ship crane applications", desc: "Automation, system integration and diagnostics.", details: "Complete integration and diagnostics for port, shipyard, and ship crane applications.", img: "/images/ship_pic_7.png", category: "cat_10" },
    { id: 1002, title: "Crane System Upgrades", desc: "Crane System Upgrades.", details: "Modernizing older crane systems with safer, faster drives and controls.", img: "/images/ship_pic_8.png", category: "cat_10" },
    { id: 1003, title: "New Crane Systems to Fit Your Needs", desc: "New Crane Systems to Fit Your Needs.", details: "Turnkey installations of new lifting equipment tailored to operations.", img: "/images/ship_pic_9.png", category: "cat_10" },
    { id: 1004, title: "Retrofit Solutions to Extend a Crane’s Service Life", desc: "Retrofit Solutions to Extend a Crane’s Service Life.", details: "Targeted component replacements extending functionality economically.", img: "/images/ship_pic_1.png", category: "cat_10" },

    // ----------------------------------------------------------------------
    // 10a. Hydraulic Systems Integration & Repairs (NEW)
    // ----------------------------------------------------------------------
    { 
      id: 1051, 
      title: "Hydraulic System Maintenance", 
      desc: "Expert hydraulic system integration and repair.", 
      details: (
        <div className="space-y-4">
          <p>Details and sub-topics for Hydraulic Systems Integration & Repairs will be added here soon.</p>
        </div>
      ), 
      img: "/images/ship_pic_2.png", 
      category: "cat_10a" 
    },

    // ----------------------------------------------------------------------
    // 11. OEM Solutions
    // ----------------------------------------------------------------------
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Service Divisions</h2>
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
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
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

              {/* Main Category Overview Text */}
              {activeCategoryObj?.overview && (
                <div className="mb-10 p-6 md:p-8 bg-white dark:bg-[#1e293b] rounded-[30px] shadow-sm border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                  {activeCategoryObj.overview}
                </div>
              )}

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
                      {/* Enforced line-clamp here so the card view never breaks visually */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
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

      {/* ================= MODAL / POPUP SECTION (FIXED LAYOUT) ================= */}
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
              // Fixed Layout: Set a precise height constraint and hid overflow at the wrapper level
              className="bg-white dark:bg-[#1e293b] w-full max-w-5xl h-[85vh] rounded-[30px] shadow-2xl flex flex-col md:flex-row relative overflow-hidden"
            >
              
              {/* Close Button - Now absolutely positioned over everything to stay visible */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 dark:bg-white/10 hover:bg-[#FF4500] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image - Pinned to the left side and scales to fill its container */}
              <div className="relative w-full md:w-2/5 h-48 md:h-full shrink-0">
                <Image 
                  src={selectedService.img} 
                  alt={selectedService.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1e293b] to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Modal Content - Independently scrollable right side */}
              <div className="p-6 md:p-10 w-full md:w-3/5 flex flex-col overflow-y-auto">
                
                {/* Header Section (Doesn't shrink) */}
                <div className="shrink-0 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[#FF4500] text-xs font-semibold tracking-wider uppercase mb-4 w-max">
                    <Settings className="w-3 h-3" />
                    Service Details
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white pr-12">
                    {selectedService.title}
                  </h2>
                </div>
                
                {/* Details Section (Expands and holds the long text) */}
                <div className="flex-grow">
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#FF4500] pl-4">
                    {selectedService.desc}
                  </h4>
                  
                  {typeof selectedService.details === 'string' ? (
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedService.details}
                    </p>
                  ) : (
                    <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                      {selectedService.details}
                    </div>
                  )}
                </div>

                {/* Footer Section (Pinned to bottom of scroll content) */}
                <div className="shrink-0 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
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