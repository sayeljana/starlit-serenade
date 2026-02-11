import { useEffect, useRef, useState } from "react";

const moments = [
  { icon: "💬", title: "The Day We Met at school", desc: "Two souls found each other in the vastness of the world." },
  { icon: "📞", title: "The First Late Night Call", desc: "Hours felt like minutes when your voice was the last thing I heard." },
  { icon: "💭", title: 'The First "I Miss You"', desc: "That's when I knew… you had become my home." },
  { icon: "💕", title: 'The First "I Love You"', desc: "Three words that changed everything forever." },
  { icon: "🤝", title: "The Day We Promised Forever", desc: "Not just a promise — a vow written in the stars." },
];

const LoveTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-4">
      <h2 className="font-script text-4xl md:text-6xl text-center text-foreground glow-text mb-20">
        Our Love Story 💫
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

        {moments.map((moment, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              data-index={i}
              className={`relative flex items-center mb-16 transition-all duration-800
                ${visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 glow-border z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <div className="glass-card rounded-xl p-6">
                  <span className="text-3xl mb-2 block">{moment.icon}</span>
                  <h3 className="font-script text-2xl text-primary mb-2">{moment.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{moment.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LoveTimeline;
