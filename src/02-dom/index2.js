import operations from './functions2.js';

leftSide.addEventListener("click", (event) => {
    if (event.toElement.id === "addAfter") {
        let currentCard = event.toElement.parentElement;
        operations.addAfter(currentCard, leftSide);    
    };
    if (event.toElement.id === "addBefore") {
        let currentCard = event.toElement.parentElement;
        operations.addBefore(currentCard, leftSide);    
    }
    if (event.toElement.id === "delete") {
        let currentCard = event.toElement.parentElement;
        operations.delete(currentCard, leftSide);
    }
    if (event.toElement.id === "addNew") {
        operations.addNew(leftSide);
    }
});