'use client'

import Link from "next/link";
import { ContainerGRID } from "../containerGRID";
import { NavListing } from "./navListing";
import { Button } from "../buttons";
import { HeaderComponent } from "./headerComponent";
import { MenuMobile } from "./menuMobile";

export function Header(){

  function handleContact(){
     const element = document.getElementById("s-contact");
      if(element) {
          const initPos = element.offsetTop;
          scrollTo({
             top:initPos,
             behavior:"smooth"
          })
      }
  }
    return(
        <>
          <HeaderComponent>
            <ContainerGRID>
                  <div className="flex items-center h-28 justify-between border-x border-dark-12 pl-4  laptop:px-7 desktop:px-10">
                     <Link href="/" className="font-semibold text-lg">Bernardowert</Link>
                     <NavListing/>
                     <Button styleType="btnPrimary" className="hidden laptop:inline-block" onclickFunction={handleContact}>Entrar em contato</Button>
                      <MenuMobile/>
                  </div>
            </ContainerGRID>
          </HeaderComponent>
        </>
    )
}