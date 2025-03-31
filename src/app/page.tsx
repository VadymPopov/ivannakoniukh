import AboutSection from "@/components/site/about-section";
import HeroSection from "@/components/site/hero-section";

export default function Home() {
  return (
    <div className='min-h-screen font-[family-name:var(--font-geist-sans)] '>
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
