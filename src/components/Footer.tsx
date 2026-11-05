import React from 'react';
import { BRAND_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#24130F] text-[#F5EBDD] border-t border-[#F5EBDD]/10 px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12 sm:pb-14">
      <div className="max-w-[1240px] mx-auto">
        {/* Upper Row: Brand Wordmark & Tagline (Left) + External Links (Right) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pb-12 sm:pb-14 border-b border-[#F5EBDD]/10">
          <div>
            <a
              href="#hero"
              className="inline-block font-script text-4xl sm:text-5xl text-[#F5EBDD] tracking-normal mb-2"
            >
              {BRAND_INFO.name}
            </a>
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#B9895D]">
              {BRAND_INFO.tagline} — {BRAND_INFO.location}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8D8C2]/80 hover:text-[#F5EBDD] transition-colors whitespace-nowrap"
            >
              Instagram
            </a>
            <a
              href={BRAND_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8D8C2]/80 hover:text-[#F5EBDD] transition-colors whitespace-nowrap"
            >
              Google Maps
            </a>
          </div>
        </div>

        {/* Lower Row: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8D8C2]/50">
            {BRAND_INFO.copyright}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8D8C2]/40">
            NEAR DATTA MEGHE MEDICAL COLLEGE, SAWANGI
          </p>
        </div>
      </div>
    </footer>
  );
};
