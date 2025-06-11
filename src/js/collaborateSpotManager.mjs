import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export class collaborateSpotManager {

    constructor(key) {
        this.key = key;
    }

    init() {
        document.getElementById("collaborateForm").addEventListener("submit", (e) => {
            e.preventDefault();
            this.createSpot();
        })
    }

    createSpot() {
        const formElement = document.getElementById("collaborateForm");
        const formData = new FormData(formElement);
        const spot = {};

        formData.forEach((value, key) => {
            spot[key] = value;
        })

        console.log("Data from the user:", spot);
        this.saveSpot(spot);
    }

    saveSpot(spot) {
        const spots = getLocalStorage(this.key) || [];
        spots.push(spot);
        setLocalStorage(this.key, spots);

        alert("Spot saved successfully!");
        document.getElementById("collaborateForm").reset();
    }
}