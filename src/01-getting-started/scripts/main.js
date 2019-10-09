import functions from './functions.js';
import operations from './calculator.js';


// **********
//
// Add the event listeners
// 


idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

plus.addEventListener('click', () => operation.textContent = "+");
minus.addEventListener('click', () => operation.textContent = "-");
multiply.addEventListener('click', () => operation.textContent = "x");
divide.addEventListener('click', () => operation.textContent = "/");
equal.addEventListener('click', operations.equalclick);
clear.addEventListener('click', operations.clearclick);