const functions = {
    
    //Daily4 2019.10.15
    forPractice: (array1) => {
        for (var i=0; i < array1.length; i++) {
            array1[i] = array1[i] * 2;
        };
        return array1;
    },
    
    whilePractice: (array1) => {
        while (array1.length > 10) {
            array1.pop();
        };
        return array1;
    },

    dowhilePractice: (array1) => {
        do {
            array1.pop();
        }
        while (array1.length > 10);
        return array1;
    },

    forofPractice: (array1) => {
        var array2=[];
        for (var itm of array1) {
            var newitm = itm * 2;
            array2.push(newitm);
        };
        return array2;
    },

    forinPractice: (object1) => {
        var message = ""
        for (var key in object1) {
            var itm = `Your ${key} is ${object1[key]}`;
            message = `${message}${itm}, `
            console.log(message);
        };
        var finalMessage = message.substring(0, message.length-2);
        return finalMessage;
    },
    
    //Daily3 2019.10.11
    makeEmailObj: (object1) => {
        return `${object1.fname.toLowerCase()}.${object1.lname.toLowerCase()}@evolveu.ca`;
    },
    
    //Daily2 2019.10.09
    makeEmailArr: (array1) => {
        return `${array1[0].toLowerCase()}.${array1[1].toLowerCase()}@evolveu.ca`;
    },
    
    //Daily1 2019.10.07
    compare: (a, b) => {
        if (a === b) return true;
        console.log("the two values are not the same");
        console.log(`p1 --> ${a}`);
        console.log(`p2 --> ${b}`);
        return false;
    },
};

export default functions;