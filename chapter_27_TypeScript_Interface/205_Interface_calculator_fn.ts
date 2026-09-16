interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

const noObject = {
    id: 1
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log("Addition: ", calc.add(10, 5)); // Output: 15
console.log("Subtraction : ", calc.subtract(10, 5));      // Output: 5
console.log("Multiplication : ", calc.multiply(10, 5));      // Output: 50
console.log("Division : ", calc.divide(10, 5));        // Output: 2    