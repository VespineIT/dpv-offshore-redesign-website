"use client";

import React from "react";
import { motion } from "framer-motion";

const HowWeWork = () => {
  // --- Framer Motion Variants ---
  
  // Animates the main curved line
  const pathVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2.5, ease: "easeInOut" },
    },
  };

  // Animates the icons and text popping up. 
  // We use a custom delay so each step pops when the line reaches it.
  const popVariant = (delay) => ({
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: delay,
      },
    },
  });

  // Simple slide-in for tablet/mobile where there is no path
  const listVariant = (index) => ({
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
    },
  });
  // Timings mapped to the drawing of the 2.5-second path
  const timings = {
    step1: 0.2, // Start
    step2: 0.7, // 1/4 way
    step3: 1.3, // 1/2 way
    step4: 1.9, // 3/4 way
    step5: 2.4, // End
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-[#030712] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="font-['Poppins'] text-3xl md:text-3xl font-bold text-[#FF4500] text-center tracking-widest uppercase mb-8 md:mb-16">
          How We Work
        </h2>

        {/* --- Desktop Layout --- */}
        <div className="hidden xl:block relative max-w-[1400px] mx-auto h-[600px]">
          {/* Main SVG with curve and hexagon icons */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1375 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-10 pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter
                id="filter0_d_2284_3462"
                x="38.9903"
                y="47.8896"
                width="1308"
                height="384"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="35" />
                <feGaussianBlur stdDeviation="11" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2284_3462"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2284_3462"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_2284_3462">
                <rect
                  width="42.9176"
                  height="41.5"
                  fill="white"
                  transform="translate(31 292.64)"
                />
              </clipPath>
            </defs>

            {/* Animated Curved line path */}
            <g filter="url(#filter0_d_2284_3462)">
              <motion.path
                d="M62.9628 312.145C113.764 340.942 245.549 370.89 300.349 370.89C403.375 370.89 503.557 290.492 554.353 191.776C600.881 101.355 626.519 86.5728 655.48 65.6474C673.679 57.0085 748.535 41.4584 792.215 62.1918C835.894 82.9253 865.013 129.959 880.997 153.764C922.777 237.274 965.025 279.317 1004.91 279.317C1058.56 279.317 1067.58 263.191 1092.75 237.274C1119.21 210.022 1160.45 133.327 1163.01 128.488C1191.02 75.503 1227.33 62.1918 1323.03 115.764"
                stroke="#5A45D3"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                className="transition-colors duration-300"
                variants={pathVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
            </g>

            {/* --- ICONS (Animated) --- */}
            
            {/* 1. Mail */}
            <motion.g
              transform="translate(0, 10)"
              variants={popVariant(timings.step1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <path d="M47.9141 362.122C50.7473 363.666 54.1707 363.666 57.0039 362.122L94.4346 341.731C97.4889 340.067 99.3896 336.866 99.3896 333.388V293.392C99.3896 289.914 97.4889 286.713 94.4346 285.049L57.0039 264.657C54.1707 263.114 50.7473 263.114 47.9141 264.657L10.4834 285.049C7.42902 286.713 5.52832 289.914 5.52832 293.392V333.388C5.52832 336.866 7.42902 340.067 10.4834 341.731L47.9141 362.122Z" fill="#EC4A0A" stroke="white" strokeWidth="3" />
              <g clipPath="url(#clip0_2284_3462)">
                <path d="M69.2611 308.041C69.5582 307.787 70 308.025 70 308.427V325.202C70 327.376 68.3623 329.14 66.3438 329.14H34.6562C32.6377 329.14 31 327.376 31 325.202V308.435C31 308.025 31.4342 307.795 31.7389 308.05C33.4451 309.477 35.7074 311.29 43.477 317.368C45.0842 318.632 47.7959 321.29 50.5 321.273C53.2193 321.298 55.9844 318.582 57.5307 317.368C65.3002 311.29 67.5549 309.469 69.2611 308.041ZM50.5 318.64C52.2672 318.673 54.8113 316.245 56.091 315.244C66.199 307.344 66.9684 306.655 69.2992 304.686C69.741 304.317 70 303.743 70 303.136V301.577C70 299.404 68.3623 297.64 66.3438 297.64H34.6562C32.6377 297.64 31 299.404 31 301.577V303.136C31 303.743 31.259 304.309 31.7008 304.686C34.0316 306.647 34.801 307.344 44.909 315.244C46.1887 316.245 48.7328 318.673 50.5 318.64Z" fill="white" />
              </g>
            </motion.g>

            {/* 2. Pencil */}
            <g transform="translate(130, 7)"> 
              {/* 2. Framer Motion animates inside without overriding the position */}
              <motion.g
                variants={popVariant(timings.step2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <path d="M340 330C342.833 331.544 346.257 331.544 349.09 330L386.52 309.609C389.575 307.945 391.476 304.744 391.476 301.266V261.27C391.476 257.792 389.575 254.591 386.52 252.927L349.09 232.535C346.257 230.992 342.833 230.992 340 232.535L302.569 252.927C299.515 254.591 297.614 257.792 297.614 261.27V301.266C297.614 304.744 299.515 307.945 302.569 309.609L340 330Z" fill="#EC4A0A" stroke="white" strokeWidth="3" />
                <path d="M358 297H330C328.9 297 328 296.1 328 295C328 293.9 328.9 293 330 293H358C359.1 293 360 293.9 360 295C360 296.1 359.1 297 358 297Z" fill="white" />
                <path d="M351.1 261.9L332.5 280.5C332.1 280.9 331.8 281.5 331.7 282.1L330 291.5C329.9 292.2 330.1 292.9 330.6 293.4C331 293.8 331.5 294 332 294C332.1 294 332.3 294 332.4 294L341.8 292.3C342.4 292.2 343 291.9 343.4 291.5L362 272.9C364 270.9 364 267.7 362 265.7L358.3 262C356.3 260 353.1 260 351.1 261.9Z" fill="white" />
              </motion.g>
            </g>

            {/* 3. Document */}
            <motion.g
              variants={popVariant(timings.step3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <path d="M687.877 100.122C690.71 101.666 694.133 101.666 696.967 100.122L734.397 79.7307C737.452 78.0667 739.352 74.8661 739.352 71.3879V31.3918C739.352 27.9137 737.452 24.7131 734.397 23.0491L696.967 2.65747C694.133 1.11396 690.71 1.11401 687.877 2.65747L650.446 23.0491C647.392 24.7131 645.491 27.9136 645.491 31.3918V71.3879C645.491 74.8662 647.392 78.0667 650.446 79.7307L687.877 100.122Z" fill="#EC4A0A" stroke="white" strokeWidth="3" />
              <path d="M709.258 48.7649H694.769C693.451 48.7649 692.188 48.271 691.256 47.392C690.324 46.5129 689.801 45.3206 689.801 44.0774V30.4055C689.801 30.3019 689.757 30.2026 689.68 30.1293C689.602 30.056 689.497 30.0149 689.387 30.0149H679.866C678.109 30.0149 676.424 30.6734 675.182 31.8455C673.94 33.0176 673.242 34.6073 673.242 36.2649V67.5149C673.242 69.1725 673.94 70.7622 675.182 71.9343C676.424 73.1064 678.109 73.7649 679.866 73.7649H703.048C704.805 73.7649 706.49 73.1064 707.732 71.9343C708.974 70.7622 709.672 69.1725 709.672 67.5149V49.1555C709.672 49.0519 709.628 48.9526 709.551 48.8793C709.473 48.806 709.368 48.7649 709.258 48.7649ZM699.736 64.3899H683.178C682.738 64.3899 682.317 64.2253 682.007 63.9322C681.696 63.6392 681.522 63.2418 681.522 62.8274C681.522 62.413 681.696 62.0156 682.007 61.7225C682.317 61.4295 682.738 61.2649 683.178 61.2649H699.736C700.176 61.2649 700.597 61.4295 700.907 61.7225C701.218 62.0156 701.392 62.413 701.392 62.8274C701.392 63.2418 701.218 63.6392 700.907 63.9322C700.597 64.2253 700.176 64.3899 699.736 64.3899ZM699.736 56.5774H683.178C682.738 56.5774 682.317 56.4128 682.007 56.1197C681.696 55.8267 681.522 55.4293 681.522 55.0149C681.522 54.6005 681.696 54.2031 682.007 53.91C682.317 53.617 682.738 53.4524 683.178 53.4524H699.736C700.176 53.4524 700.597 53.617 700.907 53.91C701.218 54.2031 701.392 54.6005 701.392 55.0149C701.392 55.4293 701.218 55.8267 700.907 56.1197C700.597 56.4128 700.176 56.5774 699.736 56.5774Z" fill="#FFFAFA" />
              <path d="M708.349 45.307L693.466 31.2631C693.437 31.2359 693.4 31.2175 693.36 31.21C693.32 31.2025 693.279 31.2064 693.241 31.2211C693.203 31.2358 693.171 31.2607 693.148 31.2927C693.125 31.3247 693.113 31.3623 693.113 31.4008V44.0775C693.113 44.492 693.287 44.8894 693.598 45.1824C693.908 45.4754 694.33 45.64 694.769 45.64H708.203C708.244 45.6399 708.284 45.6283 708.318 45.6069C708.352 45.5854 708.378 45.555 708.394 45.5194C708.409 45.4838 708.413 45.4446 708.405 45.4069C708.398 45.3691 708.378 45.3344 708.349 45.307Z" fill="#FFFAFA" />
            </motion.g>

            {/* 4. Gear */}
            <motion.g
              transform="translate(0, 5)"
              variants={popVariant(timings.step4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <path d="M1014.88 310.122C1017.71 311.666 1021.13 311.666 1023.97 310.122L1061.4 289.731C1064.45 288.067 1066.35 284.866 1066.35 281.388V241.392C1066.35 237.914 1064.45 234.713 1061.4 233.049L1023.97 212.657C1021.13 211.114 1017.71 211.114 1014.88 212.657L977.446 233.049C974.392 234.713 972.491 237.914 972.491 241.392V281.388C972.491 284.866 974.392 288.067 977.446 289.731L1014.88 310.122Z" fill="#EC4A0A" stroke="white" strokeWidth="3" />
              <path d="M1018.96 270.765C1021.66 270.765 1023.84 268.582 1023.84 265.89C1023.84 263.198 1021.66 261.015 1018.96 261.015C1016.27 261.015 1014.09 263.198 1014.09 265.89C1014.09 268.582 1016.27 270.765 1018.96 270.765Z" fill="white" />
              <path d="M1040.74 270.358L1040.69 270.32L1037.48 267.806C1037.28 267.646 1037.12 267.439 1037.01 267.204C1036.9 266.968 1036.85 266.711 1036.86 266.452V265.278C1036.85 265.021 1036.9 264.766 1037.01 264.532C1037.12 264.299 1037.28 264.094 1037.48 263.936L1040.69 261.421L1040.74 261.382C1041.23 260.971 1041.56 260.397 1041.67 259.763C1041.78 259.129 1041.66 258.477 1041.34 257.923L1037 250.418L1036.98 250.395C1036.66 249.849 1036.15 249.435 1035.54 249.226C1034.94 249.016 1034.29 249.024 1033.69 249.248L1033.65 249.261L1029.89 250.777C1029.65 250.873 1029.39 250.912 1029.13 250.889C1028.88 250.866 1028.63 250.783 1028.42 250.646C1028.08 250.436 1027.74 250.238 1027.4 250.051C1027.18 249.93 1026.99 249.758 1026.84 249.55C1026.7 249.341 1026.6 249.102 1026.57 248.851L1026 244.83L1025.99 244.757C1025.87 244.134 1025.53 243.572 1025.04 243.167C1024.55 242.762 1023.94 242.537 1023.31 242.53H1014.62C1013.98 242.532 1013.35 242.762 1012.86 243.178C1012.37 243.594 1012.04 244.17 1011.93 244.804L1011.92 244.861L1011.36 248.89C1011.32 249.141 1011.23 249.38 1011.09 249.588C1010.94 249.796 1010.75 249.969 1010.53 250.091C1010.19 250.277 1009.85 250.476 1009.52 250.682C1009.3 250.818 1009.05 250.9 1008.8 250.923C1008.55 250.945 1008.29 250.907 1008.05 250.811L1004.28 249.287L1004.25 249.273C1003.65 249.049 1002.99 249.041 1002.39 249.252C1001.78 249.462 1001.27 249.877 1000.95 250.425L1000.93 250.447L996.589 257.958C996.262 258.512 996.142 259.165 996.252 259.799C996.362 260.434 996.694 261.009 997.189 261.421L997.236 261.459L1000.44 263.973C1000.64 264.134 1000.81 264.34 1000.91 264.576C1001.02 264.811 1001.07 265.068 1001.06 265.327V266.501C1001.07 266.758 1001.02 267.014 1000.91 267.247C1000.8 267.48 1000.64 267.685 1000.44 267.844L997.236 270.358L997.189 270.397C996.694 270.809 996.363 271.383 996.253 272.016C996.143 272.65 996.262 273.302 996.589 273.856L1000.93 281.362L1000.94 281.384C1001.27 281.93 1001.78 282.344 1002.38 282.554C1002.98 282.763 1003.64 282.756 1004.24 282.532L1004.28 282.518L1008.05 281.002C1008.29 280.961 1008.55 280.868 1008.8 280.891C1009.05 280.914 1009.3 280.996 1009.52 281.132C1009.86 281.342 1010.2 281.541 1010.53 281.727C1010.75 281.849 1010.94 282.022 1011.09 282.23C1011.23 282.438 1011.32 282.677 1011.36 282.928L1011.92 286.949L1011.93 287.022C1012.05 287.645 1012.39 288.207 1012.88 288.612C1013.37 289.017 1013.98 289.242 1014.61 289.249H1023.31C1023.94 289.247 1024.57 289.017 1025.06 288.601C1025.55 288.185 1025.88 287.609 1025.99 286.975L1026 286.918L1026.56 282.889C1026.6 282.638 1026.69 282.399 1026.83 282.191C1026.98 281.983 1027.17 281.81 1027.39 281.688C1027.73 281.502 1028.07 281.303 1028.4 281.097C1028.62 280.961 1028.87 280.879 1029.12 280.856C1029.37 280.834 1029.63 280.872 1029.87 280.968L1033.64 282.492L1033.67 282.506C1034.27 282.73 1034.93 282.738 1035.53 282.527C1036.14 282.317 1036.65 281.902 1036.97 281.354L1036.98 281.332L1041.33 273.821C1041.66 273.267 1041.78 272.614 1041.67 271.98C1041.56 271.345 1041.23 270.77 1040.73 270.358H1040.74ZM1018.96 274.64C1017.23 274.64 1015.54 274.127 1014.1 273.165C1012.66 272.203 1011.54 270.835 1010.88 269.238C1010.22 267.64 1010.04 265.88 1010.37 264.182C1010.71 262.484 1011.54 260.922 1012.76 259.696C1013.99 258.47 1015.55 257.635 1017.25 257.301C1018.95 256.968 1020.71 257.15 1022.3 257.822C1023.9 258.495 1025.27 259.625 1026.23 261.069C1027.19 262.513 1027.71 264.206 1027.71 265.936C1027.7 268.247 1026.79 270.46 1025.16 272.088C1023.53 273.716 1021.32 274.632 1019.01 274.64H1018.96Z" fill="white" />
            </motion.g>

            {/* 5. Flag */}
            <motion.g
              transform="translate(0, 10)"
              variants={popVariant(timings.step5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <path d="M1317.96 149.122C1320.79 150.666 1324.22 150.666 1327.05 149.122L1364.48 128.731C1367.53 127.067 1369.43 123.866 1369.43 120.388V80.3918C1369.43 76.9137 1367.53 73.7131 1364.48 72.0491L1327.05 51.6575C1324.22 50.114 1320.79 50.114 1317.96 51.6575L1280.53 72.0491C1277.47 73.7131 1275.57 76.9136 1275.57 80.3918V120.388C1275.57 123.866 1277.47 127.067 1280.53 128.731L1317.96 149.122Z" fill="#EC4A0A" stroke="white" strokeWidth="3" />
              <path d="M1307.48 118.154C1308.26 118.154 1308.89 117.578 1308.89 116.845V107.14C1309.35 106.948 1311.09 106.32 1313.81 106.32C1320.65 106.32 1324.95 109.479 1331.46 109.479C1334.34 109.479 1335.42 109.182 1336.82 108.589C1338.1 108.048 1338.93 107.14 1338.93 105.534V87.8174C1338.93 86.8748 1338.08 86.3337 1337.01 86.3337C1336.1 86.3337 1334.4 87.0668 1331.22 87.0668C1324.71 87.0668 1320.43 83.9075 1313.57 83.9075C1310.68 83.9075 1309.59 84.2042 1308.19 84.7977C1306.91 85.3388 1306.08 86.2464 1306.08 87.8348V116.845C1306.08 117.561 1306.73 118.154 1307.48 118.154Z" fill="white" />
            </motion.g>
          </svg>

          {/* Text overlays (Desktop) - Animated */}
          
          <motion.div 
  className="absolute left-0 bottom-[8%] w-[350px]" /* Slightly widened to accommodate side-by-side layout */
  variants={popVariant(timings.step1)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Main Flex Container: Left column for Number, Right column for Text */}
  <div className="flex items-start gap-4"> 
    
    {/* Left Side: Number */}
    <span
      className="text-[120px] font-bold leading-none select-none block transition-colors duration-300 text-transparent bg-clip-text"
      style={{
        background: "linear-gradient(180deg, #251a66 0%, rgba(94,83,139,0.5) 45.67%, rgba(255,242,242,0.5) 85.1%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      1
    </span>
    
    {/* Right Side: Title & Description Column */}
    <div className="flex flex-col mt-4"> {/* mt-4 visually aligns the title with the top of the number */}
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 transition-colors duration-300">
        Send Inquiry
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-2 leading-relaxed transition-colors duration-300">
        Clients share their requirements, project details, or questions through our inquiry channels. This helps us understand your needs and respond with the right solutions promptly.
      </p>
    </div>

  </div>
</motion.div>

<motion.div 
  className="absolute left-[14%] top-[7%] w-[300px]"
  variants={popVariant(timings.step2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="flex items-center">
    <span
      className="text-[120px] font-bold leading-none select-none block -mb-6 transition-colors duration-300 text-transparent bg-clip-text"
      style={{
        background: "linear-gradient(180deg, #251a66 0%, rgba(94,83,139,0.5) 45.67%, rgba(255,242,242,0.5) 85.1%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      2
    </span>
    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 ml-2 transition-colors duration-300">
      Site inspection
    </h3>
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-4 leading-relaxed pr-8 transition-colors duration-300">
    Our team visits the site to assess conditions, take measurements, and identify technical requirements, ensuring accurate planning and smooth project execution.
  </p>
</motion.div>

          <motion.div 
  className="absolute left-[45%] -translate-x-1/2 top-[22%] w-[320px]"
  variants={popVariant(timings.step3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="flex items-center">
    <span
      className="text-[120px] font-bold leading-none select-none block -mb-6 transition-colors duration-300 text-transparent bg-clip-text"
      style={{
        background: "linear-gradient(180deg, #251a66 0%, rgba(94,83,139,0.5) 45.67%, rgba(255,242,242,0.5) 85.1%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      3
    </span>
    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 ml-2 transition-colors duration-300">
      Proposal & Quotation
    </h3>
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-4 leading-relaxed pr-8 transition-colors duration-300">
    We prepare a detailed proposal and cost estimate based on site findings and client requirements, clearly outlining scope, timelines, and pricing.
  </p>
</motion.div>

          <motion.div 
            className="absolute right-[13%] top-[-6%] w-[300px]"
            variants={popVariant(timings.step4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center">
              <span
                className="text-[120px] font-bold leading-none select-none block -mb-6 transition-colors duration-300 text-transparent bg-clip-text"
                style={{
                  background: "linear-gradient(180deg, #251a66 0%, rgba(94,83,139,0.5) 45.67%, rgba(255,242,242,0.5) 85.1%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                4
              </span>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 ml-2 transition-colors duration-300">Project execution</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-4 leading-relaxed pr-8 transition-colors duration-300">
            Once approved, our skilled team executes the project efficiently, following approved plans, quality standards, and safety practices.
            </p>
          </motion.div>

          <motion.div 
  className="absolute right-[-4%] bottom-[32%] w-[280px] text-left"
  variants={popVariant(timings.step5)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="flex items-center">
    <span
      className="text-[120px] font-bold leading-none select-none block -mb-6 transition-colors duration-300 text-transparent bg-clip-text"
      style={{
        background: "linear-gradient(180deg, #251a66 0%, rgba(94,83,139,0.5) 45.67%, rgba(255,242,242,0.5) 85.1%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      5
    </span>
    <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-100 ml-2 transition-colors duration-300">Testing & handover</h3>
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-[13px] mt-4 leading-relaxed pr-8 transition-colors duration-300">
  After completion, we thoroughly test the work to ensure performance and quality, then formally hand over the project with all necessary documentation.
  </p>
</motion.div>
        </div>

        {/* --- Tablet Layout --- */}
        <div className="hidden lg:block xl:hidden relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {[
  { 
    id: 1, 
    title: "Send Inquiry", 
    desc: "Clients share their requirements, project details, or questions through our inquiry channels to get prompt solutions.", 
    colSpan: "" 
  },
  { 
    id: 2, 
    title: "Site Inspection", 
    desc: "Our team visits the site to assess conditions, take measurements, and identify technical requirements for accurate planning.", 
    colSpan: "" 
  },
  { 
    id: 3, 
    title: "Proposal & Quotation", 
    desc: "We prepare a detailed proposal and cost estimate based on site findings, outlining scope, timelines, and pricing.", 
    colSpan: "" 
  },
  { 
    id: 4, 
    title: "Project Execution", 
    desc: "Our skilled team executes the project efficiently, following approved plans, quality standards, and safety practices.", 
    colSpan: "" 
  },
  { 
    id: 5, 
    title: "Testing & Handover", 
    desc: "We thoroughly test the work to ensure performance and quality before formally handing over all necessary documentation.", 
    colSpan: "md:col-span-2 justify-center" 
  }
].map((item, index) => (
              <motion.div 
                key={item.id} 
                className={`flex items-start gap-4 ${item.colSpan}`}
                custom={index}
                variants={listVariant(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative flex-shrink-0">
                  <span className="text-8xl font-bold text-[#251A66] dark:text-[#E0E7FF] leading-none select-none transition-colors duration-300">{item.id}</span>
                </div>
                <div className={`pt-4 ${item.id === 5 ? 'max-w-md' : ''}`}>
                  <h3 className={`text-xl font-bold text-gray-700 dark:text-gray-100 transition-colors duration-300 ${item.italic ? 'italic' : ''}`}>{item.title}</h3>
                  {item.desc && <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed transition-colors duration-300">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Mobile Layout --- */}
        <div className="lg:hidden space-y-8">
          {[
  { 
    id: 1, 
    title: "Send Inquiry", 
    desc: "Our team is ready to assist you anytime. Simply share your requirement with us." 
  },
  { 
    id: 2, 
    title: "Site Inspection", 
    desc: "After your request, our experienced engineers carry out a detailed inspection." 
  },
  { 
    id: 3, 
    title: "Proposal & Quotation", 
    desc: "Based on the inspection findings, we prepare a transparent quotation." 
  },
  { 
    id: 4, 
    title: "Project Execution", 
    desc: "Once approved, our certified marina technicians begin the job using professional tools." 
  },
  { 
    id: 5, 
    title: "Testing & Handover", 
    desc: "After completion, we thoroughly test performance and quality before formal handover." 
  }
].map((item, index) => (
            <motion.div 
              key={item.id} 
              className="flex gap-4"
              custom={index}
              variants={listVariant(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex-shrink-0 relative">
                <span className="text-6xl font-bold text-[#251A66] dark:text-[#E0E7FF] leading-none select-none transition-colors duration-300">{item.id}</span>
              </div>
              <div className="pt-2">
                <h3 className={`text-lg font-bold text-gray-700 dark:text-gray-100 transition-colors duration-300 ${item.id === 2 ? 'italic' : ''}`}>{item.title}</h3>
                {item.desc && <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed transition-colors duration-300">{item.desc}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;