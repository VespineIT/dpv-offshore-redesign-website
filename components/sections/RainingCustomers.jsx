'use client';
import React from 'react';
import Image from 'next/image';
import { customerLogos, logosWithDarkBg } from '@/data/customers';

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
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap py-2 hover:[animation-play-state:paused]">
            {tripledLogos.map((logo, idx) => (
              <LogoBox key={`row1-${idx}`} src={logo} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-2 hover:[animation-play-state:paused]">
            {tripledLogos.map((logo, idx) => (
              <LogoBox key={`row2-${idx}`} src={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const LogoBox = ({ src }) => {
  const bgClass = logosWithDarkBg.includes(src)
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
