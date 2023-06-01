'use client'

import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';


const HeroSlider = () => {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
            <div
                onClick={clickHandler}
                className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="text-sm md:text-lg" />
            </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
            <div
                onClick={clickHandler}
                className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
        )}
        >
            <div>
                <img src='assets/slide1.png' className='aspect-[15/10] object-cover mx-auto '/>
                <div className='px-[15px] md:px-[40px] py-[5px] md:py-[20px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:-text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>Order Now</div>
            </div>

            <div>
                <img src='assets/slide2.png' className='aspect-[15/10] object-cover mx-auto '/>
                <div className='px-[15px] md:px-[40px] py-[5px] md:py-[20px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:-text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>Order Now</div>
            </div>

            <div>
                <img src='assets/slide3.png' className='aspect-[15/10] object-cover mx-auto '/>
                <div className='px-[15px] md:px-[40px] py-[5px] md:py-[20px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:-text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>Order Now</div>
            </div>
        </Carousel>
    </div>
  )
}

export default HeroSlider
