"use client"
import Link from "next/link"
import Image from "next/image"

export default function NavigationBar() {
    const navs: {
        name: string,
        path: string,
        contents?: string[] | undefined
    }[] = [
        {
            name: "Tentang",
            path: "/"
        },
        {
            name: "Layanan Kami",
            path: "/"
        },
        {
            name: "Paket",
            path: "/"
        },
        {
            name: "FAQ",
            path: "/"
        },

    ]

    return (
        <header className="flex justify-between items-center page-max-width sticky top-0 bg-white-primary">
            <figure className="relative w-[165px] h-[74px]">
                <Image 
                    src="/logo/logo-with-text.png"
                    fill
                    alt="Logo Flexoo"
                />
            </figure>

            <nav className="space-x-12">
                {navs.map((nav, i) =>
                    <Link href={nav.path} key={i}>
                        {nav.name}
                    </Link>
                )}
            </nav>
        </header>
    )
}