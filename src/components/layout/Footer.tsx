import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ivory-50 pt-32 pb-16 border-t border-ivory-200">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-4 space-y-8">
            <a href="/" className="block font-sans text-3xl tracking-tighter font-medium text-charcoal-900">
              LuxeStay.
            </a>
            <p className="text-charcoal-500 text-sm font-light leading-relaxed max-w-xs tracking-wide">
              Curating the world's most exceptional homes for travelers who seek the extraordinary.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-900 mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-charcoal-500 font-light tracking-wide">
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">About Us</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Careers</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Press</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Journal</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-900 mb-8">Support</h4>
            <ul className="space-y-4 text-sm text-charcoal-500 font-light tracking-wide">
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Concierge</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Contact</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-charcoal-900 transition-colors block py-1">Terms</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-900 mb-8">Social</h4>
            <div className="flex gap-6 text-charcoal-500">
              <Instagram className="w-4 h-4 hover:text-charcoal-900 transition-colors cursor-pointer" />
              <Twitter className="w-4 h-4 hover:text-charcoal-900 transition-colors cursor-pointer" />
              <Linkedin className="w-4 h-4 hover:text-charcoal-900 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-ivory-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 mb-24">
          <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-400 font-medium">
            © 2026 LuxeStay Inc.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-charcoal-400 font-medium">
            Designed for the exceptional.
          </p>
        </div>

        {/* Massive Split Logo Footer Effect */}
        <div className="relative w-[100%] max-w-[100vw] mx-auto text-center overflow-hidden flex flex-col items-center justify-center select-none mt-12 pb-16">
          <div className="relative font-sans font-black tracking-[-0.03em] uppercase text-[15vw] leading-none w-full flex justify-center">
            {/* Upper Dark Half */}
            <div className="text-charcoal-900 absolute top-0 left-0 right-0 z-10 clip-half-top text-center w-full block">
              LuxeStay.
            </div>

            {/* Lower Light Half */}
            <div className="text-charcoal-900/10 absolute top-0 left-0 right-0 z-0 clip-half-bottom text-center w-full block">
              LuxeStay.
            </div>

            {/* Invisible placeholder to maintain layout height */}
            <div className="opacity-0 pointer-events-none w-full text-center">
              LuxeStay.
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
             .clip-half-top { clip-path: inset(0 0 50% 0); }
             .clip-half-bottom { clip-path: inset(50% 0 0 0); }
           `}} />
        </div>
      </div>
    </footer>
  );
}
