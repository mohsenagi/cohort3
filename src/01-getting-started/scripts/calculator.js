
const operations = {
    
    plus: (num1, num2) => {
        return num1 + num2;
    },
    minus: (num1, num2) => {
        return num1 - num2;
    },
    divide: (num1, num2) => {
        return num1 / num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2;
    },
    
    plusclick(){
        operation.textContent = "+";
        input2.focus();
    },
    minusclick(){
        operation.textContent = "-";
        input2.focus();
    },
    multiplyclick(){
        operation.textContent = "x";
        input2.focus();
    },
    divideclick(){
        operation.textContent = "/";
        input2.focus();
    },
    equalclick () {
        if (input1.value != "" && input1.value != "" &&
            operation.textContent != "operation sign will be here") {
            switch(operation.textContent) {
                case("+"): result.textContent = operations.plus(Number(input1.value), Number(input2.value)); break;
                case("-"): result.textContent = operations.minus(Number(input1.value), Number(input2.value)); break;
                case("x"): result.textContent = operations.multiply(Number(input1.value), Number(input2.value)); break;
                case("/"): result.textContent = operations.divide(Number(input1.value), Number(input2.value)); break;
            };
        equal.focus()
        } else {
            operations.clearclick()
        };        
    },
    clearclick() {
        input1.value = null;
        input2.value = null;
        operation.textContent = "operation sign will be here";
        result.textContent = "result will be here";
    },
};

export default operations;