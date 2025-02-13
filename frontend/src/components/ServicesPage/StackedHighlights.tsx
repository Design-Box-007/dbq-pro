"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { images } from '../../../public/assets';

const StackedHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    {
      url: images.png.heroimg,
      caption: "DJ Event at Amsterdam",
      position: "Amsterdam, Netherlands"
    },
    {
      url: images.png.img2,
      caption: "Live Concert Production",
      position: "London, UK"
    },
    {
      url: images.png.img15,
      caption: "Professional Sound Setup",
      position: "Berlin, Germany"
    },
    {
      url: images.png.img16,
      caption: "Audio Engineering",
      position: "Paris, France"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold text-white mb-8 sm:mb-16">Our Highlights</h1>

        {/* Stacked Images Container - Modified height for mobile */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
          {highlights.map((highlight, index) => {
            const position = (index - currentIndex + highlights.length) % highlights.length;

            return (
              <div
                key={index}
                className={`
                  absolute w-full h-full transition-all duration-1000 ease-in-out
                  ${getStackStyles(position, highlights.length)}
                `}
              >
                {/* Card Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <Image
                    src={highlight.url}
                    alt={highlight.caption}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

                  {/* Caption - Adjusted padding for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <p className="text-gray-300 text-base sm:text-lg mb-1 sm:mb-2">{highlight.position}</p>
                    <h3 className="text-white text-xl sm:text-2xl font-bold">{highlight.caption}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const getStackStyles = (position: number, totalItems: number) => {
  const transformations = [
    'translate-y-0 scale-100 opacity-100 z-30',
    'translate-y-4 scale-95 opacity-80 z-20',
    'translate-y-8 scale-90 opacity-60 z-10',
    'translate-y-12 scale-85 opacity-40 z-0'
  ];

  if (position === 0) {
    return `${transformations[0]} blur-none`;
  } else if (position === 1) {
    return `${transformations[1]} blur-sm`;
  } else if (position === 2) {
    return `${transformations[2]} blur-md`;
  } else {
    return `${transformations[3]} blur-lg`;
  }
}

export default StackedHighlights;