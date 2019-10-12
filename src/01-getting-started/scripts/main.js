import functions from './functions.js';
import operations from './calculator.js';
import CanadaTax from './Tax.js';
import arrayWork from './arrays-objects.js';


// **********
//
// Add the event listeners
// 


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

//My Calculator
plus.addEventListener('click', operations.plusclick)
minus.addEventListener('click', operations.minusclick);
multiply.addEventListener('click', operations.multiplyclick);
divide.addEventListener('click', operations.divideclick);
equal.addEventListener('click', operations.equalclick);
clear.addEventListener('click', operations.clearclick);
input1.addEventListener("keyup", function(event){
    console.log(event.which)
	switch (event.which) {
        case (107): operations.plusup(); break;
        case (109): operations.minusup(); break;
        case (106): operations.multiplyup(); break;
        case (111): operations.divideup(); break;
        case (13): operations.equalclick(); break;
        case (27): operations.clearclick(); break;
	};
});
input2.addEventListener("keyup", function(event){
	switch (event.which) {
        case (13): operations.equalclick(); break;
        case (27): operations.clearclick(); break;
	};
});

//Canada Tax
input01.addEventListener("keyup", function(event) {
    var a01 = Number (input01.value);
    var finalArray = CanadaTax.function01(a01);
    input02.value = `- ${finalArray[0].toFixed(2)}$`;
    input03.value = `= ${finalArray[1].toFixed(2)}$`;
    input04.value = `x ${(finalArray[2]*100).toFixed(1)}%`;
    input05.value = `= ${finalArray[3].toFixed(2)}$`;
    input06.value = `+ ${finalArray[4].toFixed(2)}$`;
    input07.value = `= ${finalArray[5].toFixed(2)}$`;
    if (a01 !== 0) input08.value = `${(finalArray[6]*100).toFixed(2)}%`;
    if (a01 === 0) input08.value = "";
    })

//working with arrays
let myArray = []
Add.addEventListener('click', (() => {
    let newItem = Number(input001.value);
    let myArrayMessage = arrayWork.Addclick(myArray, newItem);
    myArray = myArrayMessage[0]
    message.textContent = myArrayMessage[1];
    input001.value = "";
    input001.focus();
   }));
Show.addEventListener('click', (() => {
    message.textContent = `Here is all items in the array: ${myArray}`;
    input001.value = "";
    input001.focus();
}));
Total.addEventListener('click', (() => {
    message.textContent = `The total of all numbers in the array is: ${myArray.reduce(arrayWork.Totalclick, 0)}`
    input001.value = "";
    input001.focus();
}));
Clear.addEventListener('click', (() => {
    myArray = []
    message.textContent = ""
    input001.value = "";
    input001.focus();
}))

//working with Dictionaries
let provinces = {
    ab: "Alberta",
    sk: "Saskatchewan",
    bc: "British Columbia",
    mb: "Manitoba",
    nl: "Newfoundland and Labrador",
    pe: "Prince Edward Island",
    ns: "Nova Scotia",
    nb: "New Brunswick",
    qc: "Quebec",
    on: "Ontario",
    yt: "Yukon",
    nt: "Northwest Territories",
    nu: "Nunavut",
};
Lookup.addEventListener("click", (() => {
    let pv = input0001.value.toLowerCase();
    message2.textContent = arrayWork.pvLookup(pv, provinces);
    input0001.focus();
    input0001.select();
}));
input0001.addEventListener("keyup", function(event){
    let pv = input0001.value.toLowerCase();
	switch (event.which) {
        case (13): message2.textContent = arrayWork.pvLookup(pv, provinces);
        input0001.focus();
        input0001.select();
        break;
    };
});