import { gql } from "@apollo/client";

export const GET_USER_HEAD = gql`
    query UserSection {
        userSection {
            fullName
            userSpecialty
            introDescription
            userIcon {
                alternativeText
                url
            }
        }
    }
`;