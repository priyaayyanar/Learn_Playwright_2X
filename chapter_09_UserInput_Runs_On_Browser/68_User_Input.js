// prompt is only available in JS inside the browser

let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}