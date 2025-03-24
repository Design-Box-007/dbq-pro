'use client'

import { Blog as BlogType } from '@/types'
import React, { Suspense } from 'react'
import ImageComponent from '../common/Image'
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import formatToHyphenated from '@/utils/formattedURL';
import { blogs } from '@/data/blog';


const componentMap = {
    Blog1: dynamic(() => import("@/data/BlogContent/Blog1")),
    Blog2: dynamic(() => import("@/data/BlogContent/Blog2")),
    Blog3: dynamic(() => import("@/data/BlogContent/Blog3")),
    Blog4: dynamic(() => import("@/data/BlogContent/Blog4")),
    // Add other blog components here...
};


const Blog = () => {

    const params = useParams();

    const { blogname } = params;

    const blogData = blogs.find((blog: BlogType) =>
        blogname === formatToHyphenated(blog.title)
    );

    if (!blogData) return <>BLOG NOT FOUND</>;

    const BlogComponent = componentMap[blogData.id as keyof typeof componentMap];

    if (!BlogComponent) return <>BLOG NOT FOUND</>;

    return (
        <section className='px-10 pt-[55px]'>
            <ImageComponent
                imageSrc={blogData.image}
                imageAlt={blogData.title}
                key={`blog-${blogData.title}`}
                title={blogData.title}
            />
            <Suspense fallback={<p>Loading blog...</p>}>
                <BlogComponent />
            </Suspense>
        </section>
    )
}

export default Blog