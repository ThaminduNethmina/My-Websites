let numbers = []; // Array of numbers to be calculated
let operators = []; // Array of operators to be calculated

/**
 * Adds number to numbers array
 * @param {*} number to be added to numbers array
 */
function addNumber(number) {
    numbers.push(number);
}

/**
 * Adds operator to operators array
 * @param {*} operator to be added to operators array
 */
function addOperator(operator) {
    if (operator == "=") {
        displayResult();
    }
    else {
        operators.push(operator);
    }
}

/**
 * Calculates result of numbers and operators
 * @returns result of calculation
 */
function calculate() {
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case '+':
                result += numbers[i + 1];
                break;
            case '-':
                result -= numbers[i + 1];
                break;
            case '*':
                result *= numbers[i + 1];
                break;
            case '/':
                result /= numbers[i + 1];
                break;
            default:
                result = "Error";
                break;
        }
    }
    if (isNaN(result)) {
        result = "Error";
    }
    return result;
}

/**
 * Displays number on calculator
 * @param {*} number to be displayed on calculator
 */
function displayNumber(number) {
    let display = document.getElementById("cal-display");
    if (display.innerHTML === "0") {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
    }
}

/**
 * Displays operator on calculator
 * @param {*} operator to be displayed on calculator
 */
function displayOperator(operator) {
    let history = document.getElementById("cal-history");
    let display = document.getElementById("cal-display");
    addNumber(Number(display.innerHTML));
    if (history.innerHTML === "0") {
        if (operator == "*") {
            history.innerHTML = display.innerHTML + "&times;";
        }
        else if (operator == "/") {
            history.innerHTML = display.innerHTML + "&divide;";
        }
        else {
            history.innerHTML = display.innerHTML + operator;
        }
    }
    else {
        if (operator == "*") {
            history.innerHTML += display.innerHTML + "&times;";
        }
        else if (operator == "/") {
            history.innerHTML += display.innerHTML + "&divide;";
        }
        else {
            history.innerHTML += display.innerHTML + operator;
        }
    }
    display.innerHTML = "0";
    addOperator(operator);
}

/**
 * Displays the percentage of the number
 */
function displayPercentage() {
    let display = document.getElementById("cal-display");
    display.innerHTML = Number(display.innerHTML) * 100;
}

/**
 * Changes number to negative or positive
 */
function displayPlusMinus() {
    let display = document.getElementById("cal-display");
    let num = Number(display.innerHTML);
    if (num > 0) {
        display.innerHTML = (num * -1);
    }
    else {
        display.innerHTML = Math.abs(num);
    }
}

/**
 * Displays the result of the calculation
 */
function displayResult() {
    let display = document.getElementById("cal-display");
    display.innerHTML = calculate();
}

/**
 * Clears the display and history
 * Resets numbers and operators arrays
 */
function clearDisplay() {
    let display = document.getElementById("cal-display");
    let history = document.getElementById("cal-history");
    numbers = [];
    operators = [];
    display.innerHTML = "0";
    history.innerHTML = "0";
}