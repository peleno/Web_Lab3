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
        <form action="./edit.html">
            <button class="item__buttons__edit">Edit</button>
        </form>
        <button class="item__buttons__remove">Remove</button>
    </div>
</div>`;

export const countTotalPrice = (lamps) => {
    return lamps.reduce((total, lamp) => total + lamp.priceInUAH, 0);
};

export const searchByBrand = (brand) => {
    return lamps.filter(
        (lamp) => lamp.brand != null && lamp.brand.search(brand) != -1
    );
};

export const renderItems = (items) => {
    document.getElementById("items-container").innerHTML = "";
    for (const item of items) {
        document
            .getElementById("items-container")
            .insertAdjacentHTML("beforeend", itemTemplate(item));
    }
};

export const getFormInput = () => {
    let style = document.getElementById("style").value;
    let countOfBulbs = document.getElementById("countOfBulbs").value;
    let brand = document.getElementById("brand").value;
    let priceInUAH = document.getElementById("priceInUAH").value;
    let room = document.getElementById("room").value;
    let heightInMm = document.getElementById("heightInMm").value;
    let widthInMm = document.getElementById("widthInMm").value;
    let type = document.getElementById("type").value;
    return {
        style,
        countOfBulbs,
        brand,
        priceInUAH,
        room,
        heightInMm,
        widthInMm,
        type,
    };
};

export const validateForm = () => {
    let fields = getFormInput();
    for (let field of Object.values(fields)) {
        if (field == "") {
            alert("You must fill in all the fields\nPlease, try again");
            return 1;
        }
    }
    return 0;
};
