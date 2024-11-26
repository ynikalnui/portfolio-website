import { gql } from "@apollo/client";

export const GET_NAVIGATION_BUTTONS = gql`
    query NavigationButtons {
        navigationButtons {
            href
            label
        }
    }
`;