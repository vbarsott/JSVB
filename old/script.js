// Function to greet users
function greetings(){
	alert("Hello, I'm Gilfoyle. Click me to see me smile.");
}
// Function to ask user's name and change img
function makeSmile(){
	var userName = prompt("What's your name?", "name");
	if (userName) {
		document.getElementById("gilfoyle").src = "img/gilfoyle-smile.png";
		alert("Nice to meet you " + userName + ".");
	}
	else {
		alert("Don't want to give me your name? Never mind. I'll find out anyway...");
		document.getElementById("gilfoyle").src = "img/gilfoyle-devil.png";
	}
	setTimeout("document.getElementById('gilfoyle').src='img/gilfoyle.png';", 3000);
}
