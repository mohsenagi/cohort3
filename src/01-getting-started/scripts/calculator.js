
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
    
    plusclick(operation1){
        if (Number(input1.value)>0 || Number(input1.value<0)) {
            operation1.textContent = "+";
            input2.focus();
            input2.select();
        }
    },
    minusclick(){
        if (Number(input1.value)>0 || Number(input1.value<0)) {
            operation.textContent = "-";
            input2.focus();
            input2.select();
        }
    },
    multiplyclick(){
        if (Number(input1.value)>0 || Number(input1.value<0)) {
            operation.textContent = "x";
            input2.focus();
            input2.select();
        }
    },
    divideclick(){
        if (Number(input1.value)>0 || Number(input1.value<0)) {
            operation.textContent = "/";
            input2.focus();
            input2.select();
        }
    },
    plusup() {
        let inputString = input1.value
        let inputLength = inputString.length
        if (inputLength > 1) {
            let inputLastLast = inputString[inputLength-2]
            if (inputLastLast != "e"){
                input1.value = inputString.substring(0, inputLength-1)
                operations.plusclick()
            }
        }
    },
    minusup() {
        let inputString = input1.value
        let inputLength = inputString.length
        if (inputLength > 1) {
            let inputLastLast = inputString[inputLength-2]
            if (inputLastLast != "e"){
                input1.value = inputString.substring(0, inputLength-1)
                operations.minusclick()
            }
        }
    },
    multiplyup() {
        let inputString = input1.value
        let inputLength = inputString.length
        input1.value = inputString.substring(0, inputLength-1)
        operations.multiplyclick()
    },
    divideup() {
        let inputString = input1.value
        let inputLength = inputString.length
        input1.value = inputString.substring(0, inputLength-1)
        operations.divideclick()
    },
    equalclick () {
        if ((Number(input1.value)>0 || Number(input1.value<0)) &&
            (Number(input2.value)>0 || Number(input2.value<0)) &&
            operation.textContent != "") {
            switch(operation.textContent) {
                case("+"): result.textContent = operations.plus(Number(input1.value), Number(input2.value)); break;
                case("-"): result.textContent = operations.minus(Number(input1.value), Number(input2.value)); break;
                case("x"): result.textContent = operations.multiply(Number(input1.value), Number(input2.value)); break;
                case("/"): result.textContent = operations.divide(Number(input1.value), Number(input2.value)); break;
            };
        input1.focus();
        input1.select();
        }
    },
    clearclick() {
        input1.value = null;
        input2.value = null;
        operation.textContent = "";
        result.textContent = "result";
        input1.focus()
    },
};

export default operations;