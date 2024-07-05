"use client"
import Link from "next/link"
import Image from "next/image"

import ButtonLink from "./Buttons/ButtonLink"
import { RiMenu3Fill } from "react-icons/ri";

import { useState } from "react";
import { defaultOverrides } from "next/dist/server/require-hook";

const navs: {
    name: string,
    path: string,
    contents?: string[] | undefined
}[] = [
    {
        name: "Tentang",
        path: "#tentang"
    },
    {
        name: "Layanan Kami",
        path: "#layanan"
    },
    {
        name: "Paket",
        path: "#paket"
    },
    {
        name: "FAQ",
        path: "#faq"
    },

]

export default function NavigationBar() {
    const [open, setOpen] = useState<boolean>(false)    

    return (
        <header className="z-50 sticky top-0 bg-white-primary py-1">
            <div className="flex justify-between items-center bg-white-primary page-max-width">
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

                <nav className="space-x-12 hidden lg:flex items-center transition-all ease-in">
                    <NavigationItems />
                </nav>

                <div className="block lg:hidden relative">
                    <button 
                        className=" bg-gold-primary rounded-full px-5 py-1 md:px-8 md:py-2 flex items-center gap-2 hover:opacity-75"
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <RiMenu3Fill className="text-lg" />
                        Menu
                    </button>
                    {
                        open && 
                        <nav className="flex flex-col gap-5 absolute top-12 right-0 bg-white-primary p-4 shadow-2xl rounded-md">
                            <NavigationItems />
                        </nav>
                    }
                </div>
            </div>
        </header>
    )
}

function NavigationItems() {
    return (
        <>
            {navs.map((nav, i) =>
                <Link 
                    href={nav.path} 
                    key={i} 
                    className="font-semibold hover:border-b-[1px] hover:border-black-primary"
                >
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
        </>
    )
}