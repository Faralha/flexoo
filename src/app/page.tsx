import WhyChooseUsSection from "@/components/container/homepage/why-us-section/WhyChooseUsSection";
import HeroSection from "@/components/container/homepage/hero-section/HeroSection"
import OurServicesSection from "@/components/container/homepage/services-section/OurServicesSection";
import StandartPackageSection from "@/components/container/homepage/package-section/StandartPackageSection";
import FlexiblePackageSection from "@/components/container/homepage/package-section/FlexiblePackageSection";
import FaqSection from "@/components/container/homepage/faq-section/FaqSection";

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
