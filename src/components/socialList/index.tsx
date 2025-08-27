import Image, { StaticImageData } from "next/image";




export interface InfoProps{
    icon:string | StaticImageData;
    href: string;
    title:string;
}
interface ListProps{
    infos:InfoProps[];
}


export function SocialList({infos}:ListProps){
    return(
        <ul className="flex items-center gap-4 p-2.5 rounded-full border border-dark-12">
              {
                  infos && (
                        infos.map(({icon, href, title}, index) => (
                            <li key={index}>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-grey-100 bg-dark-12 transition-colors ease-linear [&:hover,&:focus]:bg-dark-06">
                                    <Image src={icon} alt={`Icone ${title}`} title={title}/>
                                </a>
                            </li>
                        ))
                  )
              }
        </ul>
    )
}