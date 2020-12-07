import { getFormInput, validateForm } from "./dom_utils.js";
import { updateLamp, getLampById } from "./api.js";

const editButton = document.getElementById("edit-button");

let itemId;

window.onload = async () => {
    itemId = localStorage.getItem("itemId");
    const lamp = await getLampById(itemId);
    document.getElementById("style").value = lamp.style;
    document.getElementById("countOfBulbs").value = lamp.countOfBulbs;
    document.getElementById("brand").value = lamp.brand;
    document.getElementById("priceInUAH").value = lamp.priceInUAH;
    document.getElementById("room").value = lamp.room;
    document.getElementById("heightInMm").value = lamp.heightInMm;
    document.getElementById("widthInMm").value = lamp.widthInMm;
    document.getElementById("type").value = lamp.type;
};

editButton.addEventListener("click", (event) => {
    let statusCode = validateForm();
    event.preventDefault();
    if (statusCode == 0) {
        const requestBody = getFormInput();
        updateLamp(itemId, requestBody);
        window.location = "/index.html";
    }
});
