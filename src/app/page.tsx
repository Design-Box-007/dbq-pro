import ContactUs from "@/components/common/ContactUs";
import ProgressBar from "@/components/common/ProgressBar";
import AboutDBQPro from "@/components/homepage/AboutDBQPro";
import FAQSection from "@/components/homepage/FAQSection";
import HeroTextSection from "@/components/homepage/HeroSection";
import OurBlogs from "@/components/homepage/OurBlogs";
import ServicesGrid from "@/components/homepage/ServicesGrid";
import { faqData } from '@/data/faq';


export default function Home() {
  return (
    <div className="bg-[var(--background)] ">
      <HeroTextSection />
      <div className="relative">
        <div className="px-4 md:px-6 md:mt-4">
          <ProgressBar />
        </div>
        <div className="md:-mt-8">
          <div id="services">
            <ServicesGrid
              heading="Services We Provide"
              headingSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              titleSize="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            />
          </div>
        </div>
      </div>
      <AboutDBQPro />
      <OurBlogs/>
      <FAQSection
        title="Frequently Asked Questions"
        faqs={faqData}
      />
      <ContactUs />

      {/* Iframe Section */}
      {/* <div className="w-full h-screen">
        <iframe
          src="https://my.spline.design/cubeaxiswebsiteupdatedinprod-c7eb2ea95c5e22c50b14b5333ee86583/"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
}
