import React from 'react'
import { info, about, getHelp } from '@data'

export const About = () => {
  return (
    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
                    {/* MENU START */}
                    <div className="flex flex-col gap-3 shrink-0">
                        {info.map((item,idx) => <div key={idx} className="font-oswald font-medium uppercase text-sm cursor-pointer">{item.name}</div>)}
                    </div>
                    {/* MENU END */}

                    {/* NORMAL MENU START */}
                    <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            {getHelp.map((item,idx) => <div key={idx} className="font-oswald font-medium uppercase text-sm">{item.name}</div>)}
                        </div>
                        {/* MENU END */}

                        {/* MENU START */}
                        <div className="flex flex-col gap-3">
                            {about.map((item,idx) => <div key={idx} className="font-oswald font-medium uppercase text-sm">{item.name}</div>)}
                            
                        </div>
                        {/* MENU END */}
                    </div>
                    {/* NORMAL MENU END */}
                </div>
  )
}
