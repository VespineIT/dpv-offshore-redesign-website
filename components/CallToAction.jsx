import React from 'react';

export default function CallToAction() {
  return (
    // Section Background: dark:bg-[#0f172a]
    <section className="w-full px-4 py-16 flex justify-center items-center bg-white dark:bg-[#0f172a] transition-colors duration-300">
      
      {/* Main Container Card 
          Background: bg-[#E0DEF7] -> dark:bg-[#1e293b] (Deep Slate/Indigo) 
      */}
      <div className="relative w-full max-w-6xl bg-[#E0DEF7] dark:bg-[#1e293b] rounded-[50px] p-10 md:p-20 overflow-visible shadow-sm transition-colors duration-300">
        
        {/* Decorative Background Circles (Left Bottom) 
            Border: border-purple-300/40 -> dark:border-purple-400/20 (Subtler in dark mode)
        */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none overflow-hidden rounded-bl-[50px]">
             <div className="absolute bottom-[-50px] left-[-50px] w-full h-full border border-purple-300/40 dark:border-purple-400/20 rounded-full transition-colors duration-300" />
             <div className="absolute bottom-[-20px] left-[-20px] w-[80%] h-[80%] border border-purple-300/40 dark:border-purple-400/20 rounded-full transition-colors duration-300" />
             <div className="absolute bottom-[10px] left-[10px] w-[60%] h-[60%] border border-purple-300/40 dark:border-purple-400/20 rounded-full transition-colors duration-300" />
        </div>

         {/* Decorative Background Circles (Right Top) */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none overflow-hidden rounded-tr-[50px]">
             <div className="absolute top-[-100px] right-[-100px] w-full h-full border border-purple-300/40 dark:border-purple-400/20 rounded-full transition-colors duration-300" />
             <div className="absolute top-[-50px] right-[-50px] w-[80%] h-[80%] border border-purple-300/40 dark:border-purple-400/20 rounded-full transition-colors duration-300" />
        </div>

        {/* Floating Paper Plane Icon (Top Right Corner) */}
        <div className="absolute -top-6 -right-4 md:-top-8 md:-right-8 z-20">
          {/* Ring color must match the CARD background to look like a cutout.
              ring-white -> dark:ring-[#1e293b] 
          */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#6C63FF] rounded-full flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-[#1e293b] transition-all duration-300">
             {/* Paper Plane SVG */}
            <svg 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               fill="currentColor" 
               className="w-8 h-8 md:w-10 md:h-10 text-white translate-x-[-2px] translate-y-[2px]"
            >
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          {/* Heading - Text color changes to white */}
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#4A4A68] dark:text-white leading-tight max-w-4xl tracking-tight transition-colors duration-300">
            Become our Customer and Ready to Get Smarter and Faster Service ?
          </h2>

          {/* Form Area */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            
            {/* Input Field Container 
                bg-white -> dark:bg-[#0f172a] (Dark background for input)
            */}
            <div className="flex items-center bg-white dark:bg-[#0f172a] rounded-xl px-5 py-4 w-full md:w-[450px] shadow-sm transition-colors duration-300">
              {/* Mail Icon SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                // Icon Color: text-gray-800 -> dark:text-gray-400
                className="w-6 h-6 text-gray-800 dark:text-gray-400 mr-3 transition-colors duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              
              <input
                type="email"
                placeholder="Enter Your Email"
                // Input Text: text-gray-700 -> dark:text-gray-100
                className="flex-grow outline-none text-gray-700 dark:text-gray-100 placeholder-gray-500 font-semibold text-lg bg-transparent transition-colors duration-300"
              />
            </div>

            {/* Button - Orange works on both themes, no changes needed */}
            <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-4 px-10 rounded-xl shadow-md transition-colors w-full md:w-auto text-lg whitespace-nowrap">
              Start for Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}