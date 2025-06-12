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