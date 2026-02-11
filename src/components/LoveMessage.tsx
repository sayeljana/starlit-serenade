import { useEffect, useRef, useState } from "react";

const LoveMessage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 4,
  }));

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 flex items-center justify-center">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-romantic-glow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.3,
            animation: `particle-float 6s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div
        className={`max-w-3xl text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-body text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed space-y-2">
          <span className="block mb-4">Every night I look at the same moon you see.</span>
          <span className="block mb-4">Every star reminds me that somewhere under this sky,</span>
          <span className="block mb-4 text-primary font-semibold">you are thinking of me too.</span>
          <span className="block mt-8 text-muted-foreground italic">
            Distance tests us, but it will never break us.
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoveMessage;
