import { StaticImageData } from "next/image";
import CTAButton from "../common/CTAbuttons";
import ImageComponent from "../common/Image";
import ProgressBar from "../common/ProgressBar";

interface SoundSystemHeroProps {
  imageSrc: string | StaticImageData;
  imagetitle: string
  title: string;
  description: string;
}



const SoundSystemHero: React.FC<SoundSystemHeroProps> = ({ imageSrc, title, description, imagetitle }) => {
  return (
    <div className="relative min-h-screen text-white py-8 px-4 sm:px-6 lg:px-8 mt-6 ">
      {/* Main container */}
      <div className="relative max-w-7xl mx-auto ">
        {/* Image and content wrapper */}
        <div className="relative rounded-lg overflow-hidden">

          <ImageComponent
            title={imagetitle}
            imageSrc={imageSrc}
          />
          {/* Content section */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight">
             {title}
            </h1>
            <ProgressBar />
            <p className="text-white text-lg md:text-2xl">
             {description}
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* CTA Buttons */}
              <CTAButton
                href="/services#servicegrid"
                text="Explore Our Other Services"
                bgColor="bg-[#222222]"
                hoverBgColor="bg-[var(--green)]"
                textColor="text-white"
                borderColor="border-white"
                hoverBorderColor="border-black"
              />

              <CTAButton
                href="/services#contactus"
                text="Get a Consultation"
                bgColor="bg-[var(--green)]"
                hoverBgColor="bg-white"
                textColor="text-white"
                borderColor="border-[var(--green)]"
                hoverBorderColor="border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundSystemHero;