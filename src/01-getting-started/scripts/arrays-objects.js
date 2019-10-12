const arrayWork = {
    
    Addclick(myArray, newItem){
        if (newItem>0 || newItem<0) {
            myArray.push(newItem);
            var message1 = "the new input is added to the array";
        } else {
            var message1 = "the input is not a valid number";
        }
    return([myArray, message1]);
    },
    Totalclick(acc, itm, idx, arr) {
        return acc + itm
    },
    pvLookup(pv, provinces) {
        for (var key in provinces) {
            if (key == pv) return provinces[key];
        };
        return "Could not find your province";
    },
};
export default arrayWork;