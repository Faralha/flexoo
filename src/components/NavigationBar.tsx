"use client"
import Link from "next/link"
import Image from "next/image"
import ButtonLink from "./Buttons/ButtonLink"

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
        <header className="z-50 sticky top-0 bg-white-primary py-2 page-max-width">
            <div className="flex justify-between items-center bg-white-primary">
                <figure className="relative w-[125px] h-[54px]  md:w-[165px] md:h-[74px]">
                    <Link
                        href="/"
                    >
                        <Image 
                            src="/logo/logo-with-text.png"
                            fill
                            alt="Logo Flexoo"
                        />
                    </Link>
                </figure>

                <nav className="space-x-12 hidden lg:flex items-center">
                    {navs.map((nav, i) =>
                        <Link href={nav.path} key={i}>
                            {nav.name}
                        </Link>
                    )}

                    <ButtonLink
                        hrefPath="https://its.id/m/FormPengajuanProject"
                        variant="gold"
                        size="lg"
                        widthVariant="base"
                        target="_blank"
                    >
                        Ajukan Project
                    </ButtonLink>
                </nav>
            </div>
        </header>
    )
}