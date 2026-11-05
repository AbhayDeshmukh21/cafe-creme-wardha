import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/cafeData';

interface NavbarProps {
  onNavigate: (targetId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(targetId);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-16 py-6 md:py-8">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-script text-2xl sm:text-3xl text-[#321D18] tracking-normal whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#321D18]"
        >
          {BRAND_INFO.name}
        </a>

        {/* Zone 2: Navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          <a
            href="#story"
            onClick={(e) => handleNavClick(e, 'story')}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#321D18]/85 hover:text-[#321D18] transition-colors duration-150 whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#321D18] hover:after:w-full after:transition-all after:duration-200"
          >
            Story
          </a>
          <a
            href="#collection"
            onClick={(e) => handleNavClick(e, 'collection')}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#321D18]/85 hover:text-[#321D18] transition-colors duration-150 whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#321D18] hover:after:w-full after:transition-all after:duration-200"
          >
            Collection
          </a>
          <a
            href="#visit-us"
            onClick={(e) => handleNavClick(e, 'visit-us')}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#321D18]/85 hover:text-[#321D18] transition-colors duration-150 whitespace-nowrap shrink-0 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-[#321D18] hover:after:w-full after:transition-all after:duration-200"
          >
            Visit Us
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#321D18] border border-[#321D18]/30 hover:border-[#321D18] hover:bg-[#321D18] hover:text-[#F5EBDD] px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap shrink-0"
          >
            Instagram
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#321D18]/25 text-[#321D18] hover:bg-[#321D18]/5 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Compact Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden mt-3 rounded-2xl bg-[#F5EBDD]/95 backdrop-blur-md border border-[#321D18]/15 px-6 py-5 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#story"
                onClick={(e) => handleNavClick(e, 'story')}
                className="block py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#321D18]"
              >
                Story
              </a>
            </li>
            <li>
              <a
                href="#collection"
                onClick={(e) => handleNavClick(e, 'collection')}
                className="block py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#321D18]"
              >
                Collection
              </a>
            </li>
            <li>
              <a
                href="#visit-us"
                onClick={(e) => handleNavClick(e, 'visit-us')}
                className="block py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#321D18]"
              >
                Visit Us
              </a>
            </li>
            <li className="pt-2 border-t border-[#321D18]/10">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#321D18] underline underline-offset-4"
              >
                Instagram ↗
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
