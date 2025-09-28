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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Trending} from '../utils/datas';
import { IndianRupee } from 'lucide-react';

const Slider = () => {
  const split_arr = (img_arr, num_size) =>{
    const result = []
    for(let i=0 ; i<img_arr.length ; i+=num_size){
      result.push(img_arr.slice(i , i+num_size))
    }
    //console.log(result)
    return result
  }
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4, },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="pb-6 relative  " 
    >
    <Carousel 
      responsive={responsive} 
      additionalTransfrom={0}
      partialVisbile={false}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      className="py-5 px-2 overflow-visible"
      containerClass="container"
      dotListClass=""
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      swipeable={true}
      draggable={false}
      sliderClass=""
      slidesToSlide={1}
    >
      
    
                  {Trending.map((items , index) => {
                    return(
                      <div 
                        className=" h-90 py-5  flex flex-col px-4 rounded-md transition-transform duration-300 hover:shadow-sm hover:shadow-zinc-800 hover:scale-101"
                        key={index}
                      >
                        <img 
                          src={items.img} 
                          alt={items.label}
                          className=' object-cover  h-60'
                        />
                        <span className="font-bold text-sm text-center" >{items.label}</span>
                        <div className="flex items-center gap-2 justify-center font-bold">
                          <span className="flex items-center "><IndianRupee className="w-[1em] h-[1em]"/>{items.price}</span>
                          {items.oldPrice && (<span className="line-through font-normal">{items.oldPrice}</span>)}
                        </div>
                      </div>
                    )
                  })}
                
    </Carousel>
    </div>
  );
};

export default Slider;
