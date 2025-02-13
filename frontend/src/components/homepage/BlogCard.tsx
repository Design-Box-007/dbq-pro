import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {Blog} from '@/types/index'
// Define Props for BlogCard
interface BlogCardProps {
  blog: Blog;
}



const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col h-[455px] md:h-[450px] bg-[#242424] rounded-lg overflow-hidden shadow-[0px_4px_14px_0px_#FBFBFB29]"
    >
      <a href={blog.link} className="flex flex-col flex-1">
        {/* Image Section */}
        <motion.div
          className="relative w-full h-[200px] overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#83B602] transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-400 text-base line-clamp-3 flex-1">
            {blog.description}
          </p>

          {/* Button Section */}
          <motion.div
            className="mt-auto bg-[#F3F3F3] flex items-center justify-center text-base gap-2 text-[#222222] font-semiBold rounded-lg py-3"
            whileHover={{ x: 5 }}
          >
            Read More
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};

export default BlogCard;
