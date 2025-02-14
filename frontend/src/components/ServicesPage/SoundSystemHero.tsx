import { images } from "../../../public/assets";
import CTAButton from "../common/CTAbuttons";
import ImageComponent from "../common/Image";
import ProgressBar from "../common/ProgressBar";


const SoundSystemHero = () => {
    return (
        <div className="relative min-h-screen text-white py-8 px-4 sm:px-6 lg:px-8 mt-6 ">
        {/* Main container */}
        <div className="relative max-w-7xl mx-auto ">
          {/* Image and content wrapper */}
          <div className="relative rounded-lg overflow-hidden">

                 <ImageComponent
                 title="Sound Systems"
                   imageSrc={images.png.img19}
                   />
            {/* Content section */}
            <div className="space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight">
                Powering Every Decibel with Precision
              </h1>
              <ProgressBar/>
              <p className="text-white text-lg md:text-2xl">
  Sound isn&apos;t just about volume—it&apos;s about clarity, depth, and impact. At DBQ Pro, we provide state-of-the-art sound system solutions tailored for concerts, corporate events, weddings, conferences, and live performances. Whether you need a powerful PA system for a music festival or a discreet audio setup for a corporate event, we ensure every sound is heard exactly as intended.
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