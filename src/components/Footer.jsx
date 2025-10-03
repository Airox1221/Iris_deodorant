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

import React from 'react';
import logo from '../assets/logo.png';

import { Instagram, Facebook , MessageCircle , Mail, PhoneCall, Send, Star, Compass, MapPin } from 'lucide-react'; 

const Footer = () => {

    const ACCENT_COLOR_CLASS = 'text-teal-300 hover:text-teal-200 transition duration-300';
    const BUTTON_COLOR_CLASS = 'bg-teal-600 hover:bg-teal-500 transition duration-300';

    return (
        <section className="bg-gray-900 border-t border-teal-800/50 max-sm:h-max text-white"> 
            <div className="flex flex-col px-6 sm:px-6 md:px-14 lg:px-60 py-20 max-sm:py-5">
              <div className="flex flex-row max-sm:flex-col justify-between max-sm:justify-start w-full">
                <div className="logo-sec w-1/4">
                  <div className="flex gap-2 items-center max-sm:w-90">
                    <div className="">
                      <img src={logo} className='w-20 object-cover max-sm:w-10'></img>
                    </div>
                    <h2 className=' text-center text-3xl font-serif'>IRIS</h2>
                  </div>
                    
                  
                  <p className='text-gray-400
                            text-left lg:text-lg max-md:text-sm md:text-sm
                            leading-relaxed mt-2 max-w-sm max-sm:w-80 max-sm:text-xs'>
                    Timeless elegence in every note.Crafted with pasion designed to linger.
                  </p>
                  
                </div>
                <div className="exp-sec flex flex-col gap-4">
                  <div className="pb-0">
                    <span className='text-center text-2xl font-serif font-semibold items-center max-sm:text-sm'>Explore</span>
                  </div>
                  <div className="flex flex-col gap-1 pb-6">
                    <a href="" className='text-teal-300 flex items-center justify-center max-sm:justify-start md:justify-start gap-2 text-sm max-sm:text-xs sm:text-base hover:text-teal-100 transition duration-300'>
                      <Star size={18}/>
                      Shop</a>
                    <a href="" className=' text-teal-300 flex items-center justify-center md:justify-start max-sm:justify-start gap-2 text-sm max-sm:text-xs sm:text-base hover:text-teal-100 transition duration-300'>
                      <Compass size={18}/>
                      About</a>
                    <a href="" className=' text-teal-300 flex items-center justify-center sm:justify-start max-sm:justify-start  gap-2 text-sm max-sm:text-xs sm:text-base hover:text-teal-100 transition duration-300'>
                      <PhoneCall size={18}/>
                      Contact</a>
                    <a href="" className=' text-teal-300 flex items-center justify-center md:justify-start max-sm:justify-start gap-2 text-sm max-sm:text-xs sm:text-base hover:text-teal-100 transition duration-300'>
                      <MapPin size={18}/>
                      Find Us</a>
                  </div>
                </div>
                <div className="email-sec w-5/12 lg:w-3/12 flex flex-col gap-4 ">
                  <h3 className="text-left lg:tracking-wide text-xl lg:text-2xl max-sm:text-sm font-serif font-semibold">Stay Connected</h3>
                  <div className="">
                    <form action="" className='flex flex-row lg:justify-between shadow-lg '>
                      <input 
                        type="email" 
                        className='rounded-l-lg grow focus:outline-0 max-sm:w-120 max-sm:text-sm focus:ring-1 max-md:w-4/12  lg:w-full focus:ring-teal-200 text-white px-5 placeholder-gray-500' 
                        placeholder='enter email'
                        aria-label="Email for newsletter"/>
                      <button
                        className='rounded-r-lg text-white font-medium text-center px-2 w-15 bg-teal-600 py-1'
                      >
                        Join
                      </button>
                    </form>
                  </div>
                  <div className="flex flex-row max-sm:justify-center max-sm:w-60 pt-4 border-t border-gray-700 gap-4 w-full">
                    <a href="" className='text-gray-400'><Instagram/></a>
                    <a href="" className='text-gray-400'><Facebook/></a>
                    <a href="" className='text-gray-400'><Send/></a>
                  </div>
                </div>
              </div>
              <div className="">
                <p className='text-gray-500 text-xs sm:text-sm mt-4 hidden max-sm:block max-sm:pt-10 md:block'>
                    &copy; {new Date().getFullYear()} Iris Perfume. All rights reserved.
                  </p>
              </div>
            </div>
        </section>
    );
}

export default Footer;