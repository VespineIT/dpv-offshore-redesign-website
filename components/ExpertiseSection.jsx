'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExpertiseShowcase() {
  const [isDark, setIsDark] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const h = (e) => setIsDark(e.matches);
    mq.addEventListener('change', h);
    return () => mq.removeEventListener('change', h);
  }, []);

  // Preserved exact color palette
  const T = {
    bg: isDark ? '#030712' : '#FAFAFA',
    textMain: isDark ? '#F9FAFB' : '#251A66',
    textMuted: isDark ? '#9CA3AF' : '#4B5563',
    accent: '#EC4A0A',
    activePill: isDark ? '#6366F1' : '#EC4A0A',
    rule: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(37,26,102,0.12)',
  };

  const expertiseList = [
    { title: 'Products',          imageUrl: '/dpv-offshore-redesign-website/images/expertise_products.png' },
    { title: 'Operations',        imageUrl: '/dpv-offshore-redesign-website/images/expertise_operations.png' },
    { title: 'Technical Support', imageUrl: '/dpv-offshore-redesign-website/images/expertise_support.png' },
    { title: 'Repair Orders',     imageUrl: '/dpv-offshore-redesign-website/images/expertise_repair.png' },
    { title: 'Maintenance',       imageUrl: '/dpv-offshore-redesign-website/images/expertise_maintenance.png' },
  ];

  // Auto-advance logic preserved
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % expertiseList.length);
    }, 5000);
    return () => clearInterval(id);
  }, [expertiseList.length]);

  return (
    <section 
      className="py-16 md:py-24 transition-colors duration-500 relative overflow-hidden flex items-center min-h-screen"
      style={{ backgroundColor: T.bg, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="container mx-auto px-4 relative z-10 w-full max-w-screen-2xl">
        
        {/* Main Hero Card Container */}
        <div 
          className="relative w-full min-h-[800px] rounded-[2.5rem] shadow-2xl overflow-hidden group border-[1.5px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
            borderColor: T.rule,
            boxShadow: isDark ? '0 25px 50px -12px rgba(0,0,0,0.5)' : '0 25px 50px -12px rgba(37,26,102,0.08)'
          }}
        >
          {/* Progress Bar (Bottom of the whole card) */}
          <motion.div
            className="absolute bottom-0 left-0 h-1.5 z-30"
            key={`prog-${activeIndex}`}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
            style={{ backgroundColor: T.accent }}
          />

          {/* Content Split Layout */}
          <div className="relative z-20 w-full h-full flex flex-col lg:flex-row p-8 md:p-12 lg:p-16 gap-12 lg:gap-20 items-stretch min-h-[800px]">
            
            {/* Left: Main Information */}
            <div className="flex-1 w-full flex flex-col justify-center h-full">
              
              {/* Badge */}
              <div className="mb-8">
                <span 
                  className="px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-sm"
                  style={{ backgroundColor: T.accent, color: '#FFFFFF' }}
                >
                  Our Expertise
                </span>
              </div>

              {/* Main Statement */}
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-10 leading-[1.15] tracking-tight"
                style={{ color: T.textMain, fontFamily: "'Inter', sans-serif" }}
              >
                Delivering <strong style={{ color: T.accent, fontWeight: 600 }}>safe, efficient, and cost-effective</strong> asset management solutions that ensure <strong style={{ color: T.accent, fontWeight: 600 }}>optimum value and performance.</strong>
              </h2>
              
              {/* Paragraphs */}
              <div 
                className="flex flex-col gap-6 pt-10 border-t-[1.5px]"
                style={{ borderColor: T.rule }}
              >
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: T.textMuted }}>
                  DPV Offshore specializes in engineering, procurement, and construction (EPC) services for the offshore industry, encompassing onshore, offshore, and subsea operations.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: T.textMuted }}>
                  Our comprehensive capabilities — from design engineering to manufacturing, installation, maintenance, repair, and component supply — enable seamless project execution with uncompromising safety and quality standards.
                </p>
                <p className="text-base md:text-lg leading-relaxed font-normal" style={{ color: T.textMuted }}>
                  Built on long-term client relationships and proven performance, we continue to earn the trust of our partners through our consistent commitment to excellence, reliability, and value-driven delivery.
                </p>
              </div>
            </div>

            {/* Right: Images + Interactive Navigation Tabs */}
            <div className="w-full lg:w-5/12 xl:w-1/3 flex flex-col gap-8 justify-center">
              
              {/* Top Right: Image Window */}
              <div 
                className="relative w-full h-64 md:h-72 lg:h-80 rounded-[2rem] overflow-hidden shadow-xl border-[1.5px] bg-black/5"
                style={{ borderColor: T.rule }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={expertiseList[activeIndex].imageUrl}
                    alt={expertiseList[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  />
                </AnimatePresence>
              </div>

              {/* Bottom Right: Tabs */}
              <div className="flex flex-col gap-3 w-full">
                {expertiseList.map((item, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={item.title}
                      onClick={() => setActiveIndex(index)}
                      className={`group flex items-center justify-between w-full p-5 md:p-6 rounded-[1.5rem] transition-all duration-500 border-[1.5px] backdrop-blur-xl ${
                        isActive 
                          ? 'translate-x-0 shadow-md' 
                          : 'hover:shadow-lg md:translate-x-4 md:hover:translate-x-2'
                      }`}
                      style={{
                        backgroundColor: isActive 
                          ? (isDark ? 'rgba(255,255,255,0.05)' : '#FAFAFA') 
                          : 'transparent',
                        borderColor: isActive ? T.activePill : T.rule,
                      }}
                    >
                      <div className="flex items-center gap-5">
                        {/* Number Indicator */}
                        <span 
                          className="font-mono text-sm font-semibold transition-colors duration-300"
                          style={{ color: isActive ? T.activePill : T.textMuted }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        
                        {/* Tab Title */}
                        <span 
                          className="text-lg md:text-xl font-medium text-left transition-colors duration-300"
                          style={{ color: isActive ? T.textMain : T.textMuted, fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Glowing Active Dot */}
                      {isActive && (
                        <div 
                          className="w-2.5 h-2.5 rounded-full animate-pulse relative z-10 flex-shrink-0 ml-4" 
                          style={{ 
                            backgroundColor: T.activePill, 
                            boxShadow: `0 0 12px ${T.activePill}` 
                          }} 
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}