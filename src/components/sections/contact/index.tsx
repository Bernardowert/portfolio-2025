import { ContainerGRID } from "@/components/containerGRID";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FormContact } from "./form";


const contact = [
    {
        text: "(21) 991836057",
        link: "tel:21991836057"
    },
    {
        text: "bernardowert1212@gmail.com",
        link: "mailto:bernardowert1212@gmail.com"
    }
]

export function SectionContact(){
    return(
        <section className="py-32" id="s-contact">
            <ContainerGRID>          

                <div className="pt-8 border-t border-dark-12 flex items-center flex-col gap-12 laptop:gap-0 laptop:flex-row justify-between">
                     <div className="w-full laptop:max-w-paragraphContact">
                        <div className="mb-7 space-y-4 text-center laptop:text-start">
                            <h2 className="laptop:text-5xl text-4xl font-semibold text-grey-90">Mande sua mensagem</h2>
                            <p className="laptop:text-lg text-grey-90 leading-snug">Preencha o formulário ao lado e fale comigo! Eu irei responder o mais breve possivel.</p>
                        </div>
                            <div className="flex items-center flex-col gap-4 laptop:flex-row laptop:gap-12">
                          {
                            contact.map(({text, link}, index) => (
                                <Link key={index} href={link} className="flex items-center gap-2.5 border-b border-dark-12 group">
                                   <span className="text-lg font-medium transition-opacity ease-linear text-grey-95 group-[&:hover,&:focus]:opacity-80">{text}</span>
                                  <ArrowUpRight size={24} className="group-[&:hover,&:focus]:translate-x-1.5 group-[&:hover,&:focus]:-translate-y-1 transition-transform ease-linear" />
                                </Link>
                            ))
                          }
                      </div>
                     </div>
                     <FormContact/>
                </div>
            </ContainerGRID>
        </section>
    )
}