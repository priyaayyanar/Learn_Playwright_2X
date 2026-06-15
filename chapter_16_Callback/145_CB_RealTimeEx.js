function cafe(item, cbWhenTableReady) {
    console.log('Finding...1');
    console.log('Finding...2');
    console.log('Finding...3');
    console.log(item);
    cbWhenTableReady();
}

function cbWhenTableReady() {
    console.log('Call 8623496210');
    console.log('Try connecting to the customer');
}

cafe("Pizza", cbWhenTableReady); // Normal function call with function as argument

cafe("Burger", function () {
    console.log('Calling the customer via Anonymouse Function');
});

cafe("FrenchFries", () => {
    console.log('Calling the customer via Arrow Function');
})