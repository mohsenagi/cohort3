import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does that divide function work?', () => {
    expect(functions.divide(-25,2)).toBe(-12.5);
    expect(functions.divide(100,5)).toBe(20);
});

test('Does that multiply function work?', () => {
    expect(functions.multiply(7,2)).toBe(14);
    expect(functions.multiply(-5,-6)).toBe(30);
});