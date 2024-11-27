import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query Projects {
        projects {
            projectCompany
            projectDates
            projectDescription
            projectLanguages {
                alternativeText
                url
            }
            projectLink
            projectName
            projectPreview {
                alternativeText
                url
            }
        }
    }
`;