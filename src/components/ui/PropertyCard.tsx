import { motion } from 'motion/react';
import { formatCurrency } from '@/src/lib/utils';

interface PropertyProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  delay?: number;
}

export default function PropertyCard({ image, title, location, price, delay = 0 }: PropertyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer block"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200 mb-8">
        <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/10 transition-colors duration-700 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[0.22,1,0.36,1] group-hover:scale-105 will-change-transform"
        />
      </div>

      {/* Content - Ultra Minimal */}
      <div className="flex flex-col items-center text-center space-y-3">
        <h3 className="font-sans text-xl font-medium text-charcoal-900 tracking-tight group-hover:text-charcoal-500 transition-colors duration-500">
          {title}
        </h3>
        <div className="w-8 h-[1px] bg-charcoal-900/20 group-hover:w-12 transition-all duration-500" />
        <p className="text-charcoal-500 text-xs uppercase tracking-[0.2em]">{location}</p>
        <p className="text-charcoal-900 font-light text-sm mt-1">
          <span className="font-medium">{formatCurrency(price)}</span> / night
        </p>
      </div>
    </motion.div>
  );
}
