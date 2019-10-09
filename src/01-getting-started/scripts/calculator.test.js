import operations from './calculator.js';

test('Check the plus', () => {
    expect(operations.plus(10, -5)).toBe(5);
    expect(operations.plus(-8.5, -2.2)).toBe(-10.7);
});

test('Check the minus', () => {
    expect(operations.minus(10, -5)).toBe(15);
    expect(operations.minus(-8.5, -2.2)).toBe(-6.3);
});

test('Check the divide', () => {
    expect(operations.divide(10, -5)).toBe(-2);
    expect(operations.divide(1, 3)).toBe(0.3333333333333333);
});

test('Check the multiply', () => {
    expect(operations.multiply(10, -5)).toBe(-50);
    expect(operations.multiply(0.3333333333333333, 10000000000000000)).toBe(3333333333333333);
});