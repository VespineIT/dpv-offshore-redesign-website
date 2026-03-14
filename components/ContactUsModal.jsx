import React from 'react';

export default function ContactUsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const offices = [
    {
      city: "Abu Dhabi, UAE",
      title: "Strategic Hub",
      address: "DPV Offshore & Marine Services LLC, Office No. 879, 8th Floor, Al Ghaith Tower, Mohammed Bin Hamdan Street, Abu Dhabi, UAE",
      ports: ["Free Port", "Mina", "Khalifa Port", "Zayed Port", "Musaffah Port"],
      contacts: [
        {
          name: "Mr. Mohomed Roshan",
          position: "Branch Manager",
          phone: "+971 50 112 4870",
          email: "sales2@dpvoffshore.com"
        },
        {
          name: "Mr. Tharuka Vishvajith",
          position: "Marine Engineer",
          phone: "+971 50 273 3471",
          email: "projects@dpvoffshore.com"
        }
      ],
      imo: null
    },
    {
      city: "Dubai, UAE",
      title: "Core Workshop",
      address: "DPV Offshore & Marine Services LLC, P.O. Box 75287, Workshop 05, W306, Dubai Maritime City, Dubai, UAE",
      ports: ["Jebel Ali", "Port Rashid", "Hamriya Port"],
      contacts: [
        {
          name: "Mr. Duminda Gunathilake",
          position: "General Manager",
          phone: "+971 56 706 0326",
          email: "gm@dpvoffshore.com"
        }
      ],
      imo: null
    },
    {
      city: "Sharjah, UAE",
      title: "Key Serviced Port",
      address: "Sharjah, UAE",
      ports: ["Khalid Port", "Hamriyah Port", "Khorfakkan"],
      contacts: [
        {
          name: "Mrs. Kawini Koshila",
          position: "Branch Manager",
          phone: "+971 56 435 4936",
          email: "operations@dpvoffshore.com"
        }
      ],
      imo: null
    },
    {
      city: "Fujairah, UAE",
      title: "Branch Office",
      address: "DPV Offshore & Marine Services L.L.C - Fujairah Branch, Al Theeb Building (Opposite Civil Defense Building), Mohammed Bin Zayed City, Shop 1, Fujairah, UAE",
      ports: ["Fujairah Port"],
      contacts: [
        {
          name: "Mr. Harsha Dissanayake",
          position: "Mechanical Engineer",
          phone: "+971 50 629 4308",
          email: "me4@dpvoffshore.com"
        }
      ],
      imo: null
    },
    {
      city: "Colombo, Sri Lanka",
      title: "Branch Office",
      address: "DPV Offshore & Marine Services LLC, No. 736, Dr. Danister De Silva Mawatha, Colombo 00900, Sri Lanka",
      ports: ["Colombo", "Galle", "Hambantota", "Trincomalee", "OPL Services - SL"],
      contacts: [
        {
          name: "Duminda",
          position: null,
          phone: "+94 77 774 3023",
          email: "cmb@dvpoffshore.com"
        }
      ],
      imo: null
    },
    {
      city: "Singapore",
      title: "Representative Office",
      address: "9 Tampines Grande, Asia Green, #02-00, Tampines, Singapore 528735",
      ports: ["Jurong Port", "Pasir Panjang Terminal"],
      contacts: [
        {
          name: "Mr. Jonathan Balagtas",
          position: "Technical Director",
          phone: "+65 8181 4669",
          email: "sgp@dvpoffshore.com"
        }
      ],
      imo: "6493815"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity">
      
      {/* Modal Container */}
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

                  <div className="mt-4 space-y-4 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-[#0a0f1c] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                    {office.contacts?.map((contact, cIndex) => (
                      <div key={cIndex} className={cIndex > 0 ? "pt-4 border-t border-gray-100 dark:border-gray-800" : ""}>
                        {contact.name && (
                          <p>
                            <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Contact:</strong> {contact.name}
                            {contact.position && <span className="text-xs text-gray-500 ml-1">({contact.position})</span>}
                          </p>
                        )}
                        {contact.phone && (
                          <p className="mt-1">
                            <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Phone:</strong> <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF5722] transition-colors">{contact.phone}</a>
                          </p>
                        )}
                        {contact.email && (
                          <p className="mt-1">
                            <strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">Email:</strong> <a href={`mailto:${contact.email}`} className="text-[#FF5722] hover:underline break-all ml-1">{contact.email}</a>
                          </p>
                        )}
                      </div>
                    ))}
                    
                    {office.imo && (
                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                        <p><strong className="text-gray-800 dark:text-gray-200 text-xs uppercase">IMO No:</strong> {office.imo}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}