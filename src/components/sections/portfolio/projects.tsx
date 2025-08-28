import logo01 from "@/assets/icons/project01.png";
import { CardProject } from "@/components/cardProject";

import github from "@/assets/icons/github-icon.png";


const allProjects = [
    {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    },
     {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    },
     {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    },
     {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    },
     {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    },
     {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br",
        listing: [
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             },
             {
                icon:github,
                href: "https://github.com/Bernardowert",
                title:"Github"
             }
        ]
    }
]

export function Projects(){
    return(
        <div className="mt-20 grid tablet:grid-cols-2 justify-items-center laptop:grid-cols-3 gap-x-8 gap-y-10">
             {
                allProjects.map(({imageSrc, title, date, linkText, linkUrl, listing},index) => (
                    <CardProject key={index} imageSrc={imageSrc} title={title} date={date} linkText={linkText} linkUrl={linkUrl} dataLinks={listing}/>
                ))
             }
        </div>
    )
}