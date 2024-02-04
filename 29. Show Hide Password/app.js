//password
const password = document.querySelector(".password");
//eye-container
const eyeContainer = document.querySelector(".eye-container");

eyeContainer.addEventListener("click", () => {
   password.type === "password" ? (password.type === "text") : (password.type === "password");
});
