
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Projects } from "./projects";

export function SectionPortfolio(){
    return(
        <section className="pt-36" id="s-portfolio">
            <ContainerGRID>
                <HeadingTitle title="Meus Projetos" subTitle="Portfolio"/>
                <Projects/>
            </ContainerGRID>
        </section>
    )
}