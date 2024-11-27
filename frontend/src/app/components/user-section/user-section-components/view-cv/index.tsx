import { query } from "@/lib/apollo/client"
import { GET_USER_RESUME } from "./user-resume-query"
import ViewCVButton from "./ViewCVButton"

export default async function ViewCV() {
    const { data } = await query({query: GET_USER_RESUME})

    return (
        <ViewCVButton link={data.userSection.resume.url}/>
    )
}