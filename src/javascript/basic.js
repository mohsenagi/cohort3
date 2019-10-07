function size(firstnumber) {
	if (firstnumber<10) {
		var message = "small"
	}	else if (firstnumber>=10 && firstnumber<=19) {
			var message = "med"
		}	else if (firstnumber>19) {
				var message = "large"
			} else {
				var message = "input a number"
			}
	return message
}

function size2(firstnumber) {
	var message;
	switch(true) {
		case(firstnumber<10): message = "small"; break;
		case(firstnumber<=19): message = "med"; break;
		case(firstnumber>19): message = "large"; break;
		default: message = "input a number";
	}
	return message;		
}

function onButtonClicked() {
	if (input.value.length>0) {
		var a = parseInt(input.value);
		var finalmessage = size2(a)
		paragraph.textContent = finalmessage
		input.value = ""
	}
}

function changeHeading () {
	heading.textContent = "Hello Canada"
}

function changeHeading2 () {
	heading.textContent = "Hello World"
}


var button = document.getElementById("button1")
var input = document.getElementById("text1")
var heading = document.getElementById("head1")
var paragraph = document.getElementById("p1")

button.addEventListener("click", onButtonClicked)
input.addEventListener("keypress", function(event){
	if (event.which === 13) {
		onButtonClicked()
	}
})

heading.addEventListener("mouseover", changeHeading)
heading.addEventListener("mouseleave", changeHeading2)