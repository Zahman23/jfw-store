import HeroSlider from "@components/MainSection/HeroSlider"
import WrapperMain from "@components/MainSection/WrapperMain"
import ProductsCard from "@components/MainSection/ProductsCard"
import Category from "@components/MainSection/Category"

export default function PageHome() {
  return (
    <main>
      <HeroSlider />
      <WrapperMain>
        {/* category start */}
        <div className="text-center max-w-[1280px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight"
          >
            Category
          </div>
          <div>
          <Category/>    
          </div>
        </div>
        {/* category end */}

        {/* products grid start */}
        <div className="text-[28px] md:text-[34px] font-semibold leading-tight"
          >
            All Products
          </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5 px-5 md:px-0">
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
    </main>
  )
}
