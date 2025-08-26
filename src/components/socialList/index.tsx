import Image from "next/image";

import linkedin from "@/assets/icons/linkedin.png";
import facebook from "@/assets/icons/facebook-icon.png";
import github from "@/assets/icons/github-icon.png";


const list = [
     {
        icon:linkedin,
        href: "https://www.linkedin.com/in/bernardo-almeida-211b05246/",
        title:"Linkedin"
     },
     {
        icon:facebook,
        href: "https://www.linkedin.com/in/bernardo-almeida-211b05246/",
        title:"Facebook"
     },
     {
        icon:github,
        href: "https://github.com/Bernardowert",
        title:"Github"
     }
]


export function SocialList(){
    return(
        <ul className="flex items-center gap-4 p-2.5 rounded-full border border-dark-12">
              {
                list.map(({icon, href, title}, index) => (
                    <li key={index}>
                        <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-grey-100 bg-dark-12 transition-colors ease-linear [&:hover,&:focus]:bg-dark-06">
                            <Image src={icon} alt={`Icone ${title}`} title={title}/>
                        </a>
                    </li>
                ))
              }
        </ul>
    )
}