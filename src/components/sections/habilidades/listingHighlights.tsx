import Image from "next/image";
import iconDark from "@/assets/icons/icon-dark.png";

const listings = [
    {
        title:"Coverage for weddings, parties, corporate functions, and more."
    },
    {
        title:"Skilled photographers who know how to seize the moment."
    },
    {
        title:"A mix of candid and posed shots for a comprehensive story."
    },
    {
        title:"Quick turnaround for you to relive the day's highlights."
    }
]

export function Highlights(){
    return(
        <ul className="space-y-2.5">
             {
                listings.map(({title},index) => (
                    <li key={index} className="py-4 px-5 border border-dark-12 rounded-2xl">
                        <div className="flex items-center gap-2.5">
                            <Image src={iconDark} alt="Icone estrela" title="Estrela"/>
                            <p>{title}</p>
                        </div>
                    </li>
                ))
             }
        </ul>
    )
}