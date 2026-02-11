import { useEffect, useRef, useState } from "react";

const letterText = `My love,
Some days are harder than others.
Some nights feel longer without you.
But loving you from a distance has taught me patience,
strength, and the true meaning of forever.

I don't just miss you.
I miss holding your hand.
I miss hearing your laugh next to me.

But one day, this distance will only be a story we tell.
And we will smile, knowing we survived it together.

Until that day comes,
my heart travels to you every night.

Forever yours ♥`;

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < letterText.length) {
        setDisplayedText(letterText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 flex justify-center">
      <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl w-full">
        <h2 className="font-script text-3xl md:text-5xl text-primary glow-text mb-8 text-center">
          A Letter For You 💌
        </h2>
        <div
          className="font-body text-base md:text-lg text-foreground leading-relaxed whitespace-pre-line min-h-[300px]"
          style={{ fontStyle: "italic" }}
        >
          {displayedText}
          {started && displayedText.length < letterText.length && (
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
