import ButtonLink from "@/components/Buttons/ButtonLink"
import Typography from "@/components/typography/Typography";

import { FaArrowLeftLong } from "react-icons/fa6";


export default function SandboxPage() {
    return (
        <main className="min-h-screen space-y-16 py-16 page-max-width">
            <div className="">
                <ButtonLink 
                    hrefPath="/"
                    size="lg"
                    leftIcon={FaArrowLeftLong} 
                    widthVariant="min"
                >
                    Back
                </ButtonLink>
            </div>

            <section className="">
                <div>
                    <h1>Button Link</h1>
                </div>

                <div className="">
                    <div className="mt-12 border-b-[1px] border-black-primary">
                        <h2>LG | Large</h2>
                    </div>

                    <div className="py-12 flex gap-5 flex-wrap">
                        <ButtonLink 
                            hrefPath="/"
                            size="lg"
                            variant="gold"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="lg"
                            variant="blue"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="lg"
                            variant="black"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                    </div>
                </div>

                <div className="">
                    <div className="mt-12 border-b-[1px] border-black-primary">
                        <h2>MD | Medium</h2>
                    </div>

                    <div className="py-12 flex gap-5 flex-wrap">
                        <ButtonLink 
                            hrefPath="/"
                            size="md"
                            variant="gold"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="md"
                            variant="blue"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="md"
                            variant="black"
                            widthVariant="base"               
                        >
                            Button    
                        </ButtonLink>   
                    </div>
                </div>

                
            </section>

            <section className="">
                <div>
                    <h1>Typography</h1>
                </div>

                <div>

                </div>
            </section>

        </main>
    )
}