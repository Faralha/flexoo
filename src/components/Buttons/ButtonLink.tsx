import * as React from "react"
import clsx from "clsx"

import Link from "next/link"
import { IconType } from "react-icons"

type ButtonVariant = "gold" | "blue" | "black"
type Size = "lg" | "md" 
type WidthVariant = "stretch" | "max" | "base"

type ButtonLinkProps = {
    children: React.ReactNode,
    variant?: ButtonVariant,
    leftIcon?: IconType,
    rightIcon?: IconType,
    size: Size,
    hrefPath: string,
    widthVariant: WidthVariant
    isShadow?: boolean,
    isRounded?: boolean
} & React.ComponentPropsWithoutRef<'a'>

export default function ButtonLink({ 
    children,
    variant,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    size,
    widthVariant,
    className,
    isShadow=true,
    isRounded=true,
    hrefPath,
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
                        size == "lg" && "h-[34px] lg:h-[54px]",
                        size == "md" && "h-[38px]",
                    ],
                    [
                        widthVariant == "stretch" && "w-full",
                        widthVariant == "max" && "w-max",
                        widthVariant == "base" && "w-[185px]" 
                    ],
                    "flex items-center justify-center gap-5 font-semibold px-4 sm:hover:opacity-70",
                    isShadow && "shadow-solid",
                    isRounded && "rounded-[4px]",
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