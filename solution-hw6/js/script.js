let cart = [];
const queryString = window.location.search;
// console.log(queryString);
const params = new URLSearchParams(queryString);
// console.log(params);
const rollType = params.get('roll');
// console.log(rollType);


const headerElement = document.querySelector("#product-heading");
headerElement.innerText = rollType + " Cinnamon Roll";


console.log(rolls[rollType]["imageFile"]);
const rollImage = document.querySelector('#roll-image');
rollImage.src = "../assets/products/" + rolls[rollType]["imageFile"];


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

//hw4 code additions:
let basePrice = rolls[rollType]["basePrice"];
// console.log(basePrice);
let totalAmount = document.querySelector("#total-price");
totalAmount.innerHTML = basePrice;

let glazePrice = 0;
let total = 0;
glazeDropdown.addEventListener('change', calculateGlaze);
function calculateGlaze() {
    glazePrice = glazing[this.value];
    calculateTotal();
}

let packPrice = 1;
packDropdown.addEventListener('change', calculatePack);
function calculatePack() {
    packPrice = packing[this.value];
    calculateTotal();
}

function calculateTotal() {
    total = ((basePrice + glazePrice)*packPrice).toFixed(2);
    totalAmount.innerHTML = total;
}






//hw4 code additions:
let addButton = document.querySelector(".product-button");
addButton.addEventListener('click', addToCart);
function addToCart() {
    class Roll {
        constructor(rollType, rollGlazing, packSize, basePrice) {
            this.type = rollType;
            this.glazing =  rollGlazing;
            this.size = packSize;
            this.basePrice = basePrice;
        }
    }   
    //https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
    let glazeSelection = glazeDropdown.options[glazeDropdown.selectedIndex].text; 
    let packSelection = packDropdown.options[packDropdown.selectedIndex].text;
    const myRoll = new Roll(rollType, glazeSelection, packSelection, basePrice);
    // console.log(myRoll);
    cart.push(myRoll);
    console.log(cart);
    saveToLocalStorage();
}


function saveToLocalStorage(){
    const cartString = JSON.stringify(cart);
    console.log(cartString);
    localStorage.setItem ('storedCart', cartString);
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem("storedCart");
    console.log(cartArrayString);
    const cartArray = JSON.parse(cartArrayString);
    
    for (const rollKey of cartArray) {
    //   const roll = addNewRoll(rollKey.noteImageURL, noteData.noteTitle,
    //     noteData.noteBody);
    //   createElement(notecard);
        cart.push(rollKey);
    }
  }

if(localStorage.getItem('storedCart')!=null){
    retrieveFromLocalStorage();
}

