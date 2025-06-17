// EXTERNAL SERVICES: External Data (and from JSON)

import { setLocalStorage, getLocalStorage } from "./utils.mjs";

const base = import.meta.env.BASE_URL;

export async function getCoffeeSpots() {
  const res = await fetch(`${base}data/coffee-shops.json`);
  return await res.json();
}

export async function getLibrarySpots() {
  const res = await fetch(`${base}data/libraries.json`);
  return await res.json();
}

export async function getParkSpots() {
  const res = await fetch(`${base}data/parks.json`);
  return await res.json();
}

export async function loadAndStoreSpots() {
  const coffee = await getCoffeeSpots();
  const libraries = await getLibrarySpots();
  const parks = await getParkSpots();

  setLocalStorage("coffee-spots", coffee);
  setLocalStorage("library-spots", libraries);
  setLocalStorage("park-spots", parks);
}

export function getAllSpotsFromStorage() {
  const coffee = getLocalStorage("coffee-spots") || [];
  const libraries = getLocalStorage("library-spots") || [];
  const parks = getLocalStorage("park-spots") || [];
  
  return [...coffee, ...libraries, ...parks];
}