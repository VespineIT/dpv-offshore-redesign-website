'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { offices, tickerRegions } from '@/data/offices';

export default function OfficeGlobe() {
  const [activeId, setActiveId] = useState('dubai');
  const [currentTime, setCurrentTime] = useState('');

  const activeLocation = offices.find(l => l.id === activeId) || offices[0];

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        timeZone: activeLocation.timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [activeLocation]);

  const getOfficeLabel = (id) => {
    if (id === 'colombo' || id === 'fujairah') return 'Branch Office';
    if (id === 'singapore') return 'Representative Office';
    return 'Regional Hub';
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="font-['Poppins'] text-3xl md:text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-4 transition-colors duration-300">
          Our Global Offices
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto transition-colors duration-300">
          Strategic presence in key maritime hubs worldwide & ready to serve your vessel needs 24/7.
        </p>

        <div className="relative w-full md:min-h-[700px] bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden group">
          {offices.map((loc) => (
            <div
              key={loc.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeId === loc.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />
              <Image
                src={loc.image}
                alt={`${loc.city} maritime port view`}
                fill
                className="object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-[12000ms]"
                priority={loc.id === 'dubai'}
                unoptimized
              />
            </div>
          ))}

          {/* Mobile: horizontal location tabs */}
          <div className="md:hidden relative z-20 flex gap-2 overflow-x-auto px-4 pt-5 pb-2 scrollbar-hide">
            {offices.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border-[1.5px] backdrop-blur-md font-bold text-sm transition-all duration-300 ${
                  activeId === loc.id
                    ? 'bg-white/40 border-white/60 text-black dark:text-white shadow-lg'
                    : 'bg-white/10 border-white/20 text-gray-200 hover:bg-white/20'
                }`}
              >
                {loc.city}
                {activeId === loc.id && (
                  <span className="w-2 h-2 rounded-full bg-[#E95623] shadow-[0_0_8px_rgba(233,86,35,0.9)] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="relative z-20 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto p-4 md:p-12 gap-6 md:gap-8 items-stretch md:items-center">
            <div className="flex-1 w-full">
              <div className="backdrop-blur-3xl backdrop-saturate-200 bg-white/30 dark:bg-black/40 border-[1.5px] border-white/40 dark:border-white/10 p-5 md:p-10 rounded-[2rem] shadow-2xl shadow-black/20 dark:shadow-black/50 text-gray-900 dark:text-white transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none rounded-[2rem]" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-8">
                    <span className="px-3 py-1 md:px-4 md:py-1.5 bg-[#E95623]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm border border-white/20">
                      {getOfficeLabel(activeLocation.id)}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-white/80 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {currentTime} Local Time
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-7xl font-extrabold mb-3 md:mb-6 tracking-tight text-black dark:text-white drop-shadow-sm">
                    {activeLocation.city}
                  </h2>

                  <p className="text-sm md:text-xl text-gray-900/90 dark:text-white/90 mb-4 md:mb-8 font-light leading-relaxed">
                    {activeLocation.description}
                  </p>

                  <div className="mb-4 md:mb-8 inline-block bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-[#E95623] font-bold mb-1">Key Serviced Ports</p>
                    <p className="text-gray-900 dark:text-white font-medium text-sm md:text-lg">
                      {activeLocation.ports.join(', ')}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-gray-900/10 dark:border-white/10 pt-4 md:pt-6 text-xs md:text-sm text-gray-800 dark:text-white/80 font-medium">
                    {activeLocation.contacts.map((contact, index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-white font-semibold uppercase tracking-wide text-[10px] mr-1">Mobile</span>
                          {contact.phone}
                        </span>
                        {contact.landline && (
                          <span className="flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-white font-semibold uppercase tracking-wide text-[10px] mr-1">Landline</span>
                            {contact.landline}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a href={`mailto:${contact.email}`} className="hover:text-[#E95623] transition-colors truncate">
                            {contact.email}
                          </a>
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 md:mt-8">
                    <a
                      href={`http://googleusercontent.com/maps.google.com/?q=${activeLocation.coordinates.lat},${activeLocation.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-3 md:px-8 md:py-4 bg-white/20 dark:bg-white/10 backdrop-blur-2xl text-gray-900 dark:text-white font-semibold rounded-xl md:rounded-2xl hover:bg-white/40 dark:hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg border border-white/30 dark:border-white/10 gap-2 text-sm md:text-lg group/btn"
                    >
                      View on Google Maps
                      <svg className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop-only right-side location buttons */}
            <div className="hidden md:flex flex-1 flex-col justify-center items-end w-full md:w-auto">
              <div className="flex flex-col gap-4 w-full md:w-80">
                {offices.map((loc) => (
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

      <div className="w-full overflow-hidden bg-white/10 dark:bg-black/20 backdrop-blur-lg border-y border-white/20 dark:border-white/5 py-4 mt-8 flex relative z-10 group">
        <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
          {[...tickerRegions, ...tickerRegions].map((region, idx) => (
            <div key={`ticker-${idx}`} className="flex items-center flex-shrink-0 gap-3">
              <div className="relative w-7 h-5 rounded-sm overflow-hidden shadow-sm ring-1 ring-black/10 dark:ring-white/10">
                <Image src={region.flagUrl} alt={`${region.name} flag`} fill className="object-cover" unoptimized />
              </div>
              <span className="text-gray-800 dark:text-gray-100 font-bold uppercase tracking-[0.2em] text-sm md:text-base whitespace-nowrap">
                {region.name}
              </span>
              <span className="text-[#E95623] text-xl leading-none mx-8">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
