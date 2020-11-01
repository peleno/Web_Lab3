import {
    REMOVE_BUTTON_PREFIX,
    EDIT_BUTTON_PREFIX,
    countTotalPrice,
    searchByBrand,
    renderItems,
} from "./dom_utils.js";
import { getAllLamps, deleteLamp, updateLamp } from "./api.js";

let sortSwitch = document.getElementById("switch");
let pricePlaceholder = document.getElementById("price-placeholder");
let countButton = document.getElementById("count-button");
let searchField = document.getElementById("search-field");
let serachButton = document.getElementById("search-button");
let clearButton = document.getElementById("clear-button");

const onRemove = async (e) => {
    const itemId = e.target.id.replace(REMOVE_BUTTON_PREFIX, "");
    console.log(itemId);
    await deleteLamp(itemId);
    fetchAllLamps();
};

const onEdit = async (e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
    console.log(itemId);
    localStorage.setItem("itemId", itemId);
};

const fetchAllLamps = async () => {
    const lamps = await getAllLamps();
    renderItems(lamps, onRemove, onEdit);
    return lamps;
};

fetchAllLamps().then((lamps) => {
    let displayedLamps = [...lamps];
    sortSwitch.addEventListener("change", (event) => {
        if (event.target.checked) {
            renderItems(
                [...displayedLamps].sort((a, b) => b.priceInUAH - a.priceInUAH),
                onRemove,
                onEdit
            );
        } else {
            renderItems(displayedLamps, onRemove, onEdit);
        }
    });

    countButton.addEventListener("click", (event) => {
        event.preventDefault();

        pricePlaceholder.innerHTML = `${countTotalPrice(displayedLamps)} UAH`;
    });

    serachButton.addEventListener("click", (event) => {
        event.preventDefault();
        displayedLamps = searchByBrand(displayedLamps, searchField.value);
        renderItems(displayedLamps, onRemove, onEdit);
    });

    clearButton.addEventListener("click", (event) => {
        event.preventDefault();
        searchField.value = "";
        displayedLamps = lamps;
        renderItems(displayedLamps, onRemove, onEdit);
    });
});
