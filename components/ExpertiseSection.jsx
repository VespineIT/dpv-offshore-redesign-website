'use client';

import { useEffect, useState } from 'react';

const expertiseList = [
  { title: 'Products',          imageUrl: '/dpv-offshore-redesign-website/images/expertise_products.png' },
  { title: 'Operations',        imageUrl: '/dpv-offshore-redesign-website/images/expertise_operations.png' },
  { title: 'Technical Support', imageUrl: '/dpv-offshore-redesign-website/images/expertise_support.png' },
  { title: 'Repair Orders',     imageUrl: '/dpv-offshore-redesign-website/images/expertise_repair.png' },
  { title: 'Maintenance',       imageUrl: '/dpv-offshore-redesign-website/images/expertise_maintenance.png' },
];

const ORANGE = '#FF4500'; // Updated to match your title color
const PURPLE = '#4A3FA0';

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the accordion
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % expertiseList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#F8FAFC] dark:bg-[#030712] overflow-hidden transition-colors duration-300 flex flex-col items-center min-h-screen">
      
      {/* ── Top Header Zone (Matched to RainingCustomers) ── */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-['Poppins'] text-3xl md:text-2xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-4 transition-colors duration-300">
          Our Expertise
        </h2>
        {/* UPDATED: Changed light mode to Navy Blue (#1E3A8A) and dark mode to White */}
        <p className="text-center text-[#1E3A8A] dark:text-white text-xl md:text-3xl font-bold max-w-3xl mx-auto tracking-tight transition-colors duration-300">
          Smart asset management for safe, efficient & high value performance
        </p>
      </div>

      {/* ── Expanding Image Accordion ── */}
      <div
        className="px-4"
        style={{
          display: 'flex',
          gap: '16px',
          width: '100%',
          maxWidth: '1200px',
          height: '500px',
          marginBottom: '48px',
        }}
      >
        {expertiseList.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.title}
              onClick={() => setActiveIndex(index)}
              style={{
                position: 'relative',
                flex: isActive ? '5' : '1',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'flex 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: '#E5E0F5',
              }}
            >
              {/* Background Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.8s ease, opacity 0.6s ease',
                }}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isActive
                    ? 'linear-gradient(to top, rgba(74, 63, 160, 0.9) 0%, rgba(0,0,0,0) 50%)'
                    : 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)',
                  transition: 'background 0.6s ease',
                }}
              />

              {/* Title Container */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  padding: '32px 24px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                {/* Horizontal Title (Active) */}
                <h3
                  className="font-['Poppins']"
                  style={{
                    color: '#FFF',
                    fontSize: '28px',
                    fontWeight: 800,
                    margin: 0,
                    whiteSpace: 'nowrap',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s',
                    position: isActive ? 'relative' : 'absolute',
                  }}
                >
                  {item.title}
                </h3>

                {/* Vertical Rotated Title (Inactive) */}
                <h3
                  className="font-['Poppins']"
                  style={{
                    color: '#FFF',
                    fontSize: '18px',
                    fontWeight: 600,
                    margin: 0,
                    whiteSpace: 'nowrap',
                    opacity: isActive ? 0 : 1,
                    transformOrigin: 'bottom left',
                    transform: 'rotate(-90deg) translate(20px, 15px)',
                    transition: 'opacity 0.3s ease',
                    position: isActive ? 'absolute' : 'relative',
                    pointerEvents: 'none',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Bottom Boilerplate & Progress ── */}
      <div className="px-4 transition-colors duration-300" style={{ maxWidth: '820px', textAlign: 'center' }}>
        {/* UPDATED: Moved color to Tailwind classes so dark:text-white can take effect */}
        <p
          className="text-[#6B6B8E] dark:text-white transition-colors duration-300"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            fontWeight: 400,
            lineHeight: 1.8,
            margin: '0 auto 36px',
          }}
        >
          DPV Offshore specializes in engineering, procurement, and construction (EPC) services for the offshore industry,
          covering onshore, offshore, and subsea operations. From design engineering to manufacturing, installation,
          maintenance, repair, and component supply, we deliver seamless projects with the highest safety and quality
          standards. Built on strong client relationships and proven performance, we are trusted for our commitment to
          excellence, reliability, and value-driven delivery.
        </p>

        {/* Simple Progress Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          {expertiseList.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '32px' : '12px',
                height: '12px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: i === activeIndex ? ORANGE : '#D1CAF5',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}