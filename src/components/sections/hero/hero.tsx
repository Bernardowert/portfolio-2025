import Image from "next/image";
import { ContainerGRID } from "../../containerGRID";



import heroImg from "@/assets/hero-img.png";
import { Button } from "../../buttons";
import { MoveUpRight } from "lucide-react";
import { MarqueeElement } from "./marquee";



export function SectionHero(){
    return(
        <section className="pt-32 laptop:pt-28" id="s-hero">
            <ContainerGRID className="flex items-center justify-between flex-col gap-10 laptop:flex-row laptop:gap-0 text-center laptop:text-start" >
                <div>
                    <span className="text-xl text-grey-90">Desenvolvedor FullStack</span>
                    <h1 className="text-3xl laptop:text-4xl desktop:text-5xl font-semibold text-grey-90 mt-2.5">Bernardo Almeida</h1>
                </div>
                <Image
                 src={heroImg}
                 alt="Imagem hero"
                 title="imagem hero"
                 loading="eager"
                 draggable={false}
                 className="hidden laptop:block laptop:max-w-48 desktop:max-w-full"
                />
                <h2 className="text-2xl uppercase font-semibold tablet:text-4xl max-w-textContact ">Vamos <Button styleType="btnSecondary" aria-label="Botão para ir para seção de contato"><MoveUpRight size={32} strokeWidth={1} /></Button>  Trabalhar juntos</h2>
            </ContainerGRID>
            <MarqueeElement/>
        </section>
    )
}