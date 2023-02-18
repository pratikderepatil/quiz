const signupButton = document.getElementById("signup-button");
const signupForm = document.getElementById("signup-form");
const users = JSON.parse(localStorage.getItem("users")) || [];
const auth = false;
signupButton.addEventListener("click", (e) => {
	e.preventDefault();
	const name = signupForm.name.value;
	const email = signupForm.email.value;
	const password = signupForm.password.value;
	let exists = false;
	for (let i = 0; i < users.length; i++) {
		if (users[i].email === email) {
			alert("Email already exists");
			exists = true;
			break;
		}
	}
	if (!exists) {
		users.push({ fullname: name, email: email, password: password });
		localStorage.setItem("users", JSON.stringify(users));
		alert("User Added successfully");
		window.location.href = "./login.html";
	}
});
