const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginButton = document.querySelector(".login-button");
const registerButton = document.querySelector(".register-button");

// Add event listeners to switch between login and register forms
loginButton.addEventListener("click", () => {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

registerButton.addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});

// You can add more JavaScript for form submission and validation as needed.
