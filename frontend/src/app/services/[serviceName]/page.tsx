import { ServiceHeroData } from '@/types/index';
import { serviceHeroSection } from '@/data/servicepage';
import formatToHyphenated from '@/utils/formattedURL';
import React from 'react';
import SoundSystemHero from '@/components/ServicesPage/SoundSystemHero';

const page = async ({
    params,
}: {
    params: Promise<{ serviceName: string }>;
}) => {
    const { serviceName } = await params;

    // Find the matching service data based on the formatted service name
    const service = serviceHeroSection?.find(
        (data: ServiceHeroData) => serviceName === formatToHyphenated(data.imagetitle)
    );

    // If no matching service is found, return a not-found message
    if (!service) {
        return <div>Service not found</div>;
    }

    // Render the SoundSystemHero component with the corresponding data
    return (
        <SoundSystemHero
          imageSrc={service.image}
          imagetitle={service.imagetitle}
          title={service.title}
          description={service.description}
        />
      );
      
}

export default page;
