import { ContainerGRID } from "../containerGRID";
import { SocialList } from "../socialList";

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

export function Footer(){
    return(
        <footer className="flex items-center h-28 border-t border-dark-12">
            <ContainerGRID className="flex items-center justify-between">
                <span className="font-semibold text-lg">Bernardowert</span>
                <SocialList infos={list}/>
                <span>Copyright © 2025</span>
            </ContainerGRID>
        </footer>
    )
}