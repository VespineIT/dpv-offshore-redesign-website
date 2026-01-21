import React from 'react';
import Image from 'next/image';

const HowWeWork = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex justify-center">
        <Image
          src="/dpv-offshore-redesign-website/images/howtowork.png"
          alt="How We Work Process Diagram"
          // IMPORTANT: When using a string path for 'src' in next/image, 
          // you MUST provide width and height props representing the image's intrinsic dimensions.
          // Adjust these numbers to match the actual resolution of your image file.
          width={1200} 
          height={600}
          className="w-full max-w-8xl h-auto object-contain"
          // Optional: Add 'priority' if this image is visible immediately on page load
          // priority 
        />
      </div>
    </section>
  );
};

export default HowWeWork;