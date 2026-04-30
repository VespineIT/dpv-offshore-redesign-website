import { Wrench, Cpu, Zap, PenTool, Settings, Anchor, Activity, Power, Toolbox, Cog } from 'lucide-react';

export const categories = [
  { id: 'cat_1', label: 'Ship Repair', icon: Anchor, img: '/images/ship_pic_1.png', desc: 'Comprehensive dry docking, conversions, and hull maintenance.' },
  { id: 'cat_2', label: 'Yacht Refitting', icon: PenTool, img: '/images/ship_pic_5.png', desc: 'Premium painting, electrical, and fiberglass restorations.' },
  { id: 'cat_3', label: 'Ship Electrical Engineering & Technology', icon: Zap, img: '/images/ship_pic_2.png', desc: 'System integration, configuration, and motor rewinding.' },
  {
    id: 'cat_4',
    label: 'Ship Pneumatic Technology',
    icon: Activity,
    img: '/images/ship_pic_4.png',
    desc: 'Advanced electric actuation and intelligent fluid control.',
    overview: {
      intro: 'The range of pneumatic solutions includes actuators, valves, solenoid valves, proportional technology fittings, handling vacuum and air treatment components. All combine the mechanics and electronics required for motion management and control. With optimized consumption, dimensions and functional parameters, each individual component contributes to the overall system.',
      products: ['Air service units', 'Boosters', 'Spool valves and solenoid valves', 'Flow adjusters', 'Quick exhaust valves', 'Non return valves', 'Poppet valves'],
      applications: ['Petrochemicals', 'Oil & Gas', 'Power Generation', 'Water treatment'],
    },
  },
  {
    id: 'cat_4a',
    label: 'Marine Automation',
    icon: Cpu,
    img: '/images/ship_pic_2.png',
    desc: 'Advanced automation, control systems, and monitoring for modern vessels.',
    overview: { intro: 'Details and sub-topics for Marine Automation will be provided here.' },
  },
  { id: 'cat_5', label: 'Ship Mechanical Engineering & Technology', icon: Cog, img: '/images/ship_pic_6.png', desc: 'Heavy mechanical overhauls and bearing remetalling.' },
  { id: 'cat_6', label: 'PROPULSION', icon: Toolbox, img: '/images/ship_pic_3.png', desc: 'FPP, CPP, and thruster overhauls with precision blade polishing.' },
  { id: 'cat_7', label: 'Mobile In-Situ Machining', icon: Wrench, img: '/images/ship_pic_7.png', desc: 'On-site turning, milling, grinding, and line boring.' },
  { id: 'cat_8', label: 'Power Plant Related Services', icon: Power, img: '/images/ship_pic_8.png', desc: 'Maintenance, retrofits, and emergency breakdown repairs.' },
  { id: 'cat_9', label: 'Electrical Services for Hydro Power Stations', icon: Zap, img: '/images/ship_pic_4.png', desc: 'Stator rewinding and high-voltage transformer solutions.' },
  { id: 'cat_10', label: 'Cranes', icon: Settings, img: '/images/ship_pic_9.png', desc: 'Shipyard diagnostics, new systems, and life-extension retrofits.' },
  {
    id: 'cat_10a',
    label: 'Hydraulic Systems Integration & Repairs',
    icon: Wrench,
    img: '/images/ship_pic_2.png',
    desc: 'Comprehensive hydraulic system integration, troubleshooting, and precision repairs.',
    overview: { intro: 'Details and sub-topics for Hydraulic Systems Integration & Repairs will be provided here.' },
  },
  { id: 'cat_11', label: 'OEM Solutions', icon: Cpu, img: '/images/ship_pic_2.png', desc: 'Genuine spare parts for engines, cranes, and auxiliary machinery.' },
];

export const serviceCards = [
  // Ship Repair
  { id: 101, title: 'Dry Docking', desc: 'Comprehensive ship repair and conversion services.', details: 'We offer comprehensive ship repair and conversion services with advanced technologies to meet the evolving needs of the maritime industry. Our facilities are equipped to handle a wide range of projects, from routine maintenance and repairs to complex conversions and upgrades, ensuring that vessels remain operational, efficient, and compliant with the latest standards.', img: '/images/ship_pic_1.png', category: 'cat_1' },
  { id: 102, title: 'Dry Docking Management', desc: 'Dedicated and qualified staff for safe and economical dry docking.', details: 'We at DPV Offshore offer a dedicated and qualified staff of superintendent, chief engineers, shipyard production engineers, coating inspectors, certified steel inspectors, and electrical inspectors to ensure a safe and economical dry docking of their vessels. Our dry-docking management teams are in Colombo, Sri Lanka & Dubai, Abu Dhabi, United Arab Emirates.\n\nServices include:\n• Pre docking inspection reports\n• Docking specification\n• Yard inspections, vetting and selection criteria\n• Docking Tender preparation and assessment\n• Project risk identification and management\n• Contingency planning\n• Docking calculations and docking plans\n• Acceptance tests\n\nOEM certified spare parts supply.', img: '/images/ship_pic_2.png', category: 'cat_1' },
  { id: 103, title: 'Ship Conversion', desc: 'Upgrading vessels to meet new operational requirements.', details: 'We specialize in converting and upgrading vessels to meet new operational requirements, enhance capabilities, or comply with updated regulations. Our services include modifications for alternative fuel systems, hybrid power installations, and advanced automation solutions.', img: '/images/ship_pic_3.png', category: 'cat_1' },
  { id: 104, title: 'Piping', desc: 'Fabrication, installation, and repair for marine piping systems.', details: 'Our piping systems provide flow of liquids ranging from chemicals to fresh water, and all medium and pressurized air, ranging from gases to circulation of heated air to the living areas from the central heating system. We handle this in a safe manner and ensure an efficient layout of the piping systems. Prefabrication is handled in UAE requirements at Dubai Maritime City workshop and Sri Lanka requirements of prefabrications carried in Colombo, Workshop.', img: '/images/ship_pic_4.png', category: 'cat_1' },

  // Yacht Refitting
  { id: 201, title: 'Hull Painting & Fiberglass Works', desc: 'Comprehensive hull maintenance and repair services.', details: 'Comprehensive hull maintenance and repair services. Expert painting and refinishing for a flawless finish. Skilled fiberglass and wood repairs, ensuring structural integrity and aesthetic appeal.', img: '/images/ship_pic_5.png', category: 'cat_2' },
  { id: 202, title: 'Electrical Systems & Lighting', desc: 'Comprehensive electrical system services for safety and reliability.', details: 'Comprehensive electrical system services for safety and reliability. Upgrades, repairs, and new installations. Energy-efficient LED lighting solutions to enhance your yacht\'s ambiance.', img: '/images/ship_pic_6.png', category: 'cat_2' },
  { id: 203, title: 'Onboard Instrumentation', desc: 'Installation, calibration, and repair of navigation systems.', details: 'Installation, calibration, and repair of navigation and communication systems. Ensuring precise and reliable operation. Keeping you connected and informed on the water.', img: '/images/ship_pic_7.png', category: 'cat_2' },
  { id: 204, title: 'Anti-Osmosis Treatment', desc: 'Effective anti-osmosis treatments to protect your yacht\'s hull.', details: 'Effective anti-osmosis treatments to protect your yacht\'s hull. Preventing blistering and ensuring long-term durability. Utilising industry-leading techniques and materials.', img: '/images/ship_pic_8.png', category: 'cat_2' },
  { id: 205, title: 'Engine, Re-Engines & Propellert', desc: 'Full range of engine services and propeller repairs.', details: 'Full range of engine services, from routine maintenance to complete overhauls. Professional re-engines solutions for optimal performance. Propeller repairs and replacements for smooth sailing.', img: '/images/ship_pic_9.png', category: 'cat_2' },

  // Ship Electrical Engineering & Technology
  { id: 301, title: 'Ship Electrical Engineering', desc: 'Innovative technology and marine electrical systems.', details: 'Innovative technology and marine electrical systems with reliable and sustainable solutions for the most demanding conditions. Since established in 2018, DPV has grown to become a Gulf & South Asia recognized and trusted provider of marine electrical systems. We offer full-scale electrical engineering design, marine procurement, and integrated solutions for vessels in the marine industry.', img: '/images/ship_pic_1.png', category: 'cat_3' },
  { id: 302, title: 'System Integration', desc: 'Unique expertise as system integrators for the maritime industry.', details: 'At DPV Offshore we take pride in our unique expertise as system integrators. By utilizing our unique competence as system integrators, it allows us to work with all established brands in the market and deliver advanced electrical systems for all types of vessels. With solid expertise in tailored solutions for diesel-electric, full electric, and hybrid vessels, our core competency lies in selecting the correct components to ensure optimal operations.', img: '/images/ship_pic_2.png', category: 'cat_3' },
  { id: 303, title: 'System Configuration', desc: 'Integration of modern electrical solutions for future marine operations.', details: 'The marine industry is on the brink of a technological revolution. Innovations in marine electrical technology are changing how vessels operate. Systems include: Generator sets, Energy storage system, Main switchboard, Distribution switchboards, Motor control centre & individual starters, Transformers, Drive, Electric thruster motors, Electric propulsion system, Energy Management Systems, Main and auxiliary thrusters, Thruster control, Joystick & DP Systems.', img: '/images/ship_pic_3.png', category: 'cat_3' },
  { id: 304, title: 'Motors & Rotors Rewinding', desc: 'Wide range of services for DC and AC machinery MOTORS.', details: 'We provide a wide range of services for both DC and AC machinery MOTORS and extensive experience in service of rotating electrical machinery. Application areas include: Industrial Process and Oil & Gas, Petrochemicals & Chemicals, Power Plants (Thermal & Hydraulic), Water Supply & Irrigation, Cruise, Yacht & Commercial Marine, Ship propulsion & Thruster.', img: '/images/ship_pic_9.png', category: 'cat_3' },

  // Ship Pneumatic Technology
  { id: 401, title: 'Electric Actuation', desc: 'Motion management systems engineered for marine precision.', details: 'Electric actuation is an ideal solution for applications where, in addition to reliability, it is necessary to provide speed performance and flexibility in both the control and configuration. The range includes actuators with recirculating ball screws, in-line or parallel cylinder configurations and electric motors.', img: '/images/ship_pic_4.png', category: 'cat_4' },
  { id: 402, title: 'Fluid Control', desc: 'Advanced valves, fittings, and air treatment components.', details: 'Wide range of brass and stainless-steel solenoid valves suitable for use with air, water, steam and other fluids. The solenoid valves are 2 or 3 ways, normally open, normally closed, and designed for general service as either direct acting or servo assisted. Connections are available in both BSP and NPT 1/8" up to 2" and working pressures from vacuum up to 100 bar.', img: '/images/ship_pic_5.png', category: 'cat_4' },

  // Marine Automation
  { id: 451, title: 'Marine Automation Solutions', desc: 'Comprehensive marine automation services and system design.', details: 'Details and sub-topics for Marine Automation will be added here soon.', img: '/images/ship_pic_2.png', category: 'cat_4a' },

  // Ship Mechanical Engineering & Technology
  { id: 501, title: 'Overhaul Services', desc: 'Overhaul Services.', details: 'Full breakdown, inspection, and rebuilding of essential mechanical systems.', img: '/images/ship_pic_6.png', category: 'cat_5' },
  { id: 502, title: 'Reconditioning Services', desc: 'Reconditioning Services.', details: 'Machining and revitalizing worn engine components to factory specifications.', img: '/images/ship_pic_7.png', category: 'cat_5' },
  { id: 503, title: 'Remetalling Babbitt Bearings', desc: 'Remetalling Babbitt Bearings.', details: 'Specialized remetalling to restore bearing surfaces for high-load machinery.', img: '/images/ship_pic_8.png', category: 'cat_5' },

  // Propulsion
  { id: 601, title: 'FPP Overhaul', desc: 'FPP Overhaul.', details: 'Inspection, repair, and balancing of fixed pitch propellers.', img: '/images/ship_pic_9.png', category: 'cat_6' },
  { id: 602, title: 'CPP Overhaul', desc: 'CPP Overhaul.', details: 'Complex overhauls for controllable pitch propeller units.', img: '/images/ship_pic_1.png', category: 'cat_6' },
  { id: 603, title: 'Thruster Overhaul', desc: 'Thruster Overhaul.', details: 'Restoring maneuverability by overhauling crucial thruster assemblies.', img: '/images/ship_pic_2.png', category: 'cat_6' },
  { id: 604, title: 'Polishing Blades', desc: 'Polishing Blades.', details: 'Propeller polishing to enhance hydrodynamic efficiency and save fuel.', img: '/images/ship_pic_3.png', category: 'cat_6' },

  // Mobile In-Situ Machining
  { id: 701, title: 'Turning & Line Boring', desc: 'Turning & Line Boring.', details: 'Mobile lathe and spindle work for all applications on site.', img: '/images/ship_pic_4.png', category: 'cat_7' },
  { id: 702, title: 'Mobile Lathe and Spindle Work', desc: 'Mobile lathe and spindle work for all applications.', details: 'Comprehensive in-situ lathe and spindle machining.', img: '/images/ship_pic_5.png', category: 'cat_7' },
  { id: 703, title: 'Milling', desc: 'Milling.', details: 'High-precision on-site milling for heavy equipment structures.', img: '/images/ship_pic_6.png', category: 'cat_7' },
  { id: 704, title: 'Grinding', desc: 'Grinding.', details: 'Precision surface grinding for demanding industrial applications.', img: '/images/ship_pic_7.png', category: 'cat_7' },
  { id: 705, title: 'Blade Grinding for Gas Turbines', desc: 'Blade grinding for the efficiency of gas turbines.', details: 'Specialized grinding to maintain peak gas turbine performance.', img: '/images/ship_pic_8.png', category: 'cat_7' },
  { id: 706, title: 'Drilling', desc: 'Drilling.', details: 'In-situ drilling operations for structural and mechanical repairs.', img: '/images/ship_pic_9.png', category: 'cat_7' },
  { id: 707, title: 'Shaft Machining', desc: 'Shaft machining.', details: 'In-place shaft machining and restoration.', img: '/images/ship_pic_1.png', category: 'cat_7' },
  { id: 708, title: 'Professional Rotor Shaft Machining On Site', desc: 'Professional rotor shaft machining on site.', details: 'Expert on-site machining specifically for rotor shafts.', img: '/images/ship_pic_2.png', category: 'cat_7' },
  { id: 709, title: 'Flange Machining', desc: 'Flange Machining.', details: 'Restoring worn flanges to achieve perfect sealing surfaces.', img: '/images/ship_pic_3.png', category: 'cat_7' },
  { id: 710, title: 'Runner Processing and Balancing Operations', desc: 'Runner Processing and Balancing Operations.', details: 'Accurate processing and balancing to eliminate vibrations.', img: '/images/ship_pic_4.png', category: 'cat_7' },
  { id: 711, title: 'Honing and Burnishing', desc: 'Honing and burnishing.', details: 'Surface finish improvements for cylinders and liners.', img: '/images/ship_pic_5.png', category: 'cat_7' },
  { id: 712, title: 'Pipe Cutting and Weld Seam Preparation', desc: 'Pipe cutting and weld seam preparation.', details: 'Mobile cutting solutions ensuring perfect preparation for critical welds.', img: '/images/ship_pic_6.png', category: 'cat_7' },

  // Power Plant Related Services
  { id: 801, title: 'Preventive Maintenance', desc: 'Preventive Maintenance.', details: 'Routine maintenance programs maximizing plant uptime.', img: '/images/ship_pic_7.png', category: 'cat_8' },
  { id: 802, title: 'Retrofit and Upgrades', desc: 'Retrofit and Upgrades.', details: 'Modernizing existing power infrastructure with the latest technology.', img: '/images/ship_pic_8.png', category: 'cat_8' },
  { id: 803, title: 'Engine Services', desc: 'Engine Services.', details: 'Servicing massive power generators for continuous reliable output.', img: '/images/ship_pic_9.png', category: 'cat_8' },
  { id: 804, title: 'Turbine Related Maintenance', desc: 'Turbine Related Maintenance.', details: 'Specialized care for gas and steam turbine systems.', img: '/images/ship_pic_1.png', category: 'cat_8' },
  { id: 805, title: 'Emergency Breakdown Services', desc: 'Emergency Breakdown Services.', details: 'Rapid response teams deployed to troubleshoot and repair sudden failures.', img: '/images/ship_pic_2.png', category: 'cat_8' },
  { id: 806, title: 'Control Systems & Automation', desc: 'Control Systems & Automation.', details: 'Upgrading PLC networks and SCADA systems for modern plant management.', img: '/images/ship_pic_3.png', category: 'cat_8' },

  // Electrical Services for Hydro Power Stations
  { id: 901, title: 'Rewinding of the Generator Stators', desc: 'Rewinding of the generator stators.', details: 'High-voltage stator rewinding extending generator operational life.', img: '/images/ship_pic_4.png', category: 'cat_9' },
  { id: 902, title: 'Increasing Power of Hydroelectric Generators', desc: 'Increasing of power hydroelectric generators.', details: 'Capacity and efficiency boosting for active hydro facilities.', img: '/images/ship_pic_5.png', category: 'cat_9' },
  { id: 903, title: 'Transformer Solutions', desc: 'Transformer solutions.', details: 'Testing, oil purification, and repair for crucial transformers.', img: '/images/ship_pic_6.png', category: 'cat_9' },

  // Cranes
  { id: 1001, title: 'Automation, System Integration and Diagnostics', desc: 'Automation, system integration and diagnostics.', details: 'Complete integration and diagnostics for port, shipyard, and ship crane applications.', img: '/images/ship_pic_7.png', category: 'cat_10' },
  { id: 1002, title: 'Crane System Upgrades', desc: 'Crane System Upgrades.', details: 'Modernizing older crane systems with safer, faster drives and controls.', img: '/images/ship_pic_8.png', category: 'cat_10' },
  { id: 1003, title: 'New Crane Systems to Fit Your Needs', desc: 'New Crane Systems to Fit Your Needs.', details: 'Turnkey installations of new lifting equipment tailored to operations.', img: '/images/ship_pic_9.png', category: 'cat_10' },
  { id: 1004, title: 'Retrofit Solutions to Extend Crane Service Life', desc: 'Retrofit Solutions to Extend a Crane\'s Service Life.', details: 'Targeted component replacements extending functionality economically.', img: '/images/ship_pic_1.png', category: 'cat_10' },

  // Hydraulic Systems
  { id: 1051, title: 'Hydraulic System Maintenance', desc: 'Expert hydraulic system integration and repair.', details: 'Details and sub-topics for Hydraulic Systems Integration & Repairs will be added here soon.', img: '/images/ship_pic_2.png', category: 'cat_10a' },

  // OEM Solutions
  { id: 1101, title: 'Engine Spare Parts Supply', desc: 'Engine Spare Parts Supply.', details: 'Sourcing and delivering crucial engine parts for uninterrupted operations.', img: '/images/ship_pic_2.png', category: 'cat_11' },
  { id: 1102, title: 'Crane Spare Parts Supply', desc: 'Crane Spare Parts Supply.', details: 'Direct supply of certified replacement parts for crane systems.', img: '/images/ship_pic_3.png', category: 'cat_11' },
  { id: 1103, title: 'Auxiliary Machinery Spare Parts Supply', desc: 'Auxiliary Machinery Spare Parts Supply.', details: 'Supplying vital components for onboard pumps, compressors, and purifiers.', img: '/images/ship_pic_4.png', category: 'cat_11' },
  { id: 1104, title: 'Propulsion Spare Supply', desc: 'Propulsion Spare Supply.', details: 'Ensuring top-tier genuine parts for drive mechanisms and main engines.', img: '/images/ship_pic_5.png', category: 'cat_11' },
];
