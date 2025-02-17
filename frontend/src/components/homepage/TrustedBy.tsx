import Image from "next/image";
import { images } from "../../../public/assets";


const logos = [
    images.png.t1,
    images.png.t2,
    images.png.t3,
    images.png.t4,
 
];

const TrustedBy = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 -mx-3 md:-mx-9">
        <h3 className="text-center text-[#83B602] font-medium text-xl md:text-3xl mb-8">
          Trusted by
        </h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="w-36 h-36 flex justify-center items-center">
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={144}
                height={144}
                className="w-full h-full object-contain aspect-[1/1]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
