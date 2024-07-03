import Typography from "@/components/typography/Typography"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import { whyUsData } from "./utils/data"


export default function WhyChooseUsSection() {
  

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 md:mt-24">
          {whyUsData.map((data, i) => 
            <div 
              key={i}
              className="bg-berkeley-blue shadow-solid p-[20px] rounded-md min-h-[230px] text-white-primary space-y-[14px]"
            >
              <div className="bg-gold-primary w-min p-2 text-[38px] text-black-primary">
                <IoMdCheckmarkCircleOutline />
              </div>
              <Typography
                weight="bold"
                variant="h4"
              >
                {data.heading}
              </Typography>
              <Typography
                variant="p"
              >
                {data.body}
              </Typography>
            </div>
          )}
          
        </div>
    )
}