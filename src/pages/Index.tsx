import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SiteLayout from "@/components/layout/SiteLayout";

const Index = () => (
  <SiteLayout showFloatingButtons showCookieConsent>
    <HeroSection />
    <WhyUsSection />
    <ServicesSection />
    <DoctorsSection />
    <ReviewsSection />
    <FAQSection />
    <ContactSection />
  </SiteLayout>
);

export default Index;
