import { useState, useRef, useEffect } from "react";

const HeroSection = () => {
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Effect to play or pause music
  useEffect(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.play().catch((error) => {
          // Autoplay might be blocked by the browser, log error
          console.error("Audio play failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* 
        Reminder: Add your background music file to the `public/music` folder.
        For example: `public/music/stargaze.mp3`
      */}
      <audio ref={audioRef} src="public/music/stargaze.mp3" loop preload="auto" />

      {/* Moon glow */}
      <div
        className="absolute top-16 right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--romantic-moon)) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <h1 className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground glow-text leading-tight mb-6 animate-fade-in-up">
        Distance Means So Little{" "}
        <br className="hidden sm:block" />
        When Someone Means So Much ❤️
      </h1>

      <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        No matter how many miles separate us, my heart beats only for you,<br/>
        <span className="text-primary font-semibold">My Love</span>.
      </p>

      {/* Heartbeat button */}
      <div className="relative animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ margin: "-8px" }} />
        <button
          onClick={scrollDown}
          className="relative glass px-8 py-4 rounded-full text-primary font-body font-semibold text-lg 
                     hover:scale-105 transition-transform duration-300 animate-heartbeat cursor-pointer"
        >
          Open My Heart 💕
        </button>
      </div>

      {/* Music toggle */}
      <button
        onClick={() => setMusicPlaying(!musicPlaying)}
        className="absolute bottom-8 right-8 glass px-4 py-2 rounded-full text-muted-foreground 
                   font-body text-sm hover:text-primary transition-colors cursor-pointer"
      >
        {musicPlaying ? "🎵 Music On" : "🔇 Music Off"}
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <span className="text-muted-foreground text-2xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
