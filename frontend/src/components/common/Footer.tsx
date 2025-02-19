"use client";
import React from 'react';
import Link from 'next/link';
import { images } from '../../../public/assets';
import Image from 'next/image';
const Footer = () => {
    

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];
 
  return (
    <div className="relative w-full bg-[#444444] mt-16">
        <div className='max-w-7xl lg:mx-16 py-6 px-6 md:px-10'>
      {/* Navigation Bar */}
      <nav className="top-0 left-0 w-full z-20 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[#f5f5f5] text-2xl font-bold">
          DBQ Pro
        </Link>

        {/* Responsive Navigation Links */}
        <div className="md:flex items-center gap-8 hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#f5f5f5] hover:text-gray-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile View: Split links into two rows */}
        <div className="grid grid-cols-2 gap-2 md:hidden w-full " >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#f5f5f5] hover:text-gray-200 transition-colors text-center"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>

      {/* Hero Section with Image and Gradient Overlay */}
      <div className="relative w-full my-4  mx-auto">
        {/* Background Image */}
        <Image
          src={images.png.img18}
          alt="DBQ Pro Hero"
          className="w-full h-full object-fit"
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 71.81%)'
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 
            className="text-[#f5f5f5] text-6xl md:text-8xl font-bold tracking-wider"
            style={{
              fontFamily: '"Venus Rising", sans-serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* DBQ PRO */}
          </h1>
        </div>
      </div>
      <footer className=" text-white text-center py-4">
      <p className="text-sm">
        This website is designed by{" "}
        <Link
          href="https://www.pixelpanda.ae"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--green)] hover:underline"
        >
          Pixel Panda Technologies
        </Link>
      </p>
    </footer>
      {/* Font Import in Head */}
      <style jsx global>{`
        @font-face {
          font-family: 'Venus Rising';
          src: url('/fonts/venus-rising.woff2') format('woff2'),
               url('/fonts/venus-rising.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Footer;


