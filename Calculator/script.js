let numbers = [];
let operators = [];

function addNumber(number) {
    numbers.push(number);
}

function addOperator(operator) {
    if (operator == "=") {
        displayResult();
    }
    else {
        operators.push(operator);
    }
}

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

function displayNumber(number) {
    let display = document.getElementById("cal-display");
    if (display.innerHTML === "0") {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
    }
}

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

function displayPercentage() {
    let display = document.getElementById("cal-display");
    display.innerHTML = Number(display.innerHTML) * 100;
}

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

function displayResult() {
    let display = document.getElementById("cal-display");
    display.innerHTML = calculate();
}

function clearDisplay() {
    let display = document.getElementById("cal-display");
    let history = document.getElementById("cal-history");
    numbers = [];
    operators = [];
    display.innerHTML = "0";
    history.innerHTML = "0";
}