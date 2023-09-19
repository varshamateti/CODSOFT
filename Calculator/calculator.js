let userInput = document.getElementById("userInput");

function calculationOfInputValues(userInputVal) {
    if (userInputVal.includes("%")) {
        let values = userInputVal.split("%");
        if (values[0] === '') {
         userInput.value = "Syntax: Error";
        } else {
            let number = eval(values[0]);
            userInput.value = number / 100;
        }
    } else {
        userInput.value = eval(userInputVal);
    }
}


function displayValue(value) {
    if (userInput.value === "Syntax: Error") {
        clearInput()
    }
    userInput.value += value;
}

function calculateInput() {
    let userInputVal = userInput.value;
    if (userInput.value === "") {
        userInput.value === "";
    } else {
        try {
            userInputVal = calculationOfInputValues(userInputVal);
        } catch (error) {
            userInput.value = "Syntax: Error";
        }
    }
}

function clearInput() {
    userInput.value = "";
}

function deleteVal() {
    let userInputVal = userInput.value;
    userInput.value = userInputVal.slice(0, -1);
}