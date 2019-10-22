const functions = {
    
    //Daily 2019.10.22

    loopStaff: (array1) => {
        const staffEmail = [];
        for (let itm of array1) {
            let newEmail = functions.makeEmailObj(itm)
            staffEmail.push(newEmail);
        }
        console.log(staffEmail);
        return staffEmail;
    },
    
    //Daily5 2019.10.17
    slicePractice: (array1) => {
        var array2 = array1.slice(0);
        var array3 = array1.slice(-1);
        var array4 = array1.slice(1, 3);
        return [array2, array3, array4];
    },

    splicePractice: (array1) => {
        array1.splice(3, 2, 11, 12, 13);
        return array1;
    },
    
    forEachPractice: (array1) => {
        array1.forEach( (itm, idx, arr) => arr[idx] = itm * 2 )
        return array1;
    },

    mapPractice: (array1) => {
        var array2 = array1.map( itm => itm * 2)
        return array2;
    },

    reducePractice: (array1) => {
        var a1 = array1.reduce( (acc, itm) => acc+itm , 0)
        var average = a1/array1.length
        return average;
    },

    filterPractice: (array1) => {
        var array2 = array1.filter( (itm, idx) => idx>0 && itm>20)
        return array2;
    },

    sortPractice: (array1) => {
        array1.sort((a, b) => a-b);
        return array1;
    },

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