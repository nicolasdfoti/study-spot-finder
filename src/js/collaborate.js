// COLLABORATE JS: Adds functionality to collaborate.html

import { collaborateSpotManager } from "./collaborateSpotManager.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const manager = new collaborateSpotManager("collaborates-spots");

document.addEventListener("DOMContentLoaded", () => {

    manager.init();

})