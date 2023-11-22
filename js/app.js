const userNote = document.querySelector("textarea");
const submitButton = document.querySelector(".submit-button");
const errorMessage = document.querySelector(".error-message");
const notesContainer = document.querySelector(".notes-container");




const handleNotes = ()=> {
	if(userNote.value.trim() === "") {
		errorMessage.textContent = "Please enter a note";
		errorMessage.style.display = "block";
		return;
	}

	const colorArray = ["azure","burlywood","coral","hotpink","lavender", "indianred","peru", "gold", "yellow"];
	const randomColor = Math.floor(Math.random() * (9.9-0) + 0);
	const randomAngle = Math.floor(Math.random() * (10.9 - -10) + -10);

	const sticyDiv = document.createElement("div");
	sticyDiv.classList.add("sticky-div");
	sticyDiv.style.background = colorArray[randomColor];
	notesContainer.appendChild(sticyDiv);
	sticyDiv.style.transform = `rotate(${randomAngle}deg)`;
	sticyDiv.textContent = userNote.value;

	userNote.value = ""; 
}

// Disappear errormessage
userNote.addEventListener("input", ()=> {
	errorMessage.style.display = "none";
	if(userNote.textLength >= 200) {
		errorMessage.style.display = "block";
		errorMessage.textContent = "You have reached the max number of characters";
	}
})

submitButton.addEventListener("click", handleNotes)