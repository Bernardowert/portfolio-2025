import Image from "next/image";

interface CardProps{
    title:string;
    imageSrc:string;
    classname:string
}


export function CardSkills({title,imageSrc, classname}:CardProps){
    return(
        <div className="flex items-center gap-2.5">
              <div className={`w-full ${classname} mb-1.5 flex items-center justify-center`}>
                 <Image
                  src={imageSrc}
                  alt={`Icon ${title}`}
                  title={`Icon ${title}`}
                 />
              </div>
              <strong className="font-semibold text-purple-90">{title}</strong>
        </div>
    )
}