import Image from "next/image";
import iconDark from "@/assets/icons/icon-dark.png";

const listings = [
    {
        title:"Comunicação Eficaz",
        description:"Capacidade de transmitir ideias de forma clara e objetiva, seja verbalmente ou por escrito, garantindo que todos compreendam a mensagem corretamente."
    },
    {
        title:"Trabalho em Equipe",
        description:"Capacidade de trabalhar em equipe, colaborar com outros desenvolvedores e contribuir para o sucesso do projeto."
    },
    {
        title:"Resolução de Problemas",
        description:"Capacidade de identificar e resolver problemas complexos, garantindo que o projeto seja eficiente e funcional."
    },
    {
        title:"Adaptabilidade",
        description: "Conseguir lidar com mudanças, aprender rapidamente novas ferramentas e se ajustar a diferentes contextos ou demandas."
    }
]

export function Highlights(){
    return(
        <ul className="space-y-2.5">
             {
                listings.map(({title,description},index) => (
                    <li key={index} className="py-4 px-5 border border-dark-12 rounded-2xl flex items-center gap-2.5">
                         <Image src={iconDark} alt="Icone estrela" title="Estrela"/>
                             <div>
                                  <h3 className="text-lg font-semibold">{title}</h3>
                                  <p className="text-sm font-medium mt-2 max-w-10/12">{description}</p>
                             </div>
                    </li>
                ))
             }
        </ul>
    )
}