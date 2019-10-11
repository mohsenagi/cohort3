import functions from './functions.js';
import operations from './calculator.js';
import CanadaTax from './Tax.js';


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
    if (a01 !== 0) {
        input08.value = `${(finalArray[6]*100).toFixed(2)}%`;
    } else {
        input08.value = ""
    }
})