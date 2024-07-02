import clsx from "clsx"

const typographyVariants = [
    "h1",
    "h2",
    "h3",
    "p",
] as const

type TypographyProps = {
    variant?: typeof typographyVariants[number],
    children: React.ReactNode
} 


export default function Typography({
    variant="p",
    children
}: TypographyProps) {
    const Text = variant

    return (
        <Text>
            {children}
        </Text>
    )
}