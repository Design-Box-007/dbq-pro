import Image from "next/image";

const logos = [
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
  "/api/placeholder/96/32",
];

const TrustedBy = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 -mx-3 md:-mx-9">
        <h3 className="text-center text-[#83B602] font-medium text-xl md:text-3xl mb-8">
          Trusted by
        </h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 h-8">
              <Image src={logo} alt={`Company logo ${index + 1}`} width={96} height={32} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
