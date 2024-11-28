import { query } from "@/lib/apollo/client"
import ProjectComponent, { type TProjectComponentData } from "./ProjectComponent";
import { GET_PROJECTS } from "./projects-section-query";

type TProjectsSectionQuery = {
    projects: TProjectComponentData[]
}

export default async function ProjectsSection() {
    const { data } = await query<TProjectsSectionQuery>({query: GET_PROJECTS})

    return (
        <div 
        id="projects"
        className="flex flex-col gap-y-4"
        >
            <h3 className="block lg:hidden text-center w-full border-b-8 border-accent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">PROJECTS</h3>

            <div className="flex flex-col gap-y-6 lg:gap-y-8">
                {
                    data.projects.map((project, i) => (
                        <ProjectComponent key={i} {...project}/>
                    ))
                }
            </div>
        </div>
    )
}