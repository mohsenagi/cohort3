import compare from './daily.js'

test ('does compare work?', () => {
    expect(compare(1, 2)).toBe(false);
    expect(compare(10, 10)).toBe(true);
    expect(compare(-1, -1)).toBe(true);
});
test ("test the test", () => {
    console.log("Hello World");
});