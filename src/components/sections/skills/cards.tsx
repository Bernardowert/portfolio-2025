'use client'

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
import { CardSkills } from "@/components/cardSkills";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';


import { Pagination, Navigation } from 'swiper/modules';


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
export function Cards(){
    return(

       <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={
          {
            nextEl: '.btn-next',
            prevEl: '.btn-prev'
          }
        }
        loop={true}
        breakpoints={
              {
                 375: {
                      slidesPerView: 2
                 },
                 640: {
                     slidesPerView: 3
                 },
                 991: {
                     slidesPerView: 4
                 },
                 1280:{
                     slidesPerView: 6
                 }
              }
        }
        modules={[Pagination, Navigation]}
        className="mt-10 tablet:mt-24 bg-dark-06 border border-dark-12 !py-10 !px-3 tablet:rounded-2xl"
      >
         {
            skills.map(({title, iconSrc},index) => (
                <SwiperSlide key={index}>
                    <CardSkills title={title} imageSrc={iconSrc} isColumn classname="max-w-12 h-12 laptop:max-w-14 laptop:h-14"/>
                </SwiperSlide>
            ))
         }
      </Swiper>
    )
}