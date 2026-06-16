let order = new Promise(function (resolve, reject) {
    let food_ready = true;
    if (food_ready) {
        resolve('Pizza is Ready. On the way to Deliver')
    } else {
        reject("Order cancelled bcz of rain")
    }
})

console.log(order);