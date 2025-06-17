// EXTERNAL SERVICES: External Data (and from JSON)

import { setLocalStorage, getLocalStorage } from "./utils.mjs";

const base = import.meta.env.BASE_URL;

// get every coffee-shop spot from JSON
export async function getCoffeeSpots() {
  const res = await fetch(`${base}data/coffee-shops.json`);
  return await res.json();
}

// get every library spot from JSON
export async function getLibrarySpots() {
  const res = await fetch(`${base}data/libraries.json`);
  return await res.json();
}

// get every park spot from JSON
export async function getParkSpots() {
  const res = await fetch(`${base}data/parks.json`);
  return await res.json();
}

// load and save every spot in localStorage
export async function loadAndStoreSpots() {
  const coffee = await getCoffeeSpots();
  const libraries = await getLibrarySpots();
  const parks = await getParkSpots();

  setLocalStorage("coffee-spots", coffee);
  setLocalStorage("library-spots", libraries);
  setLocalStorage("park-spots", parks);
}

// get every spot from JSONs
export function getAllSpotsFromStorage() {
  const coffee = getLocalStorage("coffee-spots") || [];
  const libraries = getLocalStorage("library-spots") || [];
  const parks = getLocalStorage("park-spots") || [];
  
  return [...coffee, ...libraries, ...parks];
}