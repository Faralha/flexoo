import Typography from "@/components/Typography";
import ButtonLink from "@/components/Buttons/ButtonLink";
import { IoHomeOutline } from "react-icons/io5";

export default function NotFound() {
    return (
        <main className="page-max-width h-[60vh] flex justify-center items-center">
            <div className="flex items-center flex-col gap-5">
                <Typography
                    weight="bold"
                    variant="h1"
                    className="text-8xl"
                >
                    404
                </Typography>
                <Typography>
                    NOT FOUND
                </Typography>
                <ButtonLink
                    size="lg"
                    variant="gold"
                    widthVariant="max"
                    hrefPath="/"
                    leftIcon={IoHomeOutline}
                >
                    Return to homepage
                </ButtonLink>
            </div>
        </main>
    )
}