import operations from './functions.js';

div1.addEventListener("click", function(event) {
    console.log(event);
});
add.addEventListener("click", operations.addClick);
show.addEventListener("click", operations.showClick);
addStart.addEventListener("click", operations.addStartClick);
remove.addEventListener("click", operations.removeClick);