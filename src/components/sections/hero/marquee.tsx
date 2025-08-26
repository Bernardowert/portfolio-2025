import { Marquee } from "@/components/magicui/marquee";


import html from "@/assets/icons/icon-html5.png";
import css3 from "@/assets/icons/icon-Css3.png";
import tailwind from "@/assets/icons/icon-tailwindcss.svg";
import sass from "@/assets/icons/icon-sass.svg";
import styledComponet from "@/assets/icons/icon-styledComponents.png";
import javascript from "@/assets/icons/icon-javscript.svg";
import typeScript from "@/assets/icons/icon-typescript.svg";
import react from "@/assets/icons/icon-react.svg";
import nextJS from "@/assets/icons/icon-nextjs.svg";
import NodeJS from "@/assets/icons/icon-nodejs.svg";
import { CardSkills } from "../../cardSkills";


const tecnologias = [
    {
        text: "HTML5",
        iconSrc: html
    },
    {
        text: "CSS3",
        iconSrc: css3
    },
    {
        text: "TailwindCSS",
        iconSrc: tailwind
    },
    {
        text: "Scss/Sass",
        iconSrc: sass
    },
    {
        text: "Styled Components",
        iconSrc: styledComponet
    },
    {
        text: "JavaScript",
        iconSrc: javascript
    },
    {
        text: "TypeScript",
        iconSrc: typeScript
    },
    {
        text: "ReactJS",
        iconSrc: react
    },
    {
        text: "NextJS",
        iconSrc: nextJS
    },
    {
        text: "NodeJS",
        iconSrc: NodeJS
    },
]


export function MarqueeElement(){
    return(
        <Marquee pauseOnHover className="py-5 border-y border-dark-12 bg-dark-06 mt-10 laptop:mt-0" style={{ "--gap": "150px" } as React.CSSProperties}>
            {
                tecnologias.map(({text, iconSrc}, index) => (
                    <CardSkills key={index} title={text} imageSrc={iconSrc} classname="max-w-7 h-7"/>
                ))
            }
        </Marquee>
    )
}