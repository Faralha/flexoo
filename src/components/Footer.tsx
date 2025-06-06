import Image from "next/image"
import Link from "next/link"

import { FaInstagram, FaWhatsapp } from "react-icons/fa6"

export default function Footer() {
    return (
      <footer className="text-black-primary page-max-width py-24">
        <div className="flex justify-between  flex-wrap gap-12 px-4 lg:px-16">
          <div className="space-y-5">
            <Link href="/">
              <figure className="w-[220px] h-[100px] relative">
                <Image src="/logo/logo-with-text.png" alt="logo flexoo" fill />
              </figure>
            </Link>

            <div className="max-w-[440px] space-y-5">
              <p className="text-sm">
                Sekretariat HMTC ITS, Gedung Teknik Informatika, Jl. Teknik
                Kimia lantai 3, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur
                60117
              </p>

              <div className="text-4xl flex gap-5">
                <Link
                  href="https://instagram.com/flexoo.id"
                  className="flex items-center gap-2"
                  target="_blank">
                  <FaInstagram className="bg-black-primary p-1 rounded-lg text-white-primary" />
                </Link>
                <Link
                  href="https://wa.me/6285703108592"
                  className="flex items-center gap-2"
                  target="_blank">
                  <FaWhatsapp className="bg-black-primary p-1 rounded-lg text-white-primary" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-[350px]">
            <h1 className="font-bold text-3xl md:text-4xl mb-5">Navigasi</h1>
            <ul className="text-sm md:text-lg space-y-2">
              {navsOption.map((data, i) => (
                <li key={i} className="hover:text-gold-primary">
                  <Link href={data.path}>{data.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-5 md:gap-12 items-center mt-16 px-4 lg:px-16">
          <div className="text-sm">&#169; HMTC Software House TC 2025</div>

          <div className="h-[1px] w-full bg-black-primary flex-1"></div>
        </div>
      </footer>
    );
}


const navsOption: {
    name: string,
    path: string
}[] = [
    {
        name: "Tentang",
        path: "/about"
    },
    {
        name: "Klien",
        path: "/#klien"
    },
    {
        name: "Layanan Kami",
        path: "/#layanan"
    },
    {
        name: "Paket",
        path: "/#paket"
    },
    {
        name: "FAQ",
        path: "/#faq"
    },
]

