import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Cards } from "./cards";



export function SectionSkills(){
    return(
        <section className="py-24" id="s-skills">
            <ContainerGRID className="px-0 tablet:px-4">
                 <HeadingTitle title="Tecnologias que uso no meu dia a dia" classname="px-4 tablet:px-0" subTitle="Tecnologias">
                           <div>
                           <button className="btn-next">Antes</button>
                           <button className="btn-prev">Depois</button>
                           </div>
                 </HeadingTitle>
                 <Cards/>
            </ContainerGRID> 
        </section>
    )
}