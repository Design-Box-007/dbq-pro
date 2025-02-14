import React from "react";
import Image from "next/image";
import ImageComponent from "../common/Image";
import { images } from "../../../public/assets";

const SoundVisionSection = () => {
  return (
    <div className="relative min-h-screen text-white py-8 px-4 sm:px-6 lg:px-8 mt-6">
      {/* Main container */}
      <div className="relative max-w-7xl mx-auto">
        <ImageComponent
          title="Engineering Sound & Vision"
          imageSrc={images.png.img21}
        />

        {/* About DBQ Pro Section */}
        <div className="max-w-7xl mx-auto  py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={images.png.img21}
                  alt="DBQ Pro Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
  <h2 className="text-3xl lg:text-4xl font-bold">About DBQ Pro</h2>
  <p className="text-gray-200 text-lg">
    At DBQ Pro, we are more than just an audiovisual production
    provider&mdash;we are the architects of immersive experiences. With a
    rich history of organizing events, gatherings, and high-grade
    productions, we bring the perfect blend of technical skill and
    robust workflow. From setup to execution, we&apos;ve got you covered.
  </p>
  <p className="text-gray-200 text-lg">
    With years of industry expertise, our team of sound engineers,
    lighting specialists, and event specialists ensures that every
    event is executed with flawless precision.
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundVisionSection;
