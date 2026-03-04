"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpertiseShowcase() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const h = (e) => setIsDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const T = {
    bg: isDark ? "#030712" : "#FAFAFA",
    textMain: isDark ? "#F9FAFB" : "#251A66",
    textMuted: isDark ? "#9CA3AF" : "#4B5563",
    accent: "#EC4A0A",
    activePill: isDark ? "#6366F1" : "#EC4A0A",
    rule: isDark ? "rgba(255,255,255,0.1)" : "rgba(37,26,102,0.12)",
  };

  const expertiseList = [
    { title: "Products",          imageUrl: "/dpv-offshore-redesign-website/images/expertise_products.png" },
    { title: "Operations",        imageUrl: "/dpv-offshore-redesign-website/images/expertise_operations.png" },
    { title: "Technical Support", imageUrl: "/dpv-offshore-redesign-website/images/expertise_support.png" },
    { title: "Repair Orders",     imageUrl: "/dpv-offshore-redesign-website/images/expertise_repair.png" },
    { title: "Maintenance",       imageUrl: "/dpv-offshore-redesign-website/images/expertise_maintenance.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % expertiseList.length);
    }, 5000);
    return () => clearInterval(id);
  }, [expertiseList.length]);

  return (
    <section
      style={{
        backgroundColor: T.bg,
        color: T.textMain,
        fontFamily: "'DM Sans', sans-serif",
        transition: "background-color 0.5s ease, color 0.5s ease",
        minHeight: "100vh", // Ensures the section is at least full screen height
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        .es-wrap {
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 1600px;
          width: 100%;
          margin: 0 auto;
          padding: 6vh 6vw; /* Viewport-height based padding to fit screens dynamically */
        }

        /* TOP */
        .es-top {
          border-top: 1px solid ${T.rule};
          padding-top: 4vh;
          padding-bottom: 4vh;
          width: 100%;
        }

        .es-statement {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 4vw, 64px); /* Scaled up slightly to fill space better */
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.02em;
          width: 100%; /* Removed max-width to allow it to fill the whole top */
          margin: 0;
        }
        .es-statement strong {
          color: ${T.accent};
          font-weight: 500;
        }

        /* MIDDLE */
        .es-middle {
          flex: 1; /* Pushes the top and bottom apart, filling available space */
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          border-top: 1px solid ${T.rule};
          min-height: 0; /* Important for preventing flexbox overflow */
        }

        /* LEFT TABS */
        .es-tabs {
          border-right: 1px solid ${T.rule};
          padding-right: 0;
          display: flex;
          flex-direction: column;
        }

        .es-tabs-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${T.textMuted};
          padding: 3vh 40px 3vh 0;
          border-bottom: 1px solid ${T.rule};
          margin: 0;
        }

        .es-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 0 40px 0 0;
          flex: 1; /* Tabs stretch evenly to fill vertical space */
          cursor: pointer;
          border-bottom: 1px solid ${T.rule};
          overflow: hidden;
        }

        .es-tab-fill {
          position: absolute;
          inset: 0;
          background: ${T.activePill};
          z-index: 0;
        }

        .es-tab-num {
          font-family: 'DM Mono', 'Courier New', monospace;
          font-size: 11px;
          font-weight: 500;
          position: relative;
          z-index: 1;
          width: 24px;
          text-align: right;
          flex-shrink: 0;
          transition: color 0.25s;
        }

        .es-tab-divider {
          width: 18px;
          height: 1px;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: background-color 0.25s;
        }

        .es-tab-name {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: clamp(15px, 1.1vw, 18px);
          position: relative;
          z-index: 1;
          flex: 1;
          transition: color 0.25s;
        }

        .es-tab-arrow {
          position: relative;
          z-index: 1;
          margin-left: auto;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.3s;
          flex-shrink: 0;
        }
        .es-tab.active .es-tab-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* RIGHT IMAGE */
        .es-image-col {
          position: relative;
          overflow: hidden;
          height: 100%; /* Fits perfectly into the flex grid container */
          min-height: 300px; /* Fallback for very small screens */
        }

        .es-image-col img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .es-prog {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: ${T.accent};
          z-index: 5;
        }

        /* BOTTOM */
        .es-bottom {
          border-top: 1px solid ${T.rule};
          padding-top: 4vh;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
        }

        .es-paragraph {
          font-size: clamp(14px, 1vw, 16px);
          line-height: 1.9;
          color: ${T.textMuted};
          font-weight: 400;
          margin: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .es-wrap { padding: 80px 6vw; height: auto; min-height: 100vh; }
          .es-middle { grid-template-columns: 1fr; flex: none; }
          .es-tabs { border-right: none; }
          .es-tab { min-height: 70px; flex: none; }
          .es-image-col { min-height: 320px; aspect-ratio: 16/9; }
          .es-bottom { grid-template-columns: 1fr 1fr; margin-top: 4vh; }
        }
        @media (max-width: 640px) {
          .es-bottom { grid-template-columns: 1fr; }
          .es-tab { padding-right: 20px; }
        }
      `}</style>

      <div className="es-wrap">

        {/* TOP */}
        <div className="es-top">
          <h2 className="es-statement">
            Delivering <strong>safe, efficient, and cost-effective</strong> asset management
            solutions that ensure <strong>optimum value and performance.</strong>
          </h2>
        </div>

        {/* MIDDLE */}
        <div className="es-middle">

          {/* Left: Tabs */}
          <div className="es-tabs">
            <p className="es-tabs-label">Our Expertise</p>

            {expertiseList.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.title}
                  className={`es-tab${isActive ? " active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {isActive && (
                    <motion.div
                      className="es-tab-fill"
                      layoutId="tabFill"
                      transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.8 }}
                    />
                  )}

                  <span
                    className="es-tab-num"
                    style={{ color: isActive ? "rgba(255,255,255,0.45)" : T.textMuted }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="es-tab-divider"
                    style={{ backgroundColor: isActive ? "rgba(255,255,255,0.35)" : T.rule }}
                  />

                  <span
                    className="es-tab-name"
                    style={{ color: isActive ? "#FFFFFF" : T.textMain }}
                  >
                    {item.title}
                  </span>

                  <span className="es-tab-arrow">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        d="M2.5 7.5H12.5M12.5 7.5L8 3M12.5 7.5L8 12"
                        stroke="#FFFFFF"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Image */}
          <div className="es-image-col">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={expertiseList[activeIndex].imageUrl}
                alt={expertiseList[activeIndex].title}
                initial={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1,    filter: "blur(0px)" }}
                exit={{    opacity: 0, scale: 0.97,  filter: "blur(4px)" }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              />
            </AnimatePresence>

            <motion.div
              className="es-prog"
              key={`prog-${activeIndex}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>

        </div>

        {/* BOTTOM */}
        <div className="es-bottom">
          <p className="es-paragraph">
            DPV Offshore specializes in engineering, procurement, and construction (EPC)
            services for the offshore industry, encompassing onshore, offshore, and subsea
            operations.
          </p>
          <p className="es-paragraph">
            Our comprehensive capabilities — from design engineering to manufacturing,
            installation, maintenance, repair, and component supply — enable seamless project
            execution with uncompromising safety and quality standards.
          </p>
          <p className="es-paragraph">
            Built on long-term client relationships and proven performance, we continue to earn
            the trust of our partners through our consistent commitment to excellence,
            reliability, and value-driven delivery.
          </p>
        </div>

      </div>
    </section>
  );
}