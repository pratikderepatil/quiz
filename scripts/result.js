const currentUser = JSON.parse(localStorage.getItem("Current user")) || {};

document.getElementById("name").innerText = "Hi, " + currentUser.fullname;
document.getElementById("email").innerText = "Email: " + currentUser.email;
const display = document.getElementById("display");
const skipped = document.createElement("p");
skipped.innerText = "Total Skipped: " + currentUser.skipped;
const Points = document.createElement("p");
Points.innerText = "Total Points: " + currentUser.totalPoint;
display.append(Points, skipped);
