export const getStrapiUrl = (src: string) => {
    return process.env.NEXT_PUBLIC_STRAPI_API_URL + src
}