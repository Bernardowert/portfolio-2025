import { SectionAbout } from "@/components/sections/about";
import { SectionHabilidades } from "@/components/sections/habilidades";
import { SectionHero } from "@/components/sections/hero/hero";
import { SectionSkills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
     <SectionHero/>
     <SectionAbout/>
     <SectionSkills/>
     <SectionHabilidades/>
    </>
  );
}
