import { useState } from "react";

const ProposalSection = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section className="py-24 md:py-32 px-4 text-center relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center">
      {/* Heart explosion */}
      {clicked && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          {Array.from({ length: 40 }, (_, i) => {
            const angle = (i / 40) * 360;
            const distance = 100 + Math.random() * 300;
            const x = Math.cos((angle * Math.PI) / 180) * distance;
            const y = Math.sin((angle * Math.PI) / 180) * distance;
            return (
              <span
                key={i}
                className="absolute text-primary"
                style={{
                  fontSize: `${14 + Math.random() * 24}px`,
                  animation: `sparkle-burst 1.5s ease-out ${Math.random() * 0.3}s forwards`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {["❤️", "💖", "💕", "✨", "💗", "💓"][Math.floor(Math.random() * 6)]}
              </span>
            );
          })}
        </div>
      )}

      <h2 className="font-script text-4xl md:text-6xl lg:text-7xl text-foreground glow-text mb-4 leading-tight">
        No Matter the Distance…
      </h2>
      <p className="font-script text-3xl md:text-5xl text-primary glow-text mb-12">
        Will You Stay With Me Forever?
      </p>

      {!clicked ? (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleClick}
            className="glass px-8 py-4 rounded-full font-body font-semibold text-lg text-primary 
                       hover:scale-110 transition-all duration-300 animate-pulse-glow cursor-pointer"
          >
            Yes, Always ❤️
          </button>
          <button
            onClick={handleClick}
            className="glass px-8 py-4 rounded-full font-body font-semibold text-lg text-accent
                       hover:scale-110 transition-all duration-300 animate-pulse-glow cursor-pointer"
          >
            Forever & Always 💖
          </button>
        </div>
      ) : (
        <div className="animate-fade-in-up">
          <p className="font-script text-4xl md:text-6xl text-primary glow-text animate-heartbeat">
            I Love You, Mou 💕
          </p>
          <p className="font-body text-muted-foreground mt-4 text-lg">
            Together forever, no matter the miles. 🌙
          </p>
        </div>
      )}
    </section>
  );
};

export default ProposalSection;
