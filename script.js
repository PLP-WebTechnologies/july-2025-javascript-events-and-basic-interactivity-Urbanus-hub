// Light/Dark mode toggle
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let count = 0;
const counterBtn = document.getElementById("counter-btn");
const countSpan = document.getElementById("count");
counterBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faq = btn.parentElement;
    faq.classList.toggle("open");
  });
});

// Form validation
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

function validateName(name) {
  return name.trim().length >= 2;
}
function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
function validatePassword(password) {
  return password.length >= 6;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  if (!validateName(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 characters.";
    valid = false;
  }
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }
  if (valid) {
    formSuccess.textContent = "Sign up successful!";
    form.reset();
  }
});

// Real-time validation
nameInput.addEventListener("input", () => {
  nameError.textContent = validateName(nameInput.value)
    ? ""
    : "Name must be at least 2 characters.";
});
emailInput.addEventListener("input", () => {
  emailError.textContent = validateEmail(emailInput.value)
    ? ""
    : "Enter a valid email address.";
});
passwordInput.addEventListener("input", () => {
  passwordError.textContent = validatePassword(passwordInput.value)
    ? ""
    : "Password must be at least 6 characters.";
});
