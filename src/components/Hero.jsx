// Copyright 2025 Haridev
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState, useEffect } from 'react';
import bluepng from '../assets/hero/blue.png'
import greenpng from '../assets/hero/green.png'
import yellowpng from '../assets/hero/yellow.png'
import pinkpng from '../assets/hero/pink.png'
import violetpng from '../assets/hero/violet.png'
import { StarHalf,  Star} from 'lucide-react';
 
const Hero = () => {
  
  const img_logo = [
    { img_url: bluepng, alt: 'Fresh & Clean', clr: 'bg-sky-200' , bgclr: 'bg-sky-100'},
    { img_url: greenpng, alt: 'Green Tea & Cucumber', clr: 'bg-emerald-200',bgclr: 'bg-emerald-100' },
    { img_url: yellowpng, alt: 'Citrus Zest', clr: 'bg-yellow-200',bgclr: 'bg-yellow-100' },
    { img_url: pinkpng, alt: 'Berry Blossom', clr: 'bg-pink-200',bgclr: 'bg-pink-100' },
    { img_url: violetpng, alt: 'Lavender Dream', clr: 'bg-violet-200',bgclr: 'bg-violet-100' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState(img_logo[0].bgclr);
 useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        const nextIndex = (prev + 1) % img_logo.length;
        setBgColor(img_logo[nextIndex].bgclr); // update bg color based on next image
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper for circular index
  const circularIndex = (index) => (index + img_logo.length) % img_logo.length;

  return (
    <section id='home' className="flex flex-col h-screen md:h-[70vh] lg:h-screen ">
    {/* Desktop*/}
    <div className={`hidden md:flex justify-evenly flex-row  h-auto lg:h-screen pt-20 items-center ${bgColor}`}>
      <div className="flex-1 flex flex-col justify-center items-start">
        <div className="px-8 flex flex-col items-start lg:text-7xl md:text-4xl text-sm font-bold">
          <span>Luxury in Every</span>
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 inline-block">
            Swipe
          </span>
        </div>
        <div className=" text:lg px-8 pt-6 md:text-2xl font-semibold text-gray-800">
          A deodorant experience as refined as your fragrance  for all-day confidence
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
        <figure className='relative flex justify-center items-center w-[1000px] h-[500px] '>
          {img_logo.map((item, index) => {
            const position = circularIndex(index - activeIndex); // position relative to active
            let translateX = 0, scale = 0.7, opacity = 0.3, zIndex = 1;

            if (position === 0) { // middle
              translateX = 0;
              scale = 1;
              opacity = 1;
              zIndex = 5;
            } else if (position === 1 || position === -4) { // right
              translateX = 300;
              scale = 0.6;
              opacity = 0.3;
              zIndex = 4;
            } else if (position === -1 || position === 4) { // left
              translateX = -300;
              scale = 0.6;
              opacity = 0.3;
              zIndex = 4;
            } else if (position === 2 || position === -3) { // far right
              translateX = 600;
              scale = 0.4;
              opacity = 0.0;
              zIndex = 2;
            } else if (position === -2 || position === 3) { // far left
              translateX = -600;
              scale = 0.4;
              opacity = 0.0;
              zIndex = 2;
            }

            return (
              <img
                key={index}
                src={item.img_url}
                alt={item.alt}
                className={`border border-transparent w-auto lg:h-120 md:h-60 ${item.clr} backdrop-blur-sm bg-clip-padding rounded-2xl absolute transition-transform duration-900 ease-in-out`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: position === 0 ? 'blur(0px) drop-shadow(0px 0px 5px rgba(0,0,0,0.2))' : 'blur(4px)',
                  willChange: 'transform, opacity, filter'
                }}
              />
            );
          })}
        </figure>
        <div className="text-center lg:mt-4 md:mt-[-30%] md:pt-8 md:pb-4" >
          <span className="text-lg font-semibold text-gray-800 capitalize">
            {img_logo[activeIndex].alt} Deodorant
          </span>
        </div>
      </div>
    </div>
    {/* Mobile & Tablet Version */}
      <div className={`flex md:hidden flex-col h-screen pt-16 pb-8 px-4 ${bgColor} transition-colors duration-500`}>
        {/* Text Section for Mobile/Tablet */}
        <div className="flex flex-col justify-center items-center text-center mb-8 space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-3xl sm:text-4xl font-bold leading-tight">Luxury in Every</span>
            <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 inline-block">
              Swipe
            </span>
          </div>
          <div className="text-base sm:text-lg font-sans text-center max-w-sm mx-auto leading-relaxed mt-4">
            A deodorant experience as refined as your fragrance for all-day confidence
          </div>
        </div>

        {/* Carousel Section for Mobile/Tablet */}
        <div className="flex-1 flex justify-center items-center overflow-hidden relative">
          <figure className='relative flex justify-center items-center w-full max-w-xs sm:max-w-sm h-80 sm:h-96'>
            {img_logo.map((item, index) => {
              const position = circularIndex(index - activeIndex);
              let translateX = 0, scale = 0.7, opacity = 0.3, zIndex = 1;

              // Mobile/Tablet positioning - optimized for smaller screens
              if (position === 0) { // middle
                translateX = 0;
                scale = 1;
                opacity = 1;
                zIndex = 5;
              } else if (position === 1 || position === -4) { // right
                translateX = 80; // Reduced spacing for mobile
                scale = 0.4; // Smaller scale
                opacity = 0.2;
                zIndex = 4;
              } else if (position === -1 || position === 4) { // left
                translateX = -80; // Reduced spacing for mobile
                scale = 0.4; // Smaller scale
                opacity = 0.2;
                zIndex = 4;
              } else { // Hide far images on mobile
                translateX = position > 0 ? 200 : -200;
                scale = 0.2;
                opacity = 0;
                zIndex = 1;
              }

              return (
                <img
                  key={index}
                  src={item.img_url}
                  alt={item.alt}
                  className={`border border-transparent w-32 h-48 sm:w-36 sm:h-54 ${item.clr} rounded-2xl absolute transition-all duration-700 ease-in-out object-cover`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter: position === 0 ? 'blur(0px) drop-shadow(0px 0px 5px rgba(0,0,0,0.2))' : 'blur(1px)',
                    willChange: 'transform, opacity, filter',
                    left: '50%',
                    top: '50%',
                    marginLeft: '-64px', // Half of w-32 (128px/2)
                    marginTop: '-96px'   // Half of h-48 (192px/2)
                  }}
                />
              );
            })}
          </figure>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const prevIndex = (activeIndex - 1 + img_logo.length) % img_logo.length;
              setActiveIndex(prevIndex);
              setBgColor(img_logo[prevIndex].bgclr);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/40 transition-all z-10 shadow-lg"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              const nextIndex = (activeIndex + 1) % img_logo.length;
              setActiveIndex(nextIndex);
              setBgColor(img_logo[nextIndex].bgclr);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white/40 transition-all z-10 shadow-lg"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-6">
          {img_logo.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setBgColor(img_logo[index].bgclr);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gray-800 w-6' 
                  : 'bg-gray-500 hover:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Product Name Display */}
        <div className="text-center mt-4">
          <span className="text-lg font-semibold text-gray-800 capitalize">
            {img_logo[activeIndex].alt} Deodorant
          </span>
        </div>
      </div>
      <div className="relative w-full border-b border-t h-20 bg-zinc-50 border-gray-900 flex flex-row items-center justify-center gap-2">
          <div className="max-md:hidden text-sm text-gray-800 ">
            Our Customer Says 
          </div>
          <span className='max-sm:hidden text-sm md:text-sm font-semibold text-gray-800'>Excellent</span>
          <div className='flex h-5'>
            <span className=''><Star className='fill-green-600 stroke-0'/></span>
            <span><Star className='fill-green-600 stroke-0' /></span>
            <span><Star className='fill-green-600 stroke-0'/></span>
            <span><StarHalf className='fill-green-600 stroke-0'/></span>
            <span><Star className='fill-gray-500 stroke-0'/></span>

          </div>
          <span className='max-sm:hidden' >4.8 out of 5 based on 31,507 reviews</span>
          <div className="pl-3 flex flex-row gap-2">
            <span className='bg-green-600'><Star className='fill-white stroke-0'/></span>
            <span>Trustworthy</span>
          </div>
          
      </div>
    </section>
  );
};

export default Hero;
