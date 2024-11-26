'use client'

import { getStrapiImage } from "@/app/utils/getStrapiImage"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type TProjectLanguage = {
    alternativeText: string,
    url: string
}

export type TProjectComponentData = {
    projectCompany: string,
    projectDates: string,
    projectDescription: string,
    projectLanguages: TProjectLanguage[],
    projectLink: string,
    projectName: string,
    projectPreview: {
        alternativeText: string,
        url: string
    }
}

export default function ProjectComponent({
    projectCompany,
    projectDates,
    projectDescription,
    projectLanguages,
    projectLink,
    projectName,
    projectPreview
}: TProjectComponentData) {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className="w-full p-4 bg-secondary-bg rounded-2xl">
            <div className="flex gap-x-2 relative">
                <Link 
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative 
                after:content-['View_App'] after:flex after:items-center after:justify-center after:rounded-2xl
                after:text-xl after:font-sans after:tracking-wider after:font-normal 
                after:absolute after:inset-0 after:bg-transparent-black 
                after:opacity-0 after:transition-opacity hover:after:opacity-100"
                >
                    <Image 
                    src={getStrapiImage(projectPreview.url)}
                    alt={projectPreview.alternativeText}
                    width={300}
                    height={160}
                    className="rounded-2xl shadow-box-md"
                    />
                </Link>

                <div className="flex flex-col justify-between items-start">
                    <div>
                        <h3 className="font-roboto-slab font-bold text-3xl">{projectName}</h3>
                        <p className="font-roboto-slab font-medium text-xl">{projectCompany}</p>
                        <p className="font-roboto-slab font-medium text-xl">{projectDates}</p>
                    </div>

                    <ul className="flex gap-x-2 items-center">
                        {projectLanguages.map((language, index) => (
                            <li key={index}>
                                <Image 
                                src={getStrapiImage(language.url)} 
                                alt={language.alternativeText}
                                width={35}
                                height={35}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <button 
                className="absolute top-0 right-0 w-8 h-8"
                onClick={() => setIsOpened(!isOpened)}
                >
                    <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    animate={isOpened ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full inset-0"
                    >
                        <Image
                            src="/images/question-icon.svg"
                            alt="open description"
                            width={32}
                            height={32}
                        />
                    </motion.div>

                    <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isOpened ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute w-full inset-0"
                    >
                        <Image
                            src="/images/cross-icon.svg"
                            alt="close description"
                            width={32}
                            height={32}
                        />
                    </motion.div>
                </button>
            </div>

            <AnimatePresence>
                {
                    isOpened && (
                        <motion.div
                        initial={{height:0}}
                        animate={{height:'auto'}}
                        exit={{height:0}}
                        className="overflow-hidden"
                        >
                            <motion.div 
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            exit={{opacity:0}}
                            className="mt-4"
                            >
                                <p className="font-roboto-slab font-normal text-base">{projectDescription}</p>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}