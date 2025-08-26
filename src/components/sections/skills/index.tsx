import { CardSkills } from "@/components/cardSkills";
import { ContainerGRID } from "@/components/containerGRID";
import { HeadingTitle } from "@/components/headingTitle";


import html from "@/assets/icons/icon-html5.png";
import css3 from "@/assets/icons/icon-Css3.png";
import tailwind from "@/assets/icons/icon-tailwindcss.svg";
import sass from "@/assets/icons/icon-sass.svg";
import styledComponet from "@/assets/icons/icon-styledComponents.png";
import javascript from "@/assets/icons/icon-javscript.svg";
import typeScript from "@/assets/icons/icon-typescript.svg";
import react from "@/assets/icons/icon-react.svg";
import nextJS from "@/assets/icons/icon-nextjs.svg";
import nodeJS from "@/assets/icons/icon-nodejs.svg";
import redux from "@/assets/icons/icon-redux2.png";
import postGREE from "@/assets/icons/icon-postgresql.svg";
import git from "@/assets/icons/icon-git.svg";
import figma from "@/assets/icons/icon-figma.svg";
import wordpress from "@/assets/icons/icon-wordpress.png";
import cosmicCMS from "@/assets/icons/icon-cosmic.svg";
import jest from "@/assets/icons/icon-jest.png";



const skills = [
     {
        title: "HTML5",
        iconSrc: html
     },
     {
        title: "CSS3",
        iconSrc: css3
     },
     {
        title: "TailwindCSS",
        iconSrc: tailwind
     }, 
     {
        title: "Sass",
        iconSrc: sass
     },
     {
        title: "Styled Components",
        iconSrc: styledComponet
     },
     {
        title: "Javascript",
        iconSrc: javascript
     },
     {
        title: "Typescript",
        iconSrc: typeScript
     },
     {
        title: "React",
        iconSrc: react
     },
     {
        title: "NextJS",
        iconSrc: nextJS
     },
     {
        title: "NodeJS",
        iconSrc: nodeJS
     },
     {
        title: "Redux",
        iconSrc: redux
     },
     {
        title: "PostGREE",
        iconSrc: postGREE
     },
     {
        title: "Git",
        iconSrc: git
     },
     {
        title: "Figma",
        iconSrc: figma
     },
     {
        title: "Wordpress",
        iconSrc: wordpress
     },
     {
        title: "Cosmic CMS",
        iconSrc: cosmicCMS
     },
     {
        title: "Jest",
        iconSrc: jest
     }
]


export function SectionSkills(){
    return(
        <section className="py-24">
            <ContainerGRID>
                 <HeadingTitle title="Tecnologias que uso no meu dia a dia" subTitle="Tecnologias"/>
                 <div className="grid grid-cols-5 gap-10 mt-24 bg-dark-06 border border-dark-12 py-10 px-3 rounded-2xl">
                     {
                        skills.map(({title, iconSrc},index) => (
                            <CardSkills key={index} title={title} imageSrc={iconSrc} isColumn classname="max-w-14 h-14"/>
                        ))
                     }
                 </div>
            </ContainerGRID>
        </section>
    )
}