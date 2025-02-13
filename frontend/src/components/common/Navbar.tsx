"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { images } from '../../../public/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full py-5  font-[Arial] fixed top-0 z-50 transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-[var(--green)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className={`text-xl font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:left-0 after:bottom-0 after:transition-all hover:after:w-full ${
                isScrolled || isOpen
                  ? 'text-black after:bg-black '
                  : 'text-white after:bg-white'
              }`}
            >
              <Image
              src={images.png.logo}
              alt='logo'
              className='w-20 h-16 object-cover'/>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About Us', 'Services'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`relative group py-2 ${
                    isScrolled || isOpen
                      ? 'text-black font-semibold'
                      : 'text-white'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 w-full h-0.5 bg-[var(--green)] transform origin-left scale-x-0 transition-transform group-hover:scale-x-100 bottom-0" />
                </Link>
              ))}
           <button
  className={`px-4 py-2 rounded-xl bg-white text-[var(--green)] transition-all duration-300 flex items-center group ${
    isScrolled || isOpen ? 'hover:bg-gray-800' : 'hover:bg-[var(--green)]'
  }`}
>
                <span className={`font-semibold text-base  transition-all duration-300 ${
    isScrolled || isOpen ? 'text-black hover:text-white ' : 'text-black'
  } `}>
                  Get In Touch
                </span>
                <div className={`ml-2 w-6 h-6 flex items-center justify-center rounded-full border-2  transition-all duration-300  group-hover:translate-x-1 ${
    isScrolled || isOpen ? 'border-black group-hover:border-[var(--green)] ' : 'border-[var(--green)] group-hover:border-black'
  }`}>
                  <ArrowRight className={`transition-all duration-300" size={16}  ${
    isScrolled || isOpen ? 'text-black group-hover:text-[var(--green)] ' : 'text-[var(--green)] group-hover:text-black'
  }`} />
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 focus:outline-none group"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {isOpen ? (
                  <X className="transform transition-transform duration-300 rotate-0 hover:rotate-90 text-white" size={24} />
                ) : (
                  <Menu className="transform transition-transform duration-300 hover:scale-110 text-white" size={24} />
                )}
              </div>
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out fixed left-0 w-full bg-[var(--green)] rounded-b-3xl ${
              isOpen ? 'h-[35vh] opacity-100' : 'h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col space-y-4 pt-4 px-10">
              {['Home', 'About Us', 'Services'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="transform transition-transform hover:translate-x-2 text-black duration-300"
                >
                  {item}
                </Link>
              ))}
              <button className="w-fit px-4 py-2 rounded-xl bg-white text-[var(--green)] hover:bg-gray-700 hover:text-black transition-all duration-300 flex items-center group">
                <span className="font-semibold text-base transition-all duration-300">
                  Get In Touch
                </span>
                <div className="ml-2 w-6 h-6 flex items-center justify-center rounded-full border-2 border-black transition-all duration-300 group-hover:border-black group-hover:translate-x-1">
                  <ArrowRight className="transition-all duration-300 text-black" size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
