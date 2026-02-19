"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ============================================================
   ICON COMPONENTS
   ============================================================ */
const SunIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" style={style} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.35" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" style={style} fill="currentColor" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const StarIcon = ({ style }) => (
  <svg viewBox="0 0 24 24" style={style} fill="currentColor" aria-hidden="true">
    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
  </svg>
);

/* ============================================================
   PARTICLE HELPERS
   ============================================================ */
const rnd = (min, max) => Math.random() * (max - min) + min;

const WATER_SYMBOLS = [
  { char: "○", weight: 5 }, { char: "◌", weight: 4 },
  { char: "•", weight: 5 }, { char: "·", weight: 6 },
  { char: "◦", weight: 4 }, { char: "◉", weight: 3 },
  { char: "∘", weight: 3 }, { char: "⊙", weight: 2 },
  { char: "◎", weight: 2 }, { char: "+", weight: 2 },
  { char: "×", weight: 1 },
];

const getSymbol = () => {
  const total = WATER_SYMBOLS.reduce((s, p) => s + p.weight, 0);
  let r = Math.random() * total;
  for (const s of WATER_SYMBOLS) { r -= s.weight; if (r <= 0) return s.char; }
  return "○";
};

const LIGHT_PALETTE = [
  { r: 0,   g: 150, b: 200 }, { r: 0,   g: 180, b: 216 },
  { r: 72,  g: 191, b: 227 }, { r: 30,  g: 120, b: 180 },
  { r: 74,  g: 52,  b: 204 }, { r: 0,   g: 200, b: 200 },
  { r: 100, g: 160, b: 220 }, { r: 20,  g: 100, b: 160 },
];

const DARK_PALETTE = [
  { r: 56,  g: 189, b: 248 }, { r: 34,  g: 211, b: 238 },
  { r: 99,  g: 102, b: 241 }, { r: 129, g: 140, b: 248 },
  { r: 147, g: 197, b: 253 }, { r: 0,   g: 210, b: 220 },
  { r: 167, g: 243, b: 208 }, { r: 224, g: 242, b: 254 },
];

const getColor = (isDark) => {
  const p = isDark ? DARK_PALETTE : LIGHT_PALETTE;
  return { ...p[Math.floor(Math.random() * p.length)] };
};

// Cap particle count for performance across all screen sizes
const getParticleCount = (area) => Math.min(Math.max(Math.floor(area / 4200), 30), 120);

const makeParticle = (width, height, isDark) => {
  const yBias = Math.pow(Math.random(), 0.42);
  return {
    baseX:         rnd(-120, width + 120),
    baseY:         height * 0.36 + yBias * height * 0.66,
    symbol:        getSymbol(),
    size:          rnd(6, 20),
    opacity:       rnd(0.18, isDark ? 0.68 : 0.55),
    phase:         rnd(0, Math.PI * 2),
    speed:         rnd(0.22, 0.9),
    amplitude:     rnd(8, 38),
    rotation:      rnd(0, 360),
    rotationSpeed: rnd(-0.6, 0.6),
    drift:         rnd(-0.3, 0.3),
    flowSpeed:     rnd(0.3, 1.5),
    depth:         Math.random(),
    color:         getColor(isDark),
  };
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */
export default function CompassHero() {
  /* ── Dark mode ──────────────────────────────────────────── */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const h = (e) => setIsDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* ── Canvas ──────────────────────────────────────────────── */
  const canvasRef    = useRef(null);
  const particlesRef = useRef([]);
  const rafRef       = useRef(null);
  const mouseRef     = useRef({ x: -9999, y: -9999 });
  const isDarkRef    = useRef(isDark);
  const dimsRef      = useRef({ w: 0, h: 0 });

  useEffect(() => {
    isDarkRef.current = isDark;
    // Update existing particle colors on theme change
    particlesRef.current.forEach((p) => {
      p.color   = getColor(isDark);
      p.opacity = rnd(0.18, isDark ? 0.68 : 0.55);
    });
  }, [isDark]);

  /* ── Typing animation ────────────────────────────────────── */
  const LINES = ["Your Assets Are", "In Safe Hands"];
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [typingDone, setTypingDone]   = useState(false);

  useEffect(() => {
    if (currentLine >= LINES.length) { setTypingDone(true); return; }
    const line = LINES[currentLine];
    if (displayText.length < line.length) {
      const t = setTimeout(
        () => setDisplayText(line.slice(0, displayText.length + 1)),
        75
      );
      return () => clearTimeout(t);
    } else if (currentLine < LINES.length - 1) {
      const t = setTimeout(() => {
        setCurrentLine((c) => c + 1);
        setDisplayText("");
      }, 450);
      return () => clearTimeout(t);
    } else {
      setTypingDone(true);
    }
  }, [displayText, currentLine]); // LINES is stable — no need in deps

  /* ── Stars config ────────────────────────────────────────── */
  const STARS = [
    { top: "7%",  left: "12%", sz: 16, delay: "0s",   dur: "3.2s" },
    { top: "16%", left: "28%", sz: 20, delay: "1.1s", dur: "4.1s" },
    { top: "10%", left: "68%", sz: 12, delay: "0.4s", dur: "2.8s" },
    { top: "29%", left: "18%", sz: 24, delay: "2.3s", dur: "5s"   },
    { top: "5%",  left: "85%", sz: 16, delay: "0.8s", dur: "3.7s" },
    { top: "41%", left: "76%", sz: 18, delay: "1.8s", dur: "4.5s" },
    { top: "20%", left: "48%", sz: 14, delay: "3s",   dur: "3.9s" },
    { top: "34%", left: "6%",  sz: 20, delay: "0.6s", dur: "4.8s" },
  ];

  /* ── Canvas animation loop ───────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let time = 0;
    let animRunning = true;

    const buildParticles = (w, h) => {
      particlesRef.current = Array.from(
        { length: getParticleCount(w * h) },
        () => makeParticle(w, h, isDarkRef.current)
      );
    };

    const applySize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.offsetWidth  : window.innerWidth;
      const h = parent ? parent.offsetHeight : window.innerHeight;
      if (!w || !h) return;
      dimsRef.current = { w, h };
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2× for perf
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      buildParticles(w, h);
    };

    const ro = new ResizeObserver(() => applySize());
    ro.observe(canvas.parentElement || document.body);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    // Touch support for mobile mouse-parallax
    const onTouch = (e) => {
      if (!e.touches.length) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    const draw = () => {
      if (!animRunning) return;
      const { w, h } = dimsRef.current;
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, w, h);
      time += 0.010;

      particlesRef.current.forEach((p) => {
        p.baseX += p.flowSpeed;
        if (p.baseX > w + 100) {
          p.baseX   = -100;
          p.baseY   = h * 0.36 + Math.pow(Math.random(), 0.42) * h * 0.66;
          p.symbol  = getSymbol();
          p.opacity = rnd(0.18, isDarkRef.current ? 0.68 : 0.55);
          p.size    = rnd(6, 20);
          p.color   = getColor(isDarkRef.current);
        }

        const xF = p.baseX * 0.005;
        const w1  = Math.sin(time * p.speed         + p.phase         + xF      ) * p.amplitude;
        const w2  = Math.sin(time * p.speed * 0.55  + p.phase * 1.45 + xF * 0.5) * p.amplitude * 0.38;
        const w3  = Math.cos(time * p.speed * 0.85  + xF * 0.8       )            * p.amplitude * 0.20;
        const w4  = Math.sin(time * 0.28            + p.phase * 0.6  )            * 12;
        const dy  = Math.sin(time * 0.38 + p.phase) * p.drift * 10;

        const dx   = mouseRef.current.x - p.baseX;
        const dmy  = mouseRef.current.y - p.baseY;
        const dist = Math.hypot(dx, dmy);
        let mx = 0, my = 0;
        if (dist < 120 && dist > 0) {
          const f = (1 - dist / 120) * 18;
          mx = (dx / dist) * f * 0.3;
          my = (dmy / dist) * f * 0.3;
        }

        p.rotation += p.rotationSpeed;
        const dScale = 0.45 + p.depth * 0.55;
        const finalX = p.baseX + mx;
        const finalY = p.baseY + w1 + w2 + w3 + w4 + dy + my;
        const { r, g, b } = p.color;

        ctx.save();
        ctx.translate(finalX, finalY);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.font = `${p.size * dScale}px "Segoe UI Symbol","Apple Symbols",serif`;
        ctx.fillStyle = `rgba(${r},${g},${b},${p.opacity * dScale})`;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    // Small delay for layout stabilization
    const init = setTimeout(() => { applySize(); draw(); }, 60);

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchmove",  onTouch,   { passive: true });
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

  /* ── Theme tokens ────────────────────────────────────────── */
  const T = {
    bg:          isDark
      ? "linear-gradient(180deg,#030712 0%,#060d1f 55%,#0c1525 100%)"
      : "linear-gradient(180deg,#f8f9ff 0%,#f0f2ff 50%,#e8ecf8 100%)",
    overlay:     isDark
      ? "radial-gradient(ellipse 100% 60% at 50% 100%,rgba(56,189,248,0.06) 0%,transparent 70%)"
      : "radial-gradient(ellipse 100% 60% at 50% 100%,rgba(74,52,204,0.05) 0%,transparent 70%)",
    bottomFade:  isDark
      ? "linear-gradient(to top,rgba(56,189,248,0.08) 0%,transparent 100%)"
      : "linear-gradient(to top,rgba(74,52,204,0.06) 0%,transparent 100%)",
    titleGrad:   isDark
      ? "linear-gradient(135deg,#818cf8 0%,#22d3ee 55%,#fb923c 100%)"
      : "linear-gradient(135deg,#4A34CC 0%,#0096C7 55%,#EC4A0A 100%)",
    subtitleClr: isDark ? "#fb923c" : "#EC4A0A",
    plusClr:     isDark ? "rgba(129,140,248,0.55)" : "rgba(74,52,204,0.45)",
    typeClr1:    isDark ? "#818cf8" : "#251A66",
    typeClr2:    isDark ? "#22d3ee" : "#EC4A0A",
    compassFx:   isDark
      ? "drop-shadow(0 20px 60px rgba(56,189,248,0.32))"
      : "drop-shadow(0 20px 60px rgba(74,52,204,0.22))",
    starClr:     isDark ? "#c7d2fe" : "#a5b4fc",
    starFx:      isDark
      ? "drop-shadow(0 0 7px rgba(199,210,254,1))"
      : "drop-shadow(0 0 3px rgba(165,180,252,0.5))",
    starAnim:    isDark ? "twinkleDark" : "twinkle",
    sunOp:       isDark ? 0 : 0.65,
    moonOp:      isDark ? 0.9 : 0,
    textColor:   isDark ? "rgba(255,255,255,0.9)" : "rgba(15,15,35,0.85)",
    cardBg:      isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
    cardBorder:  isDark ? "rgba(255,255,255,0.08)" : "rgba(74,52,204,0.12)",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeInUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatPlus   { 0%,100%{transform:translateY(0) rotate(0deg);opacity:.38} 50%{transform:translateY(-12px) rotate(90deg);opacity:.7} }
        @keyframes gradShift   { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        @keyframes bounceArr   { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(5px)} }
        @keyframes spinSlow    { to{transform:rotate(360deg)} }
        @keyframes moonFloat   { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-14px) rotate(5deg)} }
        @keyframes pulseSlow   { 0%,100%{opacity:.28;transform:scale(1)} 50%{opacity:.55;transform:scale(1.12)} }
        @keyframes rayRot      { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes twinkle     { 0%,100%{opacity:.1;transform:scale(.82)} 50%{opacity:.4;transform:scale(1.15)} }
        @keyframes twinkleDark { 0%,100%{opacity:.35;transform:scale(.82)} 50%{opacity:1;transform:scale(1.18)} }
        @keyframes blink       { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        @keyframes rotateCW    { to{transform:rotate(360deg)} }
        @keyframes rotateCCW   { to{transform:rotate(-360deg)} }
        @keyframes heroReveal  { from{opacity:0;transform:translateY(20px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes badgePop    { from{opacity:0;transform:scale(0.8) translateY(8px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes shimmer     { 0%{background-position:-200% center} 100%{background-position:200% center} }

        /* Base utility animations */
        .ch-fadeInUp  { opacity:0; animation:fadeInUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .ch-floatPlus { animation:floatPlus 4.2s ease-in-out infinite; }
        .ch-bounceArr { animation:bounceArr 2.2s ease-in-out infinite; }
        .ch-moonFloat { animation:moonFloat 6s ease-in-out infinite; }
        .ch-pulseSlow { animation:pulseSlow 10s ease-in-out infinite; }
        .ch-rayRot    { animation:rayRot 60s linear infinite; }
        .ch-rotateCW  { animation:rotateCW  20s linear infinite; }
        .ch-rotateCCW { animation:rotateCCW 15s linear infinite; }
        .ch-blink     { animation:blink 0.85s infinite; display:inline-block; }

        .d200  { animation-delay:.2s; }
        .d400  { animation-delay:.4s; }
        .d600  { animation-delay:.6s; }
        .d800  { animation-delay:.8s; }
        .d1000 { animation-delay:1.0s; }
        .d1200 { animation-delay:1.2s; }
        .d1400 { animation-delay:1.4s; }

        /* Subtitle */
        .ch-subtitle {
          font-family:'DM Sans',sans-serif;
          font-size:clamp(10px,1.1vw,13px);
          letter-spacing:3.5px;
          text-transform:uppercase;
          font-weight:700;
          background-size:200% 200%;
          background-clip:text;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
          cursor:default;
        }
        .ch-subtitle:hover { animation:gradShift 3s ease infinite; }

        /* Title lines */
        .ch-title-line {
          display:block;
          font-family:'Bebas Neue',cursive;
          font-size:clamp(48px,9.5vw,140px);
          font-weight:400;
          line-height:0.93;
          letter-spacing:0.01em;
          background-size:200% 200%;
          background-clip:text;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          cursor:default;
          transition:background .7s;
          will-change:transform;
        }
        .ch-title-line:hover { animation:gradShift 3s ease infinite; }

        /* CTA Button */
        .ch-btn {
          display:inline-flex;
          align-items:center;
          gap:12px;
          padding:15px 30px;
          background:linear-gradient(135deg,#EC4A0A 0%,#ff6935 100%);
          border:none;
          border-radius:100px;
          color:#fff;
          font-family:'DM Sans',sans-serif;
          font-size:11px;
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
        .ch-btn:hover {
          transform:translateY(-4px) scale(1.03);
          box-shadow:0 10px 36px rgba(236,74,10,.44),0 20px 64px rgba(236,74,10,.22);
        }
        .ch-btn:hover::before { opacity:1; }
        .ch-btn:active { transform:translateY(-1px) scale(1.01); }
        .ch-btn:focus-visible {
          outline:3px solid #EC4A0A;
          outline-offset:4px;
        }

        /* Stat badges */
        .ch-badge {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:3px;
          padding:14px 20px;
          border-radius:16px;
          border:1px solid;
          backdrop-filter:blur(12px);
          -webkit-backdrop-filter:blur(12px);
          transition:all 0.3s ease;
          cursor:default;
          animation:badgePop 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .ch-badge:hover {
          transform:translateY(-3px);
        }
        .ch-badge-num {
          font-family:'Bebas Neue',cursive;
          font-size:clamp(22px,2.5vw,32px);
          line-height:1;
        }
        .ch-badge-lbl {
          font-family:'DM Sans',sans-serif;
          font-size:clamp(9px,0.75vw,11px);
          letter-spacing:2px;
          text-transform:uppercase;
          font-weight:600;
          opacity:0.7;
        }

        /* Decorative plus sign */
        .ch-decor {
          font-size:24px;
          font-weight:300;
          user-select:none;
          cursor:default;
          line-height:1;
        }

        /* Scroll indicator */
        .ch-scroll {
          position:absolute;
          bottom:32px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:8px;
          opacity:0;
          animation:fadeInUp 1s 2s ease forwards;
          z-index:20;
          cursor:pointer;
          text-decoration:none;
        }
        .ch-scroll-label {
          font-family:'DM Sans',sans-serif;
          font-size:9px;
          letter-spacing:3px;
          text-transform:uppercase;
          font-weight:600;
          opacity:0.45;
        }

        /* ── RESPONSIVE ── */
        @media (max-width:1024px) {
          .ch-grid { grid-template-columns:1fr !important; gap:0 !important; }
          .ch-compass-wrap { display:flex !important; max-width:340px !important; margin:0 auto; }
          .ch-left { align-items:center !important; text-align:center !important; padding-top:60px; }
          .ch-left .ch-btn { align-self:center !important; }
          .ch-left .ch-decor { align-self:center !important; }
          .ch-badges { justify-content:center !important; }
        }
        @media (max-width:768px) {
          .ch-grid { padding:0 20px !important; }
          .ch-compass-wrap { max-width:260px !important; }
          .ch-badges { gap:10px !important; }
        }
        @media (max-width:480px) {
          .ch-grid { padding:0 16px !important; }
          .ch-compass-wrap { max-width:200px !important; }
          .ch-badge { padding:10px 14px !important; }
        }
        @media (min-width:1600px) {
          .ch-grid { max-width:1440px !important; }
        }
        @media (min-width:2000px) {
          .ch-grid { max-width:1800px !important; }
        }

        @media (prefers-reduced-motion:reduce) {
          .ch-fadeInUp,.ch-floatPlus,.ch-bounceArr,.ch-moonFloat,
          .ch-pulseSlow,.ch-rayRot,.ch-rotateCW,.ch-rotateCCW,
          .ch-badge,.ch-scroll { animation:none !important; opacity:1 !important; transform:none !important; }
        }
      `}</style>

      {/* ── SECTION ──────────────────────────────────────────── */}
      <section
        role="banner"
        aria-label="DPV Offshore - EPC Services for the Offshore Industry"
        style={{
          position:"relative",
          width:"100%",
          minHeight:"100vh",
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
        {/* Overlay glow */}
        <div aria-hidden="true" style={{position:"absolute",inset:0,background:T.overlay,pointerEvents:"none",zIndex:1,transition:"background .7s"}}/>

        {/* ── SKY LAYER ──────────────────────────────────────── */}
        <div aria-hidden="true" style={{position:"absolute",top:0,left:0,width:"100%",height:"66%",zIndex:2,pointerEvents:"none",overflow:"hidden"}}>

          {/* SUN */}
          <div style={{position:"absolute",top:"8%",left:"10%",opacity:T.sunOp,transition:"opacity .85s ease"}}>
            <div style={{position:"relative",width:88,height:88}}>
              <SunIcon style={{width:88,height:88,color:"#EC4A0A",animation:"spinSlow 32s linear infinite"}} />
              <div className="ch-pulseSlow" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:140,height:140,borderRadius:"50%",background:"radial-gradient(circle,rgba(236,74,10,.4) 0%,transparent 68%)",pointerEvents:"none"}}/>
              <div className="ch-rayRot" style={{position:"absolute",top:"-42%",left:"-42%",width:"184%",height:"184%",borderRadius:"50%",background:"conic-gradient(from 0deg,transparent 0deg,rgba(236,74,10,.12) 8deg,transparent 16deg,rgba(236,74,10,.07) 24deg,transparent 32deg)",pointerEvents:"none"}}/>
            </div>
          </div>

          {/* MOON */}
          <div style={{position:"absolute",top:"8%",left:"11%",opacity:T.moonOp,transition:"opacity .85s ease"}}>
            <div style={{position:"relative",width:78,height:78}}>
              <MoonIcon style={{width:78,height:78,color:"#e0f2fe",animation:"moonFloat 6s ease-in-out infinite",filter:"drop-shadow(0 0 22px rgba(224,242,254,.65))"}}/>
              <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:125,height:125,borderRadius:"50%",background:"radial-gradient(circle,rgba(224,242,254,.2) 0%,transparent 68%)",pointerEvents:"none"}}/>
            </div>
          </div>

          {/* STARS — visible in both modes at different opacities */}
          {STARS.map((s, i) => (
            <div
              key={i}
              aria-hidden="true"
              style={{
                position:"absolute",
                top:s.top, left:s.left,
                width:s.sz, height:s.sz,
                color:T.starClr,
                filter:T.starFx,
                animation:`${T.starAnim} ${s.dur} ease-in-out ${s.delay} infinite`,
                transition:"color .7s,filter .7s,opacity .7s",
                opacity: isDark ? 1 : 0.35,
              }}
            >
              <StarIcon style={{width:"100%",height:"100%"}}/>
            </div>
          ))}
        </div>

        {/* ── CANVAS ─────────────────────────────────────────── */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:3}}
        />

        {/* ── CONTENT GRID ────────────────────────────────────── */}
        <div
          className="ch-grid"
          style={{
            position:"relative",
            zIndex:10,
            width:"100%",
            maxWidth:1280,
            margin:"0 auto",
            padding:"80px 40px",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"56px",
            alignItems:"center",
            minHeight:"100vh",
          }}
        >
          {/* ── LEFT: Text ──────────────────────────────────── */}
          <div
            className="ch-left"
            style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"24px",alignItems:"flex-start"}}
          >
            {/* Decorative + */}
            <span
              className="ch-decor ch-floatPlus"
              aria-hidden="true"
              style={{color:T.plusClr,alignSelf:"flex-start",transition:"color .7s"}}
            >+</span>

            {/* Subtitle */}
            <p
              className="ch-subtitle ch-fadeInUp d200"
              style={{
                margin:0,
                backgroundImage:`linear-gradient(135deg,${T.subtitleClr},${T.subtitleClr})`,
              }}
            >
              Engineering · Procurement · Construction
            </p>

            {/* Main Heading */}
            <div style={{display:"flex",flexDirection:"column",gap:0}}>
              <h1 style={{margin:0,padding:0,border:0,display:"flex",flexDirection:"column",gap:0}}>
                {["Let's work","together!"].map((line, i) => (
                  <span key={i} className={`ch-fadeInUp ${i===0?"d400":"d600"}`}>
                    <span
                      className="ch-title-line"
                      style={{backgroundImage:T.titleGrad}}
                    >{line}</span>
                  </span>
                ))}
              </h1>

              {/* Typing tagline */}
              <div
                style={{marginTop:"20px",minHeight:"3.4em"}}
                aria-live="polite"
                aria-atomic="false"
              >
                <p style={{
                  fontFamily:"'Cormorant Garamond',serif",
                  fontStyle:"italic",
                  fontWeight:300,
                  fontSize:"clamp(1.25rem,2.6vw,2.5rem)",
                  lineHeight:1.25,
                  margin:0,
                  letterSpacing:"-0.01em",
                }}>
                  <span style={{display:"block",color:T.typeClr1,transition:"color .7s"}}>
                    {currentLine===0 ? displayText : LINES[0]}
                    {currentLine===0 && !typingDone &&
                      <span className="ch-blink" style={{color:T.typeClr1}} aria-hidden="true">|</span>
                    }
                  </span>
                  {currentLine >= 1 && (
                    <span style={{display:"block",color:T.typeClr2,transition:"color .7s"}}>
                      {currentLine===1 ? displayText : LINES[1]}
                      {currentLine===1 && !typingDone &&
                        <span className="ch-blink" style={{color:T.typeClr2}} aria-hidden="true">|</span>
                      }
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Stat Badges */}
            <div
              className="ch-badges"
              style={{
                display:"flex",
                gap:"14px",
                flexWrap:"wrap",
                marginTop:"4px",
              }}
            >
              {[
                { num:"25+", lbl:"Years Experience", delay:"1.0s" },
                { num:"200+", lbl:"Projects Delivered", delay:"1.15s" },
                { num:"40+", lbl:"Countries Served",  delay:"1.3s" },
              ].map(({ num, lbl, delay }) => (
                <div
                  key={lbl}
                  className="ch-badge"
                  style={{
                    background:T.cardBg,
                    borderColor:T.cardBorder,
                    animationDelay:delay,
                    color:T.textColor,
                    transition:"background .7s,border-color .7s,color .7s",
                  }}
                >
                  <span
                    className="ch-badge-num"
                    style={{
                      backgroundImage:T.titleGrad,
                      backgroundClip:"text",
                      WebkitBackgroundClip:"text",
                      WebkitTextFillColor:"transparent",
                    }}
                  >{num}</span>
                  <span className="ch-badge-lbl">{lbl}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="ch-btn ch-fadeInUp d1200"
              style={{alignSelf:"flex-start",marginTop:"8px"}}
              aria-label="Contact DPV Offshore for EPC services"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
              CONTACT US
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" style={{flexShrink:0}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* ── RIGHT: Compass ──────────────────────────────── */}
          <div
            className="ch-compass-wrap"
            style={{display:"flex",alignItems:"center",justifyContent:"center"}}
          >
            <div
              className="ch-fadeInUp d800"
              style={{
                position:"relative",
                aspectRatio:"1/1",
                width:"100%",
                maxWidth:580,
              }}
            >
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="ch-pulseSlow"
                style={{
                  position:"absolute",
                  inset:"-8%",
                  borderRadius:"50%",
                  background: isDark
                    ? "radial-gradient(circle,rgba(56,189,248,0.09) 0%,transparent 70%)"
                    : "radial-gradient(circle,rgba(74,52,204,0.07) 0%,transparent 70%)",
                  transition:"background .7s",
                }}
              />

              <img
                src="/dpv-offshore-redesign-website/images/compass_design.png"
                alt="DPV Offshore compass — navigation through offshore engineering"
                draggable="false"
                loading="eager"
                style={{
                  width:"100%",
                  height:"100%",
                  objectFit:"contain",
                  filter:T.compassFx,
                  userSelect:"none",
                  transition:"filter .7s",
                  display:"block",
                }}
              />

              {/* Needle layers */}
              <div
                aria-hidden="true"
                style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}
              >
                <div style={{position:"relative",width:"75%",height:"75%"}}>
                  <img
                    src="/dpv-offshore-redesign-website/images/big_needl.png"
                    className="ch-rotateCW"
                    draggable="false"
                    alt=""
                    style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}}
                  />
                  <img
                    src="/dpv-offshore-redesign-website/images/small_needls.png"
                    className="ch-rotateCCW"
                    draggable="false"
                    alt=""
                    style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Floating decorative + (top-right) ────────────── */}
        <span
          className="ch-decor ch-floatPlus"
          aria-hidden="true"
          style={{
            position:"absolute",
            top:"22%",
            right:"14%",
            color:T.plusClr,
            animationDelay:"2.1s",
            zIndex:10,
            transition:"color .7s",
          }}
        >+</span>

        {/* Second decorative + */}
        <span
          className="ch-decor ch-floatPlus"
          aria-hidden="true"
          style={{
            position:"absolute",
            top:"58%",
            right:"42%",
            color:T.plusClr,
            fontSize:16,
            opacity:0.5,
            animationDelay:"3.5s",
            zIndex:10,
            transition:"color .7s",
          }}
        >+</span>

        {/* ── Bottom fade ───────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position:"absolute",
            bottom:0,
            left:0,
            right:0,
            height:160,
            background:T.bottomFade,
            pointerEvents:"none",
            zIndex:5,
            transition:"background .7s",
          }}
        />

        {/* ── Scroll indicator ──────────────────────────────── */}
        <a
          href="#services"
          className="ch-scroll"
          aria-label="Scroll down to explore our services"
          style={{color: T.textColor}}
        >
          <span className="ch-scroll-label" style={{color: T.textColor}}>Scroll</span>
          <svg
            className="ch-bounceArr"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{opacity:.4}}
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </section>
    </>
  );
}