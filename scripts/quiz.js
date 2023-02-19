import { quiz } from "../data/quiz.js";

const currentUser = JSON.parse(localStorage.getItem("Current user"));

document.getElementById("logout").addEventListener("click", () => {
	localStorage.setItem("auth", false);
	localStorage.setItem("Current user", "");
	window.location.href = "./index.html";
});

let currentQuestion = 0;
let currentAnswer = "";
let point = 0;
let totalPoint = 0;
let skipped = 0;

document.getElementById("name").innerText = "Hi, " + currentUser.fullname;

const question = document.getElementById("question");
const options = document.getElementById("options");

const displayQuestion = () => {
	question.innerText =
		currentQuestion + 1 + ".  " + quiz[currentQuestion].question;
	options.innerHTML = "";
	point = 0;
	currentAnswer = "";
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
		option.addEventListener("change", () => {
			currentAnswer = option.value;
		});
	}
};

const checkAnswer = () => {
	if (quiz[currentQuestion].correct_answer === currentAnswer) {
		point = 1;
		totalPoint++;
	} else {
		point = 0;
	}
};

const saveAnswer = () => {
	currentUser.attempts.push({
		...quiz[currentQuestion],
		userAnswer: currentAnswer,
		point: point,
	});
	localStorage.setItem("Current user", JSON.stringify(currentUser));
};

document.getElementById("next-button").addEventListener("click", () => {
	if (currentQuestion === quiz.length - 1) {
		currentUser.totalPoint = totalPoint;
		currentUser.skipped = skipped;
		localStorage.setItem("Current user", JSON.stringify(currentUser));
		window.location.href = "./result.html";
	} else {
		checkAnswer();
		saveAnswer();
		currentQuestion++;
		displayQuestion();
	}
});
document.getElementById("skip-button").addEventListener("click", () => {
	if (currentQuestion === quiz.length) {
		currentUser.totalPoint = totalPoint;
		currentUser.skipped = skipped;
		localStorage.setItem("Current user", JSON.stringify(currentUser));
		window.location.href = "./result.html";
	} else {
		saveAnswer();
		skipped++;
		currentQuestion++;
		displayQuestion();
	}
});

displayQuestion();
