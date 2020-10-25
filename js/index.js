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

const itemTemplate = (lamp) => `
<div class="item">
    <div class="item__image">
        <img src="./images/lamp${lamp.id}.jpg" alt="Lucide lamp" />
    </div>
    <div class="item__characteristics">
        <div>Style: ${lamp.style}</div>
        <div>Count of bulbs: ${lamp.countOfBulbs}</div>
        <div>Brand: ${lamp.brand}</div>
        <div>Price: ${lamp.priceInUAH} UAH</div>
        <div>Room: ${lamp.room}</div>
        <div>Height: ${lamp.heghtInMm / 10}cm</div>
        <div>Width: ${lamp.widthInMm / 10}cm</div>
        <div>Type: ${lamp.type}</div>
    </div>
    <div class="item__buttons">
        <button class="item__buttons__edit">Edit</button>
        <button class="item__buttons__remove">Remove</button>
    </div>
</div>`;

const countTotalPrice = (lamps) => {
    return lamps.reduce((total, lamp) => total + lamp.priceInUAH, 0);
};

const searchByBrand = (brand) => {
    return lamps.filter((lamp) => lamp.brand == brand);
};

const renderItems = (items) => {
    document.getElementById("items-container").innerHTML = "";
    for (const item of items) {
        document
            .getElementById("items-container")
            .insertAdjacentHTML("beforeend", itemTemplate(item));
    }
};

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
