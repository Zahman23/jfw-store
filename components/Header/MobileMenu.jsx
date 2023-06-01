import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link'

import { data, subMenuData } from '@data'



function MobileMenu({showCatMenu, setShowCatMenu, setMobileMenu}) {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
        {data.map((item,idx) => {
            return(
                <React.Fragment key={idx}>
                    {!!item.subMenu ? (
                        <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative'
                        onClick={() => setShowCatMenu(!showCatMenu)}
                        >

                            <div className='flex justify-between items-center'>
                            {item.name}
                            <BsChevronDown size={14} />
                            </div>

                            {showCatMenu && (
                                <ul className='bg-blac/[0.05] -mx-5 mt-4 -mb-4'>
                                    {subMenuData.map((item,idx) => {
                                        return(
                                            <Link
                                            onClick={() => {
                                                setShowCatMenu(false)
                                                setMobileMenu(false)
                                            }} 
                                            href='/' 
                                            key={idx}>
                                                <li className='py-4 px-8 border-t flex justify-between'>
                                                    {item.name}
                                                    <span className='opacity-50 text-sm'>76</span>
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className='py-4 px-5 border-t'>
                            <Link
                            href={item?.url}
                            onClick={() => setMobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MobileMenu