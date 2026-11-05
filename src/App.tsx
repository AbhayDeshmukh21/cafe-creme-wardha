import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { HeroSection } from './components/HeroSection';
import { OurStorySection } from './components/OurStorySection';
import { SignatureCollectionSection } from './components/SignatureCollectionSection';
import { AboutVisitSection } from './components/AboutVisitSection';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: 0,
        duration: 1.2,
      });
    } else {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F5EBDD] text-[#321D18] overflow-x-hidden">
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <OurStorySection />
        <SignatureCollectionSection onNavigate={handleNavigate} />
        <AboutVisitSection />
      </main>
      <Footer />
    </div>
  );
}
