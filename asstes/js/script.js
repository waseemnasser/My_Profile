let isDarkMode = false
let modeContainer = document.querySelector(".mode_container")
let sunIcon = document.querySelector(".sun")
let moonIcon = document.querySelector(".moon")
const leftChild = document.querySelector(".myProfile_left");
const fontElements = leftChild.querySelectorAll(".describe, .skills, .social a");

function Mode() {
    if (isDarkMode) {
        modeContainer.style.backgroundColor = "#f1f5f9"
        sunIcon.style.display = "none"
        moonIcon.style.display = "block"
        fontElements.forEach(el => el.style.color = "black");
    }
    else {
        modeContainer.style.backgroundColor = "#1e293b"
        moonIcon.style.display = "none"
        sunIcon.style.display = "block"
        fontElements.forEach(el => el.style.color = "white");
    }
    isDarkMode = !isDarkMode
}
