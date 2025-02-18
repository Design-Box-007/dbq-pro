import type { StaticImageData } from "next/image";

export interface Service {
    title: string;
    image: string | StaticImageData; // Allow both types
  }
  
  // Define Blog Type
 export interface Blog {
      id: number;
      title: string;
      description: string;
      image: string | StaticImageData; // Allow both types
      link: string;
    }

  // Define Props for BlogCard
 export interface BlogCardProps {
  blog: Blog;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  faqs: FAQItem[];
  className?: string;
  titleClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

export interface FormData {
  name: string;
  email: string;
  mobile: string;
  country: string;
  message: string;
}

export interface SoundSystemProps {
  title: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
}
export interface CTAButtonProps {
  href: string;
  text: string;
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  borderColor: string;
  hoverBorderColor: string;
}
export interface ServiceHeroData {
  image: string | StaticImageData;  // Allow both string and StaticImageData
  imagetitle: string;
  title: string;
  description: string;
}