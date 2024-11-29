'use client'

import { motion } from "framer-motion";
import Link from "next/link";

export default function NavigationButtons() {
    const navigationButtons = [
        {href: '#about', label: 'ABOUT'},
        {href: '#projects', label: 'PROJECTS'},
        {href: '#contact', label: 'CONTACT'}
    ]

    return (
        <motion.ul 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="hidden lg:flex flex-col gap-y-8 font-roboto-slab font-bold text-4xl xl:text-5xl"
        >
            {navigationButtons.map((item, i) => (
                <motion.li 
                key={i} 
                variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                }}
                transition={{ type: "spring", stiffness: 50 }}
                className='cursor-pointer text-main-text opacity-50 transition-opacity hover:opacity-100
                after:block after:border-b-[10px] after:border-accent after:scale-x-0 after:origin-left 
                after:transition-transform hover:after:scale-x-100'>
                    <Link href={item.href}>{item.label}</Link>
                </motion.li>
            ))}
        </motion.ul>
    )
}