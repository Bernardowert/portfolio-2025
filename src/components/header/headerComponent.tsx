'use client'

import { ReactNode, useEffect, useState } from "react";

export function HeaderComponent({children}: {children:ReactNode}){
    const[scroll, setScroll] = useState(0);



    useEffect(() => {
     const handleScroll = () => {
      setScroll(window.scrollY);
    };
      handleScroll();
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, [])
    
    return(
        <header className={`w-full h-28 fixed top-0 left-0 z-50 border-b transition-colors ease-linear border-dark-12 ${scroll > 0 ? "bg-dark-06" : "backdrop-blur-none"}`}>
           {children}
        </header>
    )
}