
let cardCount = 2;


const operations = {
    addAfter: (currentCard, leftSide) => {
        let newCard = currentCard.cloneNode(true);
        let newCardNumber = Number(cardCount+1);
        cardCount = cardCount + 1;
        let newCardHeader = `Card ${newCardNumber}`;
        newCard.children[0].textContent = newCardHeader;
        if (currentCard.nextSibling) {
            leftSide.insertBefore(newCard, currentCard.nextSibling);
        } else {
            leftSide.appendChild(newCard);
        }
    },
    addBefore: (currentCard, leftSide) => {
        let newCard = currentCard.cloneNode(true);
        let newCardNumber = Number(leftSide.children.length-1);
        let newCardHeader = `Card ${newCardNumber}`;
        newCard.children[0].textContent = newCardHeader
        leftSide.insertBefore(newCard, currentCard);
    },
    delete: (currentCard, leftSide) => {
        leftSide.removeChild(currentCard);
    },
    addNew: (leftSide) => {
        let newCard = document.createElement("div");
        newCard.id ="cards";
        let newCardNumber = Number(leftSide.children.length-1);
        let newCardHeader = document.createElement("h2");
        newCardHeader.id="cardHeader";
        newCardHeader.textContent = `Card ${newCardNumber}`;
        let newAddBefore = document.createElement("button");
        newAddBefore.id="addBefore";
        newAddBefore.textContent = `Add Before`;
        let newAddAfter = document.createElement("button");
        newAddAfter.id="addAfter";
        newAddAfter.textContent = `Add After`;
        let newDelete = document.createElement("button");
        newDelete.id="delete";
        newDelete.textContent = `Delete`;
        newCard.appendChild(newCardHeader);
        newCard.appendChild(newAddBefore);
        newCard.appendChild(newAddAfter);
        newCard.appendChild(newDelete);
        leftSide.appendChild(newCard);
    },
};

export default operations;