'use client'
import Link from "next/link";
import Image from "next/image";

import iconMobile from "@/assets/icons/mobile-icon.png";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const links = [
    {
        text: "Home",
        path: "s-hero"
    },
    {
        text: "About Me",
        path: "s-about"
    }
]

export function MenuMobile(){
    const[isOpen, setIsOpen] = useState(false);
    const[isMounted, setIsMounted] = useState(false);

    const firstCall = useRef(true);


    function handleMobile(){
        if(isOpen){
            setIsOpen(false);
        }
        else {
            setIsMounted(true);
            requestAnimationFrame(() => setIsOpen(true));
        }
    }

    useEffect(() => {
         
         if(firstCall.current){
             firstCall.current = false;
             return;
         }
         
        document.documentElement.classList.toggle("overflow-hidden");
    }, [isOpen])

    return(
        <>
        <button className="p-5 border-l border-t border-dark-12 rounded-tl-2xl self-end transition-colors ease-linear [&:hover,&:focus]:bg-dark-08 laptop:hidden" onClick={handleMobile}>
            <Image
                src={iconMobile}
                alt="Icone hamburguer mobile"
                title="hamburguer mobile"
                loading="eager"
            />
        </button>
             {
                isMounted && (
                    <div className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity ease-linear ${isOpen ? 'opacity-100' : 'opacity-0'}`} onTransitionEnd={() => {if(!isOpen) setIsMounted(false)}}>
                        <div className="w-full h-full fixed top-0 left-0 bg-black opacity-50" onClick={handleMobile}></div>

                        <aside className={`w-1/2 h-full fixed top-0 left-0 bg-dark-08 py-5 transition-transform ease-linear ${isOpen ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                            <div className="flex items-center justify-between px-8 mb-9">
                                <span className="font-semibold text-lg uppercase">Bernardowert</span>
                                <button className="w-8 h-8 flex items-center justify-center border border-white/60 rounded-sm" aria-label="Fechar Menu mobile" onClick={handleMobile}>
                                    <X size={24}/>
                                </button>
                            </div>
                                <nav>
                                    {
                                        links.map(({text,path}) => (
                                            <Link key={text} href={`#${path}`} className="block py-6 px-8 text-lg uppercase font-medium border-b border-dark-12 first:pt-0">{text}</Link>
                                        ))
                                    }
                                </nav>
                        </aside>
                    </div>
                )
             }
        </>
    )
}
