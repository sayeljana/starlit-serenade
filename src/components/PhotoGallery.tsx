import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

const photos = [
  { src: memory1, caption: "Wishing we could share mornings together" },
  { src: memory2, caption: "Same moon, same love, different places" },
  { src: memory3, caption: "Every journey leads me closer to you" },
  { src: memory4, caption: "Words I write only for you" },
  { src: memory5, caption: "Reaching for you across the stars" },
  { src: memory6, caption: "Our smiles are miles apart, but our hearts are not" },
];

const PhotoGallery = () => {
  return (
    <section className="py-24 md:py-32 px-4">
      <h2 className="font-script text-4xl md:text-6xl text-center text-foreground glow-text mb-16">
        Memories of Us 📸
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group cursor-default"
            style={{ animation: `float-slow 6s ease-in-out ${i * 0.8}s infinite` }}
          >
            <div
              className="glass-card rounded-lg p-3 transition-all duration-500 
                          group-hover:scale-105 group-hover:shadow-2xl"
              style={{
                transform: `rotate(${(i % 2 === 0 ? -2 : 2) + Math.random()}deg)`,
              }}
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-xs md:text-sm text-muted-foreground text-center mt-3 italic">
                "{photo.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
