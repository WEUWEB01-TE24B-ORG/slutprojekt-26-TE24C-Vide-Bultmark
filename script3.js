// slumpa en position för det korrekta svaret
let randomNum = Math.random() * 4
randomNum = Math.floor(randomNum);
// skapar en lista som är en logisk verision av alternativen
const buttons = []
// skapar en lista med felaktiga alternativ
let wrongAlternatives = ["Romania", "59.368253N 17.997125E", "My Backyard", "The Toilet"]
// 
for (let index = 0; index < 4; index++) {
    if (index == randomNum) {
        buttons.push("The Deep Sea")
    }
    else {
        buttons.push(wrongAlternatives[index])
    }
}
// prinatar ut alternativen
document.querySelector("p.question").textContent = "Where do vampire squids live?";
document.querySelector("button.altA").textContent = "A) " + buttons[0]
document.querySelector("button.altB").textContent = "B) " + buttons[1]
document.querySelector("button.altC").textContent = "C) " + buttons[2]
document.querySelector("button.altD").textContent = "D) " + buttons[3]

function functionAltA() {
    if (randomNum == 0) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "That`s not right! Try again!"
    }
}

function functionAltB() {
    if (randomNum == 1) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "That`s not right! Try again!"
    }
}

function functionAltC() {
    if (randomNum == 2) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "That`s not right! Try again!"
    }
}

function functionAltD() {
    if (randomNum == 3) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "That`s not right! Try again!"
    }
}