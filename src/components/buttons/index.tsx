import { ReactNode } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps{
    children:ReactNode;
    className?:string;
}

export function Button({children, className}:ButtonProps){
    const defaultClass = "py-4 px-6 rounded-xl border border-grey-100 bg-dark-12 transition-colors ease-linear [&:hover,&:focus]:bg-dark-08";
    const combinedClass = twMerge(defaultClass, className);
    return(
        <button className={combinedClass}>
           {children}
        </button> 
    )
}