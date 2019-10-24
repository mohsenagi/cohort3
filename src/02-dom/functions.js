
const operations = {
    
    addClick: (varOrderedList) => {
        let itm = document.createElement("li");
        let txt = document.createTextNode(`Item${varOrderedList.children.length+1}`);
        itm.appendChild(txt);
        varOrderedList.appendChild(itm);
    },
    showClick: (varOrderedListChildren) => {
        let finalArray = [];
        for (var itm of varOrderedListChildren) {
            finalArray.push(itm.textContent);
        };
        return finalArray;
    },
    addStartClick: (varOrderedList) => {
        let itm2 = document.createElement("li");
        let txt2 = document.createTextNode(`Item${varOrderedList.children.length+1}`);
        itm2.appendChild(txt2);
        varOrderedList.insertBefore(itm2, (varOrderedList.children[0]));
    },
    removeClick: (varOrderedList) =>{
        if (varOrderedList.children.length > 0)
        varOrderedList.removeChild(varOrderedList.children[varOrderedList.children.length-1]);
    },
};

export default operations;