import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerGRIDProps{
    children:ReactNode;
    className?:string;
}

export function ContainerGRID({children,className}:ContainerGRIDProps){
    const defaultClass = "w-full max-w-containerGRID desktop:max-w-containerGRID-Desktop mx-auto px-4";
    const combinedClass = twMerge(defaultClass,className);
    return(
        <div className={combinedClass}>
          {children}
        </div>
    )
}