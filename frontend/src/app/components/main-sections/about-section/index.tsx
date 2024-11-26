import { query } from "@/lib/apollo/client"
import { GET_ABOUT_CONTENT } from "./about-section-query"

type TAboutSectionQuery = {
    mainSection: {
        about: string
    }
};

export default async function AboutSection() {
    const { data } = await query<TAboutSectionQuery>({query: GET_ABOUT_CONTENT})
    
    return (
        <div className="pt-10 flex flex-col gap-y-8 font-roboto-slab font-normal text-xl">
            {
                data.mainSection.about.split('\n').map((line, index) => (
                    line.length > 0 && (
                        <p key={index}>{line}</p>
                    )
                ))
            }
        </div>
    )
}