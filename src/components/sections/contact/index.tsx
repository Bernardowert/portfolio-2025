import { ContainerGRID } from "@/components/containerGRID";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FormContact } from "./form";

export default function generateMetadata()

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
        <section className="py-32">
            <ContainerGRID>          
                <div className="flex items-center gap-20">
                      <div className="w-full max-w-paragraphContact">
                        <h2 className="text-5xl font-semibold text-grey-90 mb-4">Contact Information</h2>
                        <p className="text-lg text-grey-90 leading-snug">Feel free to reach out to us through various channels. We are available by phone, email, and social media for your convenience.</p>
                      </div>
                      <div className="flex items-center gap-12">
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
                <div className="mt-8 pt-8 border-t border-dark-12 flex items-center justify-between">
                     <div className="w-full max-w-paragraphContact">
                        <h2 className="text-5xl font-semibold text-grey-90 mb-4">Send Me a Message</h2>
                        <p className="text-lg text-grey-90 leading-snug">Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you promptly.</p>
                     </div>
                     <FormContact/>
                </div>
            </ContainerGRID>
        </section>
    )
}