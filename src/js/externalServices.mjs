// EXTERNAL SERVICES: External Data (and from JSON)

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