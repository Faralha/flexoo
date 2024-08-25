import Typography from "@/components/Typography"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

export default function WhyChooseUsSection() {
  

    return (
        <section className="py-16">
          <div className="text-center md:space-y-5">
            <Typography 
              weight="bold"
              variant="h1"
            >
              Mengapa Flexoo menjadi pilihan terbaik?
            </Typography>
            <Typography
              weight="regular"
              variant="h3"
            >
              Why Choose Us?
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {whyUsData.map((data, i) => 
              <div 
                key={i}
                className="bg-berkeley-blue shadow-solid p-[20px] rounded-md min-h-[230px] text-white-primary space-y-[14px]"
              >
                <div className="bg-gold-primary rounded-md w-min p-2 text-[38px] text-black-primary">
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
        </section>
    )
}

const whyUsData = [
    {
        heading: "Developer Kompeten",
        body: "Semua developer merupakan mahasiswa-mahasiswa terbaik dari Departemen Teknik Informatika di Institut Teknologi Sepuluh Nopember, Surabaya."
    },
    {
        heading: "Biaya No Tipu Tipu",
        body: "Nominal sudah transparan di awal. atau kamu mau nominalnya fleksibel sesuai keadaan dan keinginan kamu? Bisa!",
    },
    {
        heading: "Shared Handling",
        body: "Tim kamu hanya kurang di salah satu bagian frontend, backend, atau UI/UX? Kami bisa bantu !",
    },
    {
        heading: "Flexible Technology",
        body: "Kamu mau request pakai framework tertentu? Bisa! Kamu mau nyerahin semua urusan teknologi dan framework ke kami? Bisa!",
    },
    {
        heading: "Layanan Friendly",
        body: "gausah takut buat nanya, tim admin siap 24/7 menjawab kebingungan kamu dengan ramah dan santai.",
    },
    {
        heading: "Terjamin",
        body: "Flexoo menjamin proyek yang kamu ajukan akan selesai sesuai dengan kesepakatan baik hasil kualitas proyek maupun waktu pengerjaannya.",
    },
]