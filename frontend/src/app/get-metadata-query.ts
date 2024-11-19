import { gql } from "@apollo/client";

export const GET_METADATA_QUERY = gql`
    query GetMetadata {
        metadata {
            description
            favicon {
                url
            }
            title
        }
    }
`;
  