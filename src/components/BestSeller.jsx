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
import Slider from './Slider'
import React from 'react'
import { useEffect ,useRef } from 'react'
import w_img1 from '../assets/story/wm.webp'
import m_img1 from '../assets/story/mn.webp'

import { Images } from 'lucide-react'
import { gsap } from "gsap";




const BestSeller = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-60">
      <div className="flex flex-col">
        {/* FOR HER / FOR HIM Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-0 lg:pt-10 ">
          {/* FOR HER */}
          <div className="relative flex h-72 sm:h-96 lg:h-[20rem]  md:h-50">
            <a href="#women" className="w-full">
              <img
                src={w_img1}
                alt="woman Image"
                className="object-cover w-full h-full"
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-amber-50 text-lg sm:text-xl md:text-2xl font-sans">
                FOR HER
              </span>
            </a>
          </div>

          {/* FOR HIM */}
          <div className="relative flex h-72 sm:h-96 lg:h-[20rem] md:h-50">
            <a href="#men" className="w-full">
              <img
                src={m_img1}
                alt="Man Image"
                className="object-cover w-full h-full"
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-amber-50 text-lg sm:text-xl md:text-2xl font-sans">
                FOR HIM
              </span>
            </a>
          </div>
        </div>

        {/* Trending Now Section */}
        <div className="mt-10 sm:mt-16 md:mt-20 flex flex-col pb-10 sm:pb-16 md:pb-20">
          <div className="flex items-center justify-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
              Trending Now
            </h3>
          </div>
          <div className="pt-6 sm:pt-8 md:pt-10">
            <div className="h-auto">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
