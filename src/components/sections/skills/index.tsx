import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Cards } from "./cards";
import { ChevronLeft, ChevronRight } from "lucide-react";



const btns = [
     {
         classname: "btn-prev",
         icon:ChevronLeft,
         label:'botão para ir para o slide anterior'
     },
     {
         classname: "btn-next",
         icon:ChevronRight,
         label:'botão para ir para o slide seguinte'
     }
]

export function SectionSkills(){
    return(
        <section className="py-24" id="s-skills">
            <ContainerGRID className="px-0 tablet:px-4">
                 <HeadingTitle title="Tecnologias que uso no meu dia a dia" classname="px-4 tablet:px-0" subTitle="Tecnologias">
                           <div className="rounded-full p-2.5 border border-dark-12 gap-3 flex items-center">
                                 {
                                     btns.map(({classname, icon:Icon, label}, index) => (
                                         <button key={index} className={`${classname} w-12 h-12 flex bg-dark-12 rounded-full items-center justify-center transition-opacity ease-linear [&:hover,&:focus]:opacity-80`} aria-label={label}>{
                                              <Icon size={27}/>
                                         }</button>
                                     ))
                                 }
                           </div>
                 </HeadingTitle>
                 <Cards/>
            </ContainerGRID> 
        </section>
    )
}