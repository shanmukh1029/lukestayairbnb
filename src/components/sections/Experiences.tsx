import { Compass, Utensils, Waves, Mountain } from 'lucide-react';
import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    icon: Compass,
    title: "Adventure",
    desc: "Trek through uncharted territories.",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1974&auto=format&fit=crop"
  },
  {
    icon: Utensils,
    title: "Culinary",
    desc: "Taste the authentic local flavors.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Waves,
    title: "Wellness",
    desc: "Rejuvenate your mind and body.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Mountain,
    title: "Nature",
    desc: "Reconnect with the wild outdoors.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Experiences() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sand-900 mb-4">
            Unforgettable Experiences
          </h2>
          <p className="text-sand-900/60 text-lg max-w-2xl mx-auto">
            More than just a stay. Immerse yourself in local culture and activities curated by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 group-hover:bg-coral-500 transition-colors">
                  <exp.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
