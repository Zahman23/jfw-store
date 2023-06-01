import Image from "next/image";
import Link from "next/link";
import React from "react";

import Product1 from '@public/assets/demon-slayer/muichiro-white.png'


const ProductsCard = () => {
  return (
       <Link
            href={`/product/1`}
            className="transform overflow-hidden bg-white shadow-md duration-200 hover:scale-105 cursor-pointer rounded-md"
        >
            <Image
                width={700}
                height={700}
                src={Product1}
                alt='product'
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">Muichiro</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        Rp.120.000
                    </p>
                        {/* <>
                            <p className="text-base  font-medium line-through">
                                $15.00
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                %25 off
                            </p>
                        </> */}
                </div>
            </div>
        </Link>
  )
}

export default ProductsCard