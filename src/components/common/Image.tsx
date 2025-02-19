import { SoundSystemProps } from "@/types/index";
import Image from "next/image";

const ImageComponent: React.FC<SoundSystemProps> = ({
  title,
  imageSrc,
  imageAlt = "Sound system equipment",
}) => {
  return (
    <div className="relative overflow-hidden group rounded-lg py-10">
      {/* Image container with hover effect */}
      <div className="relative aspect-video w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Title container - Stays fixed */}
      <div className="absolute bottom-6 w-full p-4 md:py-6 ">
        <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-normal tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ImageComponent;
