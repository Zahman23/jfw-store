import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

import WrapperMain from '@components/MainSection/WrapperMain'
import ProductDetailsCarousel from '@components/MainSection/ProductDetailsCarousel'
import RelatedProducts from '@components/MainSection/RelatedProducts'

const Product = () => {
  return (
    <div className='w-full md:py-20'>
        <WrapperMain>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                {/* left column start */}
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                    <ProductDetailsCarousel/>
                </div>
                {/* left column end */}

                {/* Right column start */}
                <div className='flex-[1] py-3'>
                    {/* PRODUCT TITLE */}
                    <div className="text-[34px] font-semibold mb-2 leading-tight">
                        Muichiro
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-lg font-semibold mb-5">
                        Unisex
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className='text-lg font-semibold'>
                        RP.120.000.00
                    </div>
                    <div className='text-md font-medium text-black/[0.5]'>
                        incl. of taxes
                    </div>
                    <div className='text-md font-medium text-black/[0.5] mb-20'>
                        {`(Also includes all applicable dutie)`}
                    </div>

                    {/* PRODUCT SIZE RANGE STAR */}
                    <div className='mb-10'>
                        {/* HEADING START */}
                        <div className='flex justify-between mb-2'>
                            <div className='text-md font-semibold'>
                                Select Size
                            </div>
                            <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                                Select Guide
                            </div>
                        </div>
                        {/* HEADING START */}

                        {/* SIZE START */}
                        <div className='grid grid-cols-3 gap-2'>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                S
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                M
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                L
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                XL
                            </div>
                            <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                Oversize
                            </div>

                        </div>
                        {/* SIZE END */}
                        
                        {/* SHOW ERROR START */}
                        <div className='text-red-600 mt-1'>
                            Size selection is required
                        </div>
                        {/* SHOW ERROR END */}

                    </div>
                    {/* PRODUCT SIZE RANGE STAR */}

                    {/* ADD TO CART BUTTON START */}
                    <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
                        Add to Cart
                    </button>
                    {/* ADD TO CART BUTTON END */}

                     {/* WHISHLIST BUTTON START */}
                     <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10'>
                        Whishlist
                        <IoMdHeartEmpty size={20} />
                     </button>
                      {/* WHISHLIST BUTTON END */}

                      <div>
                        <div className='text-lg font-bold mb-5'>
                            Product Details
                        </div>
                        <div className='text-md mb-5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ipsa laudantium id odit, officiis quibusdam hic deleniti quisquam nesciunt nemo earum error? Dolor quia, ex laudantium sapiente ipsa consequatur. Provident cum id natus, sequi temporibus ad aspernatur atque vero consectetur rem et assumenda delectus dolorum officia obcaecati molestiae ut maxime.
                        </div>
                      </div>
                </div>
                {/* Right column start */}
            </div> 

            <RelatedProducts />    
        </WrapperMain>
    </div>
  )
}

export default Product