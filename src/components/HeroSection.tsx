import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ASSETS, BRAND_INFO } from '../data/cafeData';
import { CircularText } from './CircularText';
import { Navbar } from './Navbar';

interface HeroSectionProps {
  onNavigate: (targetId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Café Crème Wardha Hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#DEC4AB]"
    >
      {/* Desktop & Tablet Full-Bleed Hero Photograph */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={ASSETS.heroBg}
          alt="Café Crème signature cup resting on a textured natural stone pedestal"
          width={3340}
          height={1882}
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Dedicated Hero Photograph Framing: keeps takeaway cup & rock sharp and unobstructed above the headline */}
      <div className="md:hidden relative w-full pt-20 px-4 pointer-events-none select-none z-0">
        <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden">
          <img
            src={ASSETS.heroBg}
            alt="Café Crème signature cup resting on a textured natural stone pedestal"
            width={3340}
            height={1882}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[62%_center] scale-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#DEC4AB] via-transparent to-transparent opacity-60"
          />
        </div>
      </div>

      {/* Transparent Top Navigation */}
      <Navbar onNavigate={onNavigate} />

      {/* Main Hero Inner Layout */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 flex flex-col justify-between max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-16 pt-2 md:pt-28 pb-8 sm:pb-10"
      >
        {/* Top Metadata Row: Location Label (Left) & Rotating Circular Text (Upper-Right) */}
        <div className="flex items-start justify-between gap-4">
          <p className="hero-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#321D18]/80 pt-1 md:pt-2">
            WARDHA, MAHARASHTRA
          </p>

          <div className="hero-reveal -mt-2 md:mt-0">
            <CircularText
              text={BRAND_INFO.circularText}
              spinDuration={18}
              onHover="speedUp"
            />
          </div>
        </div>

        {/* Center-Left Editorial Headline & Actions */}
        <div className="my-auto py-4 md:py-12 max-w-xl">
          <p className="hero-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#321D18]/80 mb-3 sm:mb-4">
            {BRAND_INFO.heroEyebrow}
          </p>

          <h1
            style={{ textWrap: 'balance' }}
            className="hero-reveal font-serif text-[#24130F] text-[2.65rem] sm:text-[4rem] lg:text-[4.85rem] leading-[0.98] tracking-[-0.02em] font-normal mb-4 sm:mb-6"
          >
            <span className="block">A Little Sip</span>
            <span className="block">
              of <em className="italic font-normal">Happiness.</em>
            </span>
          </h1>

          <p className="hero-reveal font-sans text-[#321D18]/85 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-md mb-6 sm:mb-9">
            {BRAND_INFO.heroSubtext}
          </p>

          {/* CTA Buttons */}
          <div className="hero-reveal flex flex-wrap items-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate('collection')}
              className="group inline-flex items-center justify-center gap-2.5 bg-[#24130F] text-[#F5EBDD] font-mono text-[11px] uppercase tracking-[0.2em] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#321D18] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
            >
              <span>EXPLORE OUR MENU</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('visit-us')}
              className="inline-flex items-center justify-center bg-[#F5EBDD]/65 hover:bg-[#F5EBDD] text-[#24130F] border border-[#321D18]/30 hover:border-[#321D18] font-mono text-[11px] uppercase tracking-[0.2em] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              FIND US
            </button>
          </div>
        </div>

        {/* Bottom Supporting Scroll Prompt */}
        <div className="hero-reveal flex items-center justify-between pt-3 md:pt-2">
          <button
            type="button"
            onClick={() => onNavigate('story')}
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#321D18]/75 hover:text-[#321D18] transition-colors cursor-pointer whitespace-nowrap"
          >
            SCROLL TO EXPLORE
          </button>
          <span
            aria-hidden="true"
            className="hidden sm:block w-[1px] h-7 bg-[#321D18]/25"
          />
        </div>
      </div>
    </section>
  );
};
