import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { images } from '../../../public/assets';

const HeroTextSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-20 md:py-20">
      <div className="max-w-[1400px] mx-auto w-full relative mt-2">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-6 lg:mb-0">
          <Image
            src={images.png.heroimg}
            alt="Sound system setup"
            className="w-full h-full object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 rounded-lg bg-black/30"></div>
        </div>

        <div className="space-y-8 lg:space-y-0 relative lg:inset-0 lg:p-10">
          <div className="lg:hidden space-y-6">
            {/* Mobile layout unchanged */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-light leading-tight animate-fade-in">
              Precision Sound for<br />
              <span className="font-light">Unforgettable Experiences.</span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl animate-slide-up">
              From live events to studio setups, we engineer Sound solutions 
              that deliver unmatched clarity, power, and reliability—every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Mobile buttons unchanged */}
              <Link href="/services" className="w-full px-4 py-2.5 rounded-xl bg-[#222222] text-white hover:bg-[var(--green)] hover:text-black transition-all duration-300 flex items-center justify-between group">
                <span className="font-semibold text-sm sm:text-base">Explore Our Services</span>
                <div className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-white group-hover:border-black transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
                </div>
              </Link>

              <Link href="/services" className="w-full px-4 py-2.5 rounded-xl bg-[var(--green)] text-white hover:text-black transition-all duration-300 flex items-center justify-between group">
                <span className="font-semibold text-sm sm:text-base">Get a Consultation</span>
                <div className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-[var(--green)] group-hover:border-white transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
                </div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block  ">
            <div className="absolute right-0 top-10 max-w-lg space-y-6">
              <p className="text-gray-300 text-lg animate-slide-up">
                From live events to studio setups, we engineer Sound solutions 
                that deliver unmatched clarity, power, and reliability—every time.
              </p>
              <div className="flex flex-row gap-4 ml-16">
                {/* Desktop buttons unchanged */}
                <Link href="/services" className="w-auto px-4 py-2.5 rounded-xl bg-[#222222] text-white hover:bg-[var(--green)] hover:text-black transition-all duration-300 flex items-center justify-start group">
                  <span className="font-semibold text-base whitespace-nowrap">Explore Our Services</span>
                  <div className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-white group-hover:border-black transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
                  </div>
                </Link>
                <Link href="/services" className="w-auto px-4 py-2.5 rounded-xl bg-[var(--green)] text-white hover:text-black transition-all duration-300 flex items-center justify-start group">
                  <span className="font-semibold text-base whitespace-nowrap">Get a Consultation</span>
                  <div className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-white group-hover:border-black transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute left-0 -bottom-24">
              <h1 className="text-6xl text-white font-light leading-tight animate-fade-in">
                Precision Sound for<br />
                <span className="font-light">Unforgettable Experiences.</span>
              </h1>
            </div>
          </div>
        </div>

      </div>
      
    
    </div>
    
  );
};

export default HeroTextSection;