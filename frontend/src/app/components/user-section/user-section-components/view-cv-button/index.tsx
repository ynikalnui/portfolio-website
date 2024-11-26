'use client'

import Image from "next/image"
import { GET_USER_RESUME } from "./resume-cv-query"
import { useQuery } from "@apollo/client"
import { getStrapiUrl } from "@/app/utils/getStrapiUrl"

export default function ViewCVButton() {
    const { data } = useQuery(GET_USER_RESUME)
    
    const handleViewCV = () => {
        if(data) {
            window.open(getStrapiUrl(data.userSection.resume.url), '_blank');
        }
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