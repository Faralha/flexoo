import Link from "next/link";

export default function UnstyledLink({
    children
}: { children: React.ReactNode }) {
    return (
        <Link
            href=""
        >
            {children}
        </Link>
    )
}