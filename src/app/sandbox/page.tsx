import ButtonLink from "@/components/Buttons/ButtonLink"
import Typography from "@/components/Typography";

import { FaArrowLeftLong } from "react-icons/fa6";


export default function SandboxPage() {
    return (
        <main className="min-h-screen space-y-16 py-16 page-max-width">
            <div className="">
                <ButtonLink 
                    hrefPath="/"
                    size="lg"
                    leftIcon={FaArrowLeftLong} 
                    widthVariant="max"
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
                            widthVariant="max"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="lg"
                            variant="blue"
                            widthVariant="max"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="lg"
                            variant="black"
                            widthVariant="max"               
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
                            widthVariant="max"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="md"
                            variant="blue"
                            widthVariant="max"               
                        >
                            Button    
                        </ButtonLink>   
                        <ButtonLink 
                            hrefPath="/"
                            size="md"
                            variant="black"
                            widthVariant="max"               
                        >
                            Button    
                        </ButtonLink>   
                    </div>
                </div>

                
            </section>

            <section className="">
                <div>
                    <Typography variant="h1">Typography</Typography>
                </div>

                <div>

                </div>
            </section>

        </main>
    )
}