import Image from "next/image";

import Typography from "@/components/typography/Typography";
import { type Package, standartPackageData } from "./data";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";
import ButtonLink from "@/components/Buttons/ButtonLink";

export default function StandartPackageSection() {
    return (
        <section className="py-12 mt-12" id="paket-standar">
            <div className="flex justify-center">
                <div className="w-max relative">
                    <figure className="absolute w-[48px] h-[42px] md:w-[72.21px] md:h-[58.38px] right-[-40px] top-[-30px] md:right-[-50px] md:top-[-40px]">
                        <Image 
                            src="/assets/3-lines-vect.png"
                            fill
                            alt="vector"
                        />
                    </figure>
                    
                    <Typography
                        weight="bold"
                        variant="h1"
                    >
                        Paket Standar Website
                    </Typography>
                </div>
            </div>

            <div className="grid grid-cols-1 max-w-[274px] m-auto md:max-w-none md:grid-cols-3 gap-5 mt-12 md:mt-24">
                {standartPackageData.map((data, i) =>
                    <StandartPackageItem 
                        key={i}
                        index={i}
                        type={data.type}
                        price={data.price}
                        packageDetails={data.packageDetails}
                    />
                )}
            </div>
        </section>
    )
}

function StandartPackageItem({
    type,
    index,
    price,
    packageDetails
}: Package & { index: number }) {
    return (
        <div className={`bg-gold-primary ${index % 2 == 0 ? "bg-gold-primary" : "bg-white-primary"} space-y-12 p-[16px] lg:p-[32px] rounded-2xl min-h-[476px] lg:min-h-[530px] xl:min-h-[675px] shadow-solid`}>
            <div className="text-center">
                <Typography
                    variant="h3"
                >
                    {type}
                </Typography>

                <Typography
                    variant="h1"
                    weight="bold"
                >
                    {price}
                </Typography>
            </div>

            <ButtonLink
                hrefPath="https://its.id/m/FormPengajuanProject"
                variant="blue"
                widthVariant="stretch"
                size="lg"
                className="mt-5 lg:mt-12"
            >
                Order
            </ButtonLink>

            <div className="space-y-3 lg:space-y-4">
                {packageDetails.map((pkg, i) => 
                    <span 
                        key={i}
                        className="flex items-center gap-3"
                    >
                        <div className="text-2xl xl:text-4xl">
                            {pkg.isincluded ? (
                                <IoCheckmark /> 
                            ) : (
                                <RxCross1 />
                            )}
                        </div>

                        <Typography
                            weight="regular"
                            variant="h4"
                        >
                            {pkg.detail}
                        </Typography>
                    </span>
                )}
            </div>
        </div>
    )
}