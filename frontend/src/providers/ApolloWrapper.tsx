"use client";

import {
  ApolloLink,
  HttpLink,
} from "@apollo/client"

import { 
  ApolloNextAppProvider, 
  ApolloClient, 
  InMemoryCache, 
  SSRMultipartLink 
} from "@apollo/experimental-nextjs-app-support"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

function makeClient() {
  const httpLink = new HttpLink({
      uri: `${STRAPI_URL}/graphql`,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}