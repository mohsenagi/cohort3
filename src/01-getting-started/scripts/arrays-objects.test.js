import arrayWork from './arrays-objects.js';

test('Check the Addclick', () => {
    expect(arrayWork.Addclick([12, 25], 122)[0][2]).toBe(122);
    expect(arrayWork.Addclick([12, 25, 12], 122)[0][1]).toBe(25);
    expect(arrayWork.Addclick([12, 25], 122)[1]).toBe("the new input is added to the array");
    expect(arrayWork.Addclick([12, 25], "a")[1]).toBe("the input is not a valid number");
});

test('Check the Totalclick', () => {
    expect([1, 2, 3, 4].reduce(arrayWork.Totalclick, 0)).toBe(10);
    expect([1, 2, 3, -10].reduce(arrayWork.Totalclick, 0)).toBe(-4);
});

test('Check the pvLookup', () => {
    let testObject = {
        11: "a",
        12: "b",
        13: "c",
        d: 14,
        e: 15,
        f: 16,
    };
    expect(arrayWork.pvLookup(11, testObject)).toBe("a");
    expect(arrayWork.pvLookup("d", testObject)).toBe(14);
    expect(arrayWork.pvLookup(14, testObject)).toBe("Could not find your province");
});