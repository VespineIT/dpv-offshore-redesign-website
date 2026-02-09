'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const locations = [
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    address: '9 Tampines Grande, Asia Green, #02-00, Singapore 528735', 
    description: 'Synergy Offshore and Marine Consultant Pte Ltd. Contact: Jonathan Balagtas (Technical Director).',
    timezone: 'Asia/Singapore',
    // Kept the original Unsplash image for Singapore
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2000&auto=format&fit=crop',
    coordinates: { lat: 1.3521, lng: 103.8198 }
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    address: 'Workshop 05, #W306, Dubai Maritime City, PO Box 75287',
    description: 'DPV Offshore & Marine Services L.L.C. Contact: Duminda Gunathilake (General Manager).',
    timezone: 'Asia/Dubai',
    // UPDATED: Used your provided Dubai image
    image: 'https://www.consultancy-me.com/illustrations/news/detail/2024-10-31-020547337-Dubai_retains_top_25_position_in_Kearney_s_Global_Cities_Index.jpg',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 'colombo',
    city: 'Colombo',
    country: 'Sri Lanka',
    address: 'No. 736, Dr. Danister De Silva Mawatha, Colombo 00900',
    description: 'DPV Offshore & Marine Services - Sri Lanka Regional Office.',
    timezone: 'Asia/Colombo',
    // UPDATED: Used your provided Colombo image
    image: 'https://lp-cms-production.imgix.net/2025-06/GettyImages-1181382649.jpg',
    coordinates: { lat: 6.9271, lng: 79.8612 }
  }
];

export default function OfficeGlobe() {
  const [activeId, setActiveId] = useState(locations[0].id);
  const [currentTime, setCurrentTime] = useState('');
  
  const activeLocation = locations.find(l => l.id === activeId) || locations[0];

  useEffect(() => {
    const updateTime = () => {
      if (!activeLocation) return;
      
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
    <div className="relative w-full min-h-[750px] md:h-[600px] bg-gray-900 overflow-hidden group rounded-xl">
      
      {/* 1. BACKGROUND IMAGE SLIDER */}
      {locations.map((loc) => (
        <div
          key={loc.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeId === loc.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          
          <Image
            src={loc.image}
            alt={loc.city}
            fill
            className="object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-[8000ms]"
            priority={loc.id === locations[0].id}
            unoptimized // Added this to ensure external URLs load reliably without complex config
          />
        </div>
      ))}

      {/* 2. CONTENT LAYER */}
      <div className="relative z-20 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-12 gap-8 md:gap-0">
        
        {/* LEFT SIDE: INFO CARD */}
        <div className="flex-1 flex flex-col justify-center items-start">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl text-white w-full md:max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* Badge & Time */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-[#E95623]/90 text-white text-xs font-bold uppercase tracking-wider rounded">
                  {activeLocation.id === 'colombo' ? 'HQ' : 'Hub'}
                </span>
                <span className="text-sm font-medium text-white/90 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {currentTime} Local Time
                </span>
              </div>

              {/* City Name */}
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                {activeLocation.city}
              </h2>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-200 mb-6 font-light leading-relaxed">
                {activeLocation.description}
              </p>

              {/* Address */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#E95623] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-gray-300 break-words">{activeLocation.address}</p>
                </div>
              </div>

              {/* View Map Button */}
              <div className="mt-8 flex gap-4">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto justify-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg flex items-center gap-2"
                >
                  Open in Maps
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
        </div>

        {/* RIGHT SIDE: NAVIGATION TABS */}
        <div className="flex-1 flex flex-col justify-end items-end w-full md:w-auto">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={`group flex items-center justify-between w-full md:w-64 p-4 rounded-xl transition-all duration-300 border backdrop-blur-sm ${
                  activeId === loc.id 
                    ? 'bg-white/20 border-white/40 translate-x-0' 
                    : 'bg-black/40 border-transparent hover:bg-black/60 md:translate-x-4 md:hover:translate-x-2'
                }`}
              >
                <div className="text-left">
                  <p className={`text-sm font-bold ${activeId === loc.id ? 'text-white' : 'text-gray-400'}`}>
                    {loc.city}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{loc.country}</p>
                </div>
                {activeId === loc.id && (
                  <div className="w-2 h-2 rounded-full bg-[#E95623] shadow-[0_0_10px_rgba(233,86,35,0.8)] animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}