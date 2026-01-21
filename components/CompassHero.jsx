import Image from 'next/image';

/* ===============================
   🧭 COMPASS QUICK CONTROLS
   =============================== */
const COMPASS_SCALE = 1.7;      // 0.8 | 1 | 1.2 | 1.4
const COMPASS_MOVE_X = -150;    // + → right | - → left (px)
const COMPASS_MOVE_Y = -0;   // + → down  | - → up   (px)

export default function CompassHero() {
  return (
    <section className="relative w-full min-h-[1100px] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-purple-50 p-4 md:p-8">
      
      {/* Main Card */}
      <div className="relative w-full max-w-[1900px] h-[850px] mx-auto overflow-hidden rounded-[60px] border-[3px] border-orange-500 bg-white shadow-2xl">
        
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/dpv-offshore-redesign-website/images/background_image.jpg"
            alt="Background Design"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-between px-16 md:px-24">
          
          {/* Left Content */}
          <div className="flex flex-col items-start space-y-12 max-w-4xl pt-10">
            <h1 className="text-6xl md:text-8xl font-bold italic leading-tight text-[#2b5ba3] tracking-wide drop-shadow-sm">
              <span className="block mb-4">YOUR ASSETS ARE</span>
              <span className="block">IN SAFE HANDS</span>
            </h1>

            <button className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-bold py-4 px-12 rounded-xl text-2xl shadow-lg transition-transform hover:scale-105">
              CONTACT US
            </button>
          </div>

          {/* 🧭 Compass (Scale + Move Controlled) */}
          <div
            className="relative w-[750px] h-[750px] flex-shrink-0"
            style={{
              transform: `
                translate(${COMPASS_MOVE_X}px, ${COMPASS_MOVE_Y}px)
                scale(${COMPASS_SCALE})
              `,
              transformOrigin: 'center',
            }}
          >
            <div className="relative w-full h-full">

              {/* Compass Base */}
              <Image
                src="/dpv-offshore-redesign-website/images/compass-design.png"
                alt="Compass Base"
                fill
                className="object-contain opacity-95"
                priority
              />

              {/* Big Needle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="translate-x-[120px]">
                  <div className="animate-spin-slow">
                    <div className="relative w-[480px] h-[480px]">
                      <Image
                        src="/dpv-offshore-redesign-website/images/big-needl.png"
                        alt="Big Needle"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Small Needle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="translate-x-[120px]">
                  <div className="animate-spin-reverse-slow">
                    <div className="relative w-[300px] h-[300px]">
                      <Image
                        src="/dpv-offshore-redesign-website/images/small-needls.png"
                        alt="Small Needle"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
