import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2025-06-15T00:00:00");

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 md:py-32 px-4 text-center">
      <h2 className="font-script text-4xl md:text-6xl text-foreground glow-text mb-4">
        Until I Finally See You Again ❤️
      </h2>
      <p className="font-body text-muted-foreground mb-12">Every second counts…</p>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="glass-card rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] animate-pulse-glow"
          >
            <div className="font-body text-3xl md:text-5xl font-bold text-primary animate-heartbeat">
              {String(block.value).padStart(2, "0")}
            </div>
            <div className="font-body text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              {block.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
