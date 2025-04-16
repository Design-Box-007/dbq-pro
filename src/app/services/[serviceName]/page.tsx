'use client'

import { ServiceData, ServiceFAQ, Services } from '@/types/index';
import { services } from '@/data/services';
import formatToHyphenated from '@/utils/formattedURL';
import React from 'react';
import SoundSystemHero from '@/components/ServicesPage/SoundSystemHero';
import SoundSolutions from '@/components/ServicesPage/SoundSolutions';
// import StackedHighlights from '@/components/ServicesPage/StackedHighlights';
import ServicesGrid from '@/components/homepage/ServicesGrid';
import FAQSection from '@/components/homepage/FAQSection';
import ContactUs from '@/components/common/ContactUs';
import serviceData from '@/data/servicedetail';
import { serviceFAQs } from '@/data/faq';
import { useParams } from 'next/navigation';

const Page = () => {

    const params = useParams();

    const { serviceName } = params;

    // Find the matching service data based on the formatted service name
    const service = services?.find(
        (data: Services) => serviceName === formatToHyphenated(data.title)
    );

    if (!service) {
        return <div>Service not found</div>;
    }

    const servicegriddata = serviceData.find(
        (data: ServiceData) => service.id === data.serviceId
    ) as ServiceData;


    const faqData = serviceFAQs.find(
        (data: ServiceFAQ) => service.id === data.serviceId
    ) as ServiceFAQ;

    return (
        <>
            <SoundSystemHero imageSrc={service.heroImage} imagetitle={service.title} title={service.serviceDataHeader} description={service.description} />
            {serviceData ? <SoundSolutions title={service.serviceDataHeader} data={servicegriddata.ServiceData} /> : <div>Service Grid Data not found</div>}
            {/* <StackedHighlights /> */}
            <ServicesGrid
                heading="A Lot More to Explore"
                headingSize="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                titleSize="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            />
            <FAQSection
                title="Frequently Asked Questions"
                faqs={faqData.FAQ}
            />
            <ContactUs />
        </>
    );

}

export default Page;
