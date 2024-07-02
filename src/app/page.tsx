import Image from "next/image";
import Link from "next/link";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-[50vh] pb-16 page-max-width">
      <section className="bg-berkeley-blue min-h-[75vh] rounded-[28px] gap-24 flex lg:flex-row flex-col items-center justify-between px-[60px] py-[46px]">
        <div className="flex-1 space-y-5 text-white-primary">
          <p>#FlexingYourWebsite</p>
          <h1 className="text-4xl font-bold">
            Apakah kamu memerlukan website untuk tugas, lomba, event, 
            atau bisnis kamu?
          </h1>
          <p>
            Di era digital yang dinamis, website bukan lagi kemewahan, 
            tetapi sebuah kebutuhan. 
            Jadikan project lomba, bisnis, atau event kamu 
            menjadi lebih bervalue bersama kami, flexible software house
          </p>
        </div>

        <figure className="w-[238px] h-[238px]  md:w-[478px] md:h-[478px] relative bg-white rounded-[21px]">
          <Image 
            src="/logo/logo.png"
            fill
            alt="logo flexoo"
          />
        </figure>
      </section>

      <section className="py-16">
        <div className="text-center">
          <h1>Mengapa Flexoo menjadi pilihan terbaik?</h1>
          <p className="text-3xl">Why Choose Us?</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
          {[1, 2, 3, 4, 5, 6].map((data, i) => 
            <div 
              key={i}
              className="bg-berkeley-blue shadow-solid p-[20px] rounded-md min-h-[230px] text-white-primary space-y-[14px]"
            >
              <div className="bg-gold-primary w-min p-2 text-[38px] text-black-primary">
                <IoMdCheckmarkCircleOutline />
              </div>
              <p className="font-bold text-[20px]">
                Developer Kompeten
              </p>
              <p>
                Semua developer merupakan mahasiswa-mahasiswa terbaik dari 
                Departemen Teknik Informatika di Institut Teknologi Sepuluh 
                Nopember, Surabaya.
              </p>
            </div>
          )}
          
        </div>
      </section>
    </main>
  );
}
