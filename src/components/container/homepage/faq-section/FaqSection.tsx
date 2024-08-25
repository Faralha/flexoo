import Typography from "@/components/Typography";
import FaqItem from "./FaqItem";


export default function FaqSection() {
    return (
        <section className="py-24 max-w-[1200px] m-auto" id="faq">
            <div>
                <Typography
                    variant="h1"
                    weight="bold"
                >
                    Frequently Asked Questions
                </Typography>
            </div>

            <div className="mt-12">
                {faqData.map((data, i) =>
                    <FaqItem
                        key={i} 
                        summary={data.summary}
                        details={data.details}
                    />
                )}
            </div>

        </section>
    )
}

const faqData = [
    {
        summary: "Bagaimana cara mengajukan request project?",
        details: [
            "Request project di semua paket dapat dilakukan dengan mengisi form di link berikut."
        ]
    },
    {
        summary: "Apa saja yang harus disiapkan saat mengajukan request project?",
        details: [
            "- Menentukan jenis dan tujuan proyek yang ingin diajukan.",
            "- Membuat deskripsi dari proyek yang ingin diajukan.",
            "- Mempertimbangkan deadline dan biaya proyek sesuai kompleksitas proyek yang ingin diajukan.",
            "- Jika proyek sudah memiliki rancangan dan desain tampilan, proyek yang diajukan akan diproses lebih cepat."
        ]
    },
    {
        summary: "Bagaimana alur pengerjaan project?",
        details: [
            "- Melakukan pengajuan proyek dengan mengisi form di Request Project.",
            "- Dalam waktu tiga hari setelah proyek diajukan, pihak Flexoo akan menghubungi Anda untuk melakukan diskusi.",
            "- Melakukan pengesahan MoU dan Pembayaran DP.",
            "- Pengembangan proyek dilakukan sampai waktu yang telah ditentukan.",
            "- Pelunasan biaya dan Penyerahan hasil akhir project."
        ]
    },
    {
        summary: "Products apa saja yang di-cover oleh Flexoo?",
        details: [
            "Pada umumnya, produk yang ditawarkan oleh Flexoo adalah sebagai berikut:",
            "- Website",
            "- Aplikasi Android",
            "- Aplikasi iOS",
            "- Game",
            "- Prototype",
            "- Mockup",
            "Selain produk yang ditawarkan di atas, pengaju dapat menulis jenis proyek lainnya sesuai yang diinginkan."
        ]
    },
    {
        summary: "Apakah perlu membuat akun terlebih dahulu?",
        details: [
            "Tidak perlu, cukup mengisi form request lalu berdiskusi dengan pihak Flexoo via WA."
        ]
    },
    {
        summary: "Berapa lama waktu menunggu dihubungi tim Flexoo setelah mengisi form request?",
        details: [
            "Maksimal 3 hari."
        ]
    }
];
