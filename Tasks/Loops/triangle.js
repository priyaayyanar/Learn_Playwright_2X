/**
 * Triangle Classifier:

Write a program that classifies a triangle based 
on its side lengths. Given three input values representing
the lengths of the sides, determine if the triangle is 
equilateral (all sides are equal), 
isosceles (exactly two sides are equal), 
or scalene (no sides are equal). Use an if-else statement to classify the triangle.
 */

let a = 20, b = 30, c = 10;

if (a === b && b === c && c === a) {
    console.log("Euilateral Triangle ( All sides are equal");
} else if ((a === b && b !== c) || (a !== b && b === c) || (a === c && b !== c)) {
    console.log("Isoceles Triangle (Exactly 2 sides are equal)");
} else {
    console.log("Scalene(No sides are equal");
}