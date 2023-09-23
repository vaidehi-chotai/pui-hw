let glazing = {"Keep Original": 0, "Sugar Milk" : 0, "Vanilla Milk" : 0.5, "Double Chocolate" : 1.5};
let glazeDropdown = document.querySelector("#glazing");
for (let glazeKey in glazing){
    let glazeOption = document.createElement("option");
    glazeOption.innerHTML = glazeKey;
    glazeDropdown.appendChild(glazeOption);
}

let packing = {"1" : 1, "3" : 3, "6" : 5, "12" : 10};
let packDropdown = document.querySelector("#pack-size");
for (let packKey in packing){
    let packOption = document.createElement("option");
    packOption.innerHTML = packKey;
    packDropdown.appendChild(packOption);
}

let basePrice = 2.49;
let glazePrice = 0;
let total = 0;
glazeDropdown.addEventListener('change', calculateGlaze);
function calculateGlaze() {
    glazePrice = glazing[this.value];
    caclulateTotal();
}

let packPrice = 1;
packDropdown.addEventListener('change', calculatePack);
function calculatePack() {
    packPrice = packing[this.value];
    caclulateTotal();
}

function caclulateTotal() {
    total = ((basePrice + glazePrice)*packPrice).toFixed(2);
    totalAmount.innerHTML = total;
}

let totalAmount = document.querySelector("#total-price");

