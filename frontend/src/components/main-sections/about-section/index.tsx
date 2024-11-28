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
        <div 
        id="about"
        className="lg:mt-10 flex gap-y-4 flex-col font-roboto-slab"
        >
            <h3 className="block lg:hidden text-center w-full border-b-8 border-accent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">ABOUT</h3>

            <div className="flex flex-col gap-y-4 lg:gap-y-8 font-normal text-center lg:text-start text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">
                {
                    data.mainSection.about.split('\n').map((line, index) => (
                        line.length > 0 && (
                            <p 
                            key={index}
                            className=""
                            >
                                {line}
                            </p>
                        )
                    ))
                }
            </div>
        </div>
    )
}