'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const locations = [
  {
    id: 'abu-dhabi',
    city: 'Abu Dhabi',
    country: 'UAE',
    address: 'DPV OFFSHORE & MARINE SERVICES LLC\nOffice no: 879\n8th floor, Al Ghaith Tower, Mohammed Bin Hamdan Street,\nAbu Dhabi, UAE',
    description: 'Strategic hub for Middle East offshore operations.',
    servicedPorts: 'Mina Zayed, Khalifa Port',
    timezone: 'Asia/Dubai',
    // High-quality offshore/port vessel image
    image: 'https://media.assettype.com/outlooktraveller%2F2024-08-20%2F0nbfvji7%2Fshutterstock_2473580625.jpg',
    coordinates: { lat: 24.4539, lng: 54.3773 }
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    address: 'DPV OFFSHORE & MARINE SERVICES LLC\nPO Box 75287, workshop 05, W306,\nDubai Maritime City,\nDubai, UAE',
    description: 'Core workshop and marine services facility in Dubai Maritime City.',
    servicedPorts: 'Sharjah, Hamriya, Fujairah',
    timezone: 'Asia/Dubai',
    // Industrial shipping containers / Dubai port style
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2000&auto=format&fit=crop',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 'colombo',
    city: 'Colombo',
    country: 'Sri Lanka',
    address: 'DPV OFFSHORE & MARINE SERVICES LLC\nNo. 736, Dr. Danister De Silva Mawatha,\nColombo 00900,\nSri Lanka',
    description: 'Headquarters - Regional office and main coordination center.',
    servicedPorts: 'Colombo, Hambantota, Trincomalee',
    timezone: 'Asia/Colombo',
    // Active commercial port imagery
    image: 'https://www.andbeyond.com/wp-content/uploads/sites/5/colombo-sri-lanka.jpg',
    coordinates: { lat: 6.9271, lng: 79.8612 }
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    address: 'Representative office Singapore\nSynergy Offshore And Marine Consultant PTE LTD\n9 Tampines Grande, Asia Green, #02-00\nTampines Singapore, 528735\n(IMO No: 6493815)\nJonathan.balagtas@dpvoffshore.com',
    description: 'Synergy Offshore and Marine Consultant Pte Ltd. Contact: Jonathan Balagtas (Technical Director).',
    servicedPorts: 'Jurong Port, Pasir Panjang Terminal',
    timezone: 'Asia/Singapore',
    // Singapore night port/terminals 
    image: 'https://images.trvl-media.com/place/6047873/15d3ae30-ef33-406e-971f-9520c03f1089.jpg',
    coordinates: { lat: 1.3521, lng: 103.8198 }
  }
];

// Array of regions for the scrolling ticker
const tickerRegions = [
  'UAE', 'Qatar', 'Saudi Arabia', 'Oman', 'Bahrain', 'Kuwait', 'Gaza', 'Iraq', 'Yemen', 'Egypt'
];

export default function OfficeGlobe() {
  const [activeId, setActiveId] = useState('colombo');
  const [currentTime, setCurrentTime] = useState('');
  
  const activeLocation = locations.find(l => l.id === activeId) || locations[0];

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('en-US', {
        timeZone: activeLocation.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [activeLocation]);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 transition-colors duration-300 relative">
      {/* Injecting keyframes for the ticker directly so it works without editing tailwind.config.js */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 35s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="container mx-auto px-4 mb-16">
      <h2 className="font-['Poppins'] text-3xl md:text-3xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-4 transition-colors duration-300">
          Our Global Offices
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
          Strategic presence in key maritime hubs worldwide — ready to serve your vessel needs 24/7.
        </p>

        {/* Globe Card */}
        <div className="relative w-full min-h-[700px] md:min-h-[650px] bg-gray-100 dark:bg-gray-900 overflow-hidden group rounded-2xl shadow-2xl transition-colors duration-300">
          
          {/* Background Image Slider */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeId === loc.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/60 dark:bg-black/75 z-10 transition-colors duration-300" />
              
              <Image
                src={loc.image}
                alt={`${loc.city} maritime port view`}
                fill
                className="object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-[12000ms]"
                priority={loc.id === 'colombo'}
                unoptimized
              />
            </div>
          ))}

          {/* Content Overlay */}
          <div className="relative z-20 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-8">
            
            {/* Left: Info Card */}
<div className="flex-1 flex flex-col justify-center items-start">
  {/* APPLE GLASS CONTAINER */}
  <div className="backdrop-blur-2xl backdrop-saturate-150 bg-white/60 dark:bg-black/40 border border-white/50 dark:border-white/10 p-6 md:p-10 rounded-[2rem] shadow-2xl shadow-black/5 dark:shadow-black/40 text-gray-900 dark:text-white w-full md:max-w-xl transition-all duration-500">
    
    {/* Badge + Time */}
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <span className="px-4 py-1.5 bg-[#E95623]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm border border-white/20">
        {activeLocation.id === 'colombo' ? 'Headquarters' :
         activeLocation.id === 'singapore' ? 'Representative Office' : 'Regional Hub'}
      </span>
      <span className="text-sm font-medium text-gray-600 dark:text-white/70 flex items-center gap-2 transition-colors duration-300">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {currentTime} Local Time
      </span>
    </div>

    {/* Title */}
    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight transition-colors duration-300">
      {activeLocation.city}
    </h2>
    
    {/* Description */}
    <p className="text-lg md:text-xl text-gray-700/90 dark:text-gray-300/90 mb-6 font-light leading-relaxed transition-colors duration-300">
      {activeLocation.description}
    </p>

    {/* Serviced Ports Highlighting (Inner Glass Box) */}
    <div className="mb-8 inline-block bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-white/60 dark:border-white/10 rounded-2xl px-5 py-4 shadow-sm transition-colors duration-300">
      <p className="text-xs uppercase tracking-widest text-[#E95623] font-bold mb-1.5">
        Key Serviced Ports
      </p>
      <p className="text-gray-900 dark:text-gray-100 font-medium">
        {activeLocation.servicedPorts}
      </p>
    </div>

    {/* Address */}
    <div className="space-y-6 border-t border-gray-900/10 dark:border-white/10 pt-6 transition-colors duration-300">
      <div className="flex items-start gap-4">
        <svg className="w-6 h-6 text-[#E95623] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-base text-gray-700/90 dark:text-gray-300/90 whitespace-pre-line leading-relaxed transition-colors duration-300">
          {activeLocation.address}
        </p>
      </div>
    </div>

    {/* Button */}
    <div className="mt-10">
      <a
        href={`https://maps.google.com/?q=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-black/90 dark:bg-white/90 backdrop-blur-xl text-white dark:text-black font-semibold rounded-2xl hover:bg-black dark:hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/10 dark:shadow-white/10 gap-3 text-lg border border-white/10 dark:border-black/10"
      >
        View on Google Maps
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>
</div>

            {/* Right: Navigation Tabs */}
            <div className="flex-1 flex flex-col justify-end items-end">
              <div className="flex flex-col gap-4 w-full md:w-80">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    className={`group flex items-center justify-between w-full p-5 rounded-xl transition-all duration-300 border backdrop-blur-md ${
                      activeId === loc.id
                        ? 'bg-gray-900/20 dark:bg-white/15 border-gray-300 dark:border-white/30 translate-x-0 shadow-lg'
                        : 'bg-gray-200/40 dark:bg-black/50 border-transparent hover:bg-gray-300/60 dark:hover:bg-black/70 md:translate-x-6 md:hover:translate-x-3'
                    }`}
                  >
                    <div className="text-left">
                      <p className={`text-lg font-bold ${activeId === loc.id ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'} transition-colors duration-300`}>
                        {loc.city}
                      </p>
                      <p className="text-xs uppercase tracking-widest mt-1 text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        {loc.country}
                      </p>
                    </div>
                    {activeId === loc.id && (
                      <div className="w-3 h-3 rounded-full bg-[#E95623] shadow-[0_0_15px_rgba(233,86,35,0.7)] animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Infinite Scrolling Ticker */}
      <div className="w-full overflow-hidden bg-gray-100 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800 py-4 mt-8 flex">
        <div className="flex w-[200%] animate-ticker">
          {/* First set of items */}
          <div className="flex w-1/2 justify-around items-center">
            {tickerRegions.map((region, idx) => (
              <div key={`ticker-1-${idx}`} className="flex items-center gap-8">
                <span className="text-gray-800 dark:text-gray-200 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
                  {region}
                </span>
                <span className="text-[#E95623] text-xl leading-none mx-4">•</span>
              </div>
            ))}
          </div>
          {/* Duplicated set for seamless infinite scrolling */}
          <div className="flex w-1/2 justify-around items-center">
            {tickerRegions.map((region, idx) => (
              <div key={`ticker-2-${idx}`} className="flex items-center gap-8">
                <span className="text-gray-800 dark:text-gray-200 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
                  {region}
                </span>
                <span className="text-[#E95623] text-xl leading-none mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}