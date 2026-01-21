import Image from 'next/image';

export default function Industries() {
  // Data for the cards based on the image provided
  const industryData = [
    {
      title: "Oil & Gas",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Repairs",
      description: "See all of our services related to details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Conversion",
      description: "Expert conversion solutions details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Electrical Engineering & Technology",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Ship Mechanical Engineering & Technology",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Oil Field",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Process Automation & Fluid Control",
      description: "See all of our services related to details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Oil & Gas",
      description: "Expert offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    {
      title: "Oil & Gas",
      description: "See all of our services related to details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png"
    },
    // Added rows to match the scrollable look
    {
      title: "Oil & Gas",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png" 
    },
    {
      title: "Oil & Gas",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png" 
    },
    {
      title: "Oil & Gas",
      description: "Dep offshore services include these details and adding information.",
      image: "/dpv-offshore-redesign-website/images/industry-oil-gas.png" 
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-24">
      
      {/* --- HERO SECTION --- */}
<div className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
  {/* Background Image/Gradient */}
  <div className="absolute inset-0 z-0">
     <Image 
       src="/dpv-offshore-redesign-website/images/worker-hero.png" 
       alt="Offshore Worker Art"
       fill 
       // 'object-center' helps keep the face visible on different screen sizes
       className="object-cover object-center scale-110"
     />
     
     {/* Gradient Overlay - Adjusted to match the orange in the helmet */}
     <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 via-transparent to-blue-900/80 mix-blend-multiply"></div>
     <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white"></div>
  </div>

  {/* Text Overlay */}
  <div className="relative z-10 text-center mt-10">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
      <span className="text-[#FF5722] block md:inline mr-4">OUR</span>
      <span className="text-[#3E4095]">INDUSTRIES</span>
    </h1>
  </div>
</div>

      {/* --- CARDS GRID SECTION --- */}
      <div className="max-w-[1400px] mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
          
          {industryData.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[30px] border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-56 bg-gray-100 m-2 rounded-[25px] overflow-hidden w-[calc(100%-16px)] mx-auto mt-2">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>

                {/* Orange Action Button (Bottom Right) */}
                <div className="absolute bottom-5 right-5">
                  <button className="w-8 h-8 rounded-full bg-[#FF5722] hover:bg-[#F4511E] flex items-center justify-center shadow-md transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 text-white"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}