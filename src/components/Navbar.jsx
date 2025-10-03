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
import { TextAlignJustify, X} from 'lucide-react';
import { useState } from 'react';
import { useLenis } from 'lenis/react';


const Navbar = () => {
    const [IsmenuOpen , setIsmenuOpen] = useState(false)
    const lenis = useLenis();
    const handleScroll = (e, target) => {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target);
      }
      setIsmenuOpen(false); // close mobile menu if open
    };
  return (
    <div className="fixed top-0 left-0 right-0 px-6  h-16 flex items-center z-[1111] bg-white  border-b border-emerald-100">
      <div className="flex w-full items-center justify-between px-2">
        {/* Logo */}
        <figure className="flex flex-row items-center gap-2  overflow-hidden bg-white ">
          <a href="#home" 
            onClick={(e) => handleScroll(e, "#home")} 
            className='hover:bg-emerald-100 rounded-xl'>
            <img src={logo} width={50} height={50} alt="logo" />
          </a>
          {}
          <h2 className='max-md:hidden text-center md:text-2xl text-2xl font-serif font-semibold text-zinc-900'>IRIS</h2>
        </figure>

        {/* Navigation Buttons */}
        <div className="hidden md:flex flex-1 max-w-md justify-between gap-2 mx-6 ">
          {["Best Seller", "About", "Reviews"].map((item, index) => {
            const id = '#'+item.replace(' ','')
            return (
            <div
              key={index}
              className="flex-1 flex  items-center justify-center pt-0 h-10 border border-transparent hover:text-emerald-300 hover:border-emerald-400 text-[18px]"
            >
                <a href={id}  onClick={(e) => handleScroll(e, id)}>{item}</a>
              
            </div>
            
          )}
          
          )}
          
            <a href="#contact" 
              onClick={(e) => handleScroll(e, "#contact")}
              className="px-6 flex items-center justify-center bg-emerald-300 hover:bg-emerald-400">
             Contact
            </a>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden">
            <button
                onClick={()=>setIsmenuOpen(!IsmenuOpen)}
            >
                {IsmenuOpen ?  
                    (< X strokeWidth={1} />)
                    :(<TextAlignJustify strokeWidth={1} />)

                }
                
            </button>
            <div
                 className={`absolute left-0 top-16 grid grid-rows-4  w-full gap-3 bg-zinc-50 border-b border-emerald-300
                         transform transition-transform duration-500 ease-in-out
                        ${IsmenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {["Best Seller", "About", "Reviews", "contact"].map((item, index) => {
                  const id = "#" + item.replace(" ", "")
                  return(
                    <div
                        key={index}
                        onClick={() => setIsmenuOpen(false)}
                        className="flex items-center justify-start  border-b border-zinc-950 py-3  hover:text-emerald-300 hover:border-emerald-400 transition duration-300"
                    >
                        <a className="px-5 text-[20px] font-sans italic " href={"#" + item.replace(" ", "")} onClick={(e) => handleScroll(e, id)}>
                            {item}
                        </a>
                    </div>
                )}
                )}
            </div>

            

        </div>
        
      </div>
    </div>
  );
};

export default Navbar
