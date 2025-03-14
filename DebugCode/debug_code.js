function performOperation(operation) {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result;
        try {
            if (operation === 'sum') {
                result = sum(num1, num2);
            } else if (operation === 'divide') {
                result = divide(num1, num2);
            } else if (operation === 'multiply') {
                result = multiply(num1, num2);
            } else {
                throw new Error("Operación no válida.");
            }
        } catch (error) {
            result = `Error: ${error.message}`;
        }
        displayResult(result);
    } else {
        displayResult('Porfavor ingrese un valor valido');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}


function sum(a, b) {
    debugger;

    return a + b;
}

function divide(a, b) {
    debugger;

    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}
function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El resultado es: ${result}`;
}
