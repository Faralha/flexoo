import FaqSection from "@/components/container/homepage/faq-section/FaqSection";
import HeroSection from "@/components/container/homepage/HeroSection";
import OurServicesSection from "@/components/container/homepage/OurServicesSection";
import FlexiblePackageSection from "@/components/container/homepage/package-section/FlexiblePackageSection";
import StandartPackageSection from "@/components/container/homepage/package-section/StandartPackageSection";
import WhyChooseUsSection from "@/components/container/homepage/WhyChooseUsSection";
import Carousel from "@/components/container/homepage/Carousel";

export default function Home() {
  return (
    <main className="page-max-width">
      <HeroSection />
      <WhyChooseUsSection />
      <Carousel />
      <OurServicesSection />
      <StandartPackageSection />
      <FlexiblePackageSection />
      <FaqSection />
    </main>
  );
}
