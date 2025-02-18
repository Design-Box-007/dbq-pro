import { ServiceBox } from "@/types";


const SoundServices: React.FC<{ services: ServiceBox[] }> = ({ services }) => {

  return (
    <div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service: ServiceBox, index: number) => (
            <div
              key={index}
              className={`
                  rounded-lg 
                  p-6 
                  transition-all 
                  duration-300 
                  shadow-[0px_0px_11px_4px_#A5A5A526] 
                  bg-[linear-gradient(180deg,#282828_0%,#313131_100%)]
                  hover:shadow-[0px_0px_15px_6px_#A5A5A526]
                  hover:-translate-y-1
                  hover:scale-100
                  hover:brightness-110
                  ${service.wide ? "md:col-span-2 p-10" : ""}
                `}
            >
              {service.wide ? (
                // Layout for WIDE card
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <h2 className="text-white text-3xl md:text-5xl font-bold">
                    {service.title}
                  </h2>
                  <div className="md:w-2/3">
                    {/* <p className="text-white mb-4 text-lg md:text-xl">
                      {service.description}
                    </p> */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-white text-lg md:text-xl">
                          <span className="text-white mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                // Layout for NORMAL card
                <>
                  <h2 className="text-white text-2xl md:text-4xl font-medium mb-6">{service.title}</h2>
                  {/* <p className="text-white mb-4 text-lg md:text-xl">{service.description}</p> */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-white text-lg md:text-xl">
                        <span className="text-white mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoundServices;