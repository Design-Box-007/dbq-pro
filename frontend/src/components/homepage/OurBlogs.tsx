"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '@/components/homepage/BlogCard';
import { blogs } from '@/data/blog';
import Link from 'next/link';


const OurBlogs: React.FC = () => {
 
  return (
    <div className="w-full  py-6 px-4 sm:px-6 lg:px-9">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Our Blogs</h2>
          <Link href="/blogs" className="w-auto px-4 py-2.5 rounded-xl bg-[var(--green)] text-white hover:text-black hover:bg-white transition-all duration-300 flex items-center justify-start group">
                  <span className="font-semibold text-base whitespace-nowrap">View All</span>
                  <div className="ml-2 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-white group-hover:border-black transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="transition-all duration-300 group-hover:text-black" size={16} />
                  </div>
                </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
