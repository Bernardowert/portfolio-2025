import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const btnStyles = {
    btnPrimary: "py-4 px-6 rounded-xl border border-grey-100 bg-dark-12 transition-colors ease-linear [&:hover,&:focus]:bg-dark-08",
    btnSecondary: "rounded-full bg-purple-50 py-4 px-12 transition-all [&:hover,&:focus]:bg-dark-08 "
}

type btnType = keyof typeof btnStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
    styleType: btnType;
}

export function Button({children, className, styleType}:ButtonProps){
    const defaultClass = btnStyles[styleType];
    const combinedClass = twMerge(defaultClass, className);
    return(
        <button className={combinedClass}>
           {children}
        </button> 
    )
}