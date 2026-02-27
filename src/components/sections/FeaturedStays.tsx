import { motion } from 'motion/react';

const STAYS = [
  {
    id: 1,
    title: "The Concrete Fold",
    location: "KYOTO, JP · ZEN MINIMALISM",
    price: 6200,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=3870&auto=format&fit=crop",
    style: "col-span-1 md:col-span-6 md:col-start-1 mt-0"
  },
  {
    id: 2,
    title: "Basalt Horizon",
    location: "REYKJAVÍK, IS · NORDIC BRUTALISM",
    price: 3800,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&grayscale",
    style: "col-span-1 md:col-span-5 md:col-start-8 mt-32"
  },
  {
    id: 3,
    title: "Desert Mirage",
    location: "JOSHUA TREE, CA · DESERT MODERN",
    price: 4500,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&grayscale",
    style: "col-span-1 md:col-span-6 md:col-start-1 mt-32"
  },
  {
    id: 4,
    title: "Alpine Chalet",
    location: "ZERMATT, CH · ALPINE LUXURY",
    price: 5800,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&grayscale",
    style: "col-span-1 md:col-span-5 md:col-start-8 mt-32"
  }
];

export default function FeaturedStays() {
  return (
    <section className="py-32 bg-[#F9F8F6]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4C6A5] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block"
            >
              SELECTED WORKS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[3rem] font-sans font-light tracking-tight text-charcoal-900 leading-[1.2] italic"
            >
              Curated retreats for those<br />
              who value the space<br />
              between the walls.
            </motion.h2>
          </div>

          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal-900 border-b border-charcoal-900 pb-1 hover:text-charcoal-500 hover:border-charcoal-500 transition-colors mt-12 md:mt-0"
          >
            VIEW ALL 142 ESTATES
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
          {STAYS.map((stay, index) => (
            <motion.div
              key={stay.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group cursor-pointer block ${stay.style}`}
            >
              <div className="relative overflow-hidden bg-ivory-200 mb-6 group-hover:shadow-xl transition-shadow duration-700">
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/5 transition-colors duration-700 z-10" />
                <img
                  src={stay.image}
                  alt={stay.title}
                  className="w-full h-auto object-cover transition-transform duration-[2s] ease-[0.22,1,0.36,1] group-hover:scale-105 will-change-transform grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="flex flex-row justify-between items-start pt-2">
                <div>
                  <h3 className="font-sans text-xl font-medium text-charcoal-900 tracking-tight mb-1">
                    {stay.title}
                  </h3>
                  <p className="text-charcoal-500 text-[9px] uppercase tracking-[0.2em] font-semibold">{stay.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-charcoal-500 font-serif italic text-sm">
                    From ${stay.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
