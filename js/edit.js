import { getFormInput, validateForm } from "./dom_utils.js";
import { updateLamp } from "./api.js";

const editButton = document.getElementById("edit-button");

editButton.addEventListener("click", (event) => {
    let statusCode = validateForm();
    if (statusCode == 1) {
        event.preventDefault();
    } else {
        event.preventDefault();
        const requestBody = getFormInput();
        const itemId = localStorage.getItem("itemId");
        console.log(itemId);
        updateLamp(itemId, requestBody);
    }
});
