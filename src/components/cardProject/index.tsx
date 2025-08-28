import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { InfoProps, SocialList } from "../socialList";

interface CardProps{
    imageSrc: string | StaticImageData;
    title:string;
    date:string;
    linkText:string;
    linkUrl:string;
    dataLinks: InfoProps[];
}

export function CardProject({imageSrc, title, date, linkText, linkUrl, dataLinks}:CardProps){
    return(
        <div className="w-full max-w-lg">
                <div className="w-full relative flex items-center group justify-center overflow-hidden rounded-2xl h-96 laptop:h-imageAbout before:content-[''] before:absolute before:w-full before:h-full before:backdrop-blur-sm before:opacity-0 before:transition-all [&:hover,&:focus]:before:opacity-100 ">
                        <Image
                        src={imageSrc}
                        alt={`Imagem do projeto ${title}`}
                        title={`${title}`}
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute z-10 group-[&:hover,&:focus]:opacity-100 pointer-events-none group-[&:hover,&:focus]:pointer-events-auto opacity-0 transition-opacity ease-linear">
                            <SocialList infos={dataLinks}/>
                        </div>
                </div>
                 <div className="flex items-center justify-between mt-5">
                         <div>
                              <h3 className="text-xl font-medium text-grey-80 mb-1">{title}</h3>
                              <span className="text-lg text-grey-70">{date}</span>
                         </div>
                         <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 border-b uppercase border-grey-100 pb-1.5 group">
                            <span className="text-lg font-medium transition-opacity text-grey-90 group-hover:opacity-85">{linkText}</span>
                            <MoveUpRight size={24} className="transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-1" />
                         </a>
                 </div>
        </div>
    )
}