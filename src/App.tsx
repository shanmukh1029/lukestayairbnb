/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import SmoothScroll from '@/src/components/layout/SmoothScroll';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Hero from '@/src/components/sections/Hero';
import FeaturedStays from '@/src/components/sections/FeaturedStays';
import Destinations from '@/src/components/sections/Destinations';
import { WhyChooseUs, Categories } from '@/src/components/sections/Features';
import { AppPromo, Testimonials, Newsletter } from '@/src/components/sections/SocialProof';
import Loader from '@/src/components/ui/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <div
        className={`w-full ${isLoading ? 'h-screen overflow-hidden' : ''}`}
      >
        <SmoothScroll>
          <div className="bg-ivory-50 min-h-screen font-sans text-charcoal-900 selection:bg-champagne-500 selection:text-ivory-900">
            <Header />

            <main>
              <Hero />
              <Categories />
              <FeaturedStays />
              <Destinations />
              <WhyChooseUs />
              <AppPromo />
              <Testimonials />
              <Newsletter />
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      </div>
    </>
  );
}
