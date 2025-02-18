import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import formatToHyphenated from "@/utils/formattedURL";
import { Services } from "@/types";


interface ServiceGridProps {
  heading: string;
  headingSize?: string;
  titleSize?: string;
}

const ServicesGrid: React.FC<ServiceGridProps> = ({
  heading,
  headingSize = "text-6xl",
  titleSize = "text-sm sm:text-lg md:text-xl lg:text-2xl",
}) => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-9" id='servicegrid'>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-white mb-12 ${headingSize} font-light`}>{heading}</h1>

        {/* Square Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service: Services, index: number) => (
            <Link key={index} href={`/services/${formatToHyphenated(service.title)}`} passHref>
              <div
                className="bg-white rounded-3xl flex flex-col items-center justify-center 
                           transition-all duration-300 hover:bg-[var(--green)] hover:text-white group 
                           aspect-square cursor-pointer"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={70}
                  height={70}
                  className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <p className={`text-center ${titleSize} text-[#333333] font-medium`}>
                  {service.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
