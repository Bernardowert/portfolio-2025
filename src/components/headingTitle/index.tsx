interface HeadingProps{
    subTitle:string;
    title:string;
    classname?:string;
}

export function HeadingTitle({subTitle, title, classname}:HeadingProps){
    return(
        <div className={`pb-12 border-b border-dark-12 uppercase ${classname}`}>
             <span className="text-grey-70 font-semibold text-xl uppercase">{subTitle}</span>
             <h2 className="text-5xl font-semibold text-white mt-1">{title}</h2>
        </div>
    )
}