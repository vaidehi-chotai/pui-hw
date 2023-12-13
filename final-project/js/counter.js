// Counter function:
// The setInterval method calles the countingUp function every 70ms
let counter = setInterval(countingUp,70); 

// number displayed on the counter 
let extinct = 0;

// function that adds 1 to the 'extinct' variable, until it reaches 44. 
// Once 'extinct' reaches 44, the clearInterval method is called, which stops setInterval from calling the 
// countingUp function
function countingUp() {
    let count = document.getElementById("firefly-counter");
    extinct = extinct + 1;
    count.innerHTML = extinct;
    if (extinct === 44) {
        clearInterval(counter);
    }
}