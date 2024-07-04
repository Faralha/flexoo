import Typography from "@/components/typography/Typography";
import { servicesData } from "./utils/data";

export default function OurServicesSection() {
    return (
        <section 
            className="py-16 flex gap-12 md:gap-24 flex-col sm:flex-row px-4 lg:px-12"
        >
            <div className="flex-1">
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Kami Menyediakan Berbagai Macam Layanan
                </Typography>
            </div>

            <div className="flex gap-5 flex-col flex-1">
                {servicesData.map((data, i) => 
                    <ServicesItem 
                        key={i}
                        heading={data.heading}
                        body={data.body}
                        icon={data.icon}
                    />
                )}
            </div>
        </section>
    )
}

function ServicesItem({ heading, body, icon: Icon }: typeof servicesData[number]) {
    return (
        <div 
            className="border-b-[1px] border-black-primary pb-8 max-w-[560px] flex items-center gap-5 rounded-[8px]"
        >
            <div className="text-3xl md:text-5xl bg-gold-primary p-3 rounded-lg">
                <Icon />
            </div>

            <div className="flex-1">
                <Typography
                    variant="h3"
                    weight="bold"
                >
                    {heading}
                </Typography>

                <Typography
                    variant="p"
                >
                    {body}
                </Typography>
            </div>
        </div>
    )
}
