(function(){
	let inputText = document.getElementById('chat-message');
	inputText.addEventListener("keyup" , (event)=>{
		event.preventDefault();
		if (event.keyCode === 13) {
			mainFunc();
		}
	})
})();

// Grabbing Elements
let messageDisplay = document.getElementById("showed-message");
let sendBtn = document.getElementById('send-message');

//sends message to chat display
sendBtn.addEventListener('click', mainFunc);

function mainFunc() {
	let input = document.getElementById('chat-message');
// check the input value to be a reall text
	if (input.value === "" || input.value === " ") {
		alert("please enter your message!");
		input.value = null;
	} else {
// send the message as li to display
		let li = document.createElement("li");
		let messageText = input.value;
		let liInnerText = document.createTextNode(messageText);
		li.appendChild(liInnerText);
		messageDisplay.appendChild(li);
		input.value = null;
	}

}