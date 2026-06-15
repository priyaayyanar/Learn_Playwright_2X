function print() {
    console.log('Normal function is called');
}

function placeOrder(ClipboardItem, print) {
    console.log('Hi, Your order is placed');
    print();
}

// First Way -> Normal Way -> Function as an Argument
placeOrder("Pizza", print);

// 2nd Way -> Anonymouse 
placeOrder("Burger", function () {
    console.log('Anonymouse Function. A function without name');
}); // once the placeOrder() is executed, this anonymouse function will be executed automatically

// 3rd way -> Arrow function
placeOrder("French Fries", () => {
    console.log('Arrow callback function. Anonymouse function.');
});
