const obj1 = { a: 1, b: 3 };
const obj2 = { c: 3, d: 4 };

const copy_of_obj1 = { ...obj1 };
console.log(copy_of_obj1);

// Modifying properties are allowed
const config = { browser: "Chrome", timeout: 2000 };
config.browser = "FireFox";
config.timeout = 5000;
config.retry = 3;
console.log(config); 