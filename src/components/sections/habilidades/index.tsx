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
                <div className="flex flex-col laptop:flex-row gap-8 items-center justify-between mt-20">
                        <div className="w-full max-w-imageAbout">
                        <h3 className="text-4xl font-medium text-grey-80 mb-6">Habilidades</h3>
                        <p className="text-lg text-grey-90 mb-12">Estas são as habilidades que me definem como profissional e me ajudam a entregar resultados consistentes, com foco em colaboração, comunicação e crescimento contínuo.</p>
                        <div>
                                <strong className="text-lg font-medium text-grey-80 mb-5 block">Soft Skills em Destaque</strong>
                                <Highlights/>
                        </div>
                       </div>
                       <Image
                        src={secondPhoto}
                        alt="Foto do bernardo"
                        title="Bernardo"   
                        className="w-full max-w-imageAbout laptop:h-imageAbout h-96 object-cover rounded-3xl laptop:rounded-bl-[100px] filter brightness-75"                    
                       />
                </div>
            </ContainerGRID>
        </section>
    )
}