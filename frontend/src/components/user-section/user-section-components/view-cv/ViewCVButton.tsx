'use client'

import Image from "next/image"
import { getStrapiUrl } from "@/utils/getStrapiUrl"

export default function ViewCVButton({link}:{link:string}) {
    const handleViewCV = () => {
        window.open(getStrapiUrl(link), '_blank');
    };

    return(
        <button 
        className="flex w-fit gap-x-2 font-roboto-slab font-bold text-3xl items-center 
        opacity-50 transition-opacity hover:opacity-100"
        onClick={handleViewCV}
        >
            <span>View my CV</span>
            <Image 
            src='/images/cv-icon.svg'
            alt="view cv icon"
            width={30}
            height={30}
            />
        </button>
    )
}