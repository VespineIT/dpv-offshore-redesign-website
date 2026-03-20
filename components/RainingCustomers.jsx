'use client';
import React from 'react';
import Image from 'next/image';

const customerLogos = [
  '/images/customer-logo/AD_port_logo.png',
  '/images/customer-logo/adnoc_logo.png',
  '/images/customer-logo/ae_logo.png',
  '/images/customer-logo/bp_logo.png',
  '/images/customer-logo/ceb_logo.png',
  '/images/customer-logo/Drydocks_World_logo.png',
  '/images/customer-logo/el_logo.png',
  '/images/customer-logo/e-marine_logo.png',
  '/images/customer-logo/Gms_logo.png',
  '/images/customer-logo/gov_logo.png',
  '/images/customer-logo/Hayleys_logo.png',
  '/images/customer-logo/koc_logo.png',
  '/images/customer-logo/kpc_logo.png',
  '/images/customer-logo/lakdhanavi_logo.png',
  '/images/customer-logo/marsa_logo.png',
  '/images/customer-logo/mbk_logo.png',
  '/images/customer-logo/MSC_logo.png',
  '/images/customer-logo/Premier_Marine_logo.png',
  '/images/customer-logo/qata_logo.png',
  '/images/customer-logo/Shell_logo.png',
  '/images/customer-logo/sinopec.png',
  '/images/customer-logo/sipam.png',
  '/images/customer-logo/sl_port_logo.png',
  '/images/customer-logo/SLMD_logo.png',
  '/images/customer-logo/Snika_marine_logo.png',
  '/images/customer-logo/zmi_logo.png',
];

export default function RainingCustomers() {
  const tripledLogos = [...customerLogos, ...customerLogos, ...customerLogos];

  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-[#030712] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-['Poppins'] text-3xl md:text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-8 transition-colors duration-300">
          Our Valued Customers
        </h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Smooth Left Scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap py-2 hover:[animation-play-state:paused]">
            {tripledLogos.map((logo, idx) => (
              <LogoBox key={`row1-${idx}`} src={logo} />
            ))}
          </div>
        </div>

        {/* Row 2: Smooth Right Scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-2 hover:[animation-play-state:paused]">
            {tripledLogos.map((logo, idx) => (
              <LogoBox key={`row2-${idx}`} src={logo} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

const LogoBox = ({ src }) => {
  // 1. Identify logos that need a dark background for visibility
  const needsDarkBg = [
    '/images/customer-logo/Hayleys_logo.png',
    '/images/customer-logo/e-marine_logo.png',
    '/images/customer-logo/marsa_logo.png',
    '/images/customer-logo/ae_logo.png',
    '/images/customer-logo/ceb_logo.png'
  ].includes(src);

  // 2. Conditionally apply Tailwind classes
  const bgClass = needsDarkBg 
    ? 'bg-slate-900 border-slate-800' 
    : 'bg-white border-gray-200 dark:border-gray-800';

  return (
    <div className={`mx-4 w-48 h-28 ${bgClass} rounded-lg border shadow-sm flex items-center justify-center p-3 transition-colors duration-300`}>
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt="Customer Logo"
          fill
          sizes="(max-width: 768px) 150px, 200px"
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
};