import { StaticImageData } from "next/image";
import { images } from "../../../public/assets";
import CTAButton from "../common/CTAbuttons";
import ImageComponent from "../common/Image";
import ProgressBar from "../common/ProgressBar";

interface SoundSystemHeroProps {
  imageSrc: string | StaticImageData;
}


const SoundSystemHero: React.FC<SoundSystemHeroProps> = ({ imageSrc }) => {
  return (
    <div className="relative min-h-screen text-white py-8 px-4 sm:px-6 lg:px-8 mt-6 ">
      {/* Main container */}
      <div className="relative max-w-7xl mx-auto ">
        {/* Image and content wrapper */}
        <div className="relative rounded-lg overflow-hidden">

          <ImageComponent
            title="Sound Systems"
            imageSrc={imageSrc}
          />
          {/* Content section */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight">
              Audio Solutions by DBQPro
            </h1>
            <ProgressBar />
            <p className="text-white text-lg md:text-2xl">
              At DBQPro, we provide premium audio solutions designed to deliver exceptional sound quality for events of all sizes. Whether you're hosting an intimate gathering or a large-scale production, we offer state-of-the-art audio equipment and expert services that ensure every moment is heard crystal clear. From audio system rentals and microphones to live sound engineering and sound system integration, our team has the expertise to make your event a resounding success.
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