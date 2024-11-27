import { gql } from "@apollo/client";

export const GET_USER_RESUME = gql`
    query Resume {
        userSection {
            documentId
            resume {
                documentId
                url
            }
        }
    }
`;