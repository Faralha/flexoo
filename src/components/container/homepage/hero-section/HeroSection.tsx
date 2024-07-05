import Image from "next/image";

import Typography from "@/components/typography/Typography";

export default function HeroSection() {
    return (
        <section className="bg-berkeley-blue min-h-0 md:min-h-[75vh] rounded-[15px] lg:rounded-[28px] gap-12 md:gap-24 flex lg:flex-row flex-col items-center justify-between px-[30px] xl:px-[60px] py-[46px]">
            <div className="flex-1 space-y-5 text-white-primary">
            <Typography weight="regular">
                #FlexingYourWebsite
            </Typography>
            <Typography 
                className=""
                variant="h2"
                weight="bold"
            >
                Apakah kamu memerlukan website untuk tugas, lomba, event, 
                atau bisnis kamu?
            </Typography>
            <Typography weight="regular">
                Di era digital yang dinamis, website bukan lagi kemewahan, 
                tetapi sebuah kebutuhan. 
                Jadikan project lomba, bisnis, atau event kamu 
                menjadi lebih bervalue bersama kami, flexible software house
            </Typography>
            </div>

            <figure className="w-[238px] h-[238px] md:w-[378px] md:h-[378px] xl:w-[478px] xl:h-[478px] relative bg-white rounded-[21px]">
                <Image 
                    src="/logo/logo.png"
                    fill
                    alt="logo flexoo"
                />
            </figure>
        </section>
    )
}