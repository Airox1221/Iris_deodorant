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

import React from 'react'
import { useState , useEffect , useRef } from 'react'
import { ChevronLeft , ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const Review = () => {
  const testimonialSection = [
  {
    title: "Confidence in a Bottle",
    name: "Sophia L.",
    place: "Paris, France",
    rating: "★★★★★",
    review:
      "Iris is not just a fragrance, it's a feeling. Every note lingers beautifully — it’s my secret confidence boost before every meeting. The balance between elegance and freshness makes me feel polished yet approachable. I’ve noticed how it subtly fills a room without being overpowering, leaving a graceful trail behind. For me, it’s more than perfume — it’s a part of my daily ritual of confidence."
  },
  {
    title: "A Part of Me",
    name: "Liam R.",
    place: "New York, USA",
    rating: "★★★★☆",
    review:
      "Warm, elegant, and timeless. I’ve received so many compliments since I started wearing Iris — it feels like part of my personality now. It adapts seamlessly from office hours to late-night dinners, which makes it my most versatile fragrance. There’s a quiet sophistication in its scent profile that feels unique yet comforting. Every spray feels like a reflection of my identity and personal style."
  },
  {
    title: "Evenings in Bloom",
    name: "Aisha K.",
    place: "Dubai, UAE",
    rating: "★★★★★",
    review:
      "This perfume reminds me of evening gardens and quiet luxury. It lasts all day without ever feeling overpowering — truly exquisite. I often find myself pausing just to enjoy the delicate floral layers that unfold on my skin. It has a calming yet empowering quality that makes even ordinary days feel special. Iris is elegance bottled up in the most graceful way possible."
  },
  {
    title: "A Scented Memory",
    name: "Ethan M.",
    place: "Sydney, Australia",
    rating: "★★★★☆",
    review:
      "Subtle yet unforgettable. It feels like a memory captured in a bottle. My friends always ask what I’m wearing, and I love how the fragrance sparks conversation. There’s a nostalgic quality to Iris — like a scent you’ve known forever, yet it still surprises you. To me, it’s not just perfume; it’s a way of holding onto beautiful little moments in time."
  },
  {
    title: "Effortless Elegance",
    name: "Valentina R.",
    place: "Rome, Italy",
    rating: "★★★★★",
    review:
      "Iris is pure sophistication. I wear it to dinners and special events — it turns heads without trying too hard. The scent is graceful, timeless, and incredibly refined, making me feel instantly elegant. What I love most is how naturally it blends with me, as though it was made for my presence. It’s my little secret weapon whenever I want to feel radiant and unforgettable."
  },
  {
    title: "Luxury in Every Detail",
    name: "Haruto S.",
    place: "Tokyo, Japan",
    rating: "★★★★★",
    review:
      "The craftsmanship is incredible. From the bottle design to the scent itself, it feels like a piece of art I get to wear every day. The fragrance unfolds in layers — bright and fresh at first, then soft, warm, and grounding. Each note is so carefully composed that it feels like a journey with every wear. Iris isn’t just a fragrance; it’s a daily experience of luxury and refinement."
  }
];

  const testbox = useRef(null)
  const [CurrentIndex , setCurrentIndex]= useState(0)
  const items = testimonialSection[CurrentIndex]
  const changeslide= (direction)=>{
    gsap.to(testbox.current, {
      x: direction === "right" ? 100 : -100,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex((prev) => {
          if (direction === "right") {
            return (prev + 1) % testimonialSection.length;
          } else {
            return prev === 0 ? testimonialSection.length - 1 : prev - 1;
          }
        });
        gsap.fromTo(
          testbox.current,
          { x: direction === "right" ? -100 : 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
    
  }



  return (
    <div className='relative max-md:px-6 px-14 lg:px-60' >
          <div className="w-full flex bg-iris-accent shadow-lg flex-col items-center h-80 max-sm:h-60 rounded-4xl justify-evenly" ref={testbox} >
            <div className="text-xl md:text-3xl lg:text-4xl font-iris-heading italic md:py-2">"{items.title}"</div>
            <div className="text-[#ffbf00] text-lg md:text-2xl lg:text-3xl ">{items.rating}</div>
            <div className="px-10 min-sm:px-18 lg:px-40 text-center text-zinc-600 font-serif max-sm:text-[10px] text-md md:text-md lg:text-xl">{items.review}</div>
            <div className="max-sm:text-xs text-md lg:text-lg font-bold tracking-wide text-zinc-900">{items.name}</div>
            <div className=" text-md max-sm:text-sm text-zinc-500 ">{items.place}</div>
          </div>
          <button 
            className='absolute max-md:left-6 left-16 lg:left-70 bottom-1/2 rounded-full bg-zinc-50 translate-y-1/2 shadow-md'
            onClick={()=>changeslide('left')}
          >
            <ChevronLeft size={50} className='w-6 h-6 sm:w-10 sm:h-10'/>
          </button>
          <button 
            className=' absolute max-md:right-6 right-16 lg:right-70 bottom-1/2 rounded-full bg-white translate-y-1/2 shadow-md'
            onClick={()=>changeslide('right')}
          >
            <ChevronRight size={50} className='w-6 h-6 sm:w-10 sm:h-10'/>
          </button>
    </div>
  )
}

export default Review
