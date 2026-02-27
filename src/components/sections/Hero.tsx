import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(textRef.current?.querySelectorAll('.reveal-text'), {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
      })
        .from(searchRef.current, {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, "-=0.8");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#111] text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=3870&auto=format&fit=crop"
          alt="Monolithic Architecture"
          className="w-full h-[120%] object-cover object-center scale-105 grayscale"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center text-center mt-12">
        <div ref={textRef} className="w-full flex flex-col items-center">
          <p className="reveal-text text-[11px] font-semibold tracking-[0.4em] uppercase text-white/60 mb-8 font-sans">
            Edition No. 004
          </p>
          <h1 className="reveal-text text-[clamp(2.5rem,10.5vw,12rem)] font-sans font-black tracking-[-0.03em] leading-[0.85] mb-10 text-white w-full uppercase whitespace-nowrap">
            The Monolith
          </h1>
          <p className="reveal-text text-lg md:text-2xl text-white/80 font-light tracking-wide max-w-3xl mx-auto mb-16 px-4 leading-relaxed">
            Architectural sanctuaries for the discerning elite. Curated spaces where silence is the ultimate luxury.
          </p>
        </div>

        <div ref={searchRef} className="w-full max-w-[1000px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2 md:p-1.5 flex flex-col md:flex-row items-stretch shadow-2xl relative shadow-black/50">

          <div className="flex-1 w-full md:w-auto px-4 py-3 md:px-8 md:py-5 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/10 text-left">
            <label className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-1.5 font-semibold">Destination</label>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full bg-transparent border-none outline-none text-white/90 placeholder-white/60 font-medium text-base md:text-lg ml-0 pl-0 focus:ring-0"
            />
          </div>

          <div className="flex-1 w-full md:w-auto px-4 py-3 md:px-8 md:py-5 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/10 text-left">
            <label className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-1.5 font-semibold">Timeline</label>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full bg-transparent border-none outline-none text-white/90 placeholder-white/60 font-medium text-base md:text-lg ml-0 pl-0 focus:ring-0"
            />
          </div>

          <div className="flex-1 w-full md:w-auto px-4 py-3 md:px-8 md:py-5 flex flex-col items-start text-left relative">
            <label className="text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1 md:mb-1.5 font-semibold">Occupancy</label>
            <input
              type="text"
              placeholder="Guests"
              className="w-full bg-transparent border-none outline-none text-white/90 placeholder-white/60 font-medium text-base md:text-lg ml-0 pl-0 focus:ring-0"
            />
          </div>

          <div className="p-2 w-full md:w-auto flex items-center justify-center md:justify-end md:ml-2">
            <button
              className="w-full md:w-16 h-12 md:h-16 bg-[#F39C12] hover:bg-[#D68910] transition-colors rounded items-center justify-center text-black flex focus:outline-none"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5px]" />
              <span className="md:hidden ml-2 font-bold text-sm tracking-wide">SEARCH</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
