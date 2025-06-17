// SPOT DETAILS: Manage details for each spot

import { getParam, loadHeaderFooter, getLocalStorage, getUserSpots, findSpotById, fetchSpotFromJSON, setLocalStorage, removeFromFavorites } from "./utils.mjs";
import { loadAndStoreSpots, getAllSpotsFromStorage } from "./externalServices.mjs";

await loadHeaderFooter();
await loadAndStoreSpots();

const spotId = getParam("id");
const origin = getParam("from");
const allSpots = getAllSpotsFromStorage();
const userSpots = getUserSpots();

let spot = findSpotById(spotId, allSpots);

if (!spot) {
    spot = findSpotById(spotId, userSpots);
}

if (spot) {
    renderSpotDetails(spot)
} else {
    console.error("No such place");
}

function renderSpotDetails(spot) {

    const container = document.querySelector("#spot-details");

    const spotDiv = document.createElement("div");
    spotDiv.classList.add("spot-info");

    console.log("Tipo de spot:", spot.type);

    const img = document.createElement("img");

    if (spot.type === "coffee_shop") {
        container.style.backgroundImage = 'url("/images/coffee.jpg")';
    } else if (spot.type === "park") {
        container.style.backgroundImage = 'url("/images/parks.jpg")';
    } else if (spot.type === "library") {
        container.style.backgroundImage = 'url("/images/libraries.webp")';
    }

    const name = document.createElement("h2");
    name.textContent = `Name: ${spot.name}`;

    const address = document.createElement("h3");
    address.textContent = `Address: ${spot.address}`;

    const noise = document.createElement("p");
    noise.textContent = `- Noise level: ${spot.noise}`;

    const wifi = document.createElement("p");
    wifi.textContent = `- WiFi: ${spot.wifi}`;

    const rating = document.createElement("p");
    rating.textContent = `- Overall rating: ${spot.rating}`;

    const comments = document.createElement("p");
    comments.textContent = `- Users comments: ${spot.comments}`;

    const button = document.createElement("button");
    button.textContent = "Add to favorites!";

    if (origin === "favorites") {
        button.textContent = "Remove from favorites";

        button.addEventListener("click", () => {
            removeFromFavorites(spot.id);
            alert(`${spot.name} removed correctly!`);
            window.location.href = "/src/favorite-spots/index.html"; 
        });
    } else {
        button.addEventListener("click", () => {
            addToFavorites(spot);
        });
    }

    container.appendChild(img);
    spotDiv.append(name, address, noise, wifi, rating, comments, button);
    container.appendChild(spotDiv);
}

function addToFavorites() {
    const favorites = getLocalStorage("favorites") || [];
    const alreadyAdded = favorites.some(fav => fav.id === spot.id);

    if (!alreadyAdded) {
        favorites.push(spot);
        setLocalStorage("favorites", favorites);
        alert(`${spot.name} added correctly!`);
    } else {
        alert(`${spot.name} is already on your favorites!`);
    }
}