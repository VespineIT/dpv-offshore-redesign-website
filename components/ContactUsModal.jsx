import React from 'react';

export default function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const offices = [
    {
      city: "Abu Dhabi, UAE",
      title: "Head Office",
      address: "DPV Offshore & Marine Services LLC, Office No. 879, 8th Floor, Al Ghaith Tower, Mohammed Bin Hamdan Street, Abu Dhabi, UAE",
      ports: ["Mina Zayed", "Khalifa Port"],
      email: null,
      imo: null
    },
    {
      city: "Dubai, UAE",
      title: "Branch Office",
      address: "DPV Offshore & Marine Services LLC, P.O. Box 75287, Workshop 05, W306, Dubai Maritime City, Dubai, UAE",
      ports: ["Jebel Ali", "Port Rashid", "Hamriya Port"],
      email: null,
      imo: null
    },
    {
      city: "Fujairah, UAE",
      title: "Branch Office",
      address: "DPV Offshore & Marine Services L.L.C - Fujairah Branch, Al Theeb Building (Opposite Civil Defense Building), Mohammed Bin Zayed City, Shop 1, Fujairah, UAE",
      ports: ["Fujairah Port"],
      email: null,
      imo: null
    },
    {
      city: "Colombo, Sri Lanka",
      title: "Branch Office",
      address: "DPV Offshore & Marine Services LLC, No. 736, Dr. Danister De Silva Mawatha, Colombo 00900, Sri Lanka",
      ports: ["Colombo", "Hambantota", "Trincomalee"],
      email: null,
      imo: null
    },
    {
      city: "Singapore",
      title: "Representative Office",
      address: "Synergy Offshore and Marine Consultant PTE LTD, 9 Tampines Grande, Asia Green, #02-00, Tampines, Singapore 528735",
      ports: ["Jurong Port", "Pasir Panjang Terminal"],
      email: "Jonathan.balagtas@dpvoffshore.com",
      imo: "6493815"
    }
  ];

  const otherCountries = [
    "UAE", "Qatar", "Saudi Arabia", "Oman", "Bahrain", "Kuwait", "India", "Egypt", 
    "Ghana (West Africa)", "Congo (Central Africa)", "Kenya (East Africa)", 
    "Tanzania (East Africa)", "Bulgaria", "Kazakhstan", "Azerbaijan"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
      {/* Note: I used max-w-6xl here instead of 4xl to give the 3-column grid enough room to breathe */}
      <div className="bg-white dark:bg-[#0a0f1c] text-gray-800 w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border dark:border-gray-800">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#030712] shrink-0">
          <div>
            <h3 className="text-2xl font-bold text-[#1C1C1C] dark:text-white">Contact Us & Global Offices</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Our team is ready to support your operations worldwide.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 bg-white dark:bg-[#030712]">
          
          {/* Global Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-[#111827] border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-5">
                  <span className="inline-block bg-[#FF5722]/10 text-[#FF5722] text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {office.title}
                  </span>
                  <h4 className="text-xl font-bold text-[#1C1C1C] dark:text-white mb-2">{office.city}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-gray-200 dark:border-gray-700">
                  <h5 className="text-xs font-bold text-[#1C1C1C] dark:text-gray-300 mb-2 uppercase tracking-wider">Ports Covered:</h5>
                  <ul className="flex flex-wrap gap-2 mb-3">
                    {office.ports.map((port, pIndex) => (
                      <li key={pIndex} className="bg-white dark:bg-[#1f2937] text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded border border-gray-200 dark:border-gray-600">
                        {port}
                      </li>
                    ))}
                  </ul>

                  {office.email && (
                    <div className="mt-4 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0a0f1c] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <p><strong className="text-gray-800 dark:text-gray-200 block text-xs uppercase mb-1">Contact:</strong> <a href={`mailto:${office.email}`} className="text-[#FF5722] hover:underline break-all">{office.email}</a></p>
                      <p><strong className="text-gray-800 dark:text-gray-200">IMO No:</strong> {office.imo}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Other Countries We Serve Area */}
          <div className="bg-[#1a1a54] dark:bg-[#111827] rounded-2xl p-6 md:p-8 text-center shadow-inner border border-transparent dark:border-gray-800">
            <h4 className="text-xl font-bold text-white mb-6">Other Countries We Serve</h4>
            <div className="flex flex-wrap justify-center gap-2.5 md:gap-3">
              {otherCountries.map((country, index) => (
                <span 
                  key={index} 
                  className="bg-white/10 hover:bg-[#FF5722] text-white border border-white/20 transition-colors duration-300 text-xs md:text-sm px-4 py-1.5 rounded-full cursor-default whitespace-nowrap"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}