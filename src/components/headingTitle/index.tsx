import { ReactNode } from "react";

interface HeadingProps{
    subTitle:string;
    title:string;
    classname?:string;
    children?: ReactNode;
}

export function HeadingTitle({subTitle, title, classname, children}:HeadingProps){
    return(
       <div className={`pb-12 border-b border-dark-12 uppercase ${classname} ${children ? "flex items-center justify-between flex-col laptop:flex-row gap-7 laptop:gap-0" : ""}`}>
              <div className="text-center laptop:text-start">
                    <span className="text-grey-70 font-semibold text-xl uppercase">{subTitle}</span>
                    <h2 className="text-3xl tablet:text-5xl font-semibold text-white mt-1">{title}</h2>
              </div>
              
              {
                 children
              }
      </div>
        
    )
}