// BASIC OF ARRAY
var array1 = [1, 2, 3, 4, "Hi", true, ["a", "b", "c"]];
var array2 = [21, 22, 23];
console.log(array1[0]);
console.log(array1[6][0]);
console.log(array1[-1]) //unlike python, this does not work
console.log(array1.shift(), array1.pop());
console.log(array1);
array1.push(10, 11, 12);
console.log(array1);
array1.concat(array2)
console.log(array1); //this does not change the array1
array3 = array1.concat(array2); //concat should be used in this way
console.log(array3);
array3.sort()
console.log(array3);
array1.includes("Hi") //ES7

// LOOPS ON AN ARRAY (for, forEach, map, filter, reduce, for/of)
var array1 = [21, 22, 23];
for (i=0; i < array1.length; i++) {
    array1[i] = array1[i] * 2
}
array1

var array1 = [21, 22, 23];
array1.forEach(function2)
function function2 (itm, idx, arr) {
    arr[idx] = itm * 2
}
array1

var array1 = [21, 22, 23];
array1.forEach( (itm, idx, arr) => arr[idx] = itm * 2 ) //this is a anonymous function
array1

var array1 = [21, 22, 23];
var array2 = array1.map(function2)
function function2 (itm, idx, arr) {
    return itm *2;
}
array2

var array1 = [21, 22, 23];
var array1 = array1.map( itm => itm * 2)
array1

var array1 = [20, 20, 21, 22, 23];
var array2 = array1.filter(function2)
function function2 (itm, idx, arr) {
    return idx > 0 && itm > 20;
}
array2

var array1 = [20, 20, 21, 22, 23];
var array2 = array1.filter( (itm, idx) => idx>0 && itm>20)
array2

var array1 = [20, 20, 21, 22, 23];
var a1 = array1.reduce(function2, 0)
function function2(acc, itm, idx, arr) {
    return acc + itm
}
var average = a1/array1.length
average

var array1 = [20, 20, 21, 22, 23];
var a1 = array1.reduce( (acc, itm) => acc+itm , 0)
var average = a1/array1.length
average

var array1 = [20, 20, 21, 22, 23]; // for/of works on iteratables like arrays
for (itm of array1) {
    console.log(itm)
};

// WHILE LOOP
var a = prompt("think about two numbers, input the smaller here")
var b = prompt("input the larger here")
while (a >= b) {
    var a = prompt("IDIOT! think about two numbers, input the smaller here")
    var b = prompt("input the larger here")
}
alert("GOOD JOB")



// BASIC OF OBJECT
var object1 = {
    name: "a",
    last_name: "b",
    married: false,
    age: 35,
}
console.log(object1.name)
console.log(object1.last_name)
object1.fav_food = "burger"
console.log(object1)
object1.birthdate = function gotOlder() {
    object1.age = object1.age + 1;
}
console.log(object1)
var object2 = Object.assign({}, object1) //this will clone (SHALLOW CLONE) object1 to object2
var object4 = JSON.parse(JSON.stringify(object1)) //this is DEEP CLONE, try to avoid
var object3 = object1 // pass by reference, any change to one affects the other
object1.birthdate() //a function inside an object is called METHOD
console.log(object1)
console.log(object2)
console.log(object3)

Object.keys(object1).forEach(function5) //Object.keys turns an object to sth like array
function function5(key, idx) {
    console.log(idx, key, object1[key])
}

for (key in object1) {
    console.log(key, object1[key])
}

Object.values(object1).forEach(function6) //Object.values returns only the items (values)
function function6 (itm) {
    console.log(itm)
}
Object.entries(object1).forEach(function7) //Object.entries put each key (property) and its item (value) in an array
function function7 (entry) {
    console.log(entry)
    console.log(entry[0])
    console.log(entry[1])
}

// BASICS OF CLASS
class Vehichle {
    constructor (make, model, year, trim) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
    }
    present() {
        return `This car is a ${this.year} ${this.make} ${this.model} ${this.trim}`
    }
    rebuild() {
        this.status = "rebuilt"
    }
}
class SuperSport extends Vehichle{
    constructor (make, model, year, trim) {
        super (make, model, year, trim)
        this.supersport = true
    }
    present() {
        return `This car is a supersport ${this.year} ${this.make} ${this.model} ${this.trim}`
    }
}
const car1 = new Vehichle ("Ford", "Focus", "2019", "SEL")
const car2 = new Vehichle ("Lincoln", "Navigator", "2019", "Limited")
console.log(car1.present())
console.log(car2.present())
car1.rebuild()
console.log(car1)
const car3 = new SuperSport ("Chevy", "Corvette", "2019", "ZR1")
console.log(car3.present())
car3.rebuild()
console.log(car3)