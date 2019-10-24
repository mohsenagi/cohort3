import operations from './functions.js';

div1.addEventListener("click", function(event) {
    console.log(event);
});
add.addEventListener("click", () => {
    operations.addClick(orderedList);
});
show.addEventListener("click", () => {
    let finalArray = operations.showClick(orderedList.children);
    alert(finalArray)
});
addStart.addEventListener("click", () => {
    operations.addStartClick(orderedList);
});
remove.addEventListener("click", () => {
    operations.removeClick(orderedList);
});