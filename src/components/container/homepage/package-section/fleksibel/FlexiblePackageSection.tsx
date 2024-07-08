import Typography from "@/components/typography/Typography";
import { flexiblePackageData } from "./data";
import { PiStarFourFill } from "react-icons/pi";
import ButtonLink from "@/components/Buttons/ButtonLink";


export default function FlexiblePackageSection() {
    
    return (
        <section 
            className="py-12 md:py-24 flex gap-12 md:gap-24 flex-col max-w-[1200px] m-auto"
            id="paket-fleksibel"
        >
            <div className="flex-1 text-center">
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Eeiitsss, masih ada <span className="text-gold-primary">Paket Fleksibel</span> niihh!
                    Dengan <span className="text-gold-primary">Paket Fleksibel</span>, kamu dapat..
                </Typography>
            </div>

            <div className="space-y-6 max-w-[560px] flex-1 md:ml-32">
                {flexiblePackageData.map((data, i) =>
                    <div 
                        key={i} 
                        className="flex items-center gap-5"
                    >
                        <PiStarFourFill 
                            className="text-4xl md:text-5xl text-gold-primary"
                        />
                        <Typography
                            variant="h4"
                            className="flex-1"
                        >
                            {data}
                        </Typography>
                    </div>
                )}
            </div>

            <div className="flex justify-center">
                <ButtonLink
                    variant="gold"
                    hrefPath="https://its.id/m/FormPengajuanProject"
                    widthVariant="max"
                    size="lg"
                >
                    Coba paket fleksibel
                </ButtonLink>
            </div>
        </section>
    )
}