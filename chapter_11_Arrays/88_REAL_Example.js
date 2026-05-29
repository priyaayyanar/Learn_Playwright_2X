let browsers = ['Chrome', 'Safari', 'FireFox', 'Opera', 'Edge'];
console.log(browsers.length);
console.log(browsers);

// Edge is not required, remove from browsers list
browsers.pop();//delete the last item from the list
console.log(browsers);

let removed = browsers.shift();
console.log(removed);
console.log(browsers);

// for (let i = 0; i < browsers.length; i++); {
//     console.log(browsers[i]);
//     if (browsers[i] === "Opera") {
//         console.log("Selenium is not supported in Opera.")
//     }
// }

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "Opera") {
        console.log("Selenium is not supported in Opera.");
    }
}

console.log(browsers);