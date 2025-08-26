import Link from "next/link";


const listing = [
     {
        text: "Home",
        path: "#"
     },
     {
        text: "About Me",
        path: "#"
     },
     {
        text: "Portfolio",
        path: "#"
     },
     {
        text: "Services",
        path: "#"
     }
]

export function NavListing(){
    return(
        <nav className="hidden items-center self-end border border-dark-12 rounded-t-xl overflow-hidden laptop:flex">
            {
                listing.map(({text,path}, index) => (
                    <Link key={index} href={path} className="px-12 py-7 not-last:border-r border-dark-12 font-medium text-grey-70 transition-all ease-linear [&:hover,&:focus]:bg-dark-08 [&:hover,&:focus]:text-white active:bg-dark-08">{text}</Link>
                ))
            }
        </nav>
    )
}