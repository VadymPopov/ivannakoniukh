import AboutSection from "@/components/site/about-section";
import EventsSection from "@/components/site/events-section";
import HeroSection from "@/components/site/hero-section";
import MyPathSection from "@/components/site/path-section";
import ServicesSection from "@/components/site/services-section";
import StepsSection from "@/components/site/steps-section";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] pt-[178px] md:pt-[86px]'>
      <main>
        <HeroSection />
        <StepsSection />
        <AboutSection />
        <MyPathSection />
        <ServicesSection />
        <EventsSection />
      </main>
    </div>
  );
}
