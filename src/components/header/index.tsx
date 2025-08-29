import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import { HeaderComponent } from "./headerComponent";
import { MenuMobile } from "./menuMobile";

export function Header(){
    return(
        <>
          <HeaderComponent>
            <ContainerGRID>
                  <div className="flex items-center h-28 justify-between border-x border-dark-12 pl-4  laptop:px-7 desktop:px-10">
                     <Link href="/" className="font-semibold text-lg">Bernardowert</Link>
                     <NavListing/>
                     <Button styleType="btnPrimary" className="hidden laptop:inline-block">Contact Me</Button>
                      <MenuMobile/>
                  </div>
            </ContainerGRID>
          </HeaderComponent>
        </>
    )
}