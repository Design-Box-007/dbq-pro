import React from 'react';
import Image from 'next/image';
import { images } from '../../../public/assets';
import TrustedBy from './TrustedBy';

const AboutDBQPro = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#444444] to-[#282828] py-16 px-4 sm:px-6 lg:px-9 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
            About DBQ Pro
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
  At DBQ Pro, we don&apos;t just deliver sound—we craft experiences. Whether it&apos;s a live concert, corporate event, 
  or a professional studio setup, we bring technical expertise, cutting-edge equipment, and a passion for 
  audio excellence to every project.
</p>

        </div>

        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-6">
          <Image
            src={images.png.img2}
            alt="Professional audio mixer"
            fill
            className="object-cover"
          />
        </div>

        {/* Trusted By Section */}
        <TrustedBy/>
      </div>
    </div>
  );
};

export default AboutDBQPro;