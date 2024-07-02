import * as React from "react"
import clsx from "clsx"

import Link from "next/link"
import { IconType } from "react-icons"

type ButtonVariant = "gold" | "blue" | "black"
type Size = "lg" | "md" 
type WidthVariant = "stretch" | "min" | "base"

type ButtonLinkProps = {
    children: React.ReactNode,
    hrefPath: string,
    variant?: ButtonVariant,
    leftIcon?: IconType,
    rightIcon?: IconType,
    size: Size,
    widthVariant: WidthVariant
} & React.ComponentPropsWithoutRef<'a'>

export default function ButtonLink({ 
    hrefPath,
    children,
    variant,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    size,
    widthVariant,
    className,
    ...rest
}: ButtonLinkProps) {
    return (
        <Link
            href={hrefPath}
            {...rest}
        >
            <button 
                className={clsx(
                    [
                        variant == "gold" && "bg-gold-primary",
                        variant == "blue" && "bg-berkeley-blue text-white-primary",
                        variant == "black" && "bg-black-primary text-white-primary",
                    ], 
                    [
                        size == "lg" && "h-[54px] w-[185px]",
                        size == "md" && "h-[38px] w-[185px]",
                    ],
                    [
                        widthVariant == "stretch" && "w-full",
                        widthVariant == "min" && "w-min",
                        widthVariant == "base" && "w-[185px]" 
                    ],
                    "shadow-solid rounded-[4px] flex items-center justify-center gap-5 font-semibold px-4 sm:hover:opacity-70",
                    className
                )}
            >
                {LeftIcon && <LeftIcon />}
                {children}
                {RightIcon && <RightIcon />}
            </button>
        </Link>
    )
}