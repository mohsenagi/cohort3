const functions = {
    
    makeEmailObj: (object1) => {
        return `${object1.fname.toLowerCase()}.${object1.lname.toLowerCase()}@evolveu.ca`;
    },
    compare: (a, b) => {
        if (a === b) return true;
        console.log("the two values are not the same");
        console.log(`p1 --> ${a}`);
        console.log(`p2 --> ${b}`);
        return false;
    },
    makeEmailArr: (array1) => {
        return `${array1[0].toLowerCase()}.${array1[1].toLowerCase()}@evolveu.ca`;
    },
};

export default functions;