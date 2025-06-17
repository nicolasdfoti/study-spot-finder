// UTILS: Reusable and exportable functions

// get local storage function to retrieve data
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// set data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// render with template function
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

// load the template function
async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

// load the header and footer function, using the render with template and load template functions
export async function loadHeaderFooter() {
    
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");

  const headerData = await loadTemplate("/partials/header.html");
  const footerData = await loadTemplate("/partials/footer.html");

  renderWithTemplate(headerData, header);
  renderWithTemplate(footerData, footer);
}

// function to build the cards
export function buildSpotCard(spot, isFavoriteView) {

  const container = document.createElement("div");
  container.classList.add("spot-card");

  const a = document.createElement("a");
  a.href = `/src/detailed-view/index.html?id=${spot.id}${isFavoriteView ? "&from=favorites" : ""}`;

  a.innerHTML = `
    <h3>${spot.name}</h3>
    <p><strong>Location:</strong> ${spot.address}</p>
    <p><strong>Is it noisy?</strong> ${spot.noise}</p>
    <p><strong>Does it have WiFi?</strong> ${spot.wifi}</p>
    <p><strong>Overall rating:</strong> ${spot.rating}</p>
    <p><strong>Comments:</strong> ${spot.comments}</p>
  `;

  container.appendChild(a);

  if (isFavoriteView) {
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove place";

    removeBtn.addEventListener("click", () => {
      removeFromFavorites(spot.id);
      location.reload();
    })

    container.appendChild(removeBtn);
  }

  return container;
}

// function to remove spot from favorites
export function removeFromFavorites(id) {
  let favorites = getLocalStorage("favorites") || [];
  favorites = favorites.filter(fav => fav.id !== id);
  setLocalStorage("favorites", favorites);
}

// get spot ID from URL
export function getParam(param) {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const spotId = urlParams.get(param)
  return spotId;
}

// find spot by ID number
export function findSpotById(id, list) {
  return list.find(spot => spot.id === id);
}

// fetch spot from JSON
export async function fetchSpotFromJSON(path) {
  const response = await fetch(path);
  const data = await response.json();
  return data.spots || data;
}

// get spots that user entered
export function getUserSpots() {
  return JSON.parse(localStorage.getItem("collaborates-spots")) || [];
}