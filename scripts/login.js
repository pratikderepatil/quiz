const loginButton = document.getElementById("login-button");
const loginForm = document.getElementById("login-form");
const users = JSON.parse(localStorage.getItem("users")) || [];
let auth = false;
loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	const email = loginForm.email.value;
	const password = loginForm.password.value;
	for (let i = 0; i < users.length; i++) {
		if (users[i].email === email && users[i].password === password) {
			auth = true;
			window.location.href = "./quiz.html";
			currentUser = users[i];
			localStorage.setItem("Current user", JSON.stringify(currentUser));
			break;
		}
	}
	if (!auth) {
		alert("Invalid credentials! Please try again");
	}
});
