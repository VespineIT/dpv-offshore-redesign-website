'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Make sure to use 'motion/react' if you are on framer-motion v12+

/**
 * COMPASS HERO COMPONENT
 * - Flat 2D Orange Box
 * - Text on left, compass on right
 * - Typing animation
 * - SUN/MOON MOVED TO LEFT: Interaction with text area
 * - ADVANCED SKY: Day/night cycle with enhanced sun + starfield
 * - Animated Sea Waves at bottom (Framer Motion integration)
 */

const SunIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
  </svg>
);

const ShootingStar = ({ delay = '0s' }) => (
  <div 
    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.9)] animate-shooting-star pointer-events-none" 
    style={{ animationDelay: delay }}
  />
);

// --- NEW WAVELAYER COMPONENT ---
const WaveLayer = ({ 
  className, 
  opacity, 
  duration, 
  delay, 
  yOffset = 0, 
  zIndex = 0,
  reverse = false,
  height = "100%",
  scaleY = 1,
}) => {
  return (
    <motion.div 
      className={`absolute bottom-0 left-[-25%] w-[150%] pointer-events-none ${className}`}
      style={{ zIndex, marginBottom: yOffset, height }}
      animate={{ 
        x: reverse ? ["-10%", "0%"] : ["0%", "-10%"],
        y: [0, 15, 0],
        scaleY: [scaleY, scaleY * 1.1, scaleY]
      }}
      transition={{ 
        x: { duration: duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        y: { duration: duration * 0.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: delay },
        scaleY: { duration: duration * 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
      }}
    >
      <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="currentColor" 
          fillOpacity={opacity} 
          d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,149.3C560,139,640,149,720,170.7C800,192,880,224,960,229.3C1040,235,1120,213,1200,192C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" 
        />
      </svg>
    </motion.div>
  );
};

export default function CompassHero() {
  const containerConfig = {
    borderColor: '#FF5722',
    borderWidth: '3px',
    borderRadius: '24px',
    backgroundColor: 'transparent',
    padding: '40px'
  };

  const textConfig = {
    lineHeight: '1.1',
    buttonColor: '#FF5722',
    buttonHoverColor: '#ff6b3d',
    buttonPadding: '16px 40px',
    buttonRadius: '12px'
  };

  const typingConfig = {
    speed: 80,
    pauseBetweenLines: 400,
    showCursor: true
  };

  const stars = [
    { top: '8%',  left: '12%', size: 'w-1.5 h-1.5', delay: '0s', duration: '3.2s' },
    { top: '18%', left: '28%', size: 'w-2 h-2',   delay: '1.1s', duration: '4.1s' },
    { top: '12%', left: '65%', size: 'w-1 h-1',   delay: '0.4s', duration: '2.8s' },
    { top: '32%', left: '18%', size: 'w-2.5 h-2.5', delay: '2.3s', duration: '5s' },
    { top: '4%',  left: '88%', size: 'w-1.5 h-1.5', delay: '0.8s', duration: '3.7s' },
    { top: '45%', left: '78%', size: 'w-2 h-2',   delay: '1.8s', duration: '4.5s' },
    { top: '22%', left: '45%', size: 'w-1.5 h-1.5', delay: '3s', duration: '3.9s' },
    { top: '38%', left: '5%',  size: 'w-2 h-2',   delay: '0.6s', duration: '4.8s' },
  ];

  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const fullText = ['Your Assets Are', 'In Safe Hands'];

  useEffect(() => {
    if (currentLine >= fullText.length) return;

    const currentFullLine = fullText[currentLine];

    if (displayText.length < currentFullLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + currentFullLine[displayText.length]);
      }, typingConfig.speed);
      return () => clearTimeout(timeout);
    } else if (currentLine < fullText.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setDisplayText('');
      }, typingConfig.pauseBetweenLines);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentLine]);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-white dark:bg-[#030712] p-[15px] transition-colors duration-700">
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          padding: containerConfig.padding,
          border: `${containerConfig.borderWidth} solid ${containerConfig.borderColor}`,
          borderRadius: containerConfig.borderRadius,
          backgroundColor: containerConfig.backgroundColor,
        }}
      >
        {/* ================================================= */}
        {/* 🌤️ SKY ANIMATION - LEFT SIDE PLACEMENT           */}
        {/* ================================================= */}
        <div className="absolute top-0 left-0 w-full h-[65%] z-0 pointer-events-none overflow-hidden transition-all duration-1000">

          {/* SUN - Top Left Position */}
          <div className="absolute top-[8%] left-[10%] opacity-60 dark:opacity-0 transition-opacity duration-1000">
            <div className="relative">
              <SunIcon className="w-24 h-24 text-[#FF5722] animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full bg-[#FF5722] blur-3xl opacity-40 animate-pulse-slow" />
              </div>
              <div className="absolute inset-[-40%] flex items-center justify-center pointer-events-none">
                <div className="w-[180%] h-[180%] rounded-full bg-gradient-to-r from-transparent via-[#FF5722]/20 to-transparent animate-ray-rotate opacity-40" />
              </div>
            </div>
          </div>

          {/* MOON - Top Left Position */}
          <div className="absolute top-[8%] left-[12%] opacity-0 dark:opacity-70 transition-opacity duration-1000">
            <div className="relative">
              <MoonIcon className="w-20 h-20 text-[#e0f2fe] animate-float" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-28 rounded-full bg-[#e0f2fe] blur-2xl opacity-20" />
              </div>
            </div>
          </div>

          {/* Stars & Shooting Stars */}
          <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-1000">
            {stars.map((star, i) => (
              <div
                key={i}
                className={`absolute text-[#c7d2fe] ${star.size} animate-twinkle-grok`}
                style={{
                  top: star.top,
                  left: star.left,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              >
                <StarIcon className="w-full h-full drop-shadow-[0_0_4px_rgba(199,210,254,0.9)]" />
              </div>
            ))}
            <ShootingStar delay="12s" />
            <ShootingStar delay="25s" />
          </div>
        </div>

        {/* Sea Waves (Framer Motion Integration) */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh] min-h-[200px] z-0 overflow-hidden opacity-90 dark:opacity-50 transition-opacity duration-1000 pointer-events-none">
          {/* Layer 1 - Back */}
          <WaveLayer className="text-[#00B4D8] dark:text-[#3730a3]" opacity={0.15} duration={25} delay={0} yOffset={40} zIndex={1} />
          {/* Layer 2 */}
          <WaveLayer className="text-[#4A34CC] dark:text-[#312e81]" opacity={0.15} duration={20} delay={2} yOffset={25} zIndex={2} reverse />
          {/* Layer 3 */}
          <WaveLayer className="text-[#00B4D8] dark:text-[#4338ca]" opacity={0.3} duration={15} delay={1} yOffset={10} zIndex={3} />
          {/* Layer 4 - Front */}
          <WaveLayer className="text-[#00B4D8] dark:text-[#1e1b4b]" opacity={0.6} duration={10} delay={3} yOffset={0} zIndex={4} reverse />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
          {/* Left - Text */}
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="font-black italic uppercase tracking-tight" style={{ lineHeight: textConfig.lineHeight }}>
              {currentLine >= 0 && (
                <span className="block bg-gradient-to-r from-[#4A34CC] to-[#00B4D8] dark:from-[#818cf8] dark:to-[#22d3ee] bg-clip-text text-transparent pb-1" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
                  {currentLine === 0 ? displayText : fullText[0]}
                  {typingConfig.showCursor && currentLine === 0 && displayText.length < fullText[0].length && <span className="animate-blink">|</span>}
                </span>
              )}
              {currentLine >= 1 && (
                <span className="block bg-gradient-to-r from-[#4A34CC] to-[#00B4D8] dark:from-[#818cf8] dark:to-[#22d3ee] bg-clip-text text-transparent" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
                  {displayText}
                  {typingConfig.showCursor && currentLine === 1 && displayText.length < fullText[1].length && <span className="animate-blink">|</span>}
                </span>
              )}
            </h1>

            <button
              className="text-white font-bold text-base uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl self-start"
              style={{
                backgroundColor: textConfig.buttonColor,
                padding: textConfig.buttonPadding,
                borderRadius: textConfig.buttonRadius,
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = textConfig.buttonHoverColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = textConfig.buttonColor)}
            >
              Contact Us
            </button>
          </div>

          {/* Right - Compass */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[650px]">
              <img src="/dpv-offshore-redesign-website/images/compass_design.png" alt="Compass" className="w-full h-full object-contain drop-shadow-2xl select-none transition-all duration-300" draggable="false" />
              <div className="absolute inset-0 flex items-center justify-center w-full h-full">
                <div className="relative w-[75%] h-[75%]">
                  <img src="/dpv-offshore-redesign-website/images/big_needl.png" className="absolute inset-0 w-full h-full object-contain animate-rotate-cw" draggable="false" alt="needle" />
                  <img src="/dpv-offshore-redesign-website/images/small_needls.png" className="absolute inset-0 w-full h-full object-contain animate-rotate-ccw" draggable="false" alt="needle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateCW  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes rotateCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-rotate-cw { animation: rotateCW 20s linear infinite; }
        .animate-rotate-ccw { animation: rotateCCW 15s linear infinite; }

        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-slow { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
        .animate-spin-slow { animation: spin 32s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }

        @keyframes ray-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-ray-rotate { animation: ray-rotate 60s linear infinite; }

        @keyframes twinkle-grok {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-twinkle-grok { animation: twinkle-grok 4s ease-in-out infinite; }

        @keyframes shooting-star {
          0% { transform: translate(-10vw, -10vh) rotate(-45deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(110vw, 110vh) rotate(-45deg); opacity: 0; }
        }
        .animate-shooting-star { animation: shooting-star 6s linear infinite; top: 10%; left: -5%; }
      `}</style>
    </section>
  );
}