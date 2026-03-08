'use client';

import { useEffect, useState, useRef } from 'react';

const expertiseList = [
  { title: 'Products',          desc: 'Industry-leading offshore products engineered to meet the highest performance standards.' },
  { title: 'Operations',        desc: 'End-to-end operational management from onshore logistics to subsea execution.' },
  { title: 'Technical Support', desc: 'Round-the-clock expert technical assistance keeping your assets running at peak efficiency.' },
  { title: 'Repair Orders',     desc: 'Fast-turnaround repair workflows minimizing downtime and maximizing asset lifespan.' },
  { title: 'Maintenance',       desc: 'Planned and corrective maintenance programs designed for uncompromising safety and reliability.' },
];

const ORANGE = '#EC4A0A';
const PURPLE = '#4A3FA0';
const PURPLE_LIGHT = '#6B5FD4';
const BG = '#FAFAFA';
const GRAY_BG = '#F0EFF7';

export default function ExpertiseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(i);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % expertiseList.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Arc geometry: items spread across top semicircle
  // angleStart = 200deg, angleEnd = -20deg (left to right on top)
  const R = 260; // arc radius for items
  const cx = 0;  // SVG centre x (we'll use transform)
  const totalItems = expertiseList.length;

  const getItemAngle = (i) => {
    // spread from 205° to -25° (going counterclockwise = left to right on top half)
    const startDeg = 205;
    const endDeg = -25;
    return startDeg + (endDeg - startDeg) * (i / (totalItems - 1));
  };

  const degToRad = (d) => (d * Math.PI) / 180;

  const getItemPos = (i) => {
    const angle = degToRad(getItemAngle(i));
    return {
      x: R * Math.cos(angle),
      y: -R * Math.sin(angle), // negative because SVG y goes down
    };
  };

  // Progress for the orange arc based on activeIndex
  // Arc goes from 205° to -25° (230° sweep). We highlight up to active item.
  const arcFraction = activeIndex / (totalItems - 1);

  // SVG arc helper
  const polarToCart = (r, angleDeg) => {
    const a = degToRad(angleDeg);
    return { x: r * Math.cos(a), y: -r * Math.sin(a) };
  };

  const describeArc = (r, startDeg, endDeg) => {
    const s = polarToCart(r, startDeg);
    const e = polarToCart(r, endDeg);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    // Going from startDeg to endDeg counterclockwise in SVG coords
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 0 ${e.x} ${e.y}`;
  };

  const arcStart = 205;
  const arcEnd = -25;
  const activeAngle = arcStart + (arcEnd - arcStart) * arcFraction;
  const bgArcPath     = describeArc(R, arcStart, arcEnd);
  const activeArcPath = describeArc(R, arcStart, activeAngle);

  const SZ = 640; // SVG viewBox size
  const halfSZ = SZ / 2;

  return (
    <section
      style={{
        backgroundColor: BG,
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* ── Top white zone ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '56px 24px 0',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Badge */}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: ORANGE,
            color: '#fff',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '6px 20px',
            borderRadius: '100px',
            marginBottom: '28px',
          }}
        >
          Our Expertise
        </span>

        {/* Main heading */}
        <h2
          style={{
            color: PURPLE,
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: '820px',
            margin: '0 auto 16px',
            letterSpacing: '-0.02em',
          }}
        >
          Smart asset management for{' '}
          <span style={{ color: ORANGE }}>safe, efficient</span> &amp;{' '}
          <span style={{ color: ORANGE }}>high value performance</span>
        </h2>

        {/* ── Circular Arc Navigator ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            marginTop: '-20px',
          }}
        >
          <svg
            viewBox={`${-halfSZ} ${-halfSZ} ${SZ} ${SZ}`}
            style={{ width: '100%', overflow: 'visible' }}
          >
            {/* Background track arc */}
            <path
              d={bgArcPath}
              fill="none"
              stroke="#E5E0F5"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Active progress arc */}
            <path
              d={activeArcPath}
              fill="none"
              stroke={ORANGE}
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)' }}
            />

            {/* Dot at active arc tip */}
            {(() => {
              const tip = polarToCart(R, activeAngle);
              return (
                <circle
                  cx={tip.x}
                  cy={tip.y}
                  r="7"
                  fill={ORANGE}
                  style={{ transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)', filter: `drop-shadow(0 0 6px ${ORANGE})` }}
                />
              );
            })()}

            {/* Item labels around the arc */}
            {expertiseList.map((item, i) => {
              const { x, y } = getItemPos(i);
              const isActive = i === activeIndex;
              const angle = getItemAngle(i);
              // Determine text-anchor based on position on arc
              let anchor = 'middle';
              if (angle > 160) anchor = 'end';
              else if (angle < 20) anchor = 'start';

              return (
                <g
                  key={item.title}
                  onClick={() => goTo(i)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Invisible hit area */}
                  <circle cx={x} cy={y} r="40" fill="transparent" />

                  {/* Node dot */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 10 : 6}
                    fill={isActive ? PURPLE : '#D1CAF5'}
                    style={{ transition: 'all 0.4s ease' }}
                  />
                  {isActive && (
                    <circle
                      cx={x}
                      cy={y}
                      r="18"
                      fill="none"
                      stroke={PURPLE}
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                      opacity="0.5"
                    />
                  )}

                  {/* Label */}
                  <text
                    x={x + (anchor === 'end' ? -26 : anchor === 'start' ? 26 : 0)}
                    y={y + (y < -20 ? -28 : 32)}
                    textAnchor={anchor}
                    fill={isActive ? PURPLE : '#9490C0'}
                    fontSize={isActive ? '15' : '13'}
                    fontWeight={isActive ? '700' : '500'}
                    style={{ transition: 'all 0.4s ease', fontFamily: "'Sora', sans-serif" }}
                  >
                    {item.title}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Centre active label — overlaid on the SVG */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -10%)',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            {/* Down-arrow triangle */}
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '16px solid transparent',
                borderRight: '16px solid transparent',
                borderTop: `24px solid ${PURPLE_LIGHT}`,
                margin: '0 auto 12px',
                opacity: 0.85,
              }}
            />
            <p
              key={activeIndex}
              style={{
                color: PURPLE,
                fontSize: 'clamp(22px, 3.5vw, 42px)',
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                margin: 0,
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {expertiseList[activeIndex].title}
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom gray zone ── */}
      <div
        style={{
          backgroundColor: GRAY_BG,
          padding: '48px 24px 56px',
          textAlign: 'center',
        }}
      >
        {/* Description for active item */}
        <p
          key={`desc-${activeIndex}`}
          style={{
            color: PURPLE,
            fontSize: 'clamp(14px, 1.6vw, 17px)',
            fontWeight: 700,
            lineHeight: 1.75,
            maxWidth: '780px',
            margin: '0 auto 20px',
            opacity: animating ? 0 : 1,
            transition: 'opacity 0.4s ease',
          }}
        >
          {expertiseList[activeIndex].desc}
        </p>

        {/* Static boilerplate paragraph */}
        <p
          style={{
            color: '#6B6B8E',
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            fontWeight: 400,
            lineHeight: 1.8,
            maxWidth: '780px',
            margin: '0 auto 36px',
          }}
        >
          DPV Offshore specializes in engineering, procurement, and construction (EPC) services for the offshore industry,
          covering onshore, offshore, and subsea operations. From design engineering to manufacturing, installation,
          maintenance, repair, and component supply, we deliver seamless projects with the highest safety and quality
          standards. Built on strong client relationships and proven performance, we are trusted for our commitment to
          excellence, reliability, and value-driven delivery.
        </p>

        {/* Progress dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {expertiseList.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === activeIndex ? '28px' : '10px',
                height: '10px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: i === activeIndex ? ORANGE : '#C9C4E8',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: '100%',
            maxWidth: '780px',
            height: '3px',
            backgroundColor: '#E0DBF5',
            borderRadius: '2px',
            margin: '24px auto 0',
            overflow: 'hidden',
          }}
        >
          <div
            key={activeIndex}
            style={{
              height: '100%',
              backgroundColor: ORANGE,
              borderRadius: '2px',
              animation: 'progressFill 5s linear',
            }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700;800;900&display=swap');
        @keyframes progressFill {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
}