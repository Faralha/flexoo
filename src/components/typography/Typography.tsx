import clsx from "clsx"

const typographyVariants = [
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
] as const

type FontWeight = "bold" | "semibold" | "regular"

type TypographyProps = {
    variant?: typeof typographyVariants[number],
    children: React.ReactNode,
    weight?: FontWeight
} & React.HTMLAttributes<HTMLElement>

export default function Typography({
    variant="p",
    children,
    weight = "regular",
    className,
    ...rest
}: TypographyProps) {
    const Text = variant

    return (
        <Text 
            className={clsx(
                className,
                [
                    weight == "bold" && "font-bold",
                    weight == "semibold" && "font-semibodl",
                    weight == "regular" && "font-normal"
                ]
            )}
            {...rest}
        >
            {children}
        </Text>
    )
}