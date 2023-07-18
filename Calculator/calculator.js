

const calculaterScreen = document.getElementById("result");
const equalButton = document.getElementById("equal_button");
const resetBottns = document.getElementById("reset_button");
const deleteBottns = document.getElementById("delete_button");
const dotBottns = document.getElementById("dot_button");
const numbericBottns = document.querySelectorAll(".numeric-button");
const operationalBottns = document.querySelectorAll(".operational-button");

let currentValue = 0;
let isDot = false;

deleteBottns.addEventListener("click", () => deleteLastValue(currentValue));
resetBottns.addEventListener("click", () => resetAndPrint());
dotBottns.addEventListener("click", () => addCharachter(dotBottns.innerHTML, currentValue));
equalButton.addEventListener("click", () => calculateEquation(currentValue));

operationalBottns.forEach(element => {

    element.addEventListener("click", () => {

        let lastCharecter = currentValue.slice(-1);

        if (lastCharecter == "."
            || lastCharecter == "*"
            || lastCharecter == "+"
            || lastCharecter == "-"
            || lastCharecter == "/") {
            return;
        }

        isDot = false;
        currentValue += element.innerHTML
        printToScreen(currentValue);

    });
});

numbericBottns.forEach(element => {

    element.addEventListener("click", () => {
        if (currentValue == "0") {
            currentValue = "";
        }

        currentValue += element.innerHTML
        printToScreen(currentValue);
    });
});


function printToScreen(value) {
    calculaterScreen.innerHTML = value;
}

function resetValue() {
    isDot = false;
    return 0;
}

function resetAndPrint() {
    currentValue = resetValue();
    printToScreen(currentValue);
}

function deleteLastcharechter(value) {
    if (value.slice(-1) == ".") {
        isDot = false;
    }
    return value.slice(0, -1);
}

function deleteLastValue(value) {
    currentValue = deleteLastcharechter(value);
    if (value.length <= 1) {
        currentValue = resetValue();
    }
    printToScreen(currentValue);
}


function addCharachter(charechter, value) {
    if (charechter == "." && isDot) {
        return;
    }

    let lastCharecter = value.slice(-1);
    if (lastCharecter == "."
        || lastCharecter == "*"
        || lastCharecter == "+"
        || lastCharecter == "-"
        || lastCharecter == "/") {
        return;
    }

    isDot = (charechter == ".");
    printToScreen(currentValue += charechter);
}

function calculateEquation(equation) {
    currentValue = parseFloat(eval(equation)).toFixed(2);
    printToScreen(currentValue);
}