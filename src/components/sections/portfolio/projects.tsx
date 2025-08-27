import logo01 from "@/assets/icons/project01.png";
import { CardProject } from "@/components/cardProject";


const allProjects = [
    {
        imageSrc: logo01,
        title:"Faces of Resilience",
        date:"2023",
        linkText:"Acessar",
        linkUrl:"https://google.com.br"
    }
]

export function Projects(){
    return(
        <div className="mt-20">
             {
                allProjects.map(({imageSrc, title, date, linkText, linkUrl},index) => (
                    <CardProject key={index} imageSrc={imageSrc} title={title} date={date} linkText={linkText} linkUrl={linkUrl}/>
                ))
             }
        </div>
    )
}