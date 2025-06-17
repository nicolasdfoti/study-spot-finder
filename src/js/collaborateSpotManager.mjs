// COLLABORATE SPOT MANAGER: Manages data from the user through the collaborate form

import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export class collaborateSpotManager {

    // Constructor
    constructor(key) {
        this.key = key;
    }

    // Init
    init() {

        const formElement = document.getElementById("collaborateForm");

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();

            const spot = {
                id: `user-${Date.now()}`,
                name: formElement.querySelector("input[name = 'name']").value,
                address: formElement.querySelector("input[name = 'address']").value,
                type: formElement.querySelector("select[name = 'type']").value,
                noise: formElement.querySelector("select[name = 'noise']").value,
                wifi: formElement.querySelector("select[name = 'wifi']").value,
                rating: formElement.querySelector("select[name = 'rating']").value,
                comments: formElement.querySelector("textarea[name = 'comments']").value,
            }

            this.saveSpot(spot);
            formElement.reset();
        })
    }

    // Save Spot in localStorage method
    saveSpot(spot) {
        const spots = getLocalStorage(this.key) || [];
        spots.push(spot);
        setLocalStorage(this.key, spots);

        alert("Thanks for your help! Have a great study time!");
    }
}