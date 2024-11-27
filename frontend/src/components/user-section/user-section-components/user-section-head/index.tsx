import { query } from "@/lib/apollo/client";
import { GET_USER_HEAD } from "./user-head-query";
import Image from "next/image";
import { getStrapiUrl } from "@/utils/getStrapiUrl";

export default async function UserSectionHead() {
    const { data } = await query({query: GET_USER_HEAD})

    return (
        <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-5 items-center">
                <Image 
                src={getStrapiUrl(data.userSection.userIcon.url)}
                alt={data.userSection.userIcon.alternativeText}
                width={88}
                height={88}
                className="rounded-full"
                />
                <div>
                    <h1 className="font-roboto-slab font-black text-5xl">{data.userSection.fullName}</h1>
                    <h2 className="font-roboto-slab font-bold text-3xl">{data.userSection.userSpecialty}</h2>
                </div>
            </div>
            
            <p className="font-roboto-slab font-normal text-xl">{data.userSection.introDescription}</p>
        </div>
    )
}