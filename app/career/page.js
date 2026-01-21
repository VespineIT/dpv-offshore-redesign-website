import Image from 'next/image';

export default function Careers() {
  // Job Listing Data based on the image
  const jobOpenings = [
    {
      title: "Marine Electrician / ETO",
      location: "Colombo",
    },
    {
      title: "Naval Architect",
      location: "Colombo",
    },
    {
      title: "Marine Surveyor",
      location: "Colombo",
    },
    {
      title: "Ship Repair Technician",
      location: "Colombo",
    },
    {
      title: "Automation & Instrumentation Engineer",
      location: "Colombo",
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-24 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[600px] rounded-b-[50px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/dpv-offshore-redesign-website/images/career-hero.jpg" // Replace with your actual worker image path
            alt="Offshore Worker" 
            fill 
            className="object-cover object-center"
          />
          
          {/* Orange Gradient Overlay (Bottom Fade) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#E88D67] via-transparent to-transparent opacity-90 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FFAB91] to-transparent opacity-80"></div>
        </div>
      </section>

      {/* --- JOB LISTINGS SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 mt-16 space-y-6">
        
        {jobOpenings.map((job, index) => (
          <div 
            key={index} 
            className="group w-full bg-[#EBEAF8] rounded-[20px] p-6 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Job Title */}
            <h3 className="text-[#2A2A68] text-xl md:text-2xl font-bold mb-4 md:mb-0 w-full md:w-1/3 text-center md:text-left">
              {job.title}
            </h3>

            {/* Location with Icon */}
            <div className="flex items-center justify-center space-x-2 mb-4 md:mb-0 w-full md:w-1/3">
              {/* Location Pin Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 text-[#FF5722]"
              >
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#FF5722] font-medium text-lg">
                {job.location}
              </span>
            </div>

            {/* Apply Button */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors flex items-center space-x-2">
                <span>Apply Now</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={3} 
                    stroke="currentColor" 
                    className="w-4 h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}

      </section>
    </main>
  );
}