import { query } from "@/lib/apollo/client";
import { GET_USER_HEAD } from "./user-head-query";
import Image from "next/image";
import { getStrapiUrl } from "@/utils/getStrapiUrl";

export default async function UserSectionHead() {
    const { data } = await query({query: GET_USER_HEAD})

    return (
        <div className="flex flex-col gap-y-4 lg:gap-y-8">
            <div className="flex gap-x-4 lg:gap-x-5 items-center justify-center lg:justify-start">
                <Image 
                src={getStrapiUrl(data.userSection.userIcon.url)}
                alt={data.userSection.userIcon.alternativeText}
                width={88}
                height={88}
                className="rounded-full w-[3.5rem] sm:w-[4.5rem] md:w-[5.5rem] lg:w-[4.5rem] xl:w-[5.5rem]"
                />
                <div>
                    <h1 className="font-roboto-slab font-black text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">{data.userSection.fullName}</h1>
                    <h2 className="font-roboto-slab font-bold text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">{data.userSection.userSpecialty}</h2>
                </div>
            </div>
            
            <p className="font-roboto-slab font-normal text-center lg:text-start text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">{data.userSection.introDescription}</p>
        </div>
    )
}