// SPOTS MJS: Manages the data that comes from the JSON and filters it

import { getCoffeeSpots, getLibrarySpots, getParkSpots } from "./externalServices.mjs";
import { loadHeaderFooter, buildSpotCard, getUserSpots } from "./utils.mjs";

loadHeaderFooter();

// Init function
async function init() {

    const path = window.location.pathname;
    let spotsFromJSON = [];

    if (path.includes("/parks")) {
        spotsFromJSON = await getParkSpots();

    } else if (path.includes("/coffee-shops")) {
        spotsFromJSON = await getCoffeeSpots();

    } else if (path.includes("/libraries")) {
        spotsFromJSON = await getLibrarySpots();
    }

    const userSpots = getUserSpots();

    const matchingUserSpots = userSpots.filter(spot => {

        if (path.includes("/parks")) {
        return spot.type.toLowerCase() === "park";

        } else if (path.includes("/coffee-shops")) {
        return spot.type.toLowerCase() === "coffee_shop";

        } else if (path.includes("/libraries")) {
            return spot.type.toLowerCase() === "park";        
        }

    })

    const combinedSpots = [...spotsFromJSON, ...matchingUserSpots];
    renderCards(combinedSpots);
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