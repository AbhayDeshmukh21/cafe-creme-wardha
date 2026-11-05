export interface SignatureProduct {
  id: 'dalgona' | 'kuka' | 'brownie' | 'redfizz';
  name: string;
  description: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  podiumSlot: 'left' | 'center-back' | 'center-front' | 'right';
  zIndex: number;
  /**
   * Exact calibrated coordinates inside the 1672x941 podium stage
   * so each product's physical base rests directly on its cylindrical pedestal top surface.
   */
  stagePlacement: {
    widthPct: number;
    leftPct: number;
    bottomPct: number;
    shadowLeftPct: number;
    shadowBottomPct: number;
    shadowWidthPct: number;
    shadowHeightPct: number;
  };
  /**
   * Callout label & curved arrow placement relative to the 1672x941 stage
   */
  calloutPlacement: {
    leftPct: number;
    topPct: number;
    align: 'left' | 'center' | 'right';
    arrowVariant: 'dalgona' | 'kuka' | 'brownie' | 'redfizz';
  };
}

export const BRAND_INFO = {
  name: 'Café Crème',
  location: 'Wardha, Maharashtra',
  tagline: "Lip Lickin' Happiness",
  heroEyebrow: "LIP LICKIN' HAPPINESS — EST. WARDHA",
  heroHeadingLines: ['A Little Sip', 'of Happiness.'],
  heroSubtext: 'Good coffee. Delicious cravings. Unforgettable moments.',
  circularText: 'CAFÉ CRÈME • WARDHA • ',
  address: 'Near Datta Meghe Medical College, Sawangi, Wardha, Maharashtra.',
  openingHours: '10:00 AM – 10:30 PM',
  openingDays: 'Open every day of the week.',
  instagramHandle: '@cafe_creme_wardha',
  instagramUrl: 'https://www.instagram.com/cafe_creme_wardha/',
  googleMapsUrl: 'https://maps.app.goo.gl/FNBa1CyoM4eT14H58',
  copyright: '© 2026 CAFÉ CRÈME WARDHA. ALL RIGHTS RESERVED.',
} as const;

export const ASSETS = {
  heroBg: '/assets/aistudio/Cafe_Cr_me_Cup_on_Textured_Rock__1__43900e4f.png',
  podiumEmptyBg: '/assets/aistudio/Minimal_Beige_Podium_Display_Scene_e08a526a.png',
  dalgonaPng: '/assets/aistudio/Layered_Whipped_Coffee_Dessert_in_Glass_Mug_15df6e0d.png',
  kukaPng: '/assets/aistudio/Decadent_Chocolate_Cookie_Milkshake_69f5be7b.png',
  browniePng: '/assets/aistudio/Decadent_Chocolate_Brownie_Sundae_20f4b2c8.png',
  redFizzPng: '/assets/aistudio/Vibrant_Fizzy_Lime_Soda_Pilsner_c1595d10.png',
} as const;

export const SIGNATURE_PRODUCTS: SignatureProduct[] = [
  {
    id: 'dalgona',
    name: 'Dalgona Crème',
    description: 'Velvety whipped coffee foam layered over chilled milk.',
    imageSrc: ASSETS.dalgonaPng,
    imageWidth: 1074,
    imageHeight: 1465,
    podiumSlot: 'left',
    zIndex: 20,
    // Calibrated so the glass base (maxY=1404/1465, 4.10% bottom transparent margin) rests directly on Left Podium top surface (y=720/941)
    stagePlacement: {
      widthPct: 22.2,
      leftPct: 14.3,
      bottomPct: 21.3,
      shadowLeftPct: 25.0,
      shadowBottomPct: 22.8,
      shadowWidthPct: 14.2,
      shadowHeightPct: 3.4,
    },
    calloutPlacement: {
      leftPct: 6.5,
      topPct: 21.0,
      align: 'center',
      arrowVariant: 'dalgona',
    },
  },
  {
    id: 'kuka',
    name: 'Kuka Royale',
    description: 'Our legendary thick crushed-chocolate blend with roasted cookie crunch.',
    imageSrc: ASSETS.kukaPng,
    imageWidth: 864,
    imageHeight: 1821,
    podiumSlot: 'center-back',
    zIndex: 15,
    // Calibrated so the tall glass base (maxY=1807/1821, 0.71% bottom margin) rests directly on Center-Back Tall Podium top surface (y=560/941)
    stagePlacement: {
      widthPct: 15.6,
      leftPct: 43.5,
      bottomPct: 40.0,
      shadowLeftPct: 51.3,
      shadowBottomPct: 40.1,
      shadowWidthPct: 12.0,
      shadowHeightPct: 2.8,
    },
    calloutPlacement: {
      leftPct: 30.5,
      topPct: 8.5,
      align: 'center',
      arrowVariant: 'kuka',
    },
  },
  {
    id: 'brownie',
    name: 'Sizzling Brownie',
    description: 'Warm fudge brownie sizzling in molten chocolate with vanilla ice cream.',
    imageSrc: ASSETS.browniePng,
    imageWidth: 1536,
    imageHeight: 1024,
    podiumSlot: 'center-front',
    zIndex: 30,
    // Calibrated so the cast-iron plate base (maxY=1022/1024) sits naturally centered on the Center-Front Low Podium top surface (y=916/941)
    stagePlacement: {
      widthPct: 32.5,
      leftPct: 32.5,
      bottomPct: 2.5,
      shadowLeftPct: 48.6,
      shadowBottomPct: 2.3,
      shadowWidthPct: 25.5,
      shadowHeightPct: 5.2,
    },
    calloutPlacement: {
      leftPct: 59.5,
      topPct: 45.0,
      align: 'center',
      arrowVariant: 'brownie',
    },
  },
  {
    id: 'redfizz',
    name: 'Red Fizz Lime Soda',
    description: 'Chilled sparkling lime soda with a crisp, refreshing berry fizz.',
    imageSrc: ASSETS.redFizzPng,
    imageWidth: 992,
    imageHeight: 1586,
    podiumSlot: 'right',
    zIndex: 20,
    // Calibrated so the pilsner glass base (maxY=1496/1586, 5.61% bottom transparent margin) rests directly on Right Podium top surface (y=760/941)
    stagePlacement: {
      widthPct: 24.7,
      leftPct: 68.5,
      bottomPct: 15.2,
      shadowLeftPct: 81.2,
      shadowBottomPct: 18.8,
      shadowWidthPct: 11.8,
      shadowHeightPct: 2.9,
    },
    calloutPlacement: {
      leftPct: 84.5,
      topPct: 13.0,
      align: 'center',
      arrowVariant: 'redfizz',
    },
  },
];

/**
 * Pure helper to manage independent active product selection for hover & mobile tap interactions.
 */
export function resolveActiveProduct(
  currentActiveId: SignatureProduct['id'] | null,
  triggeredId: SignatureProduct['id'],
  interactionType: 'hover-enter' | 'hover-leave' | 'tap'
): SignatureProduct['id'] | null {
  if (interactionType === 'hover-enter') {
    return triggeredId;
  }
  if (interactionType === 'hover-leave') {
    return currentActiveId === triggeredId ? null : currentActiveId;
  }
  // For mobile tap: tapping an inactive product selects it; tapping the already-active product toggles it off
  return currentActiveId === triggeredId ? null : triggeredId;
}
