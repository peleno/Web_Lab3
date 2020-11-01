import { countTotalPrice, searchByBrand, renderItems } from "./dom_utils.js";
let lamps = [
    {
        id: 12,
        name: "Ellen",
        style: "Modern",
        countOfBulbs: 1,
        brand: "Nordlux",
        priceInUAH: 1200,
        room: "Bed room",
        heghtInMm: 405,
        widthInMm: 200,
        type: "Table lamp",
    },
    {
        id: 10,
        name: "Pepijn",
        style: "Modern",
        countOfBulbs: 1,
        brand: "Lucide",
        priceInUAH: 2400,
        room: "Office",
        heghtInMm: 280,
        widthInMm: 250,
        type: "Desk lamp",
    },
    {
        id: 11,
        name: "Vienda",
        style: "Modern",
        countOfBulbs: 1,
        brand: "Herstal",
        priceInUAH: 1350,
        room: "Living room",
        heghtInMm: 475,
        widthInMm: 195,
        type: "Table lamp",
    },
    {
        id: 13,
        name: "Inte skapad annu",
        style: "Modern",
        countOfBulbs: 1,
        brand: "Cottex",
        priceInUAH: 1200,
        room: "Bed room",
        heghtInMm: 435,
        widthInMm: 255,
        type: "Table lamp",
    },
];

let sortSwitch = document.getElementById("switch");
let pricePlaceholder = document.getElementById("price-placeholder");
let countButton = document.getElementById("count-button");
let searchField = document.getElementById("search-field");
let serachButton = document.getElementById("search-button");
let clearButton = document.getElementById("clear-button");
let displayedLamps = [...lamps];

renderItems(lamps);

sortSwitch.addEventListener("change", (event) => {
    if (event.target.checked) {
        renderItems(
            [...displayedLamps].sort((a, b) => b.priceInUAH - a.priceInUAH)
        );
    } else {
        renderItems(displayedLamps);
    }
});

countButton.addEventListener("click", (event) => {
    event.preventDefault();

    pricePlaceholder.innerHTML = `${countTotalPrice(displayedLamps)} UAH`;
});

serachButton.addEventListener("click", (event) => {
    event.preventDefault();
    displayedLamps = searchByBrand(searchField.value);
    renderItems(displayedLamps);
});

clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchField.value = "";
    displayedLamps = lamps;
    renderItems(displayedLamps);
});
