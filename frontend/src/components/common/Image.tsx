import {SoundSystemProps} from '@/types/index'
import Image from 'next/image';

  const ImageComponent: React.FC<SoundSystemProps> = ({ 
    title, 
    imageSrc, 
    imageAlt = "Sound system equipment" 
  }) => {
    return (
      <div className="relative overflow-hidden group rounded-lg py-10">
        {/* Container with hover effect */}
        <div className="relative transition-transform duration-300 ease-in-out group-hover:scale-105">
          {/* Image container with aspect ratio */}
          <div className="relative aspect-video w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full rounded-lg"
            />
            {/* Dark overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" /> */}
          </div>
          
          {/* Title container */}
          <div className="absolute bottom-0 w-full p-4 md:p-6">
            <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-normal tracking-wide">
              {title}
            </h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageComponent;