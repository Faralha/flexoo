import Typography from "@/components/typography/Typography";
import FaqItem from "./FaqItems";
import { LuPlus, LuMinus } from "react-icons/lu";


export default function FaqSection() {
    return (
        <section className="py-24 max-w-[1200px] m-auto">
            <div>
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Frequently Asked Questions
                </Typography>
            </div>

            <div className="mt-24">
                <FaqItem />
            </div>

        </section>
    )
}
