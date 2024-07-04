import { IconType } from "react-icons"
import { CiGlobe, CiMobile1 } from "react-icons/ci";
import { PiBrainLight } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const servicesData: {
    heading: string,
    body: string,
    icon: IconType
}[] = [
    {
        heading: "Website",
        body: "Flexoo menyediakan layanan pembuatan website untuk kebutuhan bisnis, lomba, tugas, maupun pribadi.",
        icon: CiGlobe
    },
    {
        heading: "Mobile App",
        body: "Flexoo menyediakan layanan pembuatan aplikasi berbasis mobile.",
        icon: CiMobile1
    },
    {
        heading: "AI/ML",
        body: "Flexoo menyediakan layanan pembuatan produk artificial intelligence atau machine learning",
        icon: PiBrainLight
    },
    {
        heading: "Lainnya",
        body: "Flexoo juga menyediakan layanan produk digital lain seperti IoT, Game, dll.",
        icon: HiOutlineDotsHorizontal
    }
]