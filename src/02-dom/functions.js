
const operations = {
    
    addClick: () => {
        let itm = document.createElement("li");
        let txt = document.createTextNode(`Item${orderedList.children.length+1}`);
        itm.appendChild(txt);
        orderedList.appendChild(itm);
    },
    showClick: () => {
        let finalArray = [];
        for (var itm of orderedList.children) {
            finalArray.push(itm.textContent);
        }
        alert(finalArray)
    },
    addStartClick: () =>{
        let itm2 = document.createElement("li");
        let txt2 = document.createTextNode(`Item${orderedList.children.length+1}`);
        itm2.appendChild(txt2);
        orderedList.insertBefore(itm2, (orderedList.children[0]));
    },
    removeClick: () =>{
        if (orderedList.children.length > 0)
        orderedList.removeChild(orderedList.children[orderedList.children.length-1]);
    },
};

export default operations;