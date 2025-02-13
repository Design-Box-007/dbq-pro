import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function ProgressBar() {
  return (
    <div className="py-0 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative w-full h-[4px] bg-gray-700 rounded-full flex items-center">
          {/* Left-side arrow */}
          <span className="absolute -left-4 text-white">
            <IoMdArrowDropleft  size={30} />
          </span>

          {/* Progress bar animation */}
          <div className="h-full bg-white rounded-full animate-progress w-full"></div>

          {/* Right-side arrow */}
          <span className="absolute -right-4 text-white">
          <IoMdArrowDropright size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}
