import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            userSection: {
              merge(existing = {}, incoming) {
                return { ...existing, ...incoming };
              }
            }
          }
        }
      }
    }),
    link: new HttpLink({
      uri: `${STRAPI_URL}/graphql`
    })
  })
})