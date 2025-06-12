// SPOT MANAGER: Save and Filter Information

let allSpots = [];

export function setSpots(spots) {
    allSpots = spots
}

export function filterSpotsByType(type) {
    return allSpots.filter(s => s.type === type);
}