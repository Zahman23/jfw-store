import React from 'react'

import WrapperMain from '@components/MainSection/WrapperMain'
import ProductsCard from '@components/MainSection/ProductsCard'

const Category = () => {
  return (
    <div className='w-full md:py-20 relative'>
      <WrapperMain>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Demon-Slayer
          </div>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                  <ProductsCard/>
                 </div>
                 {/* products grid end */}
      </WrapperMain>
    </div>
  )
}

export default Category