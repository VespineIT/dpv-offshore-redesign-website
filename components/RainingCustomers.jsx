'use client';
import React from 'react';
import Image from 'next/image';

const customerLogos = [
  '/dpv-offshore-redesign-website/images/customer-logo/logo.png',
  '/dpv-offshore-redesign-website/images/customer-logo/555-5-.jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/oldendorff.png',
  '/dpv-offshore-redesign-website/images/customer-logo/ADSB.png.webp',
  '/dpv-offshore-redesign-website/images/customer-logo/premier-marine.jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/channels4_profile.jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/hapag-lloyd-2-logo-png-transparent.png',
  '/dpv-offshore-redesign-website/images/customer-logo/images (1).jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/images (1).png',
  '/dpv-offshore-redesign-website/images/customer-logo/images (2).jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/images (2).png',
  '/dpv-offshore-redesign-website/images/customer-logo/images (3).jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/images.jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/images.png',
  '/dpv-offshore-redesign-website/images/customer-logo/logo 2.png',
  '/dpv-offshore-redesign-website/images/customer-logo/logo_jobson-4.png',
  '/dpv-offshore-redesign-website/images/customer-logo/logo1.png',
  '/dpv-offshore-redesign-website/images/customer-logo/logo-2-e1717411946482.png',
  '/dpv-offshore-redesign-website/images/customer-logo/MSC-Cruise-Logo.png',
  '/dpv-offshore-redesign-website/images/customer-logo/NMDC Group.png',
  '/dpv-offshore-redesign-website/images/customer-logo/nr-Y7qmv_400x400.jpg',
  '/dpv-offshore-redesign-website/images/customer-logo/saipem.png',
  '/dpv-offshore-redesign-website/images/customer-logo/Saudi-Aramco-logo.png',
  '/dpv-offshore-redesign-website/images/customer-logo/Thome-logo.png',
  '/dpv-offshore-redesign-website/images/customer-logo/unnamed.png',
  '/dpv-offshore-redesign-website/images/customer-logo/zmi-holding.webp',
];

export default function RainingCustomers() {
  const tripledLogos = [...customerLogos, ...customerLogos, ...customerLogos];

  return (
    /* UPDATED: dark:bg-[#030712] */
    <section className="py-16 bg-[#F8FAFC] dark:bg-[#030712] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 mb-10">
      <h2 className="font-['Poppins'] text-3xl md:text-3xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-8 transition-colors duration-300">
          Our Valued Customers
        </h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Row 1: Smooth Left Scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {tripledLogos.map((logo, idx) => (
              <LogoBox key={`row1-${idx}`} src={logo} />
            ))}
          </div>
        </div>

        {/* Row 2: Smooth Right Scroll */}
        <div className="flex overflow-hidden select-none">
          <div className="flex animate-marquee-reverse whitespace-nowrap py-2">
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

const LogoBox = ({ src }) => (
  /* KEPT: bg-white for visibility. 
     ADDED: dark:border-gray-800 to soften the edge against the dark background. 
  */
  <div className="mx-4 w-48 h-28 bg-white rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center p-3">
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