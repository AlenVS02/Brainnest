let listOperators = ['+', '-', '*', '÷']
let computationHistory = false;
let operationInProgress = false

function appendNum(num) {
    if (num === '.' && resultData.textContent.includes('.')) return;
    if (resultData.textContent === '0') {
        resultData.textContent = num
    } else if (computationHistory === true && operationInProgress === false) {
        console.log(num)
        console.log(resultData.textContent)
        console.log(operationData.textContent)
        computationHistory = false;
        resultData.textContent = num;
    } else {
        resultData.textContent = resultData.textContent.toString() + num.toString();
    }
}

function clear() {
    resultData.textContent = '0';
    operationData.textContent = '';
}

function deleteLast() {
    resultData.textContent = resultData.textContent.slice(0, -1)
}

function compute() {
    let actualResult;
    let currentOperator;

    listOperators.forEach((op) => {
        if (resultData.textContent.includes(op)) {
            currentOperator = op
        }
    })

    console.log(currentOperator)

    let numbers = resultData.textContent.split(currentOperator)
    const prevValue = parseFloat(numbers[0]);
    const currValue = parseFloat(numbers[1]);

    if (isNaN(prevValue) || isNaN(currValue)) return;
    switch (currentOperator) {
        case '*':
            actualResult = prevValue * currValue;
            operationData.textContent = resultData.textContent;
            resultData.textContent = actualResult;
            computationHistory = true;
            operationInProgress = false;
            break;
        case '÷':
            actualResult = prevValue / currValue;
            operationData.textContent = resultData.textContent;
            resultData.textContent = actualResult;
            computationHistory = true;
            operationInProgress = false;
            break;
        case '+':
            actualResult = prevValue + currValue;
            operationData.textContent = resultData.textContent;
            resultData.textContent = actualResult;
            computationHistory = true;
            operationInProgress = false;
            break;
        case '-':
            operationData.textContent = resultData.textContent;
            resultData.textContent = actualResult;
            actualResult = prevValue - currValue;
            computationHistory = true;
            operationInProgress = false;
            break;
        default:
            return;
    }
}

function operator(op) {
    if (resultData.textContent === '') return;
    if (operationData.textContent !== '') {
        appendNum(op);
    }
}

const numericalButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('#clear');
const operationData = document.querySelector('#previous-operation')
const resultData = document.querySelector('#current-result');


numericalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNum(button.innerText);
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operationInProgress = true;
        appendNum(button.innerText);
    })
})

equalsButton.addEventListener('click', () => {
    compute();
})

clearButton.addEventListener('click', () => {
    clear();
})

deleteButton.addEventListener('click', () => {
    deleteLast();
})
