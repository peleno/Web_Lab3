export const REMOVE_BUTTON_PREFIX = "remove-button-";
export const EDIT_BUTTON_PREFIX = "edit-button-";

const itemTemplate = (lamp) => `
<div class="item" id="lamp-${lamp.id}">
    <div class="item__image">
        <img src="./images/lamp${lamp.id % 4}.jpg" alt="Lucide lamp" />
    </div>
    <div class="item__characteristics">
        <div>Style: ${lamp.style}</div>
        <div>Count of bulbs: ${lamp.countOfBulbs}</div>
        <div>Brand: ${lamp.brand}</div>
        <div>Price: ${lamp.priceInUAH} UAH</div>
        <div>Room: ${lamp.room}</div>
        <div>Height: ${lamp.heightInMm / 10}cm</div>
        <div>Width: ${lamp.widthInMm / 10}cm</div>
        <div>Type: ${lamp.type}</div>
    </div>
    <div class="item__buttons">
        <form action="./edit.html">
            <button id="${EDIT_BUTTON_PREFIX}${
    lamp.id
}" class="item__buttons__edit">Edit</button>
        </form>
        <button 
            id="${REMOVE_BUTTON_PREFIX}${
    lamp.id
}" class="item__buttons__remove">Remove
        </button>
    </div>
</div>`;

export const countTotalPrice = (lamps) => {
    return lamps.reduce((total, lamp) => total + lamp.priceInUAH, 0);
};

export const searchByBrand = (lamps, brand) => {
    return lamps.filter(
        (lamp) => lamp.brand != null && lamp.brand.search(brand) != -1
    );
};

const addItemToPage = (item, onRemove, onEdit) => {
    document
        .getElementById("items-container")
        .insertAdjacentHTML("beforeend", itemTemplate(item));

    const removeButton = document.getElementById(
        `${REMOVE_BUTTON_PREFIX}${item.id}`
    );
    const editButton = document.getElementById(
        `${EDIT_BUTTON_PREFIX}${item.id}`
    );
    removeButton.addEventListener("click", onRemove);
    editButton.addEventListener("click", onEdit);
};

export const renderItems = (items, onRemove, onEdit) => {
    document.getElementById("items-container").innerHTML = "";
    for (const item of items) {
        addItemToPage(item, onRemove, onEdit);
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

    if (
        fields.countOfBulbs < 1 ||
        fields.countOfBulbs > 5 ||
        fields.heightInMm < 0 ||
        fields.widthInMm < 0
    ) {
        showAlert();
        return 1;
    }
    for (let field of Object.values(fields)) {
        if (field == "") {
            showAlert();
            return 1;
        }
    }
    return 0;
};

const showAlert = () => {
    let modal = document.getElementById("modal-window");
    var close = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    close.onclick = () => {
        modal.style.display = "none";
    };
};
