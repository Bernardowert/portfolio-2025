import { CardProject } from "@/components/cardProject";
import logo01 from "@/assets/icons/project01.png";
import project01 from "@/assets/project-imgs/project-01.png";
import project02 from "@/assets/project-imgs/project-02.png";
import project03 from "@/assets/project-imgs/project-03.png";
import project04 from "@/assets/project-imgs/project-04.png";
import project05 from "@/assets/project-imgs/project-05.png";
import project06 from "@/assets/project-imgs/project-06.png";
import project07 from "@/assets/project-imgs/project-07.png";
import project08 from "@/assets/project-imgs/project-08.png";
import project09 from "@/assets/project-imgs/project-09.png";
import github from "@/assets/icons/github-icon.png";
import seeIcon from "@/assets/icons/see-icon.png";
const allProjects = [
    {
        imageSrc: project01,
        title:"Centrum Mit",
        date:"2025",
        linkText:"Acessar",
        linkUrl:"https://centrumit.com.br/",
        listing: [
             {
                icon:seeIcon,
                href: "https://centrumit.com.br/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para consultorias de TI",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project02,
        title:"Iara schneider advogacia",
        date:"2025",
        linkText:"Acessar",
        linkUrl:"https://iaraschneider.com.br/",
        listing: [
             {
                icon:seeIcon,
                href: "https://iaraschneider.com.br/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para advogacia",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project03,
        title:"mowy",
        date:"2024",
        linkText:"Acessar",
        linkUrl:"https://mowy.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://mowy.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para um site de músicas",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project04,
        title:"Namd",
        date:"2024",
        linkText:"Acessar",
        linkUrl:"https://namd-web.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://namd-web.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para um site de viagens",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project05,
        title:"Social UP",
        date:"2024",
        linkText:"Acessar",
        linkUrl:"https://socialups.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://namd-web.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para marketing",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
     {
        imageSrc: project06,
        title:"RARE GEMNFT",
        date:"2024",
        linkText:"Acessar",
        linkUrl:"https://nft-project-bernardowert.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://nft-project-bernardowert.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para marketing",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project07,
        title:"Bank Rebank",
        date:"2024",
        linkText:"Acessar",
        linkUrl:"https://rebankproject.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://rebankproject.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para banco ficticio",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project08,
        title:"Iron GYM",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://project-academia.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://project-academia.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para academia",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
    {
        imageSrc: project09,
        title:"Verdugo",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://project-verdugo.netlify.app/",
        listing: [
             {
                icon:seeIcon,
                href: "https://project-verdugo.netlify.app/",
                title:"Icone ver"
             }
        ],
        projectDescription:"Site criado para aluguel de carros",
        tecnologias: ["HTML5", "CSS3", "Javascript", "Sass/Scss", "WordPress", "PHP"]
    },
]

export function Projects(){
    return(
        <div className="mt-20 grid tablet:grid-cols-2 justify-items-center laptop:grid-cols-3 gap-x-8 gap-y-10">
             {
                allProjects.map(({imageSrc, title, date, linkText, linkUrl, listing, projectDescription, tecnologias},index) => (
                    <CardProject key={index} imageSrc={imageSrc} title={title} date={date} linkText={linkText} linkUrl={linkUrl} dataLinks={listing} projectDescription={projectDescription} tecnologias={tecnologias}/>
                ))
             }
        </div>
    )
}