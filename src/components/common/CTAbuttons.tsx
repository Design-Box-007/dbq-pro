import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {CTAButtonProps} from '@/types/index';


const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  bgColor,
  hoverBgColor,
  textColor,
  borderColor,
  hoverBorderColor,
}) => {
  return (
    <Link
      href={href}
      className={`w-auto px-4 py-2.5 rounded-xl ${bgColor} ${textColor} transition-all duration-300 flex items-center justify-start group hover:${hoverBgColor} hover:text-black`}
    >
      <span className="font-semibold text-base whitespace-nowrap">{text}</span>
      <div
        className={`ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 ${borderColor} transition-all duration-300 group-hover:${hoverBorderColor} group-hover:translate-x-1`}
      >
        <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
      </div>
    </Link>
  );
};

export default CTAButton;
