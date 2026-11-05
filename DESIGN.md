---
name: Café Crème Wardha
description: Lip Lickin' Happiness — Artisanal beverages, signature Kuka creations, and cozy moments in Sawangi, Wardha
colors:
  primary: "#24130F"
  espresso: "#321D18"
  caramel: "#B9895D"
  cream: "#F5EBDD"
  beige: "#E8D8C2"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.25rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0em"
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.22em"
rounded:
  full: "9999px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "20px"
  arch: "180px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
  button-secondary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.primary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.espresso}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-ghost-hover:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
---

# Design System: Café Crème Wardha

## Overview

**Creative North Star: "The Sunlit Pâtisserie & Editorial Sanctuary"**

The visual language of Café Crème Wardha is rooted in warmth, unhurried indulgence, and editorial craft. Designed to evoke the aroma of freshly roasted cacao and the tactile pleasure of chilled desserts, the experience rejects sterile corporate minimalism and loud fast-food hyperbole in favor of an inviting, sensory aesthetic. Rich roasted tones of espresso and dark chocolate meet sunlit buttermilk cream surfaces, accented by warm honeyed caramel metadata and graceful calligraphic flourishes.

Typography operates on deliberate editorial contrast: sweeping, romantic serifs (*Cormorant Garamond*) bring grace to high-impact headlines; crisp, technical monospace (*IBM Plex Mono*) introduces structured artisanal pacing to eyebrows and metrics; clear modern sans (*Plus Jakarta Sans*) delivers effortless readability; and expressive script (*Alex Brush*) adds a warm, personal handwritten signature. Layouts breathe through generous whitespace, asymmetric column pairings, and architectural rounded arches that feel grounded in real-world physical spaces.

**Key Characteristics:**
- **Warm Culinary Palette:** Deep chocolate (#24130F) and espresso (#321D18) anchored on soft buttermilk cream (#F5EBDD) and sand oat (#E8D8C2).
- **Editorial Type Counterpoint:** Literary serif display headlines paired with mechanical uppercase monospace tags and legible narrative sans.
- **Architectural Arches & Soft Curves:** Rounded-full pill buttons and arched editorial imagery windows echo café portals and display domes.
- **Natural Tactile Depth:** Layered tonal surfaces and grounded contact shadows replace harsh artificial drop shadows.
- **Sensory Motion:** Smooth inertia scrolling (Lenis) and physics-based GSAP text reveals evoke a relaxed, comfortable dining environment.

## Colors

The palette draws its character directly from artisanal confectionery craft—steamed coffee beans, roasted chocolate blocks, clover honey drizzle, and warm frothy cream.

### Primary
- **Roasted Cacao** (`#24130F`): The deepest dark chocolate black-brown. Serves as the primary typographic anchor for large headlines, high-contrast primary CTA buttons, editorial dark panels, and the grounding footer.

### Secondary
- **Steamed Espresso** (`#321D18`): Deep roasted coffee brown. Used for primary narrative body text, standard borders, subtle dividers, and hover states for primary buttons.

### Tertiary
- **Warm Honey Caramel** (`#B9895D`): Sunlit golden-caramel accent. Applied exclusively to uppercase monospace eyebrows, decorative cursive taglines, sub-section location tags, and subtle interactive highlights.

### Neutral
- **Buttermilk Cream** (`#F5EBDD`): Soft, warm milk canvas. Serves as the default page background and high-contrast text color on dark surfaces.
- **Sand Oat** (`#E8D8C2`): Muted oatmeal neutral. Used for secondary surfaces, borders on cream, and muted metadata text on dark roasted cards.

### Named Rules
**The Roasted Cacao Anchor Rule.** `#24130F` is reserved for foundational grounding elements (major headings, primary buttons, and hero frames). It anchors the eye and guarantees AAA legibility against cream backgrounds.

**The Caramel Accent Rule.** Warm Caramel (`#B9895D`) is an editorial punctuation mark. It is never used for lengthy body copy; its power comes from high-tracking uppercase labels and signature cursive moments.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Plus Jakarta Sans (with -apple-system, BlinkMacSystemFont, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)
**Script/Accent Font:** Alex Brush (with Cormorant Garamond, cursive fallback)

**Character:** A harmonious pairing of traditional literary romance and modern precision. The classical dignity of Garamond softens the clinical rhythm of Plex Mono, while Jakarta Sans provides invisible, fatigue-free reading.

### Hierarchy
- **Display** (Regular 400, `4.5rem` / `72px`, line-height `0.98`, tracking `-0.02em`): Hero headlines and emotional proclamations. Employs `<em>` italic emphasis for key evocative nouns.
- **Headline** (Regular 400, `3.25rem` / `52px`, line-height `1.05`, tracking `-0.015em`): Section titles (`h2`) with balanced text wrapping.
- **Title** (Regular 400, `2rem` / `32px`, line-height `1.2`, tracking `0em`): Card headings, address highlights, and feature callouts.
- **Body** (Regular 400, `1rem` / `16px`, line-height `1.75`, max line length `46ch - 54ch`): Editorial descriptions, stories, and visiting information.
- **Label** (Medium 500, `0.6875rem` / `11px`, letter-spacing `0.22em`, uppercase): Eyebrows, category headers, navigation items, buttons, and timestamps.
- **Script Flourish** (Regular 400, `1.75rem - 2.5rem` / `28px - 40px`, natural tracking): Brand signatures, tagline accents, and Instagram handle spotlights.

### Named Rules
**The Italic Accent Rule.** Display and Headline serifs always emphasize exactly one evocative word or phrase using italic serif styling (`<em class="italic font-normal">Happiness.</em>`). This creates an artisanal editorial rhythm.

**The Monospace Eyebrow Rule.** Every major heading is preceded by an uppercase `IBM Plex Mono` eyebrow tracked at `0.20em - 0.26em` in `#B9895D` or `#321D18/80`. It sets context before the headline speaks.

## Layout

Layout follows an editorial magazine structure with generous vertical rhythm (`128px - 160px` section padding) and asymmetric 12-column grids. Content is bounded by clear max-width containers (`1360px` for hero/nav, `1240px` for editorial sections, `1120px` for the podium showcase).

- **Grid:** Asymmetric 12-column layout (`lg:grid-cols-12`) with a 6/6 split between narrative prose and architectural imagery, linked by comfortable column gaps (`gap-14 lg:gap-16`).
- **Responsive Stacking:** Desktop two-column layouts stack vertically on mobile screens (`<1024px`), maintaining consistent 24px (`px-6`) mobile horizontal gutters.
- **Density & Whitespace:** Generous breathing room prevents cognitive overload. Text blocks are constrained to `46ch - 54ch` for comfortable reading lines.

## Elevation & Depth

Depth is established primarily through **tonal layering** and **grounded natural contact shadows** rather than floating drop shadows. Objects feel like they are resting physically in a sunlit architectural space.

### Shadow Vocabulary
- **Ambient Arch Shadow** (`box-shadow: 0 20px 50px rgba(50, 29, 24, 0.08)`): Soft, warm atmospheric glow applied beneath arched editorial photography.
- **Panel Elevation** (`box-shadow: 0 24px 60px rgba(36, 19, 15, 0.14)`): Rich, warm volumetric depth on dark roasted cacao containers.
- **Grounding Contact Shadow** (`radial-gradient(ellipse at center, rgba(42, 18, 8, 0.62) 0%, rgba(76, 36, 15, 0) 82%)` with `mix-blend-multiply`): Tight contact shadow directly under physical beverage glassware and plates on podium surfaces.

### Named Rules
**The Grounded Surface Rule.** UI components do not float arbitrarily in white space; they sit with weight on warm cream foundations or emerge from dark roasted architectural cutouts.

**The No-Plastic Shadow Rule.** Shadows must never use desaturated pure black (`rgba(0,0,0,x)`). All shadows and blurs must carry warm espresso or roasted cacao undertones (`rgba(50, 29, 24, x)` or `rgba(36, 19, 15, x)`).

## Shapes

Form language is characterized by organic geometry and architectural arches inspired by classic European cafés and pâtisseries:
- **Continuous Pill:** Interactive buttons, category badges, and navigation links use full pill geometry (`rounded-full`, radius `9999px`).
- **Architectural Portals:** Imagery and key feature panels utilize arched crowns (`rounded-t-full` or `rounded-t-[180px]`) coupled with subtle base corners (`rounded-b-[20px]`).
- **Soft Studio Enclosures:** Mobile drawer navigation and subtle content enclosures use gentle organic curvature (`rounded-2xl`, `16px`).

## Components

### Buttons

#### Primary Button
- **Shape:** Full pill (`rounded-full`, `9999px`).
- **Primary:** Background `#24130F` (Roasted Cacao), text `#F5EBDD` (Buttermilk Cream), font `IBM Plex Mono` 11px uppercase tracking `0.20em`, padding `14px 28px`. Includes inline trailing arrow (`→`) that translates right on hover (`translate-x-1`).
- **Hover / Focus:** Transitions background to `#321D18` over 200ms with subtle scale and arrow slide.

#### Secondary Button
- **Shape:** Full pill (`rounded-full`, `9999px`).
- **Style:** Background `#F5EBDD` at 65% opacity with 1px border `#321D18/30`, text `#24130F`.
- **Hover / Focus:** Solid `#F5EBDD` background and solid `#321D18` border.

#### Ghost Button / Pill Tag
- **Shape:** Full pill (`rounded-full`, `9999px`).
- **Style:** Transparent background, 1px border `#321D18/30`, text `#321D18`, font `IBM Plex Mono` 11px uppercase.
- **Hover / Focus:** Inverts to background `#321D18` with text `#F5EBDD`.

### Navigation
- **Desktop Navbar:** Absolute floating header with script brand wordmark (left), uppercase mono links with animated bottom underlines (center), and pill social action (right).
- **Mobile Navbar:** Compact header with circular outline menu trigger; opens a blurred cream modal card (`bg-[#F5EBDD]/95 backdrop-blur-md rounded-2xl`).

### Circular Monogram Stamp
- **Style:** Continuous rotating circular badge (`70px - 90px`) featuring polar-spaced `IBM Plex Mono` lettering (`CAFÉ CRÈME • WARDHA • `).
- **Behavior:** Spins at 18s duration; accelerates smoothly to 2.8x speed on hover with an expanding center directional accent.

### Arched Review & Feature Card
- **Style:** Dark `#24130F` container with an expansive top architectural arch (`rounded-t-[180px]` desktop, `rounded-t-[140px]` mobile) and grounding base (`rounded-b-[20px]`), housing warm ivory typography and outlined pill CTAs.

### Podium Showcase Stage
- **Style:** Hand-calibrated 4-pedestal studio stage featuring photorealistic products, dual radial contact shadows, and bespoke SVG directional arrows pointing to active beverages.

## Do's and Don'ts

### Do:
- **Do** anchor every section with `#F5EBDD` cream backgrounds or `#24130F` dark cacao architectural panels.
- **Do** use `IBM Plex Mono` in uppercase with tracking `0.20em - 0.26em` for all section eyebrows and metadata.
- **Do** emphasize key editorial words in headlines with italic serif styling (`<em class="italic font-normal">...</em>`).
- **Do** use warm espresso tints (`rgba(50, 29, 24, x)`) for all drop shadows and blurred overlays.
- **Do** use full pill radius (`rounded-full`) for all buttons and chips.
- **Do** respect `prefers-reduced-motion` by reducing all GSAP and Lenis animations to instantaneous states.

### Don't:
- **Don't** use cold grays, sterile corporate blues, or pure blacks (`#000000`).
- **Don't** use sharp rectangular corners (`rounded-none` or `rounded-sm`) on interactive buttons.
- **Don't** use raw un-tracked lowercase text for category labels or tags.
- **Don't** add distracting neon badges, sticker overlays, or aggressive coupon banners.
- **Don't** use harsh generic drop shadows (`box-shadow: 0 10px 20px black`).

