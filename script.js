let sum = 0

function add (num1, num2) {
   let sum = num1 + num2;
   console.log(sum)
   return sum
}

function subtract(num1, num2) {
    let sum = num1 - num2;
    console.log(sum)
}

function multiply(num1, num2) {
    let sum = num1 * num2;
    console.log(sum)
}

function divide(num1, num2) {
    let sum = num1 / num2;
    console.log(sum)
}

function operate() {
    let operator = prompt("Enter a function: Add, Subtract, Multiply, Divide").toLowerCase();

    if (operator === "add") {
        let num1 = parseInt(prompt("Enter your first number: "));
        let num2 = parseInt(prompt("Enter your second number: "));
        add(num1, num2);
        return sum
    } else if (operator === "subtract") {
        let num1 = parseInt(prompt("Enter your first number: "));
        let num2 = parseInt(prompt("Enter your second number: "));
        subtract(num1, num2);
        return sum
    } else if (operator === "multiply") {
        let num1 = parseInt(prompt("Enter your first number: "));
        let num2 = parseInt(prompt("Enter your second number: "));
        multiply(num1, num2);
        return sum
    } else if (operator === "divide") {
        let num1 = parseInt(prompt("Enter your first number: "));
        let num2 = parseInt(prompt("Enter your second number: "));
        divide(num1, num2);
        return sum
    } else {
        prompt("Please enter a valid response")
        operate();
    }
}

let currentNumber = "";

function pressDigit(digit) {
    // Avoid leading zeros
    if (currentNumber === "0") {
        currentNumber = digit;
    } else {
        currentNumber += digit;
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector(".display").textContent = currentNumber || "0";
}

function clearDisplay() {
    document.querySelector(".display").textContent = currentNumber || "0";
}