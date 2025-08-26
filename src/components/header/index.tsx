import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import Image from "next/image";

import iconMobile from "@/assets/icons/mobile-icon.png";

export function Header(){
    return(
        <header className="w-full h-28 fixed top-0 left-0 z-50 border-b border-dark-12">
            <ContainerGRID>
                  <div className="flex items-center h-28 justify-between border-x border-dark-12 pl-4  laptop:px-7 desktop:px-10">
                     <Link href="/" className="font-semibold text-lg">Bernardowert</Link>
                     <NavListing/>
                     <Button styleType="btnPrimary" className="hidden laptop:inline-block">Contact Me</Button>
                     <button className="p-5 border-l border-t border-dark-12 rounded-tl-2xl self-end transition-colors ease-linear [&:hover,&:focus]:bg-dark-08 laptop:hidden">
                        <Image
                         src={iconMobile}
                         alt="Icone hamburguer mobile"
                         title="hamburguer mobile"
                         loading="eager"
                        />
                     </button>
                  </div>
            </ContainerGRID>
        </header>
    )
}