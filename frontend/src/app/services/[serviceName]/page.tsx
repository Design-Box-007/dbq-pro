import SoundSystemHero from '@/components/ServicesPage/SoundSystemHero';
import { services } from '@/data/services';
import { Service } from '@/types';
import formatToHyphenated from '@/utils/formattedURL';
import React from 'react'

const page = async ({
    params,
}: {
    params: Promise<{ serviceName: string }>
}) => {

    const { serviceName } = await params;


    const service = services?.find(
        (data: Service) => serviceName === formatToHyphenated(data.title)
    );


    if (!service) {
        return <div>Service not found</div>;
    }



    return (
        <SoundSystemHero imageSrc={service.image} />
    )
}

export default page