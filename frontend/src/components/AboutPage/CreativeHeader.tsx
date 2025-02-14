import React from 'react';
import ContactUs from '../common/ContactUs';

const CreativeHeader = () => {
  return (
    <div className="w-full relative">
      <div className="min-h-screen max-w-7xl mx-auto font-sans text-white flex flex-col justify-center ">
        
        {/* Header Section */}
        <div className="mb-6 md:mb-8  sm:text-left px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-tight">
  <span className="text-white">Let&apos;s Create Something</span>
  <br />
  <span className="text-[var(--green)]">Extraordinary</span>
</h1>

        </div>

        {/* Contact Section */}
        <ContactUs />
      </div>
    </div>
  );
};

export default CreativeHeader;
