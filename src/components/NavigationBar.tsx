"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

import ButtonLink from "./Buttons/ButtonLink"
import { RiMenu3Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Dispatch, SetStateAction, useState } from "react";

type NavLink = {
    name: string,
    path: string
} 

type Submenu = {
    submenu?: NavLink[]
}

type Navs = NavLink & Submenu

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
                    <NavigationItems 
                        setOpen={setOpen} 
                        isMobileView={false}
                    />
                </nav>

                <div className="block lg:hidden relative">
                    <button 
                        className=" bg-gold-primary rounded-full px-5 py-1 md:px-8 md:py-2 flex items-center gap-2 hover:opacity-75"
                        onClick={() => setOpen(prev => !prev)}
                    >
                        <RiMenu3Fill className="text-lg" />
                        {open ? "Close" : "Menu"}
                    </button>
                    {
                        open && 
                        <nav className="flex flex-col gap-5 absolute top-12 right-0 bg-white-primary p-4 shadow-2xl rounded-md">
                            <NavigationItems 
                                setOpen={setOpen} 
                                isMobileView={true}
                            />
                        </nav>
                    }
                </div>
            </div>
        </header>
    )
}

function NavigationItems({
    setOpen,
    isMobileView
}: {
    setOpen: Dispatch<SetStateAction<boolean>>,
    isMobileView: boolean
}) {
    const [subOpen, setSubOpen] = useState<boolean>(false)

    return (
        <>
            {navs.map((nav, i) =>
                <React.Fragment key={i}>
                    {nav.submenu ? (
                        <div
                            onClick={() => setSubOpen(prev => !prev)}
                            className="relative text-bordered-hover"
                            role="button"
                        >
                            <div className="flex items-center gap-1">
                                {nav.name}
                                <MdKeyboardArrowDown className="text-2xl" />
                            </div>
                            {subOpen && (
                                <div className={`bg-gold-primary flex flex-col space-y-3 ${isMobileView ? "p-2" : "absolute shadow-2xl p-5 top-8 w-max rounded-md"}`}>
                                    {nav.submenu.map((subnav, j) => (
                                        <Link 
                                            href={subnav.path}
                                            onClick={() => setOpen(prev => !prev)}
                                            key={j}
                                        >
                                            {subnav.name}    
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href={nav.path}
                            key={i}
                            onClick={() => setOpen(prev => !prev)}
                        >
                            {nav.name}
                        </Link>
                    )}
                </React.Fragment>
            )}

            <ButtonLink
                hrefPath="https://its.id/m/FormPengajuanProject"
                variant="gold"
                size="lg"
                widthVariant="max"
                target="_blank"
            >
                Ajukan Project
            </ButtonLink>
        </>
    )
}


const navs: Navs[] = [
    {
        name: "Tentang",
        path: "/about"
    },
    {
        name: "Klien",
        path: "/#klien"
    },
    {
        name: "Layanan Kami",
        path: "/#layanan"
    },
    {
        name: "Paket",
        path: "",
        submenu: [
            {
                name: "Paket Standar",
                path: "/#paket-standar"
            },
            {
                name: "Paket Fleksibel",
                path: "/#paket-fleksibel"
            },
        ]
    },
    {
        name: "FAQ",
        path: "/#faq"
    },
]