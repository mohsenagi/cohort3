import functions from './daily.js'

test('forEach', () => {
    let array1 = [21, 22, 23];
    expect(functions.forEachPractice(array1)[0])
        .toEqual(42);
});

test('map', () => {
    let array1 = [21, 22, 23];
    expect(functions.mapPractice(array1)[0])
        .toEqual(42);
});

test('reduce', () => {
    let array1 = [20, 20, 21, 22, 22];
    expect(functions.reducePractice(array1))
        .toEqual(21);
});

test('filter', () => {
    let array1 = [30, 20, 21, 22, 23];
    expect(functions.filterPractice(array1)[0])
        .toEqual(21);
});

test('filter', () => {
    let array1 = [5,21,4,5,78,5,36,5,21,4,5,8,412,54,8,63,25];
    expect(functions.sortPractice(array1)[0]).toEqual(4);
    expect(functions.sortPractice(array1)[10]).toEqual(21);
    expect(functions.sortPractice(array1)[15]).toEqual(78);
});

test('for', () => {
    let array1 = [21, 22, 23];
    expect(functions.forPractice(array1)[0])
        .toEqual(42);
});

test('while', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    expect(functions.whilePractice(array1).length)
        .toEqual(10);
    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(functions.whilePractice(array2).length)
        .toEqual(10);
});

test('dowhile', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    expect(functions.dowhilePractice(array1).length)
        .toEqual(10);
    let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(functions.dowhilePractice(array2).length)
        .toEqual(9);
});

test('for of', () => {
    let array1 = [21, 22, 23];
    expect(functions.forofPractice(array1)[0])
        .toEqual(42);
});

test('for in', () => {
    let object1 = {
        FirstName: "Mohsen",
        LastName: "Aghajani",
        Age : 37,
    };
    expect(functions.forinPractice(object1))
        .toEqual("Your FirstName is Mohsen, Your LastName is Aghajani, Your Age is 37");
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

test ('does compare work?', () => {
    expect(functions.compare(1, 2)).toBe(false);
    expect(functions.compare(10, 10)).toBe(true);
    expect(functions.compare(-1, -1)).toBe(true);
});