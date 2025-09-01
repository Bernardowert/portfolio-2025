'use client'
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";


const listing = [
     {
        text: "Inicio",
        path: "s-hero"
     },
     {
        text: "Sobre mim",
        path: "s-about"
     },
    {
        text: "Skills",
        path: "s-skills"
     },
     {
        text: "Projetos",
        path: "s-portfolio"
     },
]

export function NavListing(){
    const[activeSection, setActiveSection] = useState("");
    const[isClicked, setIsClicked] = useState(false);

     useEffect(() => {
          if(isClicked) return;
          const handleScroll = () => {
              listing.forEach(({path}) => {
                 const section = document.getElementById(path);

                  if(section) {
                       const rect = section.getBoundingClientRect();

                       if(rect.top <= 150 && rect.bottom >= 150){
                            setActiveSection(path);
                       }
                  }
                  
                  
              })
          }
          handleScroll();
          window.addEventListener("scroll",handleScroll);

          return () => {
              window.removeEventListener("scroll",handleScroll);
          }
     },[isClicked])


    function handleScrollToSection(sectionID:string, e: MouseEvent<HTMLAnchorElement>){
       e.preventDefault();
       const section = document.getElementById(sectionID);
       
       if(section) {
           const initPos = section.offsetTop - 112;
           setActiveSection(sectionID);
           setIsClicked(true);
           scrollTo({
               top: initPos,
               behavior: "smooth"
           })


           setTimeout(() => {
             setIsClicked(false);
           }, 500);
           
       }
    }
    return(
        <nav className="hidden items-center self-end border border-dark-12 rounded-t-xl overflow-hidden laptop:flex">
            {
                listing.map(({text,path}, index) => (
                    <Link key={index} onClick={(e) => handleScrollToSection(path, e)}  href={`#${path}`} className={`${activeSection === path ? "bg-dark-08 text-white" : ""} px-12 py-7 not-last:border-r border-dark-12 font-medium text-grey-70 transition-all ease-linear [&:hover,&:focus]:bg-dark-08 [&:hover,&:focus]:text-white active:bg-dark-08`}>{text}</Link>
                ))
            }
        </nav>
    )
}