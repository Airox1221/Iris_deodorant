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
import Review from './Review'
import Marquee from "react-fast-marquee";
import { store_imgs } from '../utils/datas';

const Testimonial = () => {
  return (
    <section id='Reviews' className='lg:pt-20'>
      <div className="flex flex-col max-h-max">
        <div className="md:h-80 lg:h-100">
          <div className="stores-sec max-sm:h-25 h-35 lg:h-60 w-full bg-iris-accent pt-2 pb-10">
            <div className="w-full flex flex-row ">
              <Marquee className='' pauseOnHover={true} speed={100} autoFill={true}>
                {
                  store_imgs.map((item,index)=>(
                    <div className="">
                      <img src={item} alt="" className='object-cover  max-sm:h-15 h-20 lg:h-40 ' />
                    </div>
                  ))
                }
              </Marquee>

            </div>
            <div className="text-center text-xl max-sm:text-sm lg:text-2xl font-semibold">Find Us In Store</div>
          </div>
        </div>
        <div className="heading-sec pt-20 md:pt-10 flex flex-col gap-2">
          <h2 className='max-md:text-3xl text-5xl font-serif  text-zinc-900 text-center'>Art of Appreciation</h2>
          <span className='block max-md:text-sm md:text-2xl text-zinc-600 text-center'>The language of perfume, spoken by our wearers</span>
        </div>
        
        <div className="review-sec w-full py-6 pt-20">
          <Review/>
        </div>
        
      </div>
    </section>
  )
}

export default Testimonial
