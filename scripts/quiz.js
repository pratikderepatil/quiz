import { quiz } from "../data/quiz.js";

const currentUser = JSON.parse(localStorage.getItem("Current user"));

document.getElementById("logout").addEventListener("click", () => {
	localStorage.setItem("auth", false);
	localStorage.setItem("Current user", "");
	window.location.href = "./index.html";
});

let currentQuestion = 0;
document.getElementById("name").innerText = "Hi, " + currentUser.fullname;
const nextButton = document.getElementById("next-button");
const skipButton = document.getElementById("skip-button");
const question = document.getElementById("question");
const options = document.getElementById("options");

const displayQuestion = () => {
	question.innerText = quiz[currentQuestion].question;
	options.innerHTML = "";
	if (quiz[currentQuestion].type === "radio") {
		for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
			const displayOption = document.createElement("div");
			displayOption.className = "option";
			const option = document.createElement("input");
			const optionValue = document.createElement("p");
			option.type = "radio";
			option.name = currentQuestion;
			option.value = quiz[currentQuestion].options[i];
			optionValue.innerText = quiz[currentQuestion].options[i];
			displayOption.append(option, optionValue);
			options.append(displayOption);
		}
	} else {
		for (let i = 0; i < quiz[currentQuestion].options.length; i++) {
			const displayOption = document.createElement("div");
			displayOption.className = "option";
			const option = document.createElement("input");
			const optionValue = document.createElement("p");
			option.type = "checkbox";
			option.name = currentQuestion;
			option.value = quiz[currentQuestion].options[i];
			optionValue.innerText = quiz[currentQuestion].options[i];
			displayOption.append(option, optionValue);
			options.append(displayOption);
		}
	}
};

document.getElementById("next-button").addEventListener("click", () => {
	
	currentQuestion++;
	displayQuestion();
});
document.getElementById("skip-button").addEventListener("click", () => {
	currentQuestion++;
	displayQuestion();
});

displayQuestion();
