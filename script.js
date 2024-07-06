let emailInput = document.getElementById("email");

let errorMessage = document.querySelector(".error");
console.log(errorMessage.innerHTML);

let submitButton = document.getElementById("submit");
let successMessage = document.querySelector(".success");
let successMessagePara = document.querySelector(".success p");

function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

submitButton.addEventListener("click", function (e) {
	if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
		e.preventDefault();
		errorMessage.classList.remove("hidden");
		emailInput.style.color = "#ff6155";
		emailInput.style.border = "1px solid #ff6155";
		emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.15)";
		console.log("Error!");
	} else {
		e.preventDefault();
		successMessage.classList.remove("hidden");
		successMessagePara.innerHTML = `A confirmation email has been sent to <b>${emailInput.value}</b>. Please open it and click the button inside to confirm your subscription`;
	}
});

let dismissMessageButton = document.querySelector(".dismiss");

dismissMessageButton.addEventListener("click", function () {
	emailInput.value = "";
	successMessage.classList.add("hidden");
});
