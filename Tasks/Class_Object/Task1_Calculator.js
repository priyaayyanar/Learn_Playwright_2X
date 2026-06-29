class Calculator {

    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    static add(num1, num2) {
        console.log('The sum of two numbers is: ', num1 + num2);
    }
    static subtraction(num1, num2) {
        console.log("The Difference between 2 numbers : ", num1 - num2);
    }
    static multiplication(num1, num2) {
        console.log("The Product of 2 number : ", num1 * num2);
    }
    static division(num1, num2) {
        console.log("The quotient of 2 numbers : ", num1 / num2);
    }
    static modulus(num1, num2) {
        console.log("The remainder of 2 numbers : ", num1 % num2);
    }
}

let input1 = new Calculator(15, 5);
Calculator.add(input1.num1, input1.num2);
Calculator.subtraction(input1.num1, input1.num2);
Calculator.multiplication(input1.num1, input1.num2);
Calculator.division(input1.num1, input1.num2);
Calculator.modulus(input1.num1, input1.num2);
