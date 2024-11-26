import Image from "next/image"

export default function ViewCVButton() {
    return(
        <button className="flex w-fit gap-x-2 font-roboto-slab font-bold text-3xl items-center 
        opacity-50 transition-opacity hover:opacity-100">
            <span>View my CV</span>
            <Image 
            src='/images/cv-icon.svg'
            alt="view cv icon"
            width={30}
            height={30}
            />
        </button>
    )
}