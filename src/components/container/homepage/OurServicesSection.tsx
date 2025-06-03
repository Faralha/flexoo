import Typography from "@/components/Typography";
import { IconType } from "react-icons"
import { CiGlobe, CiMobile1 } from "react-icons/ci";
import { PiBrainLight } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function OurServicesSection() {
    return (
        <section 
            className="py-16 flex gap-12 md:gap-24 flex-col sm:flex-row px-4 lg:px-12"
            id="layanan"
        >
            <div className="flex-1">
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Layanan Kami
                </Typography>
            </div>

            <div className="flex gap-5 flex-col flex-2">
                {servicesData.map((data, i) => 
                    <div
                        key={i}  
                        className="border-b-[1px] border-black-primary pb-8 max-w-[560px] flex items-center gap-5 rounded-[8px]"
                    >
                        <div className="text-3xl md:text-5xl bg-gold-primary p-3 rounded-lg">
                            <data.icon />
                        </div>
            
                        <div className="flex-1">
                            <Typography
                                variant="h3"
                                weight="bold"
                            >
                                {data.heading}
                            </Typography>
            
                            <Typography
                                variant="p"
                            >
                                {data.body}
                            </Typography>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export const servicesData = [
    {
        heading: "Website",
        body: "Flexoo menyediakan layanan pembuatan website untuk kebutuhan bisnis, lomba, tugas, maupun pribadi.",
        icon: CiGlobe
    },
    {
        heading: "Mobile App",
        body: "Flexoo menyediakan layanan pembuatan aplikasi berbasis mobile.",
        icon: CiMobile1
    },
    {
        heading: "AI/ML",
        body: "Flexoo menyediakan layanan pembuatan produk artificial intelligence atau machine learning",
        icon: PiBrainLight
    },
    {
        heading: "Lainnya",
        body: "Flexoo juga menyediakan layanan produk digital lain seperti IoT, Game, dll.",
        icon: HiOutlineDotsHorizontal
    }
]