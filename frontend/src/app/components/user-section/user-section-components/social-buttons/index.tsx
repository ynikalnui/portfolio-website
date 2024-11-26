import { query } from "@/lib/apollo/client"
import Image from "next/image"
import Link from "next/link"
import { GET_SOCIAL_BUTTONS } from "./user-social-buttons-query"
import { getStrapiUrl } from "@/app/utils/getStrapiUrl";

type TSocialButton = {
    icon: {
        alternativeText: string;
        url: string;
    };
    url: string;
};

type TSocialButtonsQuery = {
    socialButtons: TSocialButton[];
};

export default async function SocialButtons() {
    const { data } = await query<TSocialButtonsQuery>({query: GET_SOCIAL_BUTTONS})

    return (
        <ul className="flex gap-x-6 items-center">
            {
                data.socialButtons.map((social, i) => (
                    <li 
                    key={i}
                    className="opacity-50 transition-opacity hover:opacity-100 cursor-pointer"
                    >
                        <Link 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer">
                            <Image 
                            src={getStrapiUrl(social.icon.url)}
                            alt={social.icon.alternativeText}
                            width={35}
                            height={35}
                            />
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}