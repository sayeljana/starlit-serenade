import { useEffect, useRef, useState } from "react";

const cards = [
  { emoji: "🌹", day: "Rose Day", message: "If I could, I would send you a thousand roses every day until I can hold you." },
  { emoji: "💍", day: "Propose Day", message: "I may not be beside you right now, but my heart kneels before you every single day." },
  { emoji: "🍫", day: "Chocolate Day", message: "Life is sweeter because you exist." },
  { emoji: "🧸", day: "Teddy Day", message: "Until I can hug you, let this teddy hug you for me." },
  { emoji: "🤞", day: "Promise Day", message: "I promise no matter the distance, I will always choose you." },
  { emoji: "🤗", day: "Hug Day", message: "Close your eyes… can you feel my arms around you?" },
  { emoji: "💋", day: "Kiss Day", message: "Sending you kisses through the wind." },
  { emoji: "❤️", day: "Valentine's Day", message: "One day this distance will end, but our love will remain forever." },
];

const ValentineCards = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-4">
      <h2 className="font-script text-4xl md:text-6xl text-center text-foreground glow-text mb-16">
        Valentine Week 💝
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            data-index={i}
            className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 
                        hover:scale-105 cursor-default
                        ${visibleCards.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              transitionDelay: `${i * 100}ms`,
              animation: visibleCards.has(i) ? `float-slow 6s ease-in-out ${i * 0.5}s infinite` : "none",
            }}
          >
            <span className="text-4xl md:text-5xl block mb-4">{card.emoji}</span>
            <h3 className="font-script text-2xl md:text-3xl text-primary mb-3">{card.day}</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              {card.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValentineCards;
