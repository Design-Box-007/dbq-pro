import React from 'react';
import ProgressBar from '../common/ProgressBar';

const WhyChooseDBQ = () => {
  const features = [
    {
      title: "State-of-the-Art Technology",
      description: "We use industry-leading sound systems, lighting rigs, and special effects equipment to deliver crystal-clear audio and breathtaking visuals."
    },
    {
      title: "Tailored Solutions",
      description: "Whether it's an intimate gathering or a stadium concert, we customize our services to match your venue, audience, and vision."
    },
    {
      title: "Expert Engineering",
      description: "Our experienced sound engineers, designers, and technicians ensure seamless execution with meticulous attention to detail."
    },
    {
      title: "Reliability & Support",
      description: "From pre-event setup to on-site technical assistance, we stay with you every step of the way."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Decorative top line */}
        <div className="-mt-12 md:mt-0 mb-14 md:mb-10">
          <ProgressBar />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium  md:text-left mb-10">
          Why Choose DBQ Pro
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-b from-[#2F2F2F] to-[#313131] p-6 sm:p-8 rounded-lg transition-all duration-300 hover:bg-zinc-700"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-medium mb-4 sm:mb-6">
                {feature.title}
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Decorative ProgressBar */}
        <div className="mt-14 md:mt-10">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDBQ;
