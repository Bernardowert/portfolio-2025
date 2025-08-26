import Image from "next/image";
import { ContainerGRID } from "../containerGRID";



import heroImg from "@/assets/hero-img.png";
import { Button } from "../buttons";
import { MoveUpRight } from "lucide-react";
import { MarqueeElement } from "./marquee";
export function SectionHero(){
    return(
        <section className="pt-28">
            <ContainerGRID className="flex items-center justify-between">
                <div>
                    <span className="text-xl text-grey-90">Desenvolvedor FullStack</span>
                    <h1 className="text-6xl font-semibold text-grey-90 mt-2.5">Bernardo Almeida</h1>
                </div>
                <Image
                 src={heroImg}
                 alt="Imagem hero"
                 title="imagem hero"
                 loading="eager"
                 draggable={false}
                />
                <h2 className="uppercase font-semibold text-4xl max-w-textContact ">Vamos <Button styleType="btnSecondary" aria-label="Botão para ir para seção de contato"><MoveUpRight size={32} strokeWidth={1} /></Button>  Trabalhar juntos</h2>
            </ContainerGRID>
            <MarqueeElement/>
        </section>
    )
}