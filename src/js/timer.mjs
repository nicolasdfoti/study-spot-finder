// TIMER.MJS: Manage timer option

import { loadHeaderFooter } from "./utils.mjs";
import { loadQuote } from "./externalServices.mjs";

document.addEventListener("DOMContentLoaded", () => {
    showQuote();
    loadHeaderFooter();
})

async function showQuote() {

    const data = await loadQuote();
    const container = document.getElementById("quote-box");

    const div = document.createElement("div");
    div.innerHTML = `
        <blockquote>"${data.q}"</blockquote>
        <p>- ${data.a}</p>
    `;

    container.append(div);
}


const countdownDisplay = document.getElementById("countdown");
const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");

let count;
let isRunning = false;
let timerId;

startButton.addEventListener("click", () => {

    if (!isRunning) {

        if (count === undefined) {
            count = parseInt(timeInput.value)
        }

        timerId = setInterval(() => {

            if (count > 0)
            {
                countdownDisplay.textContent = count;
                count--;
                isRunning = true;
                startButton.textContent = "Pause";

            } else if (count <= 0) {

                countdownDisplay.textContent = "Time's up!";
                isRunning = false;
                clearInterval(timerId);
                startButton.textContent = "Start";
            }

        }, 1000)
    }

    else {

        isRunning = false;
        clearInterval(timerId);
        startButton.textContent = "Resume";
    }

})