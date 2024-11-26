import { query } from "@/lib/apollo/client"
import ProjectComponent, { type TProjectComponentData } from "./ProjectComponent";
import { GET_PROJECTS } from "./projects-section-query";

type TProjectsSectionQuery = {
    projects: TProjectComponentData[]
}

export default async function ProjectsSection() {
    const { data } = await query<TProjectsSectionQuery>({query: GET_PROJECTS})

    return (
        <div className="flex flex-col gap-y-8">
            {
                data.projects.map((project, i) => (
                    <ProjectComponent key={i} {...project}/>
                ))
            }
        </div>
    )
}