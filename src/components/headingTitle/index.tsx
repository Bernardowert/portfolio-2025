interface HeadingProps{
    subTitle:string;
    title:string;
}

export function HeadingTitle({subTitle, title}:HeadingProps){
    return(
        <div className="pb-12 border-b border-dark-12">
             <span className="text-grey-70 font-semibold text-xl uppercase">{subTitle}</span>
             <h2 className="text-6xl font-semibold text-white mt-1">{title}</h2>
        </div>
    )
}