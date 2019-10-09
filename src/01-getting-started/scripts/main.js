import functions from './functions.js';
import operations from './calculator.js';


// **********
//
// Add the event listeners
// 


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

plus.addEventListener('click', operations.plusclick)
minus.addEventListener('click', operations.minusclick);
multiply.addEventListener('click', operations.multiplyclick);
divide.addEventListener('click', operations.divideclick);
equal.addEventListener('click', operations.equalclick);
clear.addEventListener('click', operations.clearclick);
input1.addEventListener("keyup", function(event){
    console.log(event.which)
	switch (event.which) {
        // case (107): operations.plusup(); break;
        // case (109): operations.minusup(); break;
        case (106): operations.multiplyclick(); break;
        case (111): operations.divideclick(); break;
        case (13): operations.equalclick(); break;
	};
});
input2.addEventListener("keyup", function(event){
	switch (event.which) {
        case (13): operations.equalclick(); break;
	};
});