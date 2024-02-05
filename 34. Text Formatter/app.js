// Get the HTML elements
let enterValue = document.getElementById("strvalue");
let groundTip = document.getElementById("ground");
let littleTip = document.getElementById("little");
let firstGr = document.getElementById("firstGr");
let boldItem = document.getElementById("blod");
let slashItem = document.getElementById("slash");
let newValue = document.querySelector(".countresule");

// Add event listeners to buttons
groundTip.addEventListener("click", function() {
    newValue.textContent = enterValue.value.toLowerCase();
});

littleTip.addEventListener("click", function() {
    newValue.textContent = enterValue.value.toUpperCase();
});

firstGr.addEventListener("click", function() {
    newValue.textContent = capitalizeFirstLetter(enterValue.value);
});

boldItem.addEventListener("click", function() {
    newValue.innerHTML = `<strong>${enterValue.value}</strong>`;
});

slashItem.addEventListener("click", function() {
    newValue.textContent = reverseString(enterValue.value);
});

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
