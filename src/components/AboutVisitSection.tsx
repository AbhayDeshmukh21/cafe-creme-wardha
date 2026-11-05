import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO } from '../data/cafeData';

gsap.registerPlugin(ScrollTrigger);

export const AboutVisitSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.visit-reveal',
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="visit-us"
      aria-labelledby="visit-heading"
      className="relative w-full bg-[#F5EBDD] text-[#321D18] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="max-w-xl mb-14 sm:mb-20">
          <p className="visit-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#B9895D] mb-4">
            ABOUT US — VISIT US
          </p>

          <h2
            id="visit-heading"
            style={{ textWrap: 'balance' }}
            className="visit-reveal font-serif text-[#24130F] text-[2.35rem] sm:text-[3.2rem] lg:text-[3.75rem] leading-[1.04] tracking-[-0.015em] font-normal mb-5"
          >
            Your Next Happy Moment{' '}
            <em className="italic font-normal">Awaits.</em>
          </h2>

          <p className="visit-reveal font-sans text-[#321D18]/80 text-[15px] sm:text-base leading-[1.7] max-w-[46ch]">
            Good coffee, delicious food and little moments worth sharing.
            We&apos;d love to welcome you to Café Crème.
          </p>
        </div>

        {/* Two-Column Editorial Arrangement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-stretch">
          {/* Left Column: Location, Timings & Instagram */}
          <div className="lg:col-span-6 flex flex-col justify-between divide-y divide-[#321D18]/12 border-t border-[#321D18]/12">
            {/* Visit Us Block */}
            <div className="visit-reveal py-8 sm:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#B9895D] mb-3">
                VISIT US
              </p>
              <p className="font-serif text-[#24130F] text-2xl sm:text-[1.75rem] leading-[1.3] font-normal max-w-md mb-6">
                {BRAND_INFO.address}
              </p>
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#24130F] hover:bg-[#321D18] text-[#F5EBDD] font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                <span>GET DIRECTIONS</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Opening Hours Block */}
            <div className="visit-reveal py-8 sm:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#B9895D] mb-3">
                OPENING HOURS
              </p>
              <p className="font-serif text-[#24130F] text-2xl sm:text-[1.75rem] leading-tight font-normal tabular-nums mb-1.5">
                {BRAND_INFO.openingHours}
              </p>
              <p className="font-sans text-sm text-[#321D18]/70">
                {BRAND_INFO.openingDays}
              </p>
            </div>

            {/* Instagram Block */}
            <div className="visit-reveal py-8 sm:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#B9895D] mb-3">
                FOLLOW US
              </p>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-3 text-[#24130F] hover:text-[#B9895D] transition-colors duration-200"
              >
                <span className="font-script text-3xl sm:text-4xl tracking-normal text-[#B9895D] group-hover:text-[#321D18] transition-colors">
                  {BRAND_INFO.instagramHandle}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#321D18]/60 group-hover:text-[#321D18]">
                  INSTAGRAM ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Dark Espresso-Brown Google Reviews Panel */}
          <div className="visit-reveal lg:col-span-6 flex">
            <div className="w-full bg-[#24130F] text-[#F5EBDD] rounded-t-[140px] sm:rounded-t-[180px] rounded-b-[20px] px-8 sm:px-14 py-14 sm:py-20 flex flex-col justify-between min-h-[420px] sm:min-h-[480px] shadow-[0_24px_60px_rgba(36,19,15,0.14)]">
              <div>
                <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#B9895D] mb-4">
                  GOOGLE REVIEWS
                </p>

                <h3 className="font-serif text-[#F5EBDD] text-3xl sm:text-[2.5rem] leading-[1.12] font-normal mb-4 tracking-wide">
                  Enjoyed Your Visit?
                </h3>

                <p className="font-sans text-[#E8D8C2]/80 text-sm sm:text-base leading-relaxed max-w-sm">
                  Your feedback makes us better. Share your experience with us.
                </p>
              </div>

              <div className="pt-10">
                <a
                  href={BRAND_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 border border-[#F5EBDD]/25 hover:border-[#F5EBDD] hover:bg-[#F5EBDD] hover:text-[#24130F] text-[#F5EBDD] font-mono text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap shrink-0"
                >
                  <span>LEAVE A REVIEW</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
