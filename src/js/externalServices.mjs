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

// get data from Google Books API
export async function loadBooks() {
  const query = "study";
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  const data = await response.json();
  return data;
}

// get data from Zen Quotes API
export async function loadQuote() {
  const res = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
  const data = await res.json();
  const quote = data[0];
  return quote;
}

// get data from Numbers API
export async function loadTrivia() {

  const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
  const data = await res.json();
  return data;
}