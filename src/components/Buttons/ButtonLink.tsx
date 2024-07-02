import * as React from "react"
import clsx from "clsx"

import Link from "next/link"

type ButtonVariant = "gold" | "blue" | "black"

type StretchMode = ""

type ButtonLinkProps = {
    children: React.ReactNode,
    href: string,
    mode?: StretchMode,
    variant?: ButtonVariant
} & React.ComponentPropsWithoutRef<'a'>

export default function ButtonLink({ 
    href,
    children,
    className 
}: ButtonLinkProps) {
    return (
        <Link 
            href={href}
            className={clsx(
                ""
            )}
        >
            {children}
        </Link>
    )
}