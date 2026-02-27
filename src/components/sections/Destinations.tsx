import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const DESTINATIONS = [
  {
    id: 1,
    name: "Amalfi Coast",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop",
    count: 124
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    count: 86
  },
  {
    id: 3,
    name: "Maui",
    country: "Hawaii",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    count: 54
  },
  {
    id: 4,
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop",
    count: 42
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    count: 210
  }
];

export default function Destinations() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-charcoal-900 text-ivory-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-32 px-24 items-center w-max">

          {/* Intro Panel */}
          <div className="flex flex-col justify-center min-w-[600px] pl-20">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-champagne-500 mb-8 block">
              The World Awaits
            </span>
            <h2 className="text-7xl md:text-9xl font-sans font-medium tracking-tighter mb-10 leading-[0.9] text-white">
              Curated <br />
              <span className="font-serif italic text-white/50">Destinations</span>
            </h2>
            <p className="text-white/60 text-xl font-light max-w-md mb-16 leading-relaxed">
              Discover destinations that inspire, from hidden gems to iconic landmarks.
            </p>
            <div className="flex items-center gap-6 text-white font-medium cursor-pointer group text-xs tracking-[0.2em] uppercase">
              View all destinations
              <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
            </div>
          </div>

          {/* Destination Cards */}
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="relative h-[80vh] w-[50vw] min-w-[500px] max-w-[800px] overflow-hidden group cursor-pointer"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />

              <div className="absolute bottom-12 left-12 z-10">
                <p className="text-white/80 text-[10px] font-medium uppercase tracking-[0.3em] mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">{dest.country}</p>
                <h3 className="text-6xl md:text-8xl font-sans font-medium tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-all duration-700">{dest.name}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
