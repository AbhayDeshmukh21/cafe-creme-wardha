import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS, BRAND_INFO } from '../data/cafeData';

gsap.registerPlugin(ScrollTrigger);

export const OurStorySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-reveal',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.story-image-reveal',
        { y: 28, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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
      id="story"
      aria-labelledby="story-heading"
      className="relative w-full bg-[#F5EBDD] text-[#321D18] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        {/* Left Column: Editorial Story Copy */}
        <div className="lg:col-span-6 lg:pr-6">
          <p className="story-reveal font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#B9895D] mb-4 sm:mb-5">
            OUR STORY
          </p>

          <h2
            id="story-heading"
            style={{ textWrap: 'balance' }}
            className="story-reveal font-serif text-[#24130F] text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.06] tracking-[-0.015em] font-normal mb-7 sm:mb-8"
          >
            More Than Just a{' '}
            <em className="italic font-normal">Coffee Experience.</em>
          </h2>

          <div className="space-y-5 font-sans text-[#321D18]/80 text-[15px] sm:text-base leading-[1.75] max-w-[54ch]">
            <p className="story-reveal">
              Café Crème is all about bringing people together over delicious
              beverages, indulgent treats and moments worth remembering. From
              signature Kuka creations to delightful bites, every visit is an
              invitation to slow down and savour happiness.
            </p>

            <p className="story-reveal">
              Bringing the Café Crème experience to Sawangi, Wardha. A welcoming
              spot for students, friends and coffee lovers to enjoy their
              favourite flavours and create little moments of happiness.
            </p>
          </div>

          {/* Decorative Supporting Text */}
          <p className="story-reveal font-script text-3xl sm:text-4xl text-[#B9895D] mt-8 sm:mt-10 select-none">
            {BRAND_INFO.tagline}
          </p>
        </div>

        {/* Right Column: Editorial Arched Branded Photograph */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-end">
          <div className="story-image-reveal w-full max-w-[490px]">
            <div className="relative w-full aspect-[4/4.7] rounded-t-full overflow-hidden bg-[#DFC5AD] shadow-[0_20px_50px_rgba(50,29,24,0.08)]">
              <img
                src={ASSETS.heroBg}
                alt="Café Crème branded takeaway cup on textured stone in warm sunlight"
                width={3340}
                height={1882}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[62%_center] scale-[1.08]"
              />
            </div>

            <div className="mt-3.5 flex items-center justify-end">
              <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] text-[#321D18]/55">
                THE CRÈME CUP — SAWANGI, WARDHA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
