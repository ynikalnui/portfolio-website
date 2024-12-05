import { from, HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: `${STRAPI_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_STRAPI_ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
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
    defaultOptions: {
      query: {
        errorPolicy: "all"
      }
    }
  })
})
