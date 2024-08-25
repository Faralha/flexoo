"use client"
import Typography from "@/components/Typography"
import { LuPlus, LuMinus } from "react-icons/lu"

import { useState } from "react"

export default function FaqItem({
    summary,
    details,
}: {
    summary: string,
    details: string[]
}) {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`${open ? "bg-berkeley-blue text-white" : "bg-stone-100"} border-b-[1px] border-black-primary px-[10px] py-[10px] md:px-[25px] md:py-[20px] cursor-pointer transition-all ease-in`}>
            <div 
                className="flex items-center justify-between gap-5"
                onClick={() => setOpen(prev => !prev)}
            >
                <Typography
                    variant="p"
                    weight="bold"
                >
                    {summary}
                </Typography>

                <div className={`text-xl md:text-2xl ${open ? "bg-gold-primary" : "bg-stone-200"} p-2 rounded-sm text-black-primary`}>
                    {
                        open ? 
                        <LuMinus /> 
                        : 
                        <LuPlus />
                    }
                </div>
            </div>

            <div className={`${open ? "max-h-[800px]" : "max-h-0"} overflow-hidden transition-max-height ease-in-out pt-3 space-y-2`}>
                    {details.map((detail, i) => 
                        <Typography key={i}>
                            {detail}
                        </Typography>
                    )}
            </div>
        </div>
    )
}