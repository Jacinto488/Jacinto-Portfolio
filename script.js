//This script animates the typing effect for the main page heading
// It types out the text character by character with a specified speed.
const speed = 100; // Speed of the animation in milliseconds
const element = document.getElementById("main-page-heading"); // Get the heading element
const text = element.innerHTML; // Get the text content of the heading
let i = 0; // Initialize index for the text content
element.innerHTML = ""; // Clear the heading content to start the animation

function typeWriter() {
    if (i < text.length) {
        document.getElementById("main-page-heading").innerHTML += text.charAt(i); // Append the next character
        i++;
        setTimeout(typeWriter, speed); // Call the function again after the specified speed
    }
};

window.onload = typeWriter;

//Theme switching functionality
let lightmode = localStorage.getItem("lightmode"); // Check if dark mode is enabled in local storage
const themeSwitch = document.getElementById("theme-switch"); // Get the theme switch button

const enableLightMode = () => {
    document.body.classList.add("lightmode"); // Add light mode class to body
    localStorage.setItem("lightmode", "active"); // Store the state in local storage
    lightmode = "active"; // Update the variable
};

const disableLightMode = () => {
    document.body.classList.remove("lightmode"); // Remove light mode class from body
    localStorage.setItem("lightmode", null); // Clear the state in local storage
    lightmode = null; // Update the variable
};

if(lightmode === 'active') {
    enableLightMode(); // Enable light mode if it was previously set
}

themeSwitch.addEventListener("click", () => {
    if (lightmode !== 'active') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});