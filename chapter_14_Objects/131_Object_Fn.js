const user = {
    name: "Pranu",
    age: 40
}

const calculator = {
    value: 0,
    add(n, m) {
        console.log("Addition : ", n + m);
    },
    subtract(n, m) {
        console.log('Subtraction : ', n - m);
    }
}

calculator.add(10, 5);
calculator.subtract(20, 5);