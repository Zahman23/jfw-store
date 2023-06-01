import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link'

import { data, subMenuData } from '@data'



function Menu({showCatMenu, setShowCatMenu}) {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item,idx) => {
            return(
                <React.Fragment key={idx}>
                    {!!item.subMenu ? (
                        <li className='cursor-pointer flex items-center gap-2 relative'
                        onMouseEnter={() => setShowCatMenu(true)}
                        onMouseLeave={() => setShowCatMenu(false)}
                        >
                            {item.name}
                            <BsChevronDown size={14} />

                            {showCatMenu && (
                                <ul className='bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg'>
                                    {subMenuData.map((item,idx) => {
                                        return(
                                            <Link
                                            onClick={() => setShowCatMenu(false)} 
                                            href='/' 
                                            key={idx}>
                                                <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
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
                        <li className='cursor-pointer'>
                            <Link
                            href={item?.url}
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

export default Menu