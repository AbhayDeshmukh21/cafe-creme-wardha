import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: 'speedUp' | 'slowDown' | 'pause';
  className?: string;
}

/**
 * React Bits CircularText component using polar character transforms and GSAP rotation
 * with prefers-reduced-motion compliance and smooth hover speed modulation.
 */
export const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 18,
  onHover = 'speedUp',
  className = '',
}) => {
  const letters = Array.from(text);
  const ringRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ringEl = ringRef.current;
    if (!ringEl) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    tweenRef.current = gsap.to(ringEl, {
      rotation: 360,
      duration: spinDuration,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [spinDuration]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!tweenRef.current) return;
    if (onHover === 'speedUp') {
      gsap.to(tweenRef.current, { timeScale: 2.8, duration: 0.4, ease: 'power2.out' });
    } else if (onHover === 'slowDown') {
      gsap.to(tweenRef.current, { timeScale: 0.35, duration: 0.4, ease: 'power2.out' });
    } else if (onHover === 'pause') {
      gsap.to(tweenRef.current, { timeScale: 0, duration: 0.4, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!tweenRef.current) return;
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6, ease: 'power2.out' });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text.replace(/•/g, '').trim()}
      className={`relative select-none inline-flex items-center justify-center w-[70px] h-[70px] md:w-[90px] md:h-[90px] transition-transform duration-300 ease-out ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${className}`}
    >
      <div ref={ringRef} className="relative w-full h-full">
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          return (
            <div key={i} data-impeccable-variants="96acba6d" data-impeccable-variant-count="3" style={{ display: "contents" }}>
              {/* impeccable-variants-start 96acba6d */}
              {/* Original */}
              <div data-impeccable-variant="original">
                <span
                  style={{
                    transform: `rotate(${rotationDeg}deg)`,
                  }}
                  className="absolute inset-0 text-center font-mono text-[6.8px] md:text-[8px] font-medium tracking-normal text-[#321D18] uppercase leading-none"
                >
                  {letter}
                </span>
              </div>
              {/* Variants: insert below this line */}
              <style data-impeccable-css="96acba6d">{`
                @scope ([data-impeccable-variant="1"]) {
                  :scope > span {
                    font-weight: 700;
                    color: #24130F;
                  }
                }
                @scope ([data-impeccable-variant="2"]) {
                  :scope > span {
                    font-weight: 600;
                    color: #24130F;
                  }
                }
                @scope ([data-impeccable-variant="3"]) {
                  :scope > span {
                    font-weight: 800;
                    color: #24130F;
                  }
                }
              `}</style>
              <div data-impeccable-variant="1">
                <span
                  style={{
                    transform: `rotate(${rotationDeg}deg)`,
                  }}
                  className="absolute inset-0 text-center font-mono text-[7.5px] md:text-[9.5px] font-bold tracking-[0.08em] text-[#24130F] uppercase leading-none"
                >
                  {letter}
                </span>
              </div>
              <div data-impeccable-variant="2" style={{ display: "none" }}>
                <span
                  style={{
                    transform: `rotate(${rotationDeg}deg)`,
                  }}
                  className="absolute inset-0 text-center font-mono text-[8.5px] md:text-[10.5px] font-semibold tracking-[0.04em] text-[#24130F] uppercase leading-none drop-shadow-[0_1px_1px_rgba(36,19,15,0.2)]"
                >
                  {letter}
                </span>
              </div>
              <div data-impeccable-variant="3" style={{ display: "none" }}>
                <span
                  style={{
                    transform: `rotate(${rotationDeg}deg)`,
                  }}
                  className="absolute inset-0 text-center font-mono text-[8px] md:text-[10px] font-extrabold tracking-[0.12em] text-[#24130F] uppercase leading-none"
                >
                  {letter}
                </span>
              </div>
              {/* impeccable-variants-end 96acba6d */}
            </div>
          );
        })}
      </div>

      {/* Centered delicate directional accent */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-[#321D18]/75 text-[10px] md:text-[11px] font-light transition-transform duration-300 ${
          isHovered ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
        }`}
      >
        ↗
      </span>
    </div>
  );
};
