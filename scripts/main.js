var myImage = document.querySelector("img");


myImage.onclick = function() {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/minion.jpg") {
		myImage.setAttribute("src", "images/website-drawing-scan.png");
	} else {
			myImage.setAttribute("src", "images/minion.jpg");
		}
};



var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
	let myName = prompt("Please enter name.");
	if(!myName || myName === null){
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.innerHTML = "Minion is cool, "+ myName;
	  }
}

if(!localStorage.getItem("name")){
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.innerHTML = "Minion is cool, "+ storedName;
}

myButton.onclick = function() {
	setUserName();
};