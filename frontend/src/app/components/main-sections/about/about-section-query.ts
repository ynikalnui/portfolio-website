import { gql } from "@apollo/client";

export const GET_ABOUT_CONTENT = gql`
    query AboutContent {
        mainSection {
            about
        }
    }
`;