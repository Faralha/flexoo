import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[50vh]">
      <div className="bg-berkeley-blue min-h-[70vh] rounded-[28px] flex lg:flex-row flex-col items-center justify-between px-[83px]">
        <div className="flex-1 space-y-5 text-white-primary">
          <p>#FlexingYourWebsite</p>
          <h1 className="text-4xl font-bold">Apakah kamu memerlukan website untuk tugas, lomba, event, atau bisnis kamu?</h1>
          <p>
            Di era digital yang dinamis, website bukan lagi kemewahan, 
            tetapi sebuah kebutuhan. 
            Jadikan project lomba, bisnis, atau event kamu 
            menjadi lebih bervalue bersama kami, flexible software house
          </p>
        </div>

        <figure className="w-[478px] h-[478px] relative bg-white rounded-[21px]">
          <Image 
            src="/logo/logo.png"
            fill
            alt="logo flexoo"
          />
        </figure>
      </div>
    </main>
  );
}
