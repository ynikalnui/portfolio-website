'use client'

import { type ReactNode } from "react";
import ApolloWrapper from "./ApolloWrapper";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloWrapper>
      {children}
    </ApolloWrapper>
  )
}