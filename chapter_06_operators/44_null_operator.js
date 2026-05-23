console.log(null == 0); // false, == operator will not coerce the null.
console.log(null >= 0); // true, bcz relational operators like >,< will coerce null to 0
console.log(null === 0);

console.log(null == undefined);
console.log(null === undefined);
console.log(null !== undefined);
console.log(null >= undefined);

// nullish -> If the variable value is null then it will return the output of right hand side of the expression.
let amul = null; // let amul = "Amul milk is available"
let milk_required = amul ?? "Nandini Milk";
console.log(milk_required);

// Real time example for nullish
let cart = null; //let cart = "5 Items are the in the cart";
let check_out_cart = cart ?? "Cart is empty";
console.log(check_out_cart);
