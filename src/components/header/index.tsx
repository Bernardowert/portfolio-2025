import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";

export function Header(){
    return(
        <header className="w-full h-28 fixed top-0 left-0 z-50 border-b border-dark-12">
            <ContainerGRID>
                  <div className="flex items-center h-28 justify-between border-x border-dark-12 px-10">
                     <Link href="/" className="font-semibold text-lg">Bernardowert</Link>
                     <NavListing/>
                     <Button>Contact Me</Button>
                  </div>
            </ContainerGRID>
        </header>
    )
}