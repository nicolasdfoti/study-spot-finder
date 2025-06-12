// EXTERNAL SERVICES: External Data (and from JSON)

export async function getCoffeeSpots() {
  const res = await fetch("/data/coffee-shops.json");
  return await res.json();
}

export async function getLibrarySpots() {
  const res = await fetch("/data/libraries.json");
  return await res.json();
}

export async function getParkSpots() {
  const res = await fetch("/data/parks.json");
  return await res.json();
}