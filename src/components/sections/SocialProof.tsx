import { Button } from '@/src/components/ui/Button';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUpVariant: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function AppPromo() {
  return (
    <section className="py-24 md:py-40 bg-[#111] text-white relative flex items-center min-h-[90vh] overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F39C12]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-20 lg:gap-32 relative z-10 w-full">
        {/* Left Typography Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center lg:justify-start gap-4 mb-10">
            <div className="w-12 h-[1px] bg-[#F39C12] hidden md:block" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#F39C12]">
              Mobile Concierge
            </span>
          </motion.div>

          <motion.h2 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-[-0.03em] uppercase mb-10 leading-[0.9] text-white">
            The world of <br />
            LuxeStay <br />
            <span className="font-serif italic text-white/50 font-light lowercase tracking-normal text-6xl md:text-7xl lg:text-8xl block mt-4">in your pocket.</span>
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="text-white/60 text-lg md:text-xl mb-14 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Seamless booking, itinerary management, and 24/7 concierge chat. Available exclusively for true members of our Private Circle.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button size="lg" className="bg-white text-[#111] hover:bg-[#F39C12] hover:text-white border-none rounded-none px-12 h-[68px] text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300">
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-none px-12 h-[68px] text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300">
              Explore Features
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Phone Mockup Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex-1 relative flex justify-center lg:justify-end w-full max-w-lg lg:max-w-none"
        >
          <div className="relative w-[320px] md:w-[380px] h-[650px] md:h-[750px] bg-[#0a0a0a] rounded-[3rem] border-8 border-[#333] shadow-2xl overflow-hidden shadow-black/50 transform hover:rotate-0 transition-transform duration-700 ease-out">

            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-20 mix-blend-overlay" />

            {/* Hardware Inner Bezel */}
            <div className="absolute inset-0 border-[4px] border-black rounded-[2.5rem] z-10 pointer-events-none"></div>

            {/* Mockup Screen Content */}
            <div className="absolute inset-0 bg-ivory-50 mt-[4px] mx-[4px] mb-[4px] rounded-[2.2rem] overflow-hidden">
              <div className="h-full w-full relative flex flex-col">
                <div className="h-3/5 w-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="App"
                  />
                  {/* Status Bar */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between text-white/90 z-20 mix-blend-difference">
                    <span className="text-[11px] font-semibold tracking-wider">9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="w-4 h-4 rounded-full border border-white/80" />
                      <div className="w-4 h-4 rounded-full border border-white/80 bg-white/20" />
                    </div>
                  </div>
                  {/* Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  <div className="absolute bottom-6 left-6 right-6 text-white text-shadow-sm">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/70 mb-2 font-bold">Current Booking</p>
                    <h3 className="text-3xl font-sans font-medium tracking-tight mb-1">Villa Amalfi</h3>
                    <p className="text-xs text-white/80 font-light">Checking out tomorrow</p>
                  </div>
                </div>

                <div className="flex-1 p-6 md:p-8 bg-white flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-500 mb-2 font-bold">Upcoming Trip</p>
                      <h4 className="text-xl font-sans font-medium text-charcoal-900 tracking-tight">Kyoto Retreat</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-charcoal-500 font-light">Oct 24 — 30</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center p-4 bg-ivory-50 rounded-2xl border border-ivory-200 cursor-pointer hover:bg-ivory-100 transition-colors">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#111] flex items-center justify-center text-[#F39C12] shrink-0 shadow-inner">
                      <span className="font-serif italic text-lg md:text-xl">L</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs md:text-sm font-medium text-charcoal-900">Reach Concierge</p>
                      <p className="text-[10px] md:text-xs text-charcoal-500 mt-0.5">Typically replies in 2 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-[#111] text-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center text-center relative z-10"
      >
        <motion.div variants={fadeUpVariant} className="mb-12 flex items-center justify-center space-x-2">
          <Star className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
          <Star className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
          <Star className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
          <Star className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
          <Star className="w-5 h-5 text-[#F39C12] fill-[#F39C12]" />
        </motion.div>

        <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-20 leading-[1.2] max-w-5xl mx-auto">
          "LuxeStay isn't just a booking platform. It's a <span className="font-serif italic text-white/70">gateway</span> to a life well-traveled. The attention to detail is simply unmatched."
        </motion.h2>

        <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
          <div className="w-16 h-[1px] bg-white/20 mb-8" />
          <p className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white mb-3">Elena V.</p>
          <p className="text-white/40 text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase">Member since 2023</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="py-32 md:py-40 bg-white border-t border-black/5 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="max-w-4xl mx-auto px-8 text-center relative z-10"
      >
        <motion.span variants={fadeUpVariant} className="text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal-500/50 mb-6 block">
          Exclusive Access
        </motion.span>
        <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[-0.03em] uppercase text-charcoal-900 mb-8">
          Join Our Private Circle
        </motion.h2>
        <motion.p variants={fadeUpVariant} className="text-charcoal-500/80 mb-16 font-light leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
          Receive an invitation to our exclusive membership, curated travel journals, and first access to new estates.
        </motion.p>

        <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto items-center">
          <div className="relative w-full flex-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-5 bg-charcoal-900/[0.03] border border-charcoal-900/10 focus:border-charcoal-900 focus:bg-white focus:outline-none placeholder-charcoal-500/40 transition-all duration-300 text-lg font-light rounded-none"
            />
          </div>
          <Button
            className="w-full md:w-auto bg-charcoal-900 text-white hover:bg-[#F39C12] hover:text-charcoal-900 border-none h-[68px] px-12 rounded-none text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300"
          >
            Request Invite
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
