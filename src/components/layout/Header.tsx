import { useState } from 'react';
import { Button } from '@/src/components/ui/Button';
import { Search, Menu, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] px-8 md:px-16 py-6",
        isScrolled 
          ? "bg-ivory-50/90 backdrop-blur-md border-b border-ivory-200/50 py-4" 
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo - Minimal Text */}
        <a href="/" className="group relative z-50">
          <span className={cn(
            "font-sans text-2xl tracking-[-0.05em] font-medium transition-colors duration-500",
            isScrolled ? "text-charcoal-900" : "text-white"
          )}>
            LuxeStay.
          </span>
        </a>

        {/* Center Nav (Desktop) - Hidden on scroll or minimal */}
        <nav className={cn(
          "hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2 transition-all duration-500",
          isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          {['Residences', 'Destinations', 'Concierge', 'Journal'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide uppercase text-[11px]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Button 
            variant="ghost" 
            className={cn(
              "hidden md:flex hover:bg-white/10 text-xs uppercase tracking-widest font-medium",
              isScrolled ? "text-charcoal-900 hover:bg-charcoal-900/5" : "text-white"
            )}
          >
            Membership
          </Button>
          
          <div className={cn(
            "flex items-center gap-3 pl-4 pr-2 py-2 rounded-full border transition-all duration-300 cursor-pointer hover:shadow-lg",
            isScrolled 
              ? "bg-white border-ivory-200 shadow-sm" 
              : "bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20"
          )}>
            <Menu className={cn("w-4 h-4", isScrolled ? "text-charcoal-900" : "text-white")} />
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              isScrolled ? "bg-charcoal-900 text-white" : "bg-white text-charcoal-900"
            )}>
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
