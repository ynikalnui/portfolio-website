import Link from "next/link";

export default async function NavigationButtons() {
    const navigationButtons = [
        {href: '#about', label: 'ABOUT'},
        {href: '#projects', label: 'PROJECTS'},
        {href: '#contact', label: 'CONTACT'}
    ]

    return (
        <ul className="flex flex-col gap-y-8 font-roboto-slab font-bold text-5xl">
            {navigationButtons.map((item, i) => (
                <li 
                key={i} 
                className='cursor-pointer text-main-text opacity-50 transition-opacity hover:opacity-100
                after:block after:border-b-[10px] after:border-accent after:scale-x-0 after:origin-left 
                after:transition-transform hover:after:scale-x-100'>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    )
}