'use client'

import Image from "next/image"
import { getStrapiUrl } from "@/utils/getStrapiUrl"

export default function ViewCVButton({link}:{link:string}) {
    const handleViewCV = () => {
        window.open(getStrapiUrl(link), '_blank');
    };

    return(
        <button 
        className="flex w-fit gap-x-2 items-center         
        font-roboto-slab font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl
        lg:opacity-50 lg:transition-opacity lg:hover:opacity-100
        bg-accent px-4 py-2 rounded-full lg:bg-transparent lg:p-0
        "
        onClick={handleViewCV}
        >
            <span>View my CV</span>
            <Image 
            src='/images/cv-icon.svg'
            alt="view cv icon"
            width={30}
            height={30}
            className="hidden lg:inline-block"
            />
        </button>
    )
}