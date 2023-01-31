//Assignment (Conditional Statements & Loops):

// a) Write a JavaScript program that accepts two integers and displays the larger of the two.

// b) Write a JavaScript program that checks whether an integer is an even or an odd number.

function largerInteger(num1, num2) {
    if (num1 > num2) {
        return num1;
    }

    return num2;
}

function oddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
}
