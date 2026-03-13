import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const btnStyles = {
    btnPrimary: "inline-block py-4 px-6 font-medium rounded-xl border border-grey-100 bg-dark-12 transition-colors ease-linear [&:hover,&:focus]:bg-dark-08",
    btnSecondary: "inline-block rounded-full bg-purple-50 py-4 px-12 transition-all [&:hover,&:focus]:bg-dark-08 "
}

type btnType = keyof typeof btnStyles;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
    styleType: btnType;
    onclickFunction?: () => void;
    isBtn?:boolean;
    href?:string;
    forDownload?:boolean
}

export function Button({children, className, styleType, onclickFunction, isBtn = true, href, forDownload}:ButtonProps){
    const defaultClass = btnStyles[styleType];
    const combinedClass = twMerge(defaultClass, className);
    return(
          isBtn ? (
              <button onClick={onclickFunction} className={combinedClass}>
           {children}
        </button> 
          ) : (
            <a href={href} className={combinedClass} {...forDownload && {download:true}}>
           {children}
            </a>
          )
    )
}