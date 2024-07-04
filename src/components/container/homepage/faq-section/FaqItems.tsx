"use client"
import Typography from "@/components/typography/Typography"
import { LuPlus, LuMinus } from "react-icons/lu"

import { useState } from "react"

export default function FaqItem() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={`${open ? "bg-berkeley-blue text-white" : "bg-stone-100"} border-b-[1px] border-black-primary px-[25px] py-[20px]`}>
            <div 
                className="flex items-center justify-between"
                onClick={() => setOpen(prev => !prev)}
            >
                <Typography
                    variant="h4"
                >
                    Lorem Ipsum dolor sit amet
                </Typography>

                <div className={`text-2xl ${open ? "bg-gold-primary" : "bg-stone-200"} p-3 rounded-md text-black-primary`}>
                    {
                        open ? 
                        <LuMinus /> 
                        : 
                        <LuPlus />
                    }
                </div>
            </div>

            {open && 
                <div>
                    <Typography>
                        Lorem Ipsum dolor sit amet
                    </Typography>
                </div>
            }
        </div>
    )
}