"use client";

import { useEffect, useState } from "react";

export default function AboutExpertiseSection() {
  /* ── Dark mode detection ────────────────────────────────── */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const h = (e) => setIsDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* ── Theme tokens (Matching Hero Palette) ───────────────── */
  const T = {
    // Slightly off-background from the hero to create a natural section break
    bg: isDark ? "#050814" : "#FAFAFA", 
    textMain: isDark ? "#F9FAFB" : "#251A66", // White vs Deep Navy
    textMuted: isDark ? "#A1A1AA" : "#4B5563",
    accent: "#EC4A0A", // Burnt Orange (Brand consistent)
    cardBg: isDark ? "rgba(255, 255, 255, 0.03)" : "#FFFFFF",
    cardBorder: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 26, 102, 0.08)",
    cardHoverBorder: isDark ? "#6366F1" : "#EC4A0A", // Indigo for dark, Orange for light
    cardHoverShadow: isDark 
      ? "0 10px 30px -10px rgba(99, 102, 241, 0.2)" 
      : "0 10px 30px -10px rgba(236, 74, 10, 0.15)",
  };

  const expertiseList = [
    "Products",
    "Operations",
    "Technical Support",
    "Repair Orders",
    "Maintenance"
  ];

  return (
    <section
      style={{
        backgroundColor: T.bg,
        color: T.textMain,
        padding: "120px 6vw",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background-color 0.5s ease, color 0.5s ease",
        position: "relative",
        borderTop: `1px solid ${T.cardBorder}`
      }}
    >
      <style>{`
        .ae-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Large Intro Statement */
        .ae-statement {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 4vw, 56px);
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          max-width: 1100px;
          margin-bottom: 80px;
        }
        
        .ae-statement strong {
          color: ${T.accent};
          font-weight: 500;
        }

        /* Grid Layout */
        .ae-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          align-items: start;
        }

        /* Expertise Column */
        .ae-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${T.accent};
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ae-subtitle::before {
          content: "";
          display: block;
          width: 24px;
          height: 2px;
          background-color: ${T.accent};
        }

        .ae-expertise-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ae-expertise-card {
          background: ${T.cardBg};
          border: 1px solid ${T.cardBorder};
          padding: 24px 32px;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 500;
          color: ${T.textMain};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: default;
        }

        .ae-expertise-card:hover {
          border-color: ${T.cardHoverBorder};
          transform: translateX(8px);
          box-shadow: ${T.cardHoverShadow};
        }

        .ae-expertise-card svg {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: ${T.cardHoverBorder};
        }

        .ae-expertise-card:hover svg {
          opacity: 1;
          transform: translateX(0);
        }

        /* Paragraph Column */
        .ae-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding-top: 10px;
        }

        .ae-paragraph {
          font-size: clamp(16px, 1.5vw, 20px);
          line-height: 1.8;
          color: ${T.textMuted};
          font-weight: 400;
        }

        /* Mobile Responsiveness */
        @media (max-width: 992px) {
          .ae-grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
          .ae-statement {
            margin-bottom: 64px;
          }
          .ae-expertise-card:hover {
            transform: translateX(4px);
          }
        }
      `}</style>

      <div className="ae-container">
        {/* Main Statement */}
        <h2 className="ae-statement">
          Delivering <strong>safe, efficient, and cost-effective</strong> asset management solutions that ensure <strong>optimum value and performance.</strong>
        </h2>

        {/* Two-Column Content Area */}
        <div className="ae-grid">
          
          {/* Left Column: Expertise List */}
          <div>
            <h3 className="ae-subtitle">OUR EXPERTISE</h3>
            <ul className="ae-expertise-list">
              {expertiseList.map((item, index) => (
                <li key={index} className="ae-expertise-card">
                  {item}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Descriptions */}
          <div className="ae-paragraphs">
            <p className="ae-paragraph">
              DPV Offshore specializes in engineering, procurement, and construction (EPC) services for the offshore industry, encompassing onshore, offshore, and subsea operations.
            </p>
            <p className="ae-paragraph">
              Our comprehensive capabilities — from design engineering to manufacturing, installation, maintenance, repair, and component supply — enable us to deliver seamless project execution with uncompromising safety and quality standards.
            </p>
            <p className="ae-paragraph">
              Built on long-term client relationships and proven performance, we continue to earn the trust of our partners through our consistent commitment to excellence, reliability, and value-driven delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}