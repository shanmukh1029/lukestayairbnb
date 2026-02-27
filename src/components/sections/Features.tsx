import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: "Verified Excellence",
    desc: "Every home is personally vetted for quality, design, and amenities."
  },
  {
    title: "Dedicated Concierge",
    desc: "From private chefs to jet charters, we handle every detail."
  },
  {
    title: "Secure Privacy",
    desc: "Discreet booking and bank-level security for peace of mind."
  },
  {
    title: "Global Access",
    desc: "Exclusive entry to the world's most coveted private estates."
  }
];

const CATEGORIES = [
  { label: "Beachfront", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop" },
  { label: "Private Islands", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop" },
  { label: "Mountain Retreats", image: "https://images.unsplash.com/photo-1519681393784-d8e5b5a4570e?q=80&w=2070&auto=format&fit=crop" },
  { label: "Architectural", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" },
  { label: "Vineyards", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop" },
  { label: "Historic", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" },
  { label: "Urban Luxe", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
];

export function WhyChooseUs() {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal-500 mb-8 block">
              The LuxeStay Standard
            </span>
            <h2 className="text-5xl md:text-7xl font-sans font-medium tracking-tighter text-charcoal-900 mb-10 leading-[1.05]">
              We redefine the art of <br />
              <span className="font-serif italic text-charcoal-500 font-light">modern hospitality.</span>
            </h2>
            <p className="text-charcoal-500 text-xl font-light leading-relaxed max-w-md">
              Our service goes beyond the booking. We curate experiences that are seamless, personal, and unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="w-12 h-[1px] bg-charcoal-900/20 mb-8 group-hover:w-24 transition-all duration-500" />
                <h3 className="font-sans text-2xl font-medium text-charcoal-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed font-light tracking-wide">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Categories() {
  return (
    <section className="py-32 md:py-48 border-b border-ivory-200 bg-ivory-50 overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#F39C12] mb-6 block">
            Curated Collections
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-charcoal-900 uppercase">
            Discover your <br />
            <span className="font-serif italic text-charcoal-500 font-light lowercase tracking-normal">element.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="hidden md:flex items-center gap-4"
        >
          <button className="w-16 h-16 rounded-full border border-charcoal-900/20 flex items-center justify-center text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-300 group">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button className="w-16 h-16 rounded-full border border-charcoal-900/20 flex items-center justify-center text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-300 group">
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full relative cursor-grab active:cursor-grabbing">
        <div className="flex gap-6 md:gap-10 overflow-x-auto pb-16 px-8 md:px-16 scrollbar-hide snap-x items-center">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.label}
              className="group snap-center shrink-0 relative w-[320px] md:w-[450px] lg:w-[500px] h-[450px] md:h-[650px] overflow-hidden bg-charcoal-900"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-60" />

              {/* Text Content */}
              <div className="absolute inset-0 p-8 md:p-12 pl-6 md:pl-10 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F39C12] mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Collection {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase text-white mb-2">
                    {cat.label}
                  </h3>
                  <div className="w-0 h-[2px] bg-white group-hover:w-16 transition-all duration-700 ease-out mt-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
