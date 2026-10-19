const button = document.getElementById("toggle"); // The ID "toggle" had a missing e
const body = document.getElementById("bod"); // we use get element by id rather than queryselect

button.addEventListener("click", toggleTheme);

function toggleTheme () { // The function didn't have parentheses to place attributes/
    body.classList.toggle("dark");
}