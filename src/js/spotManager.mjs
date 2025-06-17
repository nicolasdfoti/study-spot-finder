// SPOTS MJS: Manages the data that comes from the JSON and filters it

import { getCoffeeSpots, getLibrarySpots, getParkSpots } from "./externalServices.mjs";
import { loadHeaderFooter, buildSpotCard } from "./utils.mjs";

loadHeaderFooter();

async function init() {

    const path = window.location.pathname;
    console.log("Ruta:", window.location.pathname);

    let spots = [];

    // determine the correct category from the URL path
    if (path.includes("/parks")) {
    spots = await getParkSpots();

    } else if (path.includes("/coffee-shops")) {
        spots = await getCoffeeSpots();

    } else if (path.includes("/libraries")) {
        spots = await getLibrarySpots();
    }

    console.log("Spots cargados:", spots);

    renderCards(spots);
}

init();

// function to render the cards in the container
function renderCards(spots) {

    const container = document.getElementById("spots-container");
    container.innerHTML = "";

    spots.forEach(spot => {
        const card = buildSpotCard(spot);
        container.appendChild(card);
    });
}