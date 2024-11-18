import { gql } from "@apollo/client";

export const GET_TEST_QUERY = gql`
    query ExampleQuery {
        test {
            Description
            Title
        }
    }
`;