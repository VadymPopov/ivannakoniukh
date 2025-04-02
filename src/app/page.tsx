import AboutSection from "@/components/site/about-section";
import EventsSection from "@/components/site/events-section";
import HeroSection from "@/components/site/hero-section";
import MyPathSection from "@/components/site/path-section";
import ServicesSection from "@/components/site/services-section";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] '>
      <main>
        <HeroSection />
        <AboutSection />
        <MyPathSection />
        <ServicesSection />
        <EventsSection />
      </main>
    </div>
  );
}
