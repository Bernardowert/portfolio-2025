import Image from "next/image";
import Link from "next/link";

import { SocialList } from "@/components/socialList";
import { Button } from "@/components/buttons";

import star from "@/assets/icons/star.png";
import linkedin from "@/assets/icons/linkedin.png";
import facebook from "@/assets/icons/facebook-icon.png";
import github from "@/assets/icons/github-icon.png";



export const Title = ({title}:{title:string}) => {
    return (
    <h3 className="flex items-center gap-2.5"><Image src={star} alt="Icone de uma estrela" title="Estrela"/><span className="text-grey-80 text-3xl font-medium">{title}</span> </h3>
  )
}


const listingContact = [
    {
        title: "Email",
        href: "mailto:bernardowert1212@gmail.com",
        urlText: "bernardowert1212@gmail.com"
    },
    {
        title: "Telefone",
        href: "tel:21991836057",
        urlText: "(21) 99183-6057"
    }
]


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

export function AboutInfo(){
    return(
         <div className="w-full max-w-imageAbout border border-dark-12 rounded-4xl">
                    <div className="p-10  border-b border-dark-12">
                         <Title title="Introdução" />
                         <p className="text-lg text-grey-80 mt-5 ">My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the worlds beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.</p>
                    </div>

                      <div className="p-10 space-y-10">
                      <Title title="Contato" />
                       <ul className="flex items-center gap-24">
                        {
                            listingContact.map(({title, href, urlText}, index) => (
                            <li key={index}>
                                <span className="block text-lg text-grey-90 font-medium mb-2.5">{title}:</span>
                                <Link href={href} className="text-xl transition-colors ease-linear [&:hover,&:focus]:text-purple-60">{urlText}</Link>
                            </li>
                            ))
                        }
                       </ul>
                        <div className="flex items-center gap-24">
                              <SocialList infos={list}/>
                              <div className="flex items-center gap-5">
                                  <Button styleType="btnPrimary" className="px-10">Let’s Work</Button>
                                  <Button styleType="btnPrimary" className="px-10">Download CV</Button>
                              </div>
                        </div>
                      </div>
         </div>
    )
}