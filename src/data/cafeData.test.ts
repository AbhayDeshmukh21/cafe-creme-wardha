import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BRAND_INFO,
  SIGNATURE_PRODUCTS,
  resolveActiveProduct,
} from './cafeData';

test('Signature Collection contains exact four required Café Crème products in correct podium order', () => {
  assert.equal(SIGNATURE_PRODUCTS.length, 4);
  assert.deepEqual(
    SIGNATURE_PRODUCTS.map((p) => p.name),
    ['Dalgona Crème', 'Kuka Royale', 'Sizzling Brownie', 'Red Fizz Lime Soda']
  );
  assert.deepEqual(
    SIGNATURE_PRODUCTS.map((p) => p.podiumSlot),
    ['left', 'center-back', 'center-front', 'right']
  );
  assert.deepEqual(
    SIGNATURE_PRODUCTS.map((p) => p.description),
    [
      'Velvety whipped coffee foam layered over chilled milk.',
      'Our legendary thick crushed-chocolate blend with roasted cookie crunch.',
      'Warm fudge brownie sizzling in molten chocolate with vanilla ice cream.',
      'Chilled sparkling lime soda with a crisp, refreshing berry fizz.',
    ]
  );
});

test('Foreground/background layering places Sizzling Brownie in front and Kuka Royale in back', () => {
  const kuka = SIGNATURE_PRODUCTS.find((p) => p.id === 'kuka')!;
  const dalgona = SIGNATURE_PRODUCTS.find((p) => p.id === 'dalgona')!;
  const redfizz = SIGNATURE_PRODUCTS.find((p) => p.id === 'redfizz')!;
  const brownie = SIGNATURE_PRODUCTS.find((p) => p.id === 'brownie')!;

  assert.ok(brownie.zIndex > dalgona.zIndex, 'Front brownie must layer in front of side podiums');
  assert.ok(brownie.zIndex > kuka.zIndex, 'Front brownie must layer in front of back podium');
  assert.ok(dalgona.zIndex >= kuka.zIndex, 'Side podiums must layer at or above back podium');
  assert.ok(redfizz.zIndex >= kuka.zIndex, 'Right podium must layer at or above back podium');
});

test('Independent hover and tap state transitions affect only the targeted product', () => {
  let active = resolveActiveProduct(null, 'dalgona', 'hover-enter');
  assert.equal(active, 'dalgona');

  // Leaving a different product does not clear current active
  active = resolveActiveProduct(active, 'kuka', 'hover-leave');
  assert.equal(active, 'dalgona');

  // Leaving the active product clears it
  active = resolveActiveProduct(active, 'dalgona', 'hover-leave');
  assert.equal(active, null);

  // Mobile tap selects product, tapping another switches active product
  active = resolveActiveProduct(null, 'brownie', 'tap');
  assert.equal(active, 'brownie');
  active = resolveActiveProduct(active, 'redfizz', 'tap');
  assert.equal(active, 'redfizz');
  active = resolveActiveProduct(active, 'redfizz', 'tap');
  assert.equal(active, null);
});

test('Brand info matches exact address, opening hours, and external links', () => {
  assert.equal(
    BRAND_INFO.address,
    'Near Datta Meghe Medical College, Sawangi, Wardha, Maharashtra.'
  );
  assert.equal(BRAND_INFO.openingHours, '10:00 AM – 10:30 PM');
  assert.equal(BRAND_INFO.instagramHandle, '@cafe_creme_wardha');
  assert.equal(BRAND_INFO.instagramUrl, 'https://www.instagram.com/cafe_creme_wardha/');
  assert.equal(BRAND_INFO.googleMapsUrl, 'https://maps.app.goo.gl/FNBa1CyoM4eT14H58');
});
