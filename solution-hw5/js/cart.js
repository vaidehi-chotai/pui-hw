let shoppingCart = [];
class Roll {
    constructor(type, glazing, size, basePrice) {
        this.type = type;
        this.glazing =  glazing;
        this.size = size;
        this.basePrice = basePrice;
    }
}

function addNewRoll(type, glazing, size, basePrice){
    const newRoll = new Roll (type, glazing, size, basePrice);
    shoppingCart.push(newRoll);
    return shoppingCart;
}

let glazing = {"Original": 0, "Sugar Milk" : 0, "Vanilla Milk" : 0.5, "Double Chocolate" : 1.5};


let packing = {"1" : 1, "3" : 3, "6" : 5, "12" : 10};

addNewRoll("Original", "Sugar Milk", "1", 2.49);
addNewRoll("Walnut", "Vanilla Milk", "12", 3.49);
addNewRoll("Raisin", "Sugar Milk", "3", 2.99);
addNewRoll("Apple", "Original", "3", 3.49);

function createElement(roll) {
    const rollTemplate = document.querySelector("#roll-template");
    // console.log(rollTemplate);
    const clone = rollTemplate.content.cloneNode(true);
    // console.log(clone);
    roll.element = clone.querySelector(".cart-item");
    // console.log(roll.element);

    const removeButton = roll.element.querySelector(".remove-button");
    // console.log(removeButton);
    console.log(removeButton);
    removeButton.addEventListener('click', () => {
      removeRoll(roll);
    });

    const rollsContentElement = document.querySelector(".cart-content");
    rollsContentElement.appendChild(roll.element);

    updateRollElement(roll);
}

function updateRollElement(roll) {
    const rollImage = roll.element.querySelector("#cart-image");
    const rollName = roll.element.querySelector("#roll-name");
    const rollGlazing = roll.element.querySelector("#roll-glazing");
    const rollPack = roll.element.querySelector("#roll-pack");
    const rollPrice = roll.element.querySelector("#roll-price");
    
    // console.log(rolls[roll.type]);
    rollImage.src = "../assets/products/" + rolls[roll.type].imageFile;
    rollName.innerText = roll.type + " Cinnamon Roll";
    rollGlazing.innerText = "Glazing: " + roll.glazing;
    rollPack.innerText = "Pack size: " + roll.size;
    rollPrice.innerText = "$" + roll.basePrice;
    rollPrice.innerText = "$" + calculatedPrice(roll);
  }
  
function removeRoll(roll) {
  roll.element.remove();
  delete shoppingCart[roll];
  removeRollPrice(roll);
}

let totalPrice = 0;
console.log(totalPrice);

function calculatedPrice(roll) {
    console.log(roll.basePrice);
    console.log(roll.glazing);
    console.log(glazing[roll.glazing]);

    let total = ((roll.basePrice + glazing[roll.glazing])*packing[roll.size]).toFixed(2);
    totalPrice = totalPrice + parseFloat(total);
    // console.log("hi");
    console.log(totalPrice); 
    totalPrice = parseFloat(totalPrice.toFixed(2));
    let totalPriceFooter = document.querySelector("#total-price");
    totalPriceFooter.textContent = "$" + totalPrice;  
    return total;   
}

function removeRollPrice(roll) {
  let removedTotal = ((roll.basePrice + glazing[roll.glazing])*packing[roll.size]).toFixed(2);
  totalPrice = totalPrice - parseFloat(removedTotal);
  // console.log("hi-two");
  console.log(totalPrice);
  totalPrice = parseFloat(totalPrice.toFixed(2));
  let totalPriceFooter = document.querySelector("#total-price");
  totalPriceFooter.textContent = "$" + totalPrice;  
  return removedTotal;
}

for (const roll of shoppingCart) {
    // console.log(roll);
    createElement(roll);
  }