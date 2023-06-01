'use client'


import React from "react";

import WrapperFooter from "./WrapperFooter";
import { About } from "./About";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <WrapperFooter className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
               <About />              
               <Social />
            </WrapperFooter>
            <WrapperFooter className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
                {/* LEFT START */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* LEFT END */}

                {/* RIGHT START */}
                <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Guides
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Sale
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Terms of Use
                    </div>
                    <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
                        Privacy Policy
                    </div>
                </div>
                {/* RIGHT END */}
            </WrapperFooter>
        </footer>
    );
};

export default Footer;