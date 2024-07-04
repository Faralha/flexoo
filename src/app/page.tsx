import Image from "next/image";
import Link from "next/link";

import Typography from "@/components/typography/Typography";
import WhyChooseUsSection from "@/components/container/homepage/why-us-section/WhyChooseUsSection";
import HeroSection from "@/components/container/homepage/hero-section/HeroSection"
import OurServicesSection from "@/components/container/homepage/services-section/OurServicesSection";
import StandartPackageSection from "@/components/container/homepage/package-section/standart/StandartPackageSection";
import FlexiblePackageSection from "@/components/container/homepage/package-section/fleksibel/FlexiblePackageSection";
import FaqSection from "@/components/container/homepage/faq-section/FaqSection";

export default function Home() {
  return (
    <main className="min-h-[50vh] pb-16 page-max-width">
      <HeroSection />
      <WhyChooseUsSection />
      <OurServicesSection />
      <StandartPackageSection />
      <FlexiblePackageSection />
      <FaqSection />
    </main>
  );
}
