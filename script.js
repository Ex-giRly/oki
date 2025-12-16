const numberEl = document.getElementById("number");
const toggleBtn = document.getElementById("toggleBtn");

let clickCount = 0;
let rollingInterval;

// Function to generate random number (1–100)
function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    numberEl.textContent = randomNum;
}

toggleBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount % 2 === 0) {
        // Even click → Start changing numbers
        rollingInterval = setInterval(generateRandomNumber, 300);
        toggleBtn.textContent = "Stop Numbers";
    } else {
        // Odd click → Stop changing numbers
        clearInterval(rollingInterval);
        toggleBtn.textContent = "Start Numbers";
    }
});