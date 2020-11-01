import { getFormInput, validateForm } from "./dom_utils.js";
import { createLamp } from "./api.js";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
    let statusCode = validateForm();
    if (statusCode == 1) {
        event.preventDefault();
    } else {
        const requestBody = getFormInput();
        createLamp(requestBody);
    }
});
