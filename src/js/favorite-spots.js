// FAVORITE-SPOTS JS: Adds functionality to favorite-spots.html

import { loadHeaderFooter, buildSpotCard, getLocalStorage } from "./utils.mjs";
loadHeaderFooter();

const favorites = getLocalStorage("favorites") || [];
const container = document.querySelector("#favorite-spots-container");

favorites.forEach(spot => {
    const card = buildSpotCard(spot, true);
    container.appendChild(card);
});