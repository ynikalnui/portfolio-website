import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "../providers";
import { ReactNode } from "react";
import { query } from "@/lib/apollo/client";
import { gql } from "@apollo/client";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query({
    query: gql`
      query GetMetadata {
        metadata {
          description
          author
          favicon {
            url
          }
          preview {
            url
          }
          title
          url
        }
      }
    `,
  });

  return {
    authors: [
      {name: data.metadata.author}
    ],
    title: data.metadata.title,
    description: data.metadata.description, 
    icons: {
      icon: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.metadata.favicon.url}` 
    },
    viewport: {
      width: "device-width",       
      initialScale: 1              
    },
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      type: 'website',
      url: data.metadata.url,
      images: [
        {url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.metadata.preview.url}`}
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metadata.title,
      description: data.metadata.description,
      images: [
        {url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.metadata.preview.url}`}
      ]
    },
    alternates: {
      canonical: data.metadata.url
    }
  }
}

export default function RootLayout({children}: Readonly<{children: ReactNode}>) 
{
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
