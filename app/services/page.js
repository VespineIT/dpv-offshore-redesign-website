import Image from 'next/image';

export default function Services() {
  const serviceCards = [
    {
      title: "Ship Conversion",
      desc: "Our offshore services include many details and clicking information.",
      img: "/ship-1.jpg" // Replace with your actual image paths
    },
    {
      title: "Ship electrical engineering & Technology",
      desc: "Our offshore services include many details and clicking information.",
      img: "/ship-2.jpg"
    },
    {
      title: "System Intergration",
      desc: "Our offshore services include many details and clicking information.",
      img: "/ship-3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[450px] flex items-center overflow-hidden">
        {/* Abstract Background Gradient/Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-orange-100 z-0" />
        
        <div className="container mx-auto px-6 relative z-10 flex items-center justify-between">
          <div className="w-1/2">
             {/* Replace with your specific Hero Illustration */}
            <img 
              src="/hero-illustration.png" 
              alt="Engineer" 
              className="max-h-[400px] object-contain"
            />
          </div>
          <div className="w-1/2 text-right">
            <h1 className="text-6xl font-extrabold text-brand-purple tracking-tight">
              OUR <br /> <span className="text-brand-purple/90">SERVICES</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- TAB NAVIGATION --- */}
      <nav className="flex justify-center space-x-12 py-12 border-b border-gray-100">
        <button className="text-xl font-bold text-gray-800 border-b-4 border-brand-purple pb-2">
          Ship Repair and Dry docking
        </button>
        <button className="text-xl font-bold text-gray-500 hover:text-brand-purple transition-colors pb-2">
          System Configuration
        </button>
      </nav>

      {/* --- SERVICES GRID --- */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col items-center p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-full h-48 bg-blue-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center">
                 {/* Placeholder for the blue ship illustrations */}
                <div className="relative w-full h-full">
                   <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover p-4"
                   />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 px-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center text-xs">
                ➜
              </button>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}