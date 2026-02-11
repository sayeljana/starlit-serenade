import StarryBackground from "@/components/StarryBackground";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveMessage from "@/components/LoveMessage";
import ValentineCards from "@/components/ValentineCards";
import LoveTimeline from "@/components/LoveTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import Countdown from "@/components/Countdown";
import LoveLetter from "@/components/LoveLetter";
import ProposalSection from "@/components/ProposalSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarryBackground />
      <FloatingHearts />

      <div className="relative z-10">
        <HeroSection />
        <LoveMessage />
        <ValentineCards />
        <LoveTimeline />
        <PhotoGallery />
        <Countdown />
        <LoveLetter />
        <ProposalSection />

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className="font-script text-2xl text-primary glow-text">
            Made with all my love, for you, Mou ❤️
          </p>
          <p className="font-body text-xs text-muted-foreground mt-4">
            Distance is just a test to see how far love can travel.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
