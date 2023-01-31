// Assignment (Mathematical Shapes):

// a. Write a JavaScript program to find the diagonal of a square where the length of each
//    side is 9.

// b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
//    sides are 5, 6 and 7.

// c. Write a JavaScript program to find the circumference and surface area of a circle whose
//    radius is 4.
//      i. When trying to find these values, you will need to use PI.



function diagonalOfSquare(sideLength) {
    return sideLength * Math.sqrt(2);
}

function areaOfTriangle(side1, side2, side3) {
    let semiperimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3)));
    return area;
}

function circumferenceAndSurface(radius) {
    const PI = 3.14159265359

    let circumference = 2 * PI * radius
    let surface = PI * radius ** 2

    return [circumference, surface]
}
