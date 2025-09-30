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
import wm_neck from '../assets/story/women_neck.webp'
import eco from '../assets/icon/cruelityFree.webp'
import futr from '../assets/icon/future.webp'
import handwrk from '../assets/icon/manual.webp'
const About = () => {
  const phylo_data = [
    {
      img: handwrk,
      label: "Handcrafted with Care",
      description: "Every fragrance is meticulously crafted by expert perfumers, blending art and nature to create timeless scents."
    },
    {
      img: eco,
      label: "Cruelty-Free & Ethical",
      description: "We are committed to cruelty-free ingredients and sustainable practices, ensuring beauty without compromise."
    },
    {
      img: futr,
      label: "Designed for the Future",
      description: "Our perfumes are inspired by innovation and timeless elegance, creating scents that leave a lasting impression."
    }
  ];

  return (
    <section id='About' className='h-max md:pt-20 '>
      <div className="flex flex-col gap-2">
        <div className="items-center text-center py-5 flex flex-col gap-2">
          <h2 className='text-3xl md:text-5xl font-serif  text-zinc-900'>The Heart of Iris</h2>
          <span className='text-sm md:text-2xl text-zinc-600'>The essence of time, captured in a bottle.</span>
        </div>
        <div className=" relative h-180">
          <div className="w-full h-130 px-6 md:h-100 lg:h-120 bg-iris-accent flex flex-col sm:flex-row  md:px-12 lg:px-60">
            <div className="flex flex-col flex-1 py-5 gap-2 lg:gap-6 justify-center">
              <h3 className='text-xl lg:text-3xl font-serif text-zinc-950'>Rooted in Tradition</h3>
              <span className='text-justify text-zinc-950 text-sm lg:text-lg font-serif '>We believe fragrance is a form of art — a way to express who you are without words. 
              Inspired by the grace and symbolism of the iris flower, our perfumes are crafted from rare botanicals and blended to evoke emotion, elegance, and memory. 
              Each scent is a signature experience, designed to stay with you long after the first impression.
              At Iris, every bottle is a celebration of craftsmanship and creativity, capturing moments that deserve to be remembered.
              Our commitment to sustainability ensures that beauty never comes at the expense of nature, allowing you to indulge in luxury with a conscience. 
              With Iris, you don’t just wear a fragrance — you wear a story, a feeling, a part of yoursel</span>
            </div>
            <div className="flex-1 relative px-6">
              <div className="absolute md:right-0 max-sm:left-1/2 max-sm:-translate-x-1/2">
                <img 
                  src={wm_neck} 
                  alt=""
                  className='object-fill max-sm:h-60 max-md:h-150 md:h-120 lg:h-160  md:right-0' />
              </div>
            
            </div>
          </div>

        </div>
        <div className="px-6 md:px-14 lg:px-60 pt-0 lg:pt-20 flex flex-col">
          <div className="justify-center items-center py-5">
              <h3 className='text-2xl md:text-3xl lg:text-5xl font-iris-heading font-light text-gray-900 mb-6 text-center'>Scent of Integrity</h3>
          </div>
          <div className="h-max w-full flex max-sm:flex-col flex-row md:flex-row justify-between gap-10 ">
            
            {phylo_data.map((items ,index)=>(
              <div className="border border-emerald-100 rounded-2xl flex flex-col p-2 lg:p-8 bg-iris-accent philo_card" key={index}>
                <div className=" pb-2 sm:pb-5">
                  <img src={items.img} className='mx-sm:h-2 mx-sm:w-2 h-10 w-10 object-cover' alt=''></img>
                </div>
                  
                <div className="">
                  <div className="py-2 text-md lg:text-xl font-serif">{items.label}</div>
                  <div className="text-left max-lg:text-sm text-zinc-600 font-serif">{items.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="max-w-5xl mx-auto text-center px-6 sm:px-6 lg:px-8 py-20 ">
            <h3 class="text-2xl md:text-3xl lg:text-5xl font-iris-heading font-light text-gray-900 mb-6">
                Discover Your Signature Scent
            </h3>
            <p class="text-sm md:text-md lg:text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
                We invite you to experience the silent language of our perfumes—a subtle, confident declaration of individuality. Join us in celebrating the beauty of high-quality, aged, and meticulously crafted aroma.
            </p>
            <a href="#" class="inline-block px-10 py-3 text-zinc-950 bg-iris-primary rounded-lg text-md lg:text-lg font-medium shadow-md transition duration-300 hover:bg-opacity-90 hover:shadow-xl transform hover:-translate-y-0.5">
                Explore the Collection
            </a>
        </div>
      </div>
    </section>
  )
}

export default About
