// SPOTS MJS: Manages the data that comes from the JSON and filters it

import { getCoffeeSpots, getLibrarySpots, getParkSpots } from "./externalServices.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

async function init() {

    console.log("Ruta:", window.location.pathname);

    let spots = [];

    // determine the correct category from the URL path
    if (window.location.pathname.endsWith("/parks/index.html")) {
        spots = await getParkSpots();

    } else if (window.location.pathname.endsWith("/coffee-shops/index.html")) {
        spots = await getCoffeeSpots();

    } else if (window.location.pathname.endsWith("libraries/index.html")) {
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

// function to build the cards
function buildSpotCard(spot) {

    const a = document.createElement("a");
    a.href = `/spot-detail.html?id=${spot.id}`;
    a.classList.add("spot-card");

    a.innerHTML = `
        <h3>${spot.name}</h3>
        <p>Location: ${spot.address}</p>
        <p>Is it noisy? ${spot.noise}</p>
        <p>Does it have WiFi? ${spot.wifi}</p>
        <p>Comments: ${spot.comments}</p>
    `;

    return a;
}