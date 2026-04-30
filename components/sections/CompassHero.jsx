"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ContactUsModal from "../modals/ContactUsModal";

/* ============================================================
   PARTICLE HELPERS
   ============================================================ */
const rnd = (min, max) => Math.random() * (max - min) + min;

const SYMBOLS = [
  { char: "+", weight: 3 },
  { char: "×", weight: 3 },
  { char: "○", weight: 2 },
  { char: "□", weight: 2 },
  { char: "◇", weight: 2 },
  { char: "△", weight: 1 },
  { char: "▽", weight: 1 },
  { char: "⬟", weight: 1 },
  { char: "★", weight: 1 },
  { char: "✦", weight: 1 },
  { char: "◆", weight: 1 },
  { char: "⬡", weight: 1 },
];

const getSymbol = () => {
  const total = SYMBOLS.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (const s of SYMBOLS) { r -= s.weight; if (r <= 0) return s.char; }
  return "+";
};

// Updated to Hex Codes
const LIGHT_PALETTE = [
  "#251A66", "#37288C", "#0050A0", "#EC4A0A", "#FF6B35", "#0A5AB4"
];

const DARK_PALETTE = [
  "#251A66", // Deep Night (Input)
  "#EC4A0A", // Burnt Orange (Input)
  "#6366F1", // Electric Indigo
  "#7C3AED", // Royal Purple
  "#A855F7", // Soft Lavender
  "#4C1D95", // Deep Violet
  "#C084FC", // Periwinkle
  "#E0E7FF"  // Sky Mist
];

const getColor = (isDark) => {
  const p = isDark ? DARK_PALETTE : LIGHT_PALETTE;
  return p[Math.floor(Math.random() * p.length)]; // Returns hex string directly
};

// Adjusted to 800 for less density but wider spread
const FIXED_PARTICLE_COUNT = 800; 

const makeParticle = (width, height, isDark) => {
  const baseX = rnd(-100, width + 100);
  
  // Biased distribution covering 40%–100% height
  const yBias = Math.pow(Math.random(), 0.6);
  const baseY = height * 0.4 + (height * 0.6 * yBias);

  return {
    baseX,
    baseY,
    symbol:        getSymbol(),
    size:          rnd(10, 24),
    opacity:       rnd(0.2, isDark ? 0.6 : 0.85),
    phase:         rnd(0, Math.PI * 2),
    phaseX:        rnd(0, Math.PI * 2),
    speedY:        rnd(0.5, 1.5),     // Moderate, not too fast
    speedX:        rnd(0.5, 1.5),     // Moderate spatial modulation
    amplitude:     rnd(8, 35),        // Tighter, calmer vertical travel
    rotation:      rnd(0, 360),
    rotationSpeed: rnd(-2.0, 2.0),    // More active spin
    drift:         rnd(-0.15, 0.15),
    crossTime:     rnd(17500, 25000),  // Wide variance (fast/slow mix)
    depth:         Math.random(),
    color:         getColor(isDark),
  };
};

/* ============================================================
   SMOOTH SPATIAL WAVE
   ============================================================ */
const computeWave = (p, time) => {
  const w1 = Math.sin(time * p.speedY + p.phase) * p.amplitude;
  const w2 = Math.sin(time * p.speedY * 0.50 + p.phase * 1.3 + 0.8) * p.amplitude * 0.45;

  // Tighter ripple crests using 0.008 and 0.01 spatial frequencies
  const w3 = Math.sin(time * p.speedX + p.baseX * 0.008 + p.phaseX) * p.amplitude * 0.55;
  const w4 = Math.cos(time * 0.12 + p.baseX * 0.01 + p.phase * 0.5) * p.amplitude * 0.20;

  return w1 + w2 + w3 + w4;
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function CompassHero() {
  /* ── Dark mode ──────────────────────────────────────────── */
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const h = (e) => setIsDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* ── Canvas refs ─────────────────────────────────────────── */
  const canvasRef    = useRef(null);
  const particlesRef = useRef([]);
  const rafRef       = useRef(null);
  const mouseRef     = useRef({ x: -9999, y: -9999 });
  const isDarkRef    = useRef(isDark);
  const dimsRef      = useRef({ w: 0, h: 0 });

  useEffect(() => {
    isDarkRef.current = isDark;
    particlesRef.current.forEach((p) => {
      p.color   = getColor(isDark);
      p.opacity = rnd(0.2, isDark ? 0.6 : 0.85);
    });
  }, [isDark]);

  /* ── Canvas animation loop ───────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Standard tick as requested
    const TIME_STEP = 0.015;
    let time = 0;
    let animRunning = true;

    const buildParticles = (w, h) => {
      particlesRef.current = Array.from(
        { length: FIXED_PARTICLE_COUNT },
        () => makeParticle(w, h, isDarkRef.current)
      );
    };

    const applySize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.offsetWidth  : window.innerWidth;
      const h = parent ? parent.offsetHeight : window.innerHeight;
      if (!w || !h) return;
      dimsRef.current = { w, h };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      if (particlesRef.current.length === 0) {
        buildParticles(w, h);
      } else {
        particlesRef.current.forEach(p => {
          const yBias = Math.pow(Math.random(), 0.6);
          p.baseY = h * 0.4 + (h * 0.6 * yBias);
        });
      }
    };

    const ro = new ResizeObserver(() => applySize());
    ro.observe(canvas.parentElement || document.body);

    /* ── Mouse / Touch tracking ─────────────────────────── */
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave   = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onTouch   = (e) => {
      if (!e.touches.length) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    /* ── Main draw loop ─────────────────────────────────── */
    const draw = () => {
      if (!animRunning) return;
      const { w, h } = dimsRef.current;
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, w, h);
      time += TIME_STEP;

      particlesRef.current.forEach((p) => {
        // ── RIGHT-TO-LEFT flow ──────────────────────────────
        const frameSpeed = w / (p.crossTime / 16);
        p.baseX -= frameSpeed;

        // When particle exits left edge, respawn at right edge
        if (p.baseX < -100) {
          p.baseX   = w + 100;
          const yBias = Math.pow(Math.random(), 0.6);
          p.baseY   = h * 0.4 + (h * 0.6 * yBias);
          p.symbol  = getSymbol();
          p.opacity = rnd(0.2, isDarkRef.current ? 0.6 : 0.85);
          p.size    = rnd(10, 24);
          p.color   = getColor(isDarkRef.current);
          p.phase   = rnd(0, Math.PI * 2);
          p.phaseX  = rnd(0, Math.PI * 2);
          p.speedY  = rnd(0.5, 1.5); 
          p.speedX  = rnd(0.5, 1.5); 
          p.amplitude = rnd(8, 35);
          p.rotationSpeed = rnd(-2.0, 2.0);
          p.crossTime = rnd(17500, 25000);
        }

        // ── Smooth spatial wave displacement ────────────────
        const waveY = computeWave(p, time);
        const driftY = Math.sin(time * 0.18 + p.phase * 0.7) * p.drift * 10;

        // ── Dip Effect ──────────────────────────────────────
        const dipProgress = Math.max(0, p.baseX - w * 0.4) / (w * 0.6);
        const dipY = dipProgress * dipProgress * 150; 

        // ── Mouse repulsion (gentle, smooth) ────────────────
        const dx   = mouseRef.current.x - p.baseX;
        const dy   = mouseRef.current.y - (p.baseY + waveY + dipY);
        const dist = Math.hypot(dx, dy);
        let mx = 0, my = 0;
        if (dist < 160 && dist > 0) {
          const t     = 1 - dist / 160;
          const force = t * t * 28; 
          mx = -(dx / dist) * force;
          my = -(dy / dist) * force;
        }

        p.rotation += p.rotationSpeed;
        const dScale = 0.45 + p.depth * 0.55;
        
        // Final position combines base, wave, drift, dip, and mouse forces
        const finalX = p.baseX + mx;
        const finalY = p.baseY + waveY + driftY + dipY + my;

        ctx.save();
        ctx.translate(finalX, finalY);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.font        = `${p.size * dScale}px "Segoe UI Symbol","Apple Symbols",serif`;
        
        // Updated to handle Hex Codes with Opacity
        ctx.globalAlpha = p.opacity * dScale;
        ctx.fillStyle   = p.color; 
        
        ctx.textAlign   = "center";
        ctx.textBaseline= "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    const init = setTimeout(() => { applySize(); draw(); }, 60);

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove",  onTouch,    { passive: true });
    window.addEventListener("touchend",   onTouchEnd, { passive: true });

    return () => {
      animRunning = false;
      clearTimeout(init);
      ro.disconnect();
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("touchmove",  onTouch);
      window.removeEventListener("touchend",   onTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ── Dynamic Text Spotlight ──────────────────────────────── */
  const titleWrapperRef = useRef(null);

  const handleTitleMouseMove = useCallback((e) => {
    if (!titleWrapperRef.current) return;
    const rect = titleWrapperRef.current.getBoundingClientRect();
    titleWrapperRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    titleWrapperRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  const handleTitleMouseLeave = useCallback(() => {
    if (!titleWrapperRef.current) return;
    titleWrapperRef.current.style.setProperty("--mouse-x", `-9999px`);
    titleWrapperRef.current.style.setProperty("--mouse-y", `-9999px`);
  }, []);

  /* ── Theme tokens ────────────────────────────────────────── */
  const T = {
    bg:         isDark ? "#030712" : "#ffffff",
    overlay:    isDark
      ? "radial-gradient(ellipse 100% 60% at 50% 100%,rgba(56,189,248,0.06) 0%,transparent 70%)"
      : "radial-gradient(ellipse 100% 60% at 50% 100%,rgba(37,26,102,0.04) 0%,transparent 70%)",
    titleBase:  isDark ? "#ffffff" : "#251A66",
    hoverGrad:  isDark
      ? "linear-gradient(135deg,#e879f9 0%,#c084fc 25%,#22d3ee 50%,#8b5cf6 75%,#e879f9 100%)"
      : "linear-gradient(135deg,#251A66 0%,#5a3d9e 25%,#EC4A0A 50%,#ff6b35 75%,#251A66 100%)",
    // These remain RGBA so the static plus signs can be semi-transparent in CSS
    plusClr:    isDark ? "rgba(129,140,248,0.55)" : "rgba(37,26,102,0.4)",
    compassFx:  isDark
      ? "drop-shadow(0 20px 60px rgba(56,189,248,0.32))"
      : "drop-shadow(0 20px 60px rgba(74,52,204,0.22))",
  };

  const lines = ["YOUR ASSET", "IN SAFE" ,"HANDS"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Sans:wght@400;600;700&display=swap');

        :root { --title-hover-grad: ${T.hoverGrad}; }

        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        @keyframes fadeInUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatPlus { 0%,100%{transform:translateY(0) rotate(0deg);opacity:.4} 50%{transform:translateY(-12px) rotate(90deg);opacity:.7} }
        @keyframes gradShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes pulseSlow { 0%,100%{opacity:.28;transform:scale(1)} 50%{opacity:.55;transform:scale(1.12)} }
        @keyframes rotateCW  { to{transform:rotate(360deg)} }
        @keyframes rotateCCW { to{transform:rotate(-360deg)} }

        .ch-fadeInUp  { opacity:0; animation:fadeInUp 1s ease-out forwards; }
        .ch-floatPlus { animation:floatPlus 4s ease-in-out infinite; }
        .ch-pulseSlow { animation:pulseSlow 10s ease-in-out infinite; }
        .ch-rotateCW  { animation:rotateCW  30s linear infinite; }
        .ch-rotateCCW { animation:rotateCCW 25s linear infinite; }

        .d400  { animation-delay:.4s; }
        .d500  { animation-delay:.5s; }
        .d700  { animation-delay:.7s; }
        .d1000 { animation-delay:1s; }

        .ch-title-wrapper {
          position:relative;
          display:inline-block;
          --mouse-x:-9999px;
          --mouse-y:-9999px;
          padding-bottom:0.25em;
        }

        .ch-title-line {
          display:block;
          font-family:'Inter',sans-serif;
          font-size:clamp(48px,7vw,160px);
          font-weight:500;
          line-height:1.05;
          letter-spacing:-0.03em;
          color:${T.titleBase};
          cursor:default;
          will-change:transform;
          white-space:nowrap;
          padding-bottom:0.2em;
          margin-bottom:-0.2em;
        }

        .ch-hover-overlay {
          position:absolute;
          inset:0;
          pointer-events:none;
          -webkit-mask-image:radial-gradient(180px circle at var(--mouse-x) var(--mouse-y),black 10%,transparent 100%);
          mask-image:radial-gradient(180px circle at var(--mouse-x) var(--mouse-y),black 10%,transparent 100%);
        }

        .ch-title-line.hover-glow {
          background-image:var(--title-hover-grad) !important;
          background-size:200% 200%;
          background-clip:text;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          color:transparent;
          animation:gradShift 3s ease infinite;
          text-shadow:none;
        }

        .ch-btn {
          display:inline-flex;
          align-items:center;
          gap:12px;
          padding:16px 36px;
          background:linear-gradient(135deg,#EC4A0A 0%,#ff6b35 100%);
          border:none;
          border-radius:100px;
          color:#fff;
          font-family:'DM Sans',sans-serif;
          font-size:12px;
          font-weight:700;
          letter-spacing:1.8px;
          cursor:pointer;
          transition:all 0.32s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow:0 4px 20px rgba(236,74,10,.28),0 8px 40px rgba(236,74,10,.14);
          text-transform:uppercase;
          position:relative;
          overflow:hidden;
        }
        .ch-btn::before {
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,.18) 0%,transparent 50%);
          border-radius:100px;
          opacity:0;
          transition:opacity 0.3s;
        }
        .ch-btn:hover { transform:translateY(-4px) scale(1.03); box-shadow:0 10px 36px rgba(236,74,10,.44),0 20px 64px rgba(236,74,10,.22); }
        .ch-btn:hover::before { opacity:1; }
        .ch-btn:active { transform:translateY(-1px) scale(1.01); }

        .ch-decor {
          font-size:24px;
          font-weight:300;
          user-select:none;
          cursor:default;
          line-height:1;
        }

        /* ── MOBILE RESPONSIVENESS UPDATES ── */
        @media (max-width:768px) {
          .ch-grid { 
            grid-template-columns: 1fr !important; 
            padding: 120px 5vw 40px !important; 
            text-align: center; 
            height: auto !important; 
            min-height: 100vh; 
            gap: 0px !important; 
          }
          .ch-left { 
            align-items: center !important; 
            justify-content: center !important;
            width: 100%;
          }
          .ch-compass-wrap { 
            display: none !important; /* HIDES COMPASS ENTIRELY ON MOBILE */
          }
          .ch-title-wrapper {
            text-align: center;
          }
          .ch-title-line { 
            font-size: clamp(40px, 14vw, 72px); 
          }
        }

        @media (prefers-reduced-motion:reduce) {
          .ch-fadeInUp,.ch-floatPlus,.ch-pulseSlow,.ch-rotateCW,.ch-rotateCCW { animation:none !important; opacity:1 !important; transform:none !important; }
        }
      `}</style>

      <section
        role="banner"
        aria-label="DPV Offshore - Let's Work Together"
        style={{
          position:"relative",
          width:"100%",
          height:"100vh",
          background:T.bg,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          overflow:"hidden",
          isolation:"isolate",
          fontFamily:"'DM Sans',sans-serif",
          transition:"background 0.7s ease",
        }}
      >
        <div aria-hidden="true" style={{position:"absolute",inset:0,background:T.overlay,pointerEvents:"none",zIndex:1,transition:"background .7s"}}/>

        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:2}}
        />

        <div
          className="ch-grid"
          style={{
            position:"relative",
            zIndex:10,
            width:"100%",
            maxWidth:"100%",
            padding:"0 6vw",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"4vw",
            alignItems:"center",
            height:"100vh",
          }}
        >
          {/* LEFT: Text */}
          <div className="ch-left" style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"24px",alignItems:"flex-start"}}>
            <div
              className="ch-title-wrapper"
              ref={titleWrapperRef}
              onMouseMove={handleTitleMouseMove}
              onMouseLeave={handleTitleMouseLeave}
            >
              <h1 style={{margin:0,padding:0,border:0,display:"flex",flexDirection:"column",gap:0}}>
                {lines.map((line, i) => (
                  <span key={`base-${i}`} className={`ch-fadeInUp ${i===0?"d500":"d700"}`} style={{display:"block"}}>
                    <span className="ch-title-line">{line}</span>
                  </span>
                ))}
              </h1>

              <div aria-hidden="true" className="ch-hover-overlay" style={{display:"flex",flexDirection:"column",gap:0}}>
                {lines.map((line, i) => (
                  <span key={`glow-${i}`} className={`ch-fadeInUp ${i===0?"d500":"d700"}`} style={{display:"block"}}>
                    <span className="ch-title-line hover-glow">{line}</span>
                  </span>
                ))}
              </div>
            </div>

            <button 
              className="ch-btn ch-fadeInUp d1000" 
              style={{marginTop:"24px"}} 
              aria-label="Contact DPV Offshore"
              onClick={() => setIsModalOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              CONTACT US
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{flexShrink:0}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* RIGHT: Compass */}
          <div className="ch-compass-wrap" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
            <div className="ch-fadeInUp d700" style={{position:"relative",aspectRatio:"1/1",width:"100%",maxWidth:"85vh",maxHeight:"85vw"}}>
              <div
                aria-hidden="true"
                className="ch-pulseSlow"
                style={{
                  position:"absolute",inset:"-8%",borderRadius:"50%",
                  background:isDark
                    ? "radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 70%)"
                    : "radial-gradient(circle,rgba(37,26,102,0.05) 0%,transparent 70%)",
                  transition:"background .7s",
                }}
              />
              <img
                src={isDark ? "/images/compass_design_dark.png" : "/images/compass_design.png"}
                alt="DPV Offshore compass"
                draggable="false"
                loading="eager"
                style={{width:"100%",height:"100%",objectFit:"contain",filter:T.compassFx,userSelect:"none",transition:"filter .7s",display:"block"}}
              />
              <div aria-hidden="true" style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{position:"relative",width:"75%",height:"75%"}}>
                  <img src="/images/big_needl.png"   className="ch-rotateCW"  draggable="false" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}}/>
                  <img src="/images/small_needls.png" className="ch-rotateCCW" draggable="false" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative + signs */}
        <span className="ch-decor ch-floatPlus" aria-hidden="true" style={{position:"absolute",top:"15%",left:"8%",color:T.plusClr,animationDelay:"1.1s",zIndex:10,transition:"color .7s"}}>+</span>
        <span className="ch-decor ch-floatPlus" aria-hidden="true" style={{position:"absolute",top:"30%",right:"45%",color:T.plusClr,fontSize:16,opacity:0.5,animationDelay:"3.5s",zIndex:10,transition:"color .7s"}}>+</span>
      </section>

      {/* Render the modal when isOpen state is true */}
      {isModalOpen && (
        <ContactUsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}