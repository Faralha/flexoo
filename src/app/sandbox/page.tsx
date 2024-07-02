import ButtonLink from "@/components/Buttons/ButtonLink"

export default function SandboxPage() {
    return (
        <main className="min-h-screen">
            <div>
                <ButtonLink href="/">
                    Back
                </ButtonLink>
            </div>

            <section>
                <div>
                    <h1 className="text-5xl">Button Link</h1>
                </div>
                <div>
                    <ButtonLink 
                        href="/"
                        className=""
                    >
                        Login    
                    </ButtonLink>   
                </div>
            </section>

        </main>
    )
}