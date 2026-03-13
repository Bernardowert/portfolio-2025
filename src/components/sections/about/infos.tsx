import Image from "next/image";
import Link from "next/link";

import { SocialList } from "@/components/socialList";
import { Button } from "@/components/buttons";

import star from "@/assets/icons/star.png";
import linkedin from "@/assets/icons/linkedin.png";
import instagram from "@/assets/icons/instagram-icon.png";
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
        icon:instagram,
        href: "https://www.instagram.com/bernardowertyy?igsh=MWJ3b2Q0M3hrdDVpMw==",
        title:"Instagram"
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
                         <p className="tablet:text-lg text-grey-80 mt-5 ">Sou um desenvolvedor full stack com +20 projetos feitos. Minha expertise abrange desde a arquitetura de sistemas back-end até a criação de interfaces ricas e responsivas no front-end. Ao longo da minha carreira, tenho me dedicado a entregar soluções eficientes, sempre priorizando a performance, segurança e a experiência do usuário.</p>
                    </div>

                      <div className="p-10 space-y-10">
                      <Title title="Contato" />
                       <ul className="flex flex-col items-start gap-8 laptop:flex-row laptop:items-center laptop:gap-24">
                        {
                            listingContact.map(({title, href, urlText}, index) => (
                            <li key={index}>
                                <span className="block text-lg text-grey-90 font-medium mb-2.5">{title}:</span>
                                <Link href={href} className="text-xl transition-colors ease-linear [&:hover,&:focus]:text-purple-60">{urlText}</Link>
                            </li>
                            ))
                        }
                       </ul>
                        <div className="flex flex-col items-center gap-8 laptop:flex-row laptop:gap-24">
                              <SocialList infos={list}/>
                              <Button styleType="btnPrimary" isBtn={false} forDownload={true} href="/archives/curriculo-Bernardo-Almeida.pdf" className="px-10 w-full">Download CV</Button>
                        </div>
                      </div>
         </div>
    )
}