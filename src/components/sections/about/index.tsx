import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import Image from "next/image";

import mainPhoto from "@/assets/photos/photo03.png";
import { AboutInfo } from "./infos";

export function SectionAbout(){
    return(
        <section className="pt-20">
            <ContainerGRID>
                 <HeadingTitle title="Eu sou Bernardo" subTitle="Sobre"/>
                 <div className="flex items-center justify-between gap-5 mt-16">
                         <Image
                           src={mainPhoto}
                           alt="Foto do Bernardo"
                           title="Bernardo"
                           className="w-full max-w-imageAbout h-imageAbout object-cover rounded-2xl"
                          />

                          <AboutInfo/>
                 </div>
            </ContainerGRID>
        </section>
    )
}