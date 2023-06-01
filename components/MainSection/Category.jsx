import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import Procuct1 from '@public/assets/demon-slayer/muichiro-white.png'


const Category = () => {
  return (
   <div className='flex flex-wrap gap-[20px] justify-center'>
        <Link
        href='/category/jujutsu'
        className='cursor-pointer overflow-hidden duration-200 hover:scale-110'
        >
            <Image
                src={Procuct1}
                alt='product'
                className='w-[120px] h-[120px] md:w-[200px] md:h-[200px]'
            />
        </Link>
        
        <Link
        href='/category/jujutsu'
        className='cursor-pointer overflow-hidden duration-200 hover:scale-110'
        >
            <Image
                src={Procuct1}
                alt='product'
                className='w-[120px] h-[120px] md:w-[200px] md:h-[200px]'
            />
        </Link>
        
        <Link
        href='/category/jujutsu'
        className='cursor-pointer overflow-hidden duration-200 hover:scale-110'
        >
            <Image
                src={Procuct1}
                alt='product'
                className='w-[120px] h-[120px] md:w-[200px] md:h-[200px]'
            />
        </Link>
        
        <Link
        href='/category/jujutsu'
        className='cursor-pointer overflow-hidden duration-200 hover:scale-110'
        >
            <Image
                src={Procuct1}
                alt='product'
                className='w-[120px] h-[120px] md:w-[200px] md:h-[200px]'
            />
        </Link>
        
   </div>
  )
}

export default Category