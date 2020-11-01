import { getFormInput, validateForm } from "./dom_utils.js";

// const createForm = document.getElementById("create-form");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", (event) => {
    let statusCode = validateForm();
    if (statusCode == 1) {
        event.preventDefault();
    }
});
