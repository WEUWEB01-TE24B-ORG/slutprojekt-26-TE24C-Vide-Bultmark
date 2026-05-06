// slumpa en position för det korrekta svaret
let randomNum = Math.random() * 4
randomNum = Math.floor(randomNum);
// skapar en lista som är en logisk verision av alternativen
const buttons = []
// skapar en lista med felaktiga alternativ
let wrongAlternatives = ["Bunnies", "Birds", "Snails", "Sea"]
// 
for (let index = 0; index < 4; index++) {
    if (index == randomNum) {
        buttons.push("Shellless Gastropods")
    }
    else {
        buttons.push(wrongAlternatives[index])
    }
}
// prinatar ut alternativen
document.querySelector("p.question").textContent = "What are Sea bunnies?";
document.querySelector("button.altA").textContent = "A) " + buttons[0]
document.querySelector("button.altB").textContent = "B) " + buttons[1]
document.querySelector("button.altC").textContent = "C) " + buttons[2]
document.querySelector("button.altD").textContent = "D) " + buttons[3]

function functionAltA() {
    if (randomNum == 0) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "Wrong! Try again!"
    }
}

function functionAltB() {
    if (randomNum == 1) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "Wrong! Try again!"
    }
}

function functionAltC() {
    if (randomNum == 2) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "Wrong! Try again!"
    }
}

function functionAltD() {
    if (randomNum == 3) {
        document.querySelector("p.question").textContent = "Correct! You are amazing!"
    }
    else {
        document.querySelector("p.question").textContent = "Wrong! Try again!"
    }
}