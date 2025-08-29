import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import Image from "next/image";

import mainPhoto from "@/assets/photos/photo03.png";
import { AboutInfo } from "./infos";

export function SectionAbout(){
    return(
        <section className="pt-20" id="s-about">
            <ContainerGRID>
                 <HeadingTitle title="Sobre Mim" subTitle="Sobre"/>
                 <div className="flex flex-col items-center justify-between gap-5 mt-16 laptop:flex-row">
                         <Image
                           src={mainPhoto}
                           alt="Foto do Bernardo"
                           title="Bernardo"
                           className="w-full h-96 object-cover rounded-2xl tablet:max-w-imageAbout tablet:h-imageAbout"
                          />

                          <AboutInfo/>
                 </div>
            </ContainerGRID>
        </section>
    )
}