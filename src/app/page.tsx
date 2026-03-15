import { AmbientBackground } from "@/components/sections/AmbientBackground";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/sections/Navigation";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { YouTubeSection } from "@/components/sections/YouTubeSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-8 sm:px-10">
        <Navigation />
        <Hero />
        <FeatureGrid />
        <ProjectsSection />
        <YouTubeSection />
        <Footer />
      </main>
    </div>
  );
}
