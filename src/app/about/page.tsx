import ButtonLink from "@/components/Buttons/ButtonLink";
import Typography from "@/components/Typography";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function AboutPage() {
    return (
        <main className="page-max-width py-24 space-y-24">
            <ButtonLink
                size="lg"
                hrefPath="/"
                variant="gold"
                leftIcon={FaArrowLeftLong}
            >
                Kembali
            </ButtonLink>
            <div className="border-l-[5px] md:border-l-[10px] border-gold-primary px-4 md:px-12 space-y-5">
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    About Flexoo
                </Typography>

                <Typography>
                    Flexoo merupakan sebuah software house yang didirikan oleh HMTC ITS sebagai bentuk hasil dari semangat kolaboratif para mahasiswa Teknik Informatika ITS. Fokus utamanya adalah untuk membuat platform satu pintu untuk project-project yang masuk ke Teknik Informatika ITS. 

                    Platform tersebut memiliki fokus dalam bidang pembuatan website yang telah tersedia beberapa paket utama serta paket custom yang dapat disesuaikan dengan kebutuhan klien seperti produk IT selain website, sharing SDM, kondisi budget, dan hal-hal lain di luar paket utama. Flexoo berbeda dengan software house lainnya karena menyediakan layanan shared handling atau layanan sharing SDM. Melalui layanan ini, Software House TC dapat membantu tim yang memiliki kekurangan SDM di bidang IT dengan menyediakan bantuan di bidang yang diperlukan. Hal ini tentu sangat dibutuhkan terutama oleh mahasiswa-mahasiswa yang sedang membutuhkan pembuatan website untuk perlombaan atau startup nya.

                </Typography>
            </div>
        </main>
    )
}