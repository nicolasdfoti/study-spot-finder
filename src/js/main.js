// MAIN JS: Adds functionality to the general index

import { loadHeaderFooter } from "./utils.mjs";
import { loadAndStoreSpots } from "./externalServices.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderFooter();
    await loadAndStoreSpots();
})