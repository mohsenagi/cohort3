import CanadaTax from './Tax.js';

test('Check the Tax', () => {
    expect(CanadaTax.function01(1)[5]).toBe(0.15);
    expect(CanadaTax.function01(2)[5]).toBe(0.3);
    expect(CanadaTax.function01(50000)[5]).toBe(7630.85);
    expect(CanadaTax.function01(100000)[5]).toBe(18140.66);
    expect(CanadaTax.function01(150000)[5]).toBe(31211.57);
    expect(CanadaTax.function01(250000)[5]).toBe(61796.57);
});