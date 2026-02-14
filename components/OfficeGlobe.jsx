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
    image: 'https://images.trvl-media.com/place/6047873/15d3ae30-ef33-406e-971f-9520c03f1089.jpg',
    coordinates: { lat: 1.3521, lng: 103.8198 }
  }
];

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
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Injecting keyframes for the ticker */}
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

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="font-['Poppins'] text-3xl md:text-3xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-4 transition-colors duration-300">
          Our Global Offices
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
          Strategic presence in key maritime hubs worldwide — ready to serve your vessel needs 24/7.
        </p>

        {/* Main Globe Card Container */}
        <div className="relative w-full min-h-[750px] md:min-h-[700px] bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden group">
          
          {/* Background Image Slider */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeId === loc.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />
              
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
          <div className="relative z-20 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-8 items-center">
            
            {/* Left: Main Info Card (Apple Style Glass) */}
            <div className="flex-1 w-full">
              <div className="backdrop-blur-3xl backdrop-saturate-200 bg-white/30 dark:bg-black/40 border-[1.5px] border-white/40 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/20 dark:shadow-black/50 text-gray-900 dark:text-white transition-all duration-500 relative overflow-hidden">
                
                {/* Subtle top-left sheen for glass effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none rounded-[2.5rem]"></div>

                <div className="relative z-10">
                    {/* Badge + Time */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-[#E95623]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm border border-white/20">
                        {activeLocation.id === 'colombo' ? 'Headquarters' :
                        activeLocation.id === 'singapore' ? 'Representative Office' : 'Regional Hub'}
                    </span>
                    <span className="text-sm font-medium text-gray-800 dark:text-white/80 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {currentTime} Local Time
                    </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-black dark:text-white drop-shadow-sm">
                    {activeLocation.city}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-900/90 dark:text-white/90 mb-8 font-light leading-relaxed">
                    {activeLocation.description}
                    </p>

                    {/* Serviced Ports Highlighting (Etched Glass Look) */}
                    <div className="mb-8 inline-block bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl px-6 py-4 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-[#E95623] font-bold mb-2">
                        Key Serviced Ports
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-lg">
                        {activeLocation.servicedPorts}
                    </p>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4 border-t border-gray-900/10 dark:border-white/10 pt-6">
                        <svg className="w-6 h-6 text-[#E95623] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-base text-gray-900/80 dark:text-white/80 whitespace-pre-line leading-relaxed font-medium">
                        {activeLocation.address}
                        </p>
                    </div>

                    {/* Button (Frosted Glass) */}
                    <div className="mt-10">
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-2xl text-gray-900 dark:text-white font-semibold rounded-2xl hover:bg-white/40 dark:hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg border border-white/30 dark:border-white/10 gap-3 text-lg group/btn"
                    >
                        View on Google Maps
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                    </div>
                </div>
              </div>
            </div>

            {/* Right: Navigation Tabs (Floating Glass Tiles) */}
            <div className="flex-1 flex flex-col justify-center items-end w-full md:w-auto">
              <div className="flex flex-col gap-4 w-full md:w-80">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    className={`group flex items-center justify-between w-full p-5 rounded-[1.5rem] transition-all duration-300 border-[1.5px] backdrop-blur-2xl backdrop-saturate-150 ${
                      activeId === loc.id
                        ? 'bg-white/40 dark:bg-white/15 border-white/50 dark:border-white/20 translate-x-0 shadow-xl shadow-black/10'
                        : 'bg-white/10 dark:bg-white/5 border-white/20 dark:border-white/5 hover:bg-white/20 dark:hover:bg-white/10 md:translate-x-8 md:hover:translate-x-4 hover:shadow-lg hover:border-white/30'
                    }`}
                  >
                    <div className="text-left relative z-10">
                      <p className={`text-xl font-bold ${activeId === loc.id ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-200'} transition-colors duration-300`}>
                        {loc.city}
                      </p>
                      <p className="text-xs uppercase tracking-widest mt-1 text-gray-700 dark:text-gray-300 transition-colors duration-300 font-medium">
                        {loc.country}
                      </p>
                    </div>
                    {activeId === loc.id && (
                      <div className="w-3 h-3 rounded-full bg-[#E95623] shadow-[0_0_15px_rgba(233,86,35,0.9)] animate-pulse relative z-10" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Infinite Scrolling Ticker (Glass overlay style) */}
      <div className="w-full overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-lg border-y border-white/20 dark:border-white/5 py-4 mt-8 flex relative z-10">
        <div className="flex w-[200%] animate-ticker">
          {/* First set of items */}
          <div className="flex w-1/2 justify-around items-center">
            {tickerRegions.map((region, idx) => (
              <div key={`ticker-1-${idx}`} className="flex items-center gap-8">
                <span className="text-gray-800 dark:text-gray-100 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
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
                <span className="text-gray-800 dark:text-gray-100 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
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