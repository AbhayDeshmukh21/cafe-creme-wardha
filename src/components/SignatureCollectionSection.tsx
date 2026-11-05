import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ASSETS,
  SIGNATURE_PRODUCTS,
  SignatureProduct,
  resolveActiveProduct,
} from '../data/cafeData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Handcrafted SVG decorative curved arrows matching the Signature Collection reference composition
 */
const CurvedArrow: React.FC<{ variant: SignatureProduct['id'] }> = ({
  variant,
}) => {
  if (variant === 'dalgona') {
    // Curves from right of Dalgona label down-right toward the whipped coffee top
    return (
      <svg
        viewBox="0 0 68 54"
        fill="none"
        aria-hidden="true"
        className="w-11 h-9 sm:w-14 sm:h-11 text-[#321D18] overflow-visible"
      >
        <path
          d="M4 8 C 32 10, 52 24, 56 46"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M49 40 L 56 47 L 61 38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === 'kuka') {
    // Curves from bottom-right of Kuka Royale label gently up-right toward the glass rim
    return (
      <svg
        viewBox="0 0 74 36"
        fill="none"
        aria-hidden="true"
        className="w-12 h-6 sm:w-16 sm:h-8 text-[#321D18] overflow-visible"
      >
        <path
          d="M4 22 C 26 28, 52 24, 66 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M57 9 L 67 9 L 65 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === 'brownie') {
    // Curves from bottom of Sizzling Brownie label down-left toward the brownie plate
    return (
      <svg
        viewBox="0 0 60 64"
        fill="none"
        aria-hidden="true"
        className="w-10 h-11 sm:w-12 sm:h-14 text-[#321D18] overflow-visible"
      >
        <path
          d="M44 6 C 46 30, 32 48, 12 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M21 58 L 11 56 L 17 47"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // redfizz: curves from bottom of Red Fizz label down-left toward the lime slice / glass
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="w-10 h-10 sm:w-13 sm:h-13 text-[#321D18] overflow-visible"
    >
      <path
        d="M48 6 C 50 30, 36 48, 16 54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M25 57 L 15 54 L 21 46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface SignatureCollectionSectionProps {
  onNavigate?: (targetId: string) => void;
}

export const SignatureCollectionSection: React.FC<
  SignatureCollectionSectionProps
> = ({ onNavigate }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProductId, setActiveProductId] = useState<
    SignatureProduct['id'] | null
  >(null);
  const [isTouchMode, setIsTouchMode] = useState(false);

  const handleTasteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('visit-us');
    } else {
      const targetElement = document.getElementById('visit-us');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.collection-header-reveal',
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

      gsap.fromTo(
        '.podium-product-reveal',
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.podium-stage-container',
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (id: SignatureProduct['id']) => {
    if (isTouchMode) return;
    setActiveProductId((prev) => resolveActiveProduct(prev, id, 'hover-enter'));
  };

  const handleMouseLeave = (id: SignatureProduct['id']) => {
    if (isTouchMode) return;
    setActiveProductId((prev) => resolveActiveProduct(prev, id, 'hover-leave'));
  };

  const handleProductTap = (id: SignatureProduct['id']) => {
    setActiveProductId((prev) => resolveActiveProduct(prev, id, 'tap'));
  };

  const activeProduct =
    SIGNATURE_PRODUCTS.find((p) => p.id === activeProductId) || null;

  return (
    <section
      ref={sectionRef}
      id="collection"
      aria-labelledby="collection-heading"
      onTouchStart={() => setIsTouchMode(true)}
      style={{
        /* Matches the exact studio lighting gradient of Minimal_Beige_Podium_Display_Scene_e08a526a.png so there are zero visible container boundaries */
        background:
          'linear-gradient(90deg, #F9DCBA 0%, #F1BE8C 52%, #DFA26C 100%)',
      }}
      className="relative w-full text-[#321D18] pt-14 sm:pt-20 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      {/* Top & bottom subtle vertical studio blend so the section transitions smoothly while remaining one continuous studio environment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#EEC69B]/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#E5B380]/50 to-transparent"
      />

      {/* Section Heading & Introductory Description */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 sm:px-10 text-center mb-2 sm:mb-4">
        <p className="collection-header-reveal font-mono text-[11px] uppercase tracking-[0.24em] text-[#321D18]/75 mb-2.5">
          THE CRÈME COLLECTION
        </p>

        <h2
          id="collection-heading"
          style={{ textWrap: 'balance' }}
          className="collection-header-reveal font-serif text-[#24130F] text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.05] tracking-[-0.015em] font-normal mb-3"
        >
          A Little Something for{' '}
          <em className="italic font-normal">Every Craving.</em>
        </h2>

        <p className="collection-header-reveal font-sans text-[#321D18]/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          From rich chocolate indulgences to refreshing sips and delicious
          bites, discover the flavours that make every Café Crème moment
          special.
        </p>
      </div>

      {/* Seamless Four-Podium Studio Composition Stage */}
      <div className="podium-stage-container relative w-full max-w-[1120px] mx-auto -mt-2 sm:-mt-4">
        <div className="relative w-full aspect-[1672/941]">
          {/* Empty 4-Podium Studio Background Image seamlessly blended into the continuous section background */}
          <img
            src={ASSETS.podiumEmptyBg}
            alt="Four warm cream cylindrical pedestals in a sunlit beige studio"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="podium-stage-mask w-full h-full object-cover pointer-events-none select-none"
          />

          {/* Realistic Multi-Layered Contact Shadows on Each Podium Top Surface */}
          {SIGNATURE_PRODUCTS.map((product) => {
            const isActive = activeProductId === product.id;
            const {
              shadowLeftPct,
              shadowBottomPct,
              shadowWidthPct,
              shadowHeightPct,
            } = product.stagePlacement;

            return (
              <div
                key={`shadow-${product.id}`}
                aria-hidden="true"
                style={{
                  left: `${shadowLeftPct}%`,
                  bottom: `${shadowBottomPct}%`,
                  width: `${shadowWidthPct}%`,
                  height: `${shadowHeightPct}%`,
                  transform: 'translate(-50%, 50%)',
                  zIndex: product.zIndex - 1,
                }}
                className="pointer-events-none absolute"
              >
                {/* Soft warm ambient cast shadow across pedestal top */}
                <div
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(82, 40, 16, 0.42) 0%, rgba(124, 69, 33, 0.22) 52%, rgba(168, 102, 54, 0) 78%)',
                  }}
                  className={`w-full h-full rounded-full mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'scale-x-105 scale-y-95 opacity-75 blur-[3px]'
                      : 'scale-100 opacity-95 blur-[1.5px]'
                  }`}
                />
                {/* Tight grounding contact shadow right under the physical glass/plate base */}
                <div
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(42, 18, 8, 0.62) 0%, rgba(76, 36, 15, 0.30) 54%, rgba(76, 36, 15, 0) 82%)',
                  }}
                  className={`absolute inset-x-[12%] inset-y-[18%] rounded-full mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'scale-x-90 opacity-60 blur-[2px]'
                      : 'scale-100 opacity-95 blur-[0.5px]'
                  }`}
                />
              </div>
            );
          })}

          {/* Four Independent High-Resolution Transparent PNG Products */}
          {SIGNATURE_PRODUCTS.map((product) => {
            const isActive = activeProductId === product.id;
            const { widthPct, leftPct, bottomPct } = product.stagePlacement;

            return (
              <div
                key={product.id}
                style={{
                  width: `${widthPct}%`,
                  left: `${leftPct}%`,
                  bottom: `${bottomPct}%`,
                  zIndex: isActive ? 35 : product.zIndex,
                }}
                className="podium-product-reveal absolute"
              >
                {/* Atmospheric Luminous Active Spotlight Halo (revealed on mobile tap & desktop hover) */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -inset-x-[22%] -inset-y-[14%] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75'
                  }`}
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(255, 248, 238, 0.78) 0%, rgba(245, 228, 206, 0.48) 45%, rgba(223, 162, 108, 0) 72%)',
                    filter: 'blur(10px)',
                  }}
                />

                <button
                  type="button"
                  aria-label={`${product.name} — ${product.description}`}
                  aria-pressed={isActive}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={() => handleMouseLeave(product.id)}
                  onFocus={() => handleMouseEnter(product.id)}
                  onBlur={() => handleMouseLeave(product.id)}
                  onClick={() => handleProductTap(product.id)}
                  className="group relative block w-full h-full p-0 bg-transparent border-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#321D18] rounded-xl touch-manipulation"
                >
                  <img
                    src={product.imageSrc}
                    alt={`${product.name}: ${product.description}`}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className={`w-full h-auto block select-none pointer-events-none will-change-transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? '-translate-y-2 sm:-translate-y-3 scale-[1.04] drop-shadow-[0_8px_20px_rgba(255,245,230,0.55)]'
                        : 'translate-y-0 scale-100'
                    }`}
                  />
                </button>
              </div>
            );
          })}

          {/* Independent Editorial Script Callout Labels & Curved Arrows (Desktop & Tablet Stage Overlay) */}
          {SIGNATURE_PRODUCTS.map((product) => {
            const isActive = activeProductId === product.id;

            // Position each product's editorial callout in the open beige studio space beside the product
            let calloutPosClass = '';
            if (product.id === 'dalgona') {
              calloutPosClass = 'left-[0.5%] lg:left-[1.5%] top-[18%]';
            } else if (product.id === 'kuka') {
              calloutPosClass = 'left-[25.5%] lg:left-[27.5%] top-[6.5%]';
            } else if (product.id === 'brownie') {
              calloutPosClass = 'left-[57.5%] lg:left-[58.5%] top-[43%]';
            } else {
              calloutPosClass = 'right-[1.5%] lg:right-[2.5%] top-[11.5%]';
            }

            return (
              <div
                key={`callout-${product.id}`}
                aria-hidden={!isActive}
                className={`hidden md:block pointer-events-none absolute z-40 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${calloutPosClass} ${
                  isActive
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-[0.98]'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <p className="font-script text-[#321D18] text-3xl lg:text-4xl leading-[0.92] tracking-normal drop-shadow-[0_1px_1px_rgba(255,245,235,0.4)]">
                    {product.name}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#321D18]/90 font-medium max-w-[165px] lg:max-w-[185px] leading-[1.45]">
                    {product.description}
                  </p>

                  {/* Curved Arrow positioned to point directly toward the active product */}
                  <div
                    className={`mt-1 ${
                      product.id === 'dalgona'
                        ? 'self-end -mr-3 -mt-1'
                        : product.id === 'kuka'
                        ? 'self-end -mr-6 -mt-1'
                        : product.id === 'brownie'
                        ? 'self-center mr-4 mt-1'
                        : 'self-end mr-1 mt-1'
                    }`}
                  >
                    <CurvedArrow variant={product.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Interactive Product Selector & Mobile Active Detail Readout */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 sm:px-10 mt-3 sm:mt-5 text-center">
        {/* Mobile Active Product Detail Readout (shown on < md so narrow viewports never overlap text over glasses) */}
        <div
          aria-live="polite"
          className="md:hidden min-h-[72px] flex flex-col items-center justify-center mb-3 px-4 py-2.5 rounded-2xl bg-[#F5EBDD]/60 backdrop-blur-sm border border-[#321D18]/12 transition-all duration-300"
        >
          {activeProduct ? (
            <div>
              <div className="inline-flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9895D] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.20em] text-[#B9895D]">
                  Active Selection
                </span>
              </div>
              <p className="font-script text-3xl text-[#24130F] leading-none">
                {activeProduct.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#321D18]/90">
                {activeProduct.description}
              </p>
            </div>
          ) : (
            <p className="font-serif italic text-base text-[#321D18]/80">
              Tap any signature creation above to reveal its tasting notes.
            </p>
          )}
        </div>

        {/* Interactive Product Quick-Select Bar (Expanded 44px min touch target with aria-pressed) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
          {SIGNATURE_PRODUCTS.map((product) => {
            const isSelected = activeProductId === product.id;
            return (
              <button
                key={`quick-${product.id}`}
                type="button"
                aria-pressed={isSelected}
                aria-label={`Select ${product.name}`}
                onClick={() => handleProductTap(product.id)}
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
                className={`inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-full font-serif italic text-base sm:text-lg transition-all duration-200 cursor-pointer whitespace-nowrap touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321D18] ${
                  isSelected
                    ? 'bg-[#24130F] text-[#F5EBDD] shadow-sm scale-[1.02]'
                    : 'bg-[#F5EBDD]/55 hover:bg-[#F5EBDD]/85 text-[#321D18]/85 border border-[#321D18]/15 hover:border-[#321D18]/30'
                }`}
              >
                <span>{product.name}</span>
              </button>
            );
          })}
        </div>

        {/* Primary Conversion Bridge CTA */}
        <div className="mt-4 mb-6 flex items-center justify-center">
          <a
            href="#visit-us"
            onClick={handleTasteClick}
            className="group inline-flex items-center justify-center gap-2.5 bg-[#24130F] hover:bg-[#321D18] text-[#F5EBDD] font-mono text-[11px] uppercase tracking-[0.20em] px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#321D18]"
          >
            <span>TASTE IN SAWANGI</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Supporting Bottom Labels required by spec 7.10 */}
        <div className="pt-2 space-y-1.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#24130F] font-medium">
            SIGNATURE CREATIONS • HANDCRAFTED DAILY
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.20em] text-[#321D18]/70">
            HOVER OR TAP ANY PRODUCT TO REVEAL DETAILS
          </p>
        </div>
      </div>
    </section>
  );
};
