import FaqSection from "@/components/container/homepage/faq-section/FaqSection";
import HeroSection from "@/components/container/homepage/HeroSection";
import OurServicesSection from "@/components/container/homepage/OurServicesSection";
import FlexiblePackageSection from "@/components/container/homepage/package-section/FlexiblePackageSection";
import StandartPackageSection from "@/components/container/homepage/package-section/StandartPackageSection";
import WhyChooseUsSection from "@/components/container/homepage/WhyChooseUsSection";


export default function Home() {
  return (
    <main className="page-max-width">
      <HeroSection />
      <WhyChooseUsSection />
      <OurServicesSection />
      <StandartPackageSection />
      <FlexiblePackageSection />
      <FaqSection />
    </main>
  );
}
