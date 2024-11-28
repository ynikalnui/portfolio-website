import { gql } from "@apollo/client";

export const GET_SOCIAL_BUTTONS = gql`
    query SocialButtons {
        socialButtons {
            icon {
                alternativeText
                url
            }
            url
        }
    }
`;