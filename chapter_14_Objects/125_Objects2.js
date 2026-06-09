// Objects are Key Value Pair

let student1 = { name: "Pri" };
let student2 = { name: "Pranu", age: 11 };
let student3 = { name: "Sri", age: 42, ph: 123456 };

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let b = a;
b.status = "fail";

console.log(a.status); // the value on heap memory changed to fail as b = a 
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };

if (c === d) {
    console.log("true");
} else {
    console.log('false');
}
// returns false bcz both are different refernce occupied on heap memory