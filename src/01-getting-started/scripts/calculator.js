
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
    
    equalclick () {
        if (input1.value != "" && input1.value != "" &&
            operation.textContent != "operation sign will be here") {
            switch(operation.textContent) {
                case("+"): result.textContent = operations.plus(Number(input1.value), Number(input2.value)); break;
                case("-"): result.textContent = operations.minus(Number(input1.value), Number(input2.value)); break;
                case("x"): result.textContent = operations.multiply(Number(input1.value), Number(input2.value)); break;
                case("/"): result.textContent = operations.divide(Number(input1.value), Number(input2.value)); break;
            };
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