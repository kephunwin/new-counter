
let number = document.getElementById("current"); // number is going to be numb from h2 id

let count = 0

let saveIt = document.getElementById("save");

function increment() {
    count += 1;
    number.innerText = count; //want to have number which is id with numb, equal to whatever count is currently. will change number on screen
}

function decrement() {
    count -= 1;
    number.innerText = count;
}

function save() {
    let past = count + " - ";
    saveIt.textContent += past; //allows to print and move onto next without deleting existing
    number.textContent = 0; //makes current to zero
    count = 0; //resets back to zero
}

