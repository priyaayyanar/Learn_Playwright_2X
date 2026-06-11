const user = {
    name: "Pranu",
    age: 10,
    email: "pranu@gmail.com"
}

console.log(user);
console.log(user.name);
console.log(user.email);

// Dynamic Property Access
const key = "age";
console.log(user[key]);

// Adding & Modifying properties
user.city = "NYC"; // added
user.age = 20; // Modified

console.log(user);

let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/**
 * {
  value: 'Login',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

console.log(Object.getOwnPropertyDescriptor(user, "name"));
/**
 * {
  value: 'Pranu',
  writable: true,
  enumerable: true,
  configurable: true
}
 */
