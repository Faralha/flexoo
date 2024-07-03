import Image from "next/image";
import Link from "next/link";

import Typography from "@/components/typography/Typography";
import WhyChooseUsSection from "@/components/container/homepage/why-us-section/WhyChooseUsSection";
import HeroSection from "@/components/container/homepage/hero-section/HeroSection";

export default function Home() {
  return (
    <main className="min-h-[50vh] pb-16 page-max-width">
      <HeroSection />

      <section className="py-16">
        <div className="text-center  md:space-y-5">
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

        <WhyChooseUsSection />
      </section>
    </main>
  );
}
