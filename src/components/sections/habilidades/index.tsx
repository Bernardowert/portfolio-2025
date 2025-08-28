import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";
import { Highlights } from "./listingHighlights";
import Image from "next/image";

import secondPhoto from "@/assets/photos/mainPhoto.jpeg";

export function SectionHabilidades(){
    return(
        <section>
            <ContainerGRID>
                <HeadingTitle title="Minhas Soft Skills" subTitle="Habilidades"/>
                <div className="flex items-center justify-between mt-20">
                        <div className="w-full max-w-imageAbout">
                        <h3 className="text-4xl font-medium text-grey-80 mb-6">Habilidades</h3>
                        <p className="text-lg text-grey-90 mb-12">descricao</p>
                        <div>
                                <strong className="text-lg font-medium text-grey-80 mb-5 block">Service Highlights</strong>
                                <Highlights/>
                        </div>
                       </div>
                       <Image
                        src={secondPhoto}
                        alt="Foto do bernardo"
                        title="Bernardo"   
                        className="w-full max-w-imageAbout h-imageAbout object-cover rounded-3xl rounded-bl-[100px] filter brightness-75"                    
                       />
                </div>
            </ContainerGRID>
        </section>
    )
}