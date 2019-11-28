import functions from './daily.js'

test('findABandBC and ageStat', () => {
    expect(functions.findABandBC(people, functions.ageStat).Number_of_People).toEqual(22);
    expect(functions.findABandBC(people, functions.ageStat).Total_Age).toEqual(838);
    expect(functions.findABandBC(people, functions.ageStat).Average_Age).toEqual(38.1);
})

test('findABandBC and fullName', () => {
    expect(functions.findABandBC(people, array1 => array1)[3].province).toEqual("AB");
    expect(functions.findABandBC(people, array1 => array1)[2].province).toEqual("BC");
    expect(functions.findABandBC(people, functions.fullName)[3]).toEqual("Carrie Ramirez")
    expect(functions.findABandBC(people, functions.fullName)[2]).toEqual("Byron Cardenas")
})

test('email builder for company map', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email builder for company for Each', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test ('email builder for company for/of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('slice', () => {
    let array1 = [0, 1, 2, 3, 4, 5];
    expect(functions.slicePractice(array1)[0][0]).toEqual(0);
    expect(functions.slicePractice(array1)[1][0]).toEqual(5);
    expect(functions.slicePractice(array1)[2][1]).toEqual(2);
});

test('slice String', () => {
    let string1 = "012345";
    expect(functions.slicePractice(string1)[0][0]).toEqual("0");
    expect(functions.slicePractice(string1)[1][0]).toEqual("5");
    expect(functions.slicePractice(string1)[2][1]).toEqual("2");
});

test('splice', () => {
    let array1 = [0, 1, 2, 3, 4, 5];
    expect(functions.splicePractice(array1)[6]).toEqual(5);
    expect(functions.splicePractice(array1)[5]).toEqual(13);
});

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

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];