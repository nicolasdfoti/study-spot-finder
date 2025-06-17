// FAVORITE-SPOTS JS: Adds functionality to favorite-spots.html

import { loadHeaderFooter, buildSpotCard, getLocalStorage } from "./utils.mjs";
import { loadTrivia } from "./externalServices.mjs";

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderFooter();
    showTrivia();
})

async function showTrivia() {
    const data = await loadTrivia();
    document.getElementById("trivia-box").textContent = data.text;
}

const favorites = getLocalStorage("favorites") || [];
const container = document.querySelector("#favorite-spots-container");

favorites.forEach(spot => {
    const card = buildSpotCard(spot, true);
    container.appendChild(card);
});